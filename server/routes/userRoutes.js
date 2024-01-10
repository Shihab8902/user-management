const router = require("express").Router();
const getUsers = require("../controllers/user/getUsers");
const postNewAttachment = require("../controllers/user/postUsers");




//Get all user data
router.get("/api/users", getUsers);

//Post new attachment
router.post("/api/users", postNewAttachment);



module.exports = router;