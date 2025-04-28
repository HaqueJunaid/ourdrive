const express = require("express");
const router = express.Router();
const multer = require("multer");
const imagekit = require("../utilities/ImagekitConfig");
const path = require("path");
const fileModel = require("../models/file.js");
const m1 = require("../middlewares/checkIsLogin");

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get("/home", m1, async (req, res) => {
  let allFiles = await fileModel.find({ owner: req.session.user.uId });
  res.render("Home.ejs", { allFiles });
});

router.post("/upload", m1, upload.single("file"), async (req, res) => {
  try {
    let file = req.file;

    if (!file) {
      return res.json({ message: "No file uploaded" });
    }

    const result = await imagekit.upload({
      file: file.buffer,
      fileName: file.originalname,
    });

    let newFile = await new fileModel({
      filename: file.originalname,
      path: result.url,
      size: file.size,
      owner: req.session.user.uId,
    });

    newFile.save();

    return res.status(200).redirect("/drive/home");
  } catch (error) {
    console.log(error);
    res.send("Error uploading file");
  }
});

router.delete("/home/:id", async (req, res) => {
  let { id } = req.params;
  try {
    await fileModel.deleteOne({ _id: id });
    res.status(300).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete the file" });
  }
});

module.exports = router;
