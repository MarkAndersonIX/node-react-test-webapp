// server/index.js
const express = require("express");

//Add requirement for db init
const { sequelize, User } = require("./db.js")

const PORT = process.env.PORT || 3001;

const app = express();
// Middleware to parse JSON bodies
app.use(express.json());
// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));

//Adding an api endpoint
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

//Adding db api for users
app.get("/api/users", async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.findAll();

    // Send the users data as a JSON response
    res.json(users);
  } catch (error) {
    // If an error occurs, send an error response
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Express route handler to add a new user
app.post('/api/users', async (req, res) => {
  if (!req.body || !req.body.username || !req.body.email) {
    console.error(`Invalid request : ${req.body}`)
    return res.status(400).json({ error: 'Invalid or empty request body' });
  }
  try {
    // Extract user data from the request body
    const { username, email } = req.body;

    // Create a new user record in the database
    const newUser = await User.create({ username, email });

    // Send the newly created user data as a JSON response
    res.status(201).json(newUser);
  } catch (error) {
    // If an error occurs, send an error response
    console.error('Error adding user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
