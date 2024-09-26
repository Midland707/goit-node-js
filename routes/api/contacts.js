const express = require("express");
const router = express.Router();

const contactsController = require("../../controllers");
const { validateBody, isValidId, auth } = require("../../middlewares");
const { schemas } = require("../../models/contact");

router.get("/", auth, contactsController.getListContacts);

router.get("/:id", auth, isValidId, contactsController.getContactById);

router.post(
  "/",
  auth,
  validateBody(schemas.addSchema),
  contactsController.addContact
);

router.delete("/:id", auth, isValidId, contactsController.removeContact);

router.put(
  "/:id",
  auth,
  isValidId,
  validateBody(schemas.addSchema),
  contactsController.editContact
);

router.patch(
  "/:id/favorite",
  auth,
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  contactsController.updateStatusContact
);

module.exports = router;
