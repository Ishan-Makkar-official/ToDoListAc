

const express=require('express');
const bodyParser=require('body-parser');
const app=express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var items=[];


app.get("/",function(req,res)
{

      var options = { weekday: 'long',month: 'long', day: '2-digit' };
      var today=new Date();
      today=today.toLocaleDateString("en-US", options);
      res.render("list",{day:today,items:items});
})


app.post("/",function(req,res)
{
    var item=req.body.item;
    items.push(item);
    res.redirect("/");

})



app.listen(3000,function()
{
  console.log("Server is running on port 3000");
})

