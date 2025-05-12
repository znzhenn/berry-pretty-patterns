const express = require('express');
const app = express();
const path = require("path");

app.use(express.json());

const userRoutes = require("./server/routes/user");
const patternRoutes = require("./server/routes/pattern"); // 👈 NEW ROUTE

// CORS middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");  
  next();
});

// Serve frontend static files
app.use(express.static(__dirname + "/public"));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

// API Routes
app.use("/users", userRoutes);
app.use("/patterns", patternRoutes); // 👈 MOUNT NEW ROUTES HERE

const PORT = process.env.PORT || 3306;
app.listen(PORT, () => console.log(`Server started on port ${PORT}!!`));
