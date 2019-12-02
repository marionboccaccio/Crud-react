const express = require("express");
const router = new express.Router();
const albumModel = require("./../models/Album");

router.get("/albums", (req, res) => {
  albumModel
    .find()
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(dbErr => {
      res.status(500).json(dbErr);
    });
});

router.get("/albums/:id", (req, res) => {
  albumModel
    .findById(req.params.id)
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(dbErr => {
      res.status(500).json(dbErr);
    });
});

router.post("/albums", (req, res) => {
  albumModel
    .create(req.body)
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(dbErr => {
      res.status(500).json(dbErr);
    });
});

router.put("/albums/:id", (req, res) => {
  albumModel
    .findOneAndUpdate(req.body)
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(dbErr => {
      res.status(500).json(dbErr);
    });
});

router.patch("/albums/:id", (req, res) => {
  albumModel
    .findOneAndUpdate(req.body)
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(dbErr => {
      res.status(500).json(dbErr);
    });
});

router.delete("/albums/:id", (req, res) => {
  albumModel
    .findOneAndRemove(req.body)
    .then(dbRes => {
      res.status(200).json(dbRes);
    })
    .catch(dbErr => {
      res.status(500).json(dbErr);
    });
});

module.exports = router;
