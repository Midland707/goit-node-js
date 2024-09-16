const { HttpError } = require("../../helpers");
const { Contact } = require("../../models");

const editContact = async (req, res) => {
  if (JSON.stringify(req.body) === "{}") throw HttpError(400, "missing fields");
  const { id } = req.params;
  const result = await Contact.findByIdAndUpdate({ _id: id }, req.body, {
    new: true,
  });
  if (!result) throw HttpError(404);
  res.json(result);
};

module.exports = editContact;
