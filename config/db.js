const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.qnftcqy.mongodb.net/?retryWrites=true&w=majority`
    );
    console.log(`MongoDB is connected `);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
