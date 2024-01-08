// Start coding
import express from "express";

import { assignments } from "./data/assignments.js";

let assignmentsMogDatabase = assignments;

const app = express();
const port = 3000;

app.get("/assignments", function (req, res) {
  const limit = req.query.limit;
  if (limit > 10) {
    return res.status(401).json({
      message: "Invalid request,limit must not exceeds 10 assignments",
    });
  }
  const assignmentsWithLimit = assignmentsMogDatabase.slice(0, limit);
  return res.json({ data: assignmentsWithLimit });
});

app.listen(port, () => {
  console.log(`this sever is running at ${port}`);
});
