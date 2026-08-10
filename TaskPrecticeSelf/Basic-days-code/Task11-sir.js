let express = require('express');
const app = express();

const movies = [
  {
    id: 1,
    title: "KGF",
    rating: 9,
  },
  {
    id: 2,
    title: "Pushpa",
    rating: 8,
  },
  {
    id: 3,
    title: "Bahubali",
    rating: 10,
  },
  {
    id: 4,
    title: "Animal",
    rating: 7,
  },
];

app.get('/movies',(req,res)=>{
let rating = req.query.rating;

if(rating){
    let result = movies.filter((val)=>{
        return val.rating <= rating;
    })
    .map((val)=>{
          return {
          title: val.title,
        };
    })
    res.send(result);
}
if(!rating){
    res.send("out of sullabuys")
}
})

app.listen(5050,()=>{
    console.log("port on 5050");
})
