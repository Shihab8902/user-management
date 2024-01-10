const router = require("express").Router();
const getUsers = require("../controllers/user/getUsers");




//Get all user data
router.get("/api/users", getUsers);



module.exports = router;