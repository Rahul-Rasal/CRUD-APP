import mongoose from "mongoose";

const connection = async (username, password) => {
  const URL = `mongodb://${username}:${password}@crud-app-shard-00-00.wqdnh.mongodb.net:27017,crud-app-shard-00-01.wqdnh.mongodb.net:27017,crud-app-shard-00-02.wqdnh.mongodb.net:27017/?ssl=true&replicaSet=atlas-rsewwj-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Crud-app`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("Database connected successfully");
  } catch (error) {
    console.log("Error while connecting to database", error);
  }
};

export default connection;
