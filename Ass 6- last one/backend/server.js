import express from "express";

import dotenv from 'dotenv';
import { MongoClient, ObjectId } from 'mongodb';
// import { MongoClient } from 'mongodb';
import path from 'path';
import cors from 'cors';


dotenv.config();

// const port = process.env.PORT || 3005;
const port = process.env.PORT || 3000;
// const port = 3000;


// const port = process.env.PORT || 3005;

// const port =  3001;

//create app
const app = express();

//serve static page into public directory


app.use(express.json());
app.use(cors());


// const client = new MongoClient(process.env.MONGO_URI);
// const client = new MongoClient("mongodb://mongo:27017/mydatabase");
// const client = new MongoClient(process.env.MONGO_URI || "mongodb://mongo:27017/mydatabase"); // Use your .env variable or default
const client = new MongoClient(process.env.MONGO_URI); 
let db;

async function connectDatabase() 
{
    try
    {
        await client.connect();
        db = client.db("Ass-6");

        console.log("Connected to MongoDB");
    }
    catch(error)
    {
        console.error("Failed to connect to MongoDB", error);
    }
}

connectDatabase();

app.listen(port, () => {
    console.log(`Listening on port: localhost:${port}`);
});


app.get("/api/posts", async (req, res) => {
    try
    {
        const posts = await db.collection("posts").find({}).toArray();
        return res.status(200).json({status: "success", data: posts});
    }
    catch(error)
    {
        console.error("Error getting all posts: ", error);
        return res.status(500).json({status: "failed", message: "Could not get all posts"});
    }
});

app.delete("/api/posts/delete/:id", async (req, res) => {
    const {id} = req.params;

    try
    {
        const result = await db.collection("posts").deleteOne({id: id});

        if(result.deletedCount === 1)
        {
            return res.status(200).json({status: "success", message: "Delete one post"});
        }
        else
        {
            return res.status(500).json({status: "failed", message: `Could not delete post with id ${id}`});
        }
    }
    catch(error)
    {
        console.error("Error when deleting post: ", error);
        return res.status(500).json({status: "failed", message: "Could not delete post"});
    }
});



app.put("/api/posts/update/:id", async (req, res) => {
    const {id} = req.params;

    const newData = req.body;
    try
    {
        const result = db.collection("posts").updateOne(
            { id: id },
            {$set: newData}
        );

        if(result.matchedCount === 0)
        {
            return res.status(404).json({status: "failed", message: "post not found"});
        }

        return res.status(200).json({status: "success", message: "Post updated"});
    }
    catch(error)
    {
        console.error("Could not update post: ", error);
        return res.status(500).json({status: "failed", message: "Could not update post"});
    }
});

app.use(express.static("frontend/public"));

app.get('*', (req, res) => {
    res.sendFile(path.resolve('frontend/public/index.html'));
});










//docker build -t image .

//docker run --name express -p 3005:3000 image