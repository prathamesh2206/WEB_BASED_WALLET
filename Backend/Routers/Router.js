const { Router } = require("express");
const walletRouter = Router();
const { Keypair } = require("@solana/web3.js");
const jwt = require("jsonwebtoken");
const { userModel } = require("../DB");
const JWT_SECRET = process.env.JWT_SECRET;
const bcrypt = require("bcrypt");
const salt_rounds = parseInt(process.env.SALT_ROUNDS); // Ensure it's an integer

walletRouter.post("/signup", async (req, res) => {
    const { username, password } = req.body;

    try {
        // Check if user already exists
        const userExists = await userModel.findOne({ username: username });
        if (userExists) {
            return res.status(409).json({ message: "User already exists" });
        }

        // Generate Solana keypair
        const keypair = Keypair.generate();
        const pubKey = keypair.publicKey.toString();
        const privateKey = keypair.secretKey.toString();

        // Hash password
        const hashedPassword = await bcrypt.hash(password, salt_rounds);

        // Create a new user
        const newUser = await userModel.create({
            username:username,
            password: hashedPassword,
            publicKey:pubKey,
            privateKey:privateKey
        });

        if (newUser) {
            return res.status(201).json({
                message: "Signed up successfully",
                publicKey: pubKey,
            });
        }
    } catch (error) {
        console.error("Error during signup:", error);
        return res.status(500).json({ message: "Error while signing up" });
    }
});

walletRouter.post("/signin", async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find user by username
        const user = await userModel.findOne({ username: username });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Verify password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: "Incorrect password" });
        }

        // Create and send JWT token
        const token = jwt.sign({ userId: user._id }, JWT_SECRET);
        return res.status(200).json({ token: token });
    } catch (error) {
        console.error("Error during signin:", error);
        return res.status(500).json({ message: "Error while signing in" });
    }
});

module.exports = walletRouter;

walletRouter.post("/txn", async (req,res) => {
    
})
walletRouter.get("/txn",async () => {
    
})


module.exports =({
    walletRouter
})