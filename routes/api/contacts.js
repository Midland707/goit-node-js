const express = require("express");
const router = express.Router();

const contactsController = require("../../controllers/contacts-controller");

router.get("/", contactsController.getListContacts);

router.get("/:id", contactsController.getContactById);

router.post("/", contactsController.addContact);

router.delete("/:id", contactsController.removeContact);

router.put("/:id", contactsController.editContact);

module.exports = router;
