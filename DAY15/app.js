// console.log("Hello Node.js");

// Creating a Server with HTTP Module
// console.log("Hello Node.js");

// Creating a Server with HTTP Module

// const http = require("http");

// const server = http.createServer((req, res) => {
//   console.log("URL:", req.url);
//   console.log("Method:", req.method);

//   res.end("Request Received");
// });

// server.listen(3000);

// Basic Routing Without Express

// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url == "/") {
//     res.end("Home Page");
//   } else if (req.url == "/about") {
//     res.end("About Page");
//   } else {
//     res.end("Page Not Found 404");
//   }
// });

// server.listen(3000, () => {
//   console.log("Server is running on 3000 port");
// });

// 3. Create First Express Server
// const express = require("express");
// const app = express();

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

// Create Your First Route

// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello Express");
// });

// app.listen(3000);

// Multiple routes

const express = require("express");
const app = express();

// app.get("/", (req, res) => {
//   res.send("Home Page");
// });

// app.get("/about", (req, res) => {
//   res.send("about Page");
// });

// app.get("/contact", (req, res) => {
//   res.send("contact Page");
// });

// Sending Different Types of Data
// app.get("/text", (req, res) => {
//   res.send("hello world");
// });

//json
// app.get("/json", (req, res) => {
//   res.json({
//     name: "Rahul",
//     age: 25,
//   });
// });

// app.get("/skills", (req, res) => {
//   res.json(["Node", "Express", "MongoDB"]);
// });

// app.get("/users", (req, res) => {
//   res.json([
//     {
//       id: 1,
//       name: "John",
//     },
//     {
//       id: 2,
//       name: "David",
//     },
//   ]);
// });

// Types of Responses You Can Send

// | Type          | Method             |
// | ------------- | ------------------ |
// | Text          | `res.send()`       |
// | JSON          | `res.json()`       |
// | HTML String   | `res.send()`       |
// | HTML File     | `res.sendFile()`   |
// | PDF           | `res.sendFile()`   |
// | Image         | `res.sendFile()`   |
// | Download File | `res.download()`   |
// | Stream Data   | `pipe()`           |
// | Static Files  | `express.static()` |

// 1. Send an HTML String

// app.get("/", (req, res) => {
//   res.send(`
//     <h1>Welcome</h1>
//     <p>Hello User</p>
//   `);
// });

// //2. Send an HTML File

// const path = require("path");

// app.get("/html", (req, res) => {
//   res.sendFile(path.join(__dirname, "home.html"));
// });

// // 3. Send a PDF

// app.get("/pdf", (req, res) => {
//   res.sendFile(path.join(__dirname, "guide.pdf"));
// });

//  Types of Incoming Data

// There are 3 main ways data reaches your Express server:

// | Type   | Example           |
// | ------ | ----------------- |
// | Params | `/users/10`       |
// | Query  | `/users?page=1`   |
// | Body   | POST request data |

// 1. Route Parameters (req.params)

// app.get("/users/:id", (req, res) => {
//   console.log(req.params);
//   res.send(req.params.id);
// });

let users = require("./users.json");

// Scenario 1: Get All Users
// app.get("/users", (req, res) => {
//   res.json(users);
// });

//Scenario 2: Get One User

// app.get("/users/:id", (req, res) => {
//   const id = Number(req.params.id);
//   const user = users.find((user) => user.id === id);
//   if (!user) {
//     return res.status(404).json({
//       message: "User not found",
//     });
//   }
//   res.status(200).json(user);
// });

// // Scenario 3: Search Users

// app.get("/users", (req, res) => {
//   console.log("Query:", req.query);

//   const { name } = req.query;

//   if (!name) {
//     return res.json(users);
//   }

//   const filteredUsers = users.filter((user) =>
//     user.name.toLowerCase().includes(name.toLowerCase()),
//   );

//   res.json(filteredUsers);
// });

// POST method calling

// app.use(express.json());
// app.post("/users", (req, res) => {
//   const {name,email,age} = req.body;

//   if(!name || !email || !age){
//     return res.status(400).json({
//         message:"All feilds are required"
//     });
//   }

//   const existingUser=users.find(user=>user.email===email)

//   if(existingUser){
//     return res.status(409).json({
//         message:"User Already exists"
//     });
//   }

//   const newUser={
//     id:users.length+1,
//     name,
//     email,
//     age
//   }
//   users.push(newUser)

//   res.status(201).json({
//     message: "User created successfully",
//     data : newUser
//   })
// });

// PUT REQUEST
// app.use(express.json());
// app.put("/users/:id",(req,res)=>{
//   const id=Number(req.params.id);

//   const {name,email,age}=req.body;

//   const user=users.find(user=>user.id===id);

//   if(!user){
//     return res.status(404).json({
//       message:"User Not Found"
//     })
//   }

//   if(!name || !email || age===undefined){
//     return res.status(400).json({
//       message: "All fields required"
//     })
//   }

//   const exsitingUser=users.find(user=>
//     user.email===email &&
//     user.id!==id
//   )

//   if(exsitingUser){
//     return res.status(409).json({
//       message: "Email already exists"
//     })
//   }

//   user.name = name;
//   user.email = email;
//   user.age = age;

//   res.status(200).json({
//     message: "User updated",
//     data: user
//   })
// })

// PATCH REQUEST
app.use(express.json());
app.patch("/users/:id", (req, res) => {
  const id = Number(req.params.id);

  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  if (req.body.name) {
    user.name = req.body.name;
  }

  if (req.body.email) {
    user.email = req.body.email;
  }

  if (req.body.age !== undefined) {
    user.age = req.body.age;
  }

  res.json(user);
});

app.listen(3000);
