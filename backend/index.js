// index.js

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import dbConnection from './config/db.js';
import authRoutes from "./routes/authRoutes.js";
dotenv.config() //  Load .env before using process.env
// console.log(process.env, ">>>>>>>>>>>>>>>>>>>")
const app = express();

//  Middleware
app.use(express.json()); // Parses JSON body
app.use(express.urlencoded({ extended: true })); // Parses form data
app.use(cors()); // Enables CORS (Cross-Origin Resource Sharing)
//  Connect to MongoDB
dbConnection();

//  Test Route
app.get('/', (req, res) => {
    
  res.send('Server is running!');
});
app.use("/api/auth",authRoutes)
//  Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`App listening on port ${PORT}`)
);
// https://demos.themeselection.com/materio-mui-nextjs-admin-template-free/demo\
// https://prium.github.io/twbs-sparrow/v2.4.2/
// https://themewagon.github.io/kaira/
// https://themewagon.github.io/shopmax/