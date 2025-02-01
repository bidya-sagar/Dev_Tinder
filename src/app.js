const express = require("express");

const app = express()

// app.use("/", (req, res) => {
//   res.send("Hello from the Dashboard !!");
// });

// app.use("/hello", (req, res) => {
//   res.send("Hello Hello Hello...!!");
// });

// app.use("/bidya", (req, res) => {
//   res.send("Hello Bidya...!!");
// });

// app.use((req, res) => {
//     res.send("Hello from the Server !!");
// });

// app.get("/user", (req, res) => {
//   console.log(req.query);
//   res.send({ FirstName: "Bidyasagar" , LastName: "Behera"});
// });

app.get("/user/:userID/:name/:password", (req, res) => {
  console.log(req.params);
  res.send({ FirstName: "Bidyasagar", LastName: "Behera" });
});

app.post("/user", (req, res) => {
  res.send("User Data POST Successfully !!!");
});

app.delete("/user", (req, res) => {
  res.send("User Data Deleted Successfully");
});

app.put("/user", (req, res) => {
  res.send("User Data PUT Successfully");
});

app.patch("/user", (req, res) => {
  res.send("User Data PATCH Successfully");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
