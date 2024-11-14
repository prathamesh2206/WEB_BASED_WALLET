const { Router } = require("express");
const walletRouter = Router();
const { Keypair, Transaction, Connection } = require("@solana/web3.js");
const jwt = require("jsonwebtoken");
const { userModel } = require("../DB");
const bcrypt = require("bcrypt");
const bs58 = require("bs58").default || require("bs58");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;
const salt_rounds = parseInt(process.env.SALT_ROUNDS);
const connection = new Connection(
  "https://solana-mainnet.g.alchemy.com/v2/mBwItzqA8580MsMyfZnWvSGK6ja5BrXP"
);

walletRouter.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  try {
    const userExists = await userModel.findOne({ username });
    if (userExists) return res.status(409).json({ message: "User already exists" });
    const keypair = Keypair.generate();
    const pubKey = bs58.encode(Buffer.from(keypair.publicKey.toBytes())); 
    const privateKey = bs58.encode(Buffer.from(keypair.secretKey));
    const hashedPassword = await bcrypt.hash(password, salt_rounds);

    const newUser = await userModel.create({
      username,
      password: hashedPassword,
      publicKey: pubKey,
      privateKey,
    });

    return res.status(201).json({
      message: "Signed up successfully",
      publicKey: pubKey,
    });
  } catch (error) {
    console.error("Error during signup:", error);
    return res.status(500).json({ message: "Error while signing up" });
  }
});

walletRouter.post("/signin", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await userModel.findOne({ username });
    if (!user) return res.status(404).json({ message: "User not found" });

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) return res.status(401).json({ message: "Incorrect password" });

    const token = jwt.sign({ userId: user._id }, JWT_SECRET);
    return res.status(200).json({ token });
  } catch (error) {
    console.error("Error during signin:", error);
    return res.status(500).json({ message: "Error while signing in" });
  }
});

async function authMiddleware(req, res, next) {
  const token = req.headers.authorization;
  if (!token) return res.status(400).json({ message: "Token is required" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await userModel.findById(decoded.userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    req.body.privateKey = user.privateKey;
    next();
  } catch (err) {
    res.status(400).json({ message: "Invalid or expired token", error: err.message });
  }
}

walletRouter.use(authMiddleware);

walletRouter.post("/txn/sign", async (req, res) => {
  try {
    const decodedPrivateKey = bs58.decode(req.body.privateKey);
    const keypair = Keypair.fromSecretKey(decodedPrivateKey);

    const serializedTransaction = req.body.message;
    console.log("before signing", serializedTransaction);

    const transaction = Transaction.from(Buffer.from(serializedTransaction));
    console.log("after deserialization", transaction);

    const { blockhash } = await connection.getLatestBlockhash();
    transaction.recentBlockhash = blockhash;
    transaction.feePayer = keypair.publicKey;

    transaction.sign(keypair);
    console.log("Transaction before sending:", transaction);

    const signature = await connection.sendTransaction(transaction, [keypair], {
      skipPreflight: false,
      preflightCommitment: 'processed'
    });

    res.status(200).json({ message: "Transaction signed and sent", signature });
  } catch (error) {
    console.error("Error during transaction:", error);
    res.status(500).json({ message: "Error signing and sending transaction", error: error.message });
  }
});




module.exports = walletRouter;
