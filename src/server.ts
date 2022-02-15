import app from "./app";
import * as dotenv from "dotenv";

dotenv.config();

const envport = parseInt(process.env.PORT || "3000");
const envAddress = process.env.IP_ADDRESS || "localhost";
app.listen(envport, envAddress, () => {
  console.log(`API iniciada na porta ${envport} IP ${envAddress}`);
});
