const { controllerWrapper } = require("../decorators");
const addContactSchema = require("../schemas/contacts-schemas");
const { HttpError } = require("../helpers");
const Contact = require("../models/contact");

const getListContacts = async (req, res, next) => {
  console.log("Я тут", await Contact.find());
  res.json(await Contact.find());
};

// const getContactById = async (req, res, next) => {
//   const { id } = req.params;
//   const result = await contacts.getContactById(id);
//   if (!result) throw HttpError(404);
//   res.json(result);
// };

// const addContact = async (req, res, next) => {
//   const { error } = addContactSchema.validate(req.body);
//   if (error) throw HttpError(400, error.message);
//   const result = await contacts.addContact(req.body);
//   res.status(201).json(result);
// };

// const removeContact = async (req, res, next) => {
//   const { id } = req.params;
//   const result = await contacts.removeContact(id);
//   if (!result) throw HttpError(404);
//   res.json({ message: "contact deleted" });
// };

// const editContact = async (req, res, next) => {
//   if (JSON.stringify(req.body) === "{}") throw HttpError(400, "missing fields");
//   const { error } = addContactSchema.validate(req.body);
//   if (error) throw HttpError(400, error.message);
//   const { id } = req.params;
//   const result = await contacts.editContact(id, req.body);
//   if (!result) throw HttpError(404);
//   res.json(result);
// };

module.exports = {
  getListContacts: controllerWrapper(getListContacts),
  // getContactById: controllerWrapper(getContactById),
  // addContact: controllerWrapper(addContact),
  // removeContact: controllerWrapper(removeContact),
  // editContact: controllerWrapper(editContact),
};
