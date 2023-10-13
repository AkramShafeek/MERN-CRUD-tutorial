const mongoose = require('mongoose');

const mongoURI = 'mongodb://127.0.0.1:27017/studentdb';

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connect to database successfully");
  } catch(error) {
    console.log("Couldn't connect to database due to error:\n" + error);
    throw error;
  }
}

module.exports = connectToMongo;