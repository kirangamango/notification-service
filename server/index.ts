import express from "express";
import UserRouter from "./routes/users.routes";

const app = express();

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("listening on port " + port);
});

app.use(express.json());

app.use("/api/v1/users", UserRouter);
