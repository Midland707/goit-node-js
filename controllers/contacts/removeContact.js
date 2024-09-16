const { HttpError } = require("../../helpers");
const { Contact } = require("../../models");

const removeContact = async (req, res) => {
  const { id } = req.params;
  const result = await Contact.findByIdAndRemove({ _id: id });
  if (!result) throw HttpError(404);
  res.json({ message: "contact deleted" });
};

module.exports = removeContact;
