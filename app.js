// Start coding
import express from "express";

import { assignments } from "./data/assignments";

let assignmentsMogDatabase = assignments;

const app = express();
const port = 3000;

app.get("/assignments", function (req, res) {
  return res.json({ data: assignmentsMogDatabase });
});

app.listen(port, () => {
  console.log(`this sever is running at ${port}`);
});
