const express = require("express");
const router = new express.Router();
const artistModel = require("./../models/Artist");

router.get("/artists", (req, res) => {
  artistModel
    .find()
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(dbErr => {
      res.status(500).json(dbErr);
    });
});

router.get("/artists/:id", (req, res) => {
  artistModel
    .findById(req.params.id)
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(dbErr => {
      res.status(500).json(dbErr);
    });
});

router.post("/artists", (req, res) => {
  artistModel
    .create(req.body)
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(dbErr => {
      res.status(500).json(dbErr);
    });
});

router.put("/artists/:id", (req, res) => {
  artistModel
    .findByIdAndUpdate(req.body)
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(dbErr => {
      res.status(500).json(dbErr);
    });
});

router.patch("/artists/:id", (req, res) => {
  artistModel
    .findOneAndUpdate(req.body)
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(dbErr => {
      res.status(500).json(dbErr);
    });
});

router.delete("/artists/:id", (req, res) => {
  artistModel
    .findOneAndDelete(req.body)
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(dbErr => {
      res.status(500).json(dbErr);
    });
});

module.exports = router;
