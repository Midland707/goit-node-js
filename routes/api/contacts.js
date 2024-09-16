const express = require("express");
const router = express.Router();

const contactsController = require("../../controllers");
const { validateBody, isValidId } = require("../../middlewares");
const { schemas } = require("../../models");

router.get("/", contactsController.getListContacts);

router.get("/:id", isValidId, contactsController.getContactById);

router.post(
  "/",
  validateBody(schemas.addSchema),
  contactsController.addContact
);

router.delete("/:id", isValidId, contactsController.removeContact);

router.put(
  "/:id",
  isValidId,
  validateBody(schemas.addSchema),
  contactsController.editContact
);

router.patch(
  "/:id/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  contactsController.updateStatusContact
);

module.exports = router;
