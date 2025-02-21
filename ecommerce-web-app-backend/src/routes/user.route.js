const {registerUser, login, verify, refresh, uploadImage, updateProfile} = require("../controllers/user.controller");
const authenticateJWT = require("../middlewares/authenticateJWT.middleware");
const upload = require("../middlewares/multer.middleware");

const { Router } = require('express');
const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(login);
router.route("/verify").get(authenticateJWT, verify);
router.route("/refresh").post(refresh);
router.route("/upload").post(upload.single('profileImage'), uploadImage);
router.route("/update").put(updateProfile)
module.exports = router;