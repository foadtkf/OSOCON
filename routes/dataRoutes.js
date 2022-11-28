const express = require("express")
const router = express.Router();
const  {createDate ,getDate, deleteDate } = require("../controllers/dataController")

router.post("/" , createDate )
router.get("/date-list" ,getDate )
router.delete("/date-list/:id" , deleteDate )
module.exports = router ;