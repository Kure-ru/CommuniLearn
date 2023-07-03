const multer = require('multer');

// Define the storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Set the destination folder for uploaded files
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    // Set the filename of uploaded files
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const fileExtension = file.originalname.split('.').pop();
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + fileExtension);
  }
});

// Create the multer instance with the configured storage
const upload = multer({ storage });

module.exports = upload;
