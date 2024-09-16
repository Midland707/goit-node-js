const { controllerWrapper } = require("../../decorators");
const getListContacts = require("./getListContacts");
const getContactById = require("./getContactById");
const addContact = require("./addContact");
const removeContact = require("./removeContact");
const editContact = require("./editContact");
const updateStatusContact = require("./updateStatusContact");

module.exports = {
  getListContacts: controllerWrapper(getListContacts),
  getContactById: controllerWrapper(getContactById),
  addContact: controllerWrapper(addContact),
  removeContact: controllerWrapper(removeContact),
  editContact: controllerWrapper(editContact),
  updateStatusContact: controllerWrapper(updateStatusContact),
};
