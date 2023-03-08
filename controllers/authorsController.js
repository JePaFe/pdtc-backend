const {
  allAuthors,
  authorById,
  deleteAuthor,
  createAuthor,
  updateAuthor,
} = require("../models/authorsModel");

// CRUD

// Create
module.exports.authorCreateController = async (req, res) => {
  const { name, lastName, alive } = req.body;
  try {
    const data = await createAuthor(name, lastName, alive);
    return data.created ? res.send(data) : res.send(data);
  } catch (error) {
    return res.send("Se produjo un error al realizar la request");
  }
};

// READ
module.exports.allAuthorsController = async (req, res) => {
  try {
    const data = await allAuthors();
    return res.send(data);
  } catch (error) {
    return res.send("Se producto un error en la request");
  }
};
module.exports.authorByIdController = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await authorById(id);
    return res.send(data);
  } catch (error) {
    return res.send("Se producto un error en la request");
  }
};

// Update

module.exports.authorUpdateController = async (req, res) => {
  const { id } = req.params;
  const { name, lastName, alive } = req.body;
  try {
    const data = await updateAuthor(id, name, lastName, alive);
    return data.updated ? res.send(data) : res.send(data);
  } catch (error) {
    console.log(error);
    return res.send("Se produjo un error al realizar la request");
  }
};

// Delete
module.exports.authorDeleteController = async (req, res) => {
  const { id } = req.params;
  try {
    const data = await deleteAuthor(id);
    return res.send(data);
  } catch (error) {
    return res.send("Se producto un error en la request");
  }
};
