import express from "express"
import routes from "./src/routes/postRoutes.js";


const app = express();

app.use(express.static("uploads"))

routes(app)

app.listen(3000, () => {
    console.log("Servido Escutando!!");
});

function searchPostById(id){
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
}

//app.get("/posts/:id", (req,res)=>{
//    const index =searchPostById(req.params.id)
//    res.status(200).json(posts[index]);
//});