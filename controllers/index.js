const {
  getListContacts,
  getContactById,
  addContact,
  removeContact,
  editContact,
  updateStatusContact,
} = require("./contacts");

const {
  registerUser,
  loginUser,
  currentUser,
  logoutUser,
  updateSubUser,
  updateAvatar,
} = require("./users");

module.exports = {
  getListContacts,
  getContactById,
  addContact,
  removeContact,
  editContact,
  updateStatusContact,
  registerUser,
  loginUser,
  currentUser,
  logoutUser,
  updateSubUser,
  updateAvatar,
};
