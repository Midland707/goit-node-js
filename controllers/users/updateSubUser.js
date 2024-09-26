const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const updateSubUser = async (req, res) => {
  const { _id } = req.user;
  const result = await User.findOneAndUpdate({ _id }, req.body, {
    new: true,
  });
  if (!result) throw HttpError(404);
  res.json(result);
};

module.exports = updateSubUser;
