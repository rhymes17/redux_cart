import dotenv from "dotenv"
dotenv.config()
import connectDB from "./db/connectDb.js";
import app from "./app.js";

connectDB().then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log("Server running on port 8000")
    })
}).catch((err) => {
    console.log("MOngo Db connection failed!!", err)
})