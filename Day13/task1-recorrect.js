let express = require('express');
const app = express();

const movies = [
        {
            "id": 1,
            "title": "KGF Chapter 2",
            "language": "Hindi",
            "genre": "Action",
            "rating": 9.3,
            "releaseYear": 2022
        },
        {
            "id": 2,
            "title": "3 Idiots",
            "language": "Hindi",
            "genre": "Comedy",
            "rating": 9.5,
            "releaseYear": 2009
        },
        {
            "id": 3,
            "title": "Interstellar",
            "language": "English",
            "genre": "Sci-Fi",
            "rating": 9.7,
            "releaseYear": 2014
        },
        {
            "id": 4,
            "title": "Pushpa",
            "language": "Telugu",
            "genre": "Action",
            "rating": 8.9,
            "releaseYear": 2021
        }
    ];

    
    app.use(express.json());

// Task 1) Objective Return all movies.
app.get('/allMovies',(req,res)=>{
    return res.status(200).json({
        movies
    })
})


//Task 2) Objective Filter movies using Query Parameters.
app.get('/movie',(req,res)=>{
     let language = req.query.language;
    let genre = req.query.genre;
    let rating = Number(req.query.minRating);
    let year = Number(req.query.releaseYear);

     let result  = movies;

     if(language){
        result = result.filter((val)=>{
            return val.language === language;
        })
     }
     if(genre){
        result = result.filter((val)=>{
            return val.genre === genre;
        })
     }
   if(rating){
    result = result.filter((val)=>{
        return val.rating === rating;
    })
   }

   if(year){
    result = result.filter((val)=>{
        return val.releaseYear == year;
    })
   }

   return res.status(200).json({
    result
   })

})

// Task 3) GET /movie/:id Objective Return details of a particular movie.
app.get('/movie/:id',(req,res)=>{
   let id = Number(req.params.id);
   let store = movies.filter((val)=>{
    return val.id === id;
   })   
   if(store.length==0){
    return res.status(404).json({
        massage : "invalid id"
    })
   }
    return res.status(200).json({
    store
   })
})

// Task 4) post data and get massage succedfully data sent
 app.post('/createMovie',(req,res)=>{
    let newMovies = {
        id : movies.length+1,
        title : req.body.title,
        language : req.body.language,
        genre : req.body.genre,
        rating : req.body.rating,
        releaseYear : req.body.releaseYear
    }
    movies.push(newMovies);
    return res.status(201).json({
        massage : "Succesfully added movie"
    })
 })

 //Task 5 PATCH /updateMovieRating/:id
app.patch('/updateMovies/:id',(req,res)=>{
 let id = Number(req.params.id);
    let movie = movies.filter((val)=>{
        return val.id == id
    })
      if (!movie) {
        return res.status(404).send("Movie not found");
    }
    movie.rating = req.body.rating;
     return res.status(201).json({
        massage : "Succesfully updated rating"
    })
})

// 7. DELETE /deleteMovie/:id
app.delete("/deleteMovie/:id", (req, res) => {
    let id = Number(req.params.id);
    let index = movies.findIndex((val) => {
        return val.id === id;
    });
    if (index === -1) {
        return res.status(404).send("Movie not found");
    }

    movies.splice(index, 1);

    res.send("Movie Deleted Successfully");
});

// 6. PUT /replaceMovie/:id

app.put("/replaceMovie/:id", (req, res) => {

    let id = Number(req.params.id);
    let index = movies.findIndex((val) => {
        return val.id === id;
    });
    if (index === -1) {
        return res.status(404).send("Movie not found");
    }
    movies[index] = {
        id: id,
        title: req.body.title,
        language: req.body.language,
        genre: req.body.genre,
        rating: req.body.rating,
        releaseYear: req.body.releaseYear
    };
    res.send("Movie Updated Successfully");
});

app.put('/replace',(req,res)=>{
    let index = movies.findIndex((val)=>{
        return val.id === id;
    })
    if(index === -1){
        return res.status(404).send("movie is not founded");
    }
    movies[index] = {
        id :id,
        title :req.body.title,
        language : req.body.language,
        genre : req.body.genre,
        rating : req.body.releaseYear,
        releaseYear:req.body.releaseYear
    }
})
    app.listen(7070,()=>{
        console.log("Done..7070");
    })