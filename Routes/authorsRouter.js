const express = require("express");
const {
  authorCreateController,
  allAuthorsController,
  authorByIdController,
  authorUpdateController,
  authorDeleteController,
} = require("../controllers/authorsController");
const router = express.Router();

router.get("/", allAuthorsController);

router.get(
  "/:id",
  (req, res, next) => {
    const id = req.params.id;
    const numId = Number(id);

    if (isNaN(numId) || numId < 1) {
      res.send("Numero invalido");
    } else {
      next();
    }
  },
  authorByIdController
);

router.post("/create", authorCreateController);
router.put("/update/:id", authorUpdateController);
router.delete("/delete/:id", authorDeleteController);

module.exports = router;
