const express = require("express");
const contacts = require("../../models/contacts");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res.json(await contacts.listContacts());
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await contacts.getContactById(id);
    if (!result) {
      return res.status(404).json({ message: "Not Found" });
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
