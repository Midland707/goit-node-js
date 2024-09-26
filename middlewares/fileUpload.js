const multer = require("multer");
const path = require("path");

const tempDir = path.resolve(process.cwd(), "tmp");
const multerConf = multer.diskStorage({
  destination: tempDir,
  filename: (req, file, cd) => {
    cd(null, file.originalname);
  },
});

const fileUpload = multer({ storage: multerConf });

module.exports = fileUpload;
