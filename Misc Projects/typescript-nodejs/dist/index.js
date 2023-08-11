"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("This is a test web page!");
});
app.get("/awesome/applicant", (req, res) => {
    res.set("Access-Control-Allow-Origin", "http://localhost:3001");
    res.send("I did a study abroad in England over the last year.");
});
app.get("/dog", (req, res) => {
    res.set("Access-Control-Allow-Origin", "http://localhost:3001");
    res.json({
        name: "Bruno",
        age: "5",
        image: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg",
    });
});
app.listen(3000, () => {
    console.log("The application is listening on port 3000!");
});
//# sourceMappingURL=index.js.map