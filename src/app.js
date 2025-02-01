const express = require("express");

const app = express()

// app.use("/", (req, res) => {
//   res.send("Hello from the Dashboard !!");
// });

app.use("/hello", (req, res) => {
  res.send("Hello Hello Hello...!!");
});

app.use("/bidya", (req, res) => {
  res.send("Hello Bidya...!!");
});

app.use((req, res) => {
    res.send("Hello from the Server !!");
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
