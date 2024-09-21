import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50MB" }));
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello from Spandana",
  });
});

app.listen(8080, () => {
  console.log("Server has started on 8080");
});
