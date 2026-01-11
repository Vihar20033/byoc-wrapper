import express from "express";
import dotenv from "dotenv";
import byocRoutes from "./routes/byoc.routes.js";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());


// use routes
app.use("/", byocRoutes);

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
