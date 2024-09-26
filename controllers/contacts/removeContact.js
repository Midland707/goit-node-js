const { HttpError } = require("../../helpers");
const { Contact } = require("../../models");

const removeContact = async (req, res) => {
  const { id } = req.params;
  const { _id: owner } = req.user;
  const result = await Contact.findOneAndRemove({ _id: id, owner });
  if (!result) throw HttpError(404);
  res.json({ message: "contact deleted" });
};

module.exports = removeContact;
