const mongoose = require('mongoose');

mongoose
  .connect(
    "mongodb+srv://" + process.env.DB_USER_PASS + "@cluster0.tbpxp.mongodb.net/test",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to mongo db"))
  .catch((err) => console.log("Failed to connect to mongoDb", err));
