const { default: mongoose } = require("mongoose");

require("dotenv").config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, { dbName: process.env.DB_NAME });
        console.log(`Successfully connected to mongodb`);
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
}


module.exports = connectDB;