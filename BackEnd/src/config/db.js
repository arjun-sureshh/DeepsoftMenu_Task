const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://arjunsuresh410:arjunsuresh410@cluster0.kbzr3.mongodb.net/deepsoftMenu", 
    // {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // }
);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
    process.exit(1);
  }
};

module.exports = connectDB;