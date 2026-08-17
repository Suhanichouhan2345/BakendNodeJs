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

app.listen(9090,()=>{
    console.log('runnig data');
})