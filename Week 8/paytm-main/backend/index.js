const express = require("express");

const mainRouter = require("./routes/index")

application.use("/api/v1", mainRouter)