// import express from "express"
// // const express = require("express")  // we can also import like this
// import cors from "cors"
// import mongoose from "mongoose"


// const app = express()
// app.use(express.json())
// app.use(express.urlencoded())
// app.use(cors())

// // mongoose.connect('mongodb://127.0.0.1:27017/myapp');


// mongoose
//   .connect('mongodb://localhost:27017/myLoginRegisterDB', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });

//   const userSchema = new mongoose.Schema(
//     {
//       name:String,
//       email: String,
//       password: String
//     }
//   )

//   const User = new mongoose.model("User", userSchema)

// // Routes
// app.post("/login", (req, res)=>{
  
//     res.send("<h1>My API login</h1>")
// })

// app.post("/register", (req, res)=>{
//   const { name, email, password} = req.body
//       User.findOne({email: email}, (err, user) => {
//         if(user){
//            res.send({message: "User already register"})
//                 } else {
//       const user = new User({
//         name,
//        email,
//         password
//        }) 

//   try {
//         const result = await user.save();
//         // Handle the successful save
//       } catch (err) {
//         // Handle the error
//       }
      
//    user.save( err => {
//     if (err) {
//       res.send(err)
//     } else {
//       res.send ({ message: "Successfully Registered, Please Login now."})
//       // res.send("<h1>My API register</h1>")
//     }
//   })
//     }
//   })
// })

// app.listen(9002,()=>{
//     console.log("Server is running on port 9002")
// })



import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/myLoginRegisterDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

// Routes
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      res.status(404).send({ message: "User not found" });
      return;
    }

    if (user.password !== password) {
      res.status(401).send({ message: "Incorrect password" });
      return;
    }

    res.send({ message: "Login successful" });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send({ error: "An error occurred while logging in" });
  }
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      res.send({ message: "User already registered" });
    } else {
      const newUser = new User({
        name,
        email,
        password,
      });

      await newUser.save();
      res.send({ message: "Successfully Registered, Please Login now." });
    }
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send({ error: "An error occurred while registering the user" });
  }
});

app.listen(9002, () => {
  console.log("Server is running on port 9002");
});
