const express = require("express");
const router = express.Router();
const usersController = require("../../controllers");
const { validateBody, auth, fileUpload } = require("../../middlewares");
const { schemasUser } = require("../../models");

router.post(
  "/register",
  validateBody(schemasUser.regLogSchema),
  usersController.registerUser
);
router.post(
  "/login",
  validateBody(schemasUser.regLogSchema),
  usersController.loginUser
);
router.post("/logout", auth, usersController.logoutUser);
router.get("/current", auth, usersController.currentUser);
router.patch(
  "/",
  auth,
  validateBody(schemasUser.updateSubSchema),
  usersController.updateSubUser
);
router.patch(
  "/avatars",
  auth,
  // validateBody(schemasUser.updateAvatarSchema),
  fileUpload.single("avatar"),
  usersController.updateAvatar
);

module.exports = router;
