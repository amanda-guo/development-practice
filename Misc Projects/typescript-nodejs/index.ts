import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("This is a test web page!");
});

app.get("/awesome/applicant", (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3001");
  res.json({
    message: "I did a study abroad in England over the last year.",
  });
});

app.listen(3000, () => {
  console.log("The application is listening on port 3000!");
});

// https://www.stackhawk.com/blog/typescript-cors-guide-what-it-is-and-how-to-enable-it/
// Start server command: npx ts-node index.ts
