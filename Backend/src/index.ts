import express from "express";
import cors from "cors";
import {ENV} from "./config/env";
import { clerkMiddleware } from '@clerk/express';

const app = express();
const PORT = ENV.PORT;

app.use(cors({ origin: ENV.FRONTEND_URL }));
app.use(clerkMiddleware());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
