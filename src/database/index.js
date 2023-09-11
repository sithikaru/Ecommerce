import mongoose from "mongoose";


const configOptions={
    useNewUrlParser: true,
    useUnifiedTopology: true,
   // useCreateIndex: true,
    //useFindAndModify: false,
}

const connectToDB = async () => {
    const connectionUrl = "mongodb+srv://zijja:zijja@2541@cluster0.x81bklu.mongodb.net/";

    mongoose.connect(connectionUrl, configOptions).then(() => console.log("Database connected successfully")).catch((error) => console.log(error.message));
}

export default connectToDB;