const controller = require("../controllers/users");
const router = require("express").Router();

// define the routes
/*
GET request to the root endpoint of the users resource, 
which will invoke the getUsers function in the controller module to return a list of all users

*/ // users
router.get("/", controller.getUsers);

/*
 GET request to the endpoint that retrieves a specific user with the given userId, which will invoke the getUser function in the controller module.
*/
// /users/:userId
router.get("/:userId", controller.getUser);

// /users
router.post("/", controller.createUser);

router.put("/:userId", controller.updateUser); // /users/:userId

router.delete("/:userId", controller.deleteUser); // /users/:userId

module.exports = router;
