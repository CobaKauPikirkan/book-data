const express = require("express")
const { create, findAll, update, findByid, deleteAuthors } = require("../controller/author")
const router = express.Router()

router.get("/", findAll)
router.get("/:id", findByid)
router.post("/", create)
router.put("/:id", update)
router.delete("/:id", deleteAuthors )

module.exports = router