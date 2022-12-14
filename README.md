# book-data
<h2>install All</h2>
    - npm install
<h2>start script</h2>
    - npm start
<br>
<br>

- **Create Author (POST REQUEST)**

http://localhost:3000/authors

```json
{
    "name":"test3",
    "email":"test3@email.com"
}
```

Response :
```json
{
    "statuscode": 200,
    "data": {
        "id": 3,
        "name": "test3",
        "email": "test3@email.com",
        "updatedAt": "2022-12-12T10:14:55.745Z",
        "createdAt": "2022-12-12T10:14:55.745Z"
    }
}
```

- **Get All Authors (GET REQUEST)**

http://localhost:3000/authors

Response :
```json
{
    "author": [
        {
            "id": 2,
            "name": "test2",
            "email": "test@email.com",
            "createdAt": "2022-12-10T04:39:02.000Z",
            "updatedAt": "2022-12-10T04:39:02.000Z"
        },
        {
            "id": 3,
            "name": "test3",
            "email": "test3@email.com",
            "createdAt": "2022-12-12T10:14:55.000Z",
            "updatedAt": "2022-12-12T10:14:55.000Z"
        }
    ]
}
```
- **Update by Id Authors (PUT REQUEST)**

http://localhost:3000/authors/:id
```json
{
    "name":"test2",
    "email":"test2@email.com"
}
```
Response :
```json
{
   "statuscode":200,
   "message":"succesfully update"
}
```

- **FIND by Id Authors (GET REQUEST)**

http://localhost:3000/authors/:id

Response :
```json
{
    "author": {
        "id": 2,
        "name": "test1",
        "email": "test@email.com",
        "createdAt": "2022-12-10T04:39:02.000Z",
        "updatedAt": "2022-12-12T10:19:05.000Z"
    }
}
```
- **Delete by Id Authors (DELETE REQUEST)**

http://localhost:3000/authors/:id

Response :
```json
{   
    "statuscode": 200,
    "message":"data has been deleted"
}
```
<br>
<br>
- **Create Book (POST REQUEST)**

http://localhost:3000/books

```json
{
    "isbn":"12345M123FD",
    "title":"mendaki gunung III",
    "realese":"2010-12-10",
    "author_id":2
}
```

Response :
```json
{
    "statuscode": 200,
    "data": {
        "id": 3,
        "isbn": "12345M123FD",
        "title": "mendaki gunung III",
        "realese": "2010-12-10T00:00:00.000Z",
        "author_id": 2,
        "updatedAt": "2022-12-12T10:25:19.328Z",
        "createdAt": "2022-12-12T10:25:19.328Z"
    }
}
```

- **Get All books (GET REQUEST)**

http://localhost:3000/books

Response :
```json
{
    "book": [
        {
            "id": 2,
            "isbn": "12345M123FD",
            "title": "mendaki gunung III",
            "realese": "2010-12-10T00:00:00.000Z",
            "author_id": 2,
            "createdAt": "2022-12-10T04:49:48.000Z",
            "updatedAt": "2022-12-10T04:49:48.000Z"
        },
        {
            "id": 4,
            "isbn": "12345M123FD",
            "title": "mendaki gunung IV",
            "realese": "2010-12-10T00:00:00.000Z",
            "author_id": 2,
            "createdAt": "2022-12-12T10:27:18.000Z",
            "updatedAt": "2022-12-12T10:27:18.000Z"
        }
    ]
}
```
- **Update by Id books (PUT REQUEST)**

http://localhost:3000/books/:id
```json
{
    "isbn":"11223M21",
    "title":"mendaki gunung IV part II",
    "realese":"2010-12-10",
    "author_id":2
}
```
Response :
```json
{
   "statuscode":200,
   "message":"succesfully update"
}
```

- **FIND by Id books (GET REQUEST)**

http://localhost:3000/books/:id

Response :
```json
{
    "book": {
        "id": 4,
        "isbn": "12345M123FD",
        "title": "mendaki gunung IV",
        "realese": "2010-12-10T00:00:00.000Z",
        "author_id": 2,
        "createdAt": "2022-12-12T10:27:18.000Z",
        "updatedAt": "2022-12-12T10:27:18.000Z"
    }
}
```
- **Delete by Id books (DELETE REQUEST)**

http://localhost:3000/books/:id

Response :
```json
{   
    "statuscode": 200,
    "message":"data has been deleted"
}
```