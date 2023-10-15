const express = require('express');
const app = express();
const router = require('./router/student');
const connectToMongo = require('./database/connectToMongo');
const cors = require('cors');

// to parse requests with json objects
app.use(express.json());
// to allow cross origin requests
app.use(cors());

app.use('/api/v1/', router);

app.get('/test', (req, res) => {
  res.status(200).send("Hello world");
})

const port = 4000;
const startServer = async () => {
  try {
    await connectToMongo();
    app.listen(port, () => console.log("Server is listening on port " + port));
  } catch (error) {
    console.log("Couldn't start up the server due to error:\n" + error);
  }
}

startServer();