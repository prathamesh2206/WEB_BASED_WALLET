import "./App.css";
import axios from "axios";
import {
  Transaction,
  PublicKey,
  SystemProgram,
  Connection,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";

const connection = new Connection(
  "https://solana-mainnet.g.alchemy.com/v2/mBwItzqA8580MsMyfZnWvSGK6ja5BrXP"
);

function App() {
  async function sendSol() {
    const instruction = SystemProgram.transfer({
      fromPubkey: new PublicKey("8rrmee7Aepp2ygApikiRpQBMEQHRFSgekygdGJgZNhyF"),
      toPubkey: new PublicKey("5Pwx8JCCMxMqkLzDLFLFX2fG97YwxJ83oZ4uDqVzyQbf"),
      lamports: 0.001 * LAMPORTS_PER_SOL,
    });

    const txn = new Transaction().add(instruction);
    const { blockhash } = await connection.getLatestBlockhash();
    txn.recentBlockhash = blockhash;
    txn.feePayer = new PublicKey("8rrmee7Aepp2ygApikiRpQBMEQHRFSgekygdGJgZNhyF");
    const serializedTx = txn.serialize({
      requireAllSignatures: false,
      verifySignatures: false,
    });

    await axios.post("http://localhost:3000/api/v1/txn/sign", {
      message: serializedTx,
      retry: false,
    });
  }

  return (
    <div>
      <input type="text" placeholder="Amount" />
      <input type="text" placeholder="Address" />
      <button onClick={sendSol}>Submit</button>
    </div>
  );
}

export default App;
