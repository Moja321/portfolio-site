//import packages

require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

//Middleware setup
app.use(cors());
app.use(express.json());
//app.use(morgan("dev")); //specifying that it is a development environment

//setup connection

const PORT = process.env.PORT || 3000;
const mongoURI = `mongodb+srv://${process.env.MONGO_UNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOSTNAME}/${process.env.MONGO_DB_NAME}`;

mongoose.connect(mongoURI, {
  useUnifiedTopology: true, //use new db monitoring system
  useNewUrlParser: true, //for the new findOne methods
});

mongoose.connection
  .on("open", () => console.log("You are connected to the database"))
  .on("close", () => console.log("You are disconnected from the server"))
  .on("error", (error) => console.warn("Error :" + error));

//MODEL
const MessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  msg: String,
});

const Message = mongoose.model("Message", MessageSchema);

//ROUTES
app.get("/", (req, res) => {
  res.send("Hello!");
});

//message index route
app.get("/message", async (req, res) => {
  try {
    res.json(await Message.find({}));
  } catch (error) {
    res.status(404).json(error);
  }
});

// app.get("/about", async (req, res) => {
//   try {
//     //res.json(await Message.find({}));
//     console.log(res.json);
//   } catch (error) {
//     res.status(404).json(error);
//   }
// });

//Create route for 'message' model
app.post("/message", async (req, res) => {
  try {
    res.json(await Message.create(req.body));
  } catch (error) {
    res.status(404).json(error);
  }
});

//message update route
// app.put("/message/:id", async (req, res) => {
//   try {
//     res.json(
//       await Message.findByIdAndUpdate(req.params.id, req.body, { new: true })
//     );
//   } catch (error) {
//     res.status(400).json(error);
//   }
// });

//Delete route
// app.delete("/message/:id", async (req, res) => {
//   try {
//     res.json(await Message.findByIdAndRemove(req.params.id));
//   } catch (error) {
//     res.status(400).json(error);
//   }
// });

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
