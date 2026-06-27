import express from "express";
import {prisma} from "@repo/db"


const app = express();



app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi there from http server app ");
});

app.post("/signup", async (req, res) => {

  const {username, password}= req.body

  console.log({
    username, password
  })

  const user =await prisma.user.create({
    data:{
      username:username,
      password:password
    }
  })

  


  return  res.status(201).json({
    message:"User created successfully",
    user
  })
 

  })





app.get("/users",async (req,res)=>{

  const users =await  prisma.user.findMany()

  return res.status(201).json(users)
})



app.listen(3001, () => {
  console.log(`http server running at http://localhost:3001`);
});
