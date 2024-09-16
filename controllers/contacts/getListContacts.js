const { Contact } = require("../../models");

const getListContacts = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, favorite } = req.query;

  res.json(
    await Contact.find(favorite === undefined ? { owner } : { owner, favorite })
      .populate("owner", "email")
      .limit(limit * 1)
      .skip((page - 1) * limit)
  );
};

module.exports = getListContacts;
