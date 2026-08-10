/*
Create

PUT /students/:id

Body

{
   "name":"Aman Verma",
   "course":"NodeJS",
   "marks":95
}

Rules

1. Find student using id.
2. If student not found

Return

{
   "message":"Student Not Found"
}

3. If any body field is missing

Return

{
   "message":"All fields are required"
}

4. Otherwise update the complete student.

Return

{
   "message":"Student Updated Successfully",
   "student":{
      "id":2,
      "name":"Aman Verma",
      "course":"NodeJS",
      "marks":95
   }
}
*/