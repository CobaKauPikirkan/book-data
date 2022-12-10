const express = require("express")

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

const author = require("./routes/author")
app.use("/authors", author)

const book = require("./routes/book")
app.use("/books", book)

app.listen(port, ()=>{
    console.log(`server listening on ${port}`)
})