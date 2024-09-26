const { HttpError } = require("../../helpers");
const { Contact } = require("../../models");

const getContactById = async (req, res) => {
  const { id } = req.params;
  const { _id: owner } = req.user;
  const result = await Contact.findOne({ _id: id, owner }).populate(
    "owner",
    "email"
  );
  if (!result) throw HttpError(404);
  res.json(result);
};

module.exports = getContactById;
