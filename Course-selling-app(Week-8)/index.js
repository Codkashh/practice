const express = require("express");
const { userRouter } = require("./routes/user");
const { courseRouter } = require("./routes/course");
const { adminRouter } = require("./routes/admin");

const app = express();

// Add this middleware to parse JSON request bodies
app.use(express.json());

app.use("/api/v1/user", userRouter);
app.use("/api/v1/user", adminRouter);
app.use("/api/v1/course", courseRouter);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
