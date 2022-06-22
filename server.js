const express = require("express");

const app = express();

const dbConnection = require("./db");
const usersRoute = require("./routes/usersRoute");
app.use(express.json());
app.use("/api/users/", usersRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
