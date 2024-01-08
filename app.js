// Start coding
import express from "express";

import { assignments } from "./data/assignments.js";

let assignmentsMogDatabase = assignments;

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/assignments", function (req, res) {
  const limit = req.query.limit;
  if (limit > 10) {
    return res.status(401).json({
      message: "Invalid request,limit must not exceeds 10 assignments",
    });
  }
  const assignmentsWithLimit = assignmentsMogDatabase.slice(0, limit);
  return res.json({
    message: "Complete Fetching assignments",
    data: assignmentsWithLimit,
  });
});

app.post("/assignments", function (req, res) {
  assignmentsMogDatabase.push({
    id: assignmentsMogDatabase[assignmentsMogDatabase.length - 1].id + 1,
    ...req.body,
  });
  return res.json({
    message: "New assignment has been created successfully",
    data: assignmentsMogDatabase[assignmentsMogDatabase.length - 1],
  });
});

app.get("/assignments/:assignmentsId", function (req, res) {
  let assignmentsFromClient = Number(req.params.assignmentsId);
  let assignmentsData = assignmentsMogDatabase.filter(
    (item) => item.id === assignmentsFromClient
  );
  return res.json({
    message: "Complete Fetching assignments",
    data: assignmentsData[0],
  });
});

app.listen(port, () => {
  console.log(`this sever is running at ${port}`);
});
