import express from "express"
import users from "./user.js"
const app =  express()

app.get("/",(req,res)=> {
    res.send("Hello World")
})

app.get("/api/user",(req,res)=>{
    res.json(users)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server at  http://localhost:${port}`)
})