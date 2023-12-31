const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env || 5000;
app.use(express.json());
app.use(cors());

app.use("/routes");

app.listen(5000, () => {
    console.log(`we are connected on port ${port}`);
});