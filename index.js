import express, { Router } from "express";
import connection from "./database/db.js";
import dotenv from "dotenv";
import Routes from "./routes/route.js";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";

const __dirname = path.resolve();

const app = express();

dotenv.config();
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/", Routes);

const PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "./client/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

const username = rasalrahul18;
const password = DlWCna4T2Q2DgyyF;

connection(username, password);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
