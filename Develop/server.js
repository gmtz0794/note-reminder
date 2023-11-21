const express = require("express");
const path = require("path");
const { clog } = require("./middleware/clog.js");
const api = require("./routes/index.js");
const routes = require("./routes")
// const helpers = require("./helpers")

const PORT = process.env.PORT || 3001;

const app = express();

// Import custom middleware, "cLog"
app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

// Set the static directory to 'public' inside the 'Develop' folder
app.use(express.static(path.join(__dirname, "public")));

// GET Route for homepage
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

// GET Route for notes page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "public/notes.html"))
);

app.use(routes);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
