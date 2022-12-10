const express = require("express")
const { findAll, findByid, create, update, deletebooks } = require("../controller/book")
const router = express.Router()

router.get("/", findAll)
router.get("/:id", findByid)
router.post("/", create)
router.put("/:id", update)
router.delete("/:id", deletebooks )

module.exports = router