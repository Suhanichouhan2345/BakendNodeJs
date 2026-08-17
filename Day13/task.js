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
    app.get("/movie", (req, res) => {
    let language = req.query.language;
    let genre = req.query.genre;
    let rating = req.query.minRating;
    let year = req.query.releaseYear;

    let movie = movies;

   // let movie = movies.filter((val)=>{ 
     //   return language == val.language; 
    //}) 
     if (language) {
        movie = movie.filter((val) => {
            return val.language === language;
        });
    }
   //return res.status(200).json({ 
    //succes : true, 
    //movie 
   //}) 
 
  // let rating = movie.map((val)=>{ 
    //return rating >= val.rating; 
   //}) 
   
   if (genre) {
        movie = movie.filter((val) => {
            return val.genre === genre;
        });
    }
    //return res.status(200).json({ 
      //  success : true, 
        //rating 
    //}) 
      
    //let year = movie.filter((val)=>{ 
     //   return movie == val.year; 
   // }) 

    if (rating) {
        movie = movie.filter((val) => {
            return val.rating >= rating;
        });
    }    if (year) {
        movie = movie.filter((val) => {
            return val.releaseYear === year;
        });
    }
    res.status(200).json({
        success: true,
        movies
    });
});

app.listen(3030, () => {
    console.log("Server Started  3030 ");
})