const express = require("express");
const { json } = require("express");
const flights = require("./controllers/flightController");
const models = require("./models/Flight");
const { post } = require("./routes/flightRoute");
const routes = require("./routes/flightRoute");
const bodyParser = require("body-parser");







const app = express();

app.use(json());

app.use("/", routes);


// Patch code in node js?
routes.patch('/Postid', async(req, res) => {
  try{
    const updatePost = await post.updatePost({ _id: req.params.postid},);
    res.json(updatedPost);
  }catch(err){
    res.json({message:err});
  }
  })

//delete code
routes.delete('/Postid', async(req, res) =>{
  try{
    const removedPost = await post.remove({ _id: req.params.postid});
    res.json(removePost);
  }catch(err){res.json({message: err});}
})





const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
