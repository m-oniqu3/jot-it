const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const dbURI = process.env.DB_URL;

const PORT = 4000;

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`App running on port ${PORT}`));
    console.log("Connected successfully to MongoDB");
  })
  .catch((err) => console.log(`Error connecting to databse ${err}`));
