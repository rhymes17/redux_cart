import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors"
const app = express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(cookieParser())

//import Routes
import authRoute from "./routes/authRoutes.js"

app.use("/api/users", authRoute)

export default app