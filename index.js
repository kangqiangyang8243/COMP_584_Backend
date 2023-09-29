const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const authRoute = require("./controller/auth");
const categoryRoute = require("./controller/category");
const postRoute = require("./controller/post");
const userRoute = require("./controller/user");

const PORT = process.env.PORT || 5555;

// dotenv.config();
app.use(cors());
// It parses incoming JSON requests and puts the parsed data in req.body.
app.use(express.json());

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => {
    console.log(err);
  });

app.use("/api/auth", authRoute);
app.use("/api/category", categoryRoute);
app.use("/api/posts", postRoute);
app.use("/api/users", userRoute);

const port = process.env.PORT || 5555;

app.listen(PORT, () => {
  console.log(`Backend start on port ${port}!`);
});
