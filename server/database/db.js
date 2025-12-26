import mongoose from "mongoose";

export const dbConnection = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "mern_chat_app"
    }).then(() => {
        console.log("Database Connected")
    }).catch((err) => {
        console.log(`Error connecting to databae: ${error.message || err}`)
    })
}