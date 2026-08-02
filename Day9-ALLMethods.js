/*

# 1. GET → Data dekhna (Read)

Jab server se data lena ho.

```javascript
app.get("/students", (req, res) => {
    res.send(students);
});
```

URL:

```text
/students
```

Output:

```javascript
[
  { id: 1, name: "Rahul" },
  { id: 2, name: "Aman" }
]
```

👉 **GET = Read Data**

---

# 2. POST → Naya Data Add karna (Create)

Jab naya student add karna ho.

```javascript
app.post("/students", (req, res) => {
    console.log(req.body);
});
```

Body (Postman):

```json
{
    "name": "Ritik",
    "course": "Java"
}
```

👉 **POST = Add New Data**

---

# 3. Params (`req.params`)

Jab **ek specific item** chahiye.

Example:

```javascript
app.get("/students/:id", (req, res) => {
    console.log(req.params.id);
});
```

URL:

```text
/students/3
```

Output:

```javascript
3
```

Use when:

* Student by ID
* Product by ID
* User by ID

---

# 4. Query (`req.query`)

Jab **filter/search** karna ho.

```javascript
app.get("/students", (req, res) => {
    console.log(req.query.course);
});
```

URL:

```text
/students?course=MERN
```

Output:

```javascript
MERN
```

Use when:

* MERN students
* Java students
* Bhopal students
* Salary > 50000

---

# 5. Body (`req.body`)

Jab client **poora data bhejta hai**.

```javascript
app.post("/students", (req, res) => {
    console.log(req.body);
});
```

Body:

```json
{
   "name":"Rahul",
   "course":"MERN",
   "city":"Bhopal"
}
```

Output:

```javascript
{
   name:"Rahul",
   course:"MERN",
   city:"Bhopal"
}
```

---

# Ek hi example se samjho

## Get all students

```http
GET /students
```

➡️ `GET`

---

## Get student whose id = 5

```http
GET /students/5
```

➡️ `GET` + `params`

---

## Get MERN students

```http
GET /students?course=MERN
```

➡️ `GET` + `query`

---

## Add new student

```http
POST /students
```

Body:

```json
{
  "name":"Rahul",
  "course":"Java"
}
```

➡️ `POST` + `body`

---

# Easy Trick 🔥

| Kaam              | Method | Kya use hoga?             |
| ----------------- | ------ | ------------------------- |
| Sab data dekhna   | GET    | Kuch nahi                 |
| Ek ID ka data     | GET    | `req.params`              |
| Filter/Search     | GET    | `req.query`               |
| Naya data add     | POST   | `req.body`                |
| Poora data update | PUT    | `req.params` + `req.body` |
| Thoda data update | PATCH  | `req.params` + `req.body` |
| Data delete       | DELETE | `req.params`              |

# Example

### GET

```text
/students
```

Sab students.

---

### GET + Params

```text
/students/2
```

Sirf ID 2.

---

### GET + Query

```text
/students?city=Bhopal
```

Sirf Bhopal wale.

---

### POST + Body

```json
{
   "name":"Neha",
   "city":"Delhi"
}
```

Naya student add.

---

## Rule jo interview me yaad rakhna hai

* **GET** → Data lena.
* **POST** → Data banana (Create).
* **PUT** → Poora data replace/update.
* **PATCH** → Kuch fields update.
* **DELETE** → Data delete.

Aur:

* **`req.params`** → URL ka **ID** (`/students/5`)
* **`req.query`** → **Filter/Search** (`?course=MERN`)
* **`req.body`** → Client se bheja gaya **poora data** (POST/PUT/PATCH)

Ye 3 cheezein (`params`, `query`, `body`) agar clear ho gayin, to Express ke 80% interview questions solve ho jaate hain.
*/