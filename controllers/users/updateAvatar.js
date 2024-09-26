const { User } = require("../../models");
const { HttpError } = require("../../helpers");
const Jimp = require("jimp");
const fs = require("fs/promises");
const path = require("path");

const tempDir = path.resolve(process.cwd(), "tmp");
const avatarsPath = path.resolve("public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id, avatarURL, email } = req.user;
  const avatarName = email.split("@")[0] + "Avatar" + ".jpg";
  const avatarNewPath = path.join(avatarsPath, avatarName);

  await Jimp.read(req.file.path)
    .then((avatar) => {
      return avatar.resize(250, 250).quality(80).write(req.file.path);
    })
    .catch((error) => {
      throw error.message;
    });

  await fs.rename(req.file.path, avatarNewPath, (error) => {
    if (error) throw error;
  });

  const result = await User.findByIdAndUpdate(
    _id,
    { ...req.body, avatarURL: avatarNewPath },
    { new: true }
  );
  if (!result) throw HttpError(404);

  res.json({
    avatarURL: avatarURL,
  });
};

module.exports = updateAvatar;
