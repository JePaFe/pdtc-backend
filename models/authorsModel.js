const { request } = require("../db/request");

module.exports.allAuthors = async () => {
  const data = await request("SELECT * FROM authors");
  return data;
};

module.exports.authorById = async (id) => {
  const data = await request(`SELECT * FROM authors WHERE id = ${id}`);

  //   if (data.length > 0) {
  //     return data[0];
  //   } else {
  //     return { message: `No existe al auto con el id: ${id}`, data };
  //   }

  return data.length > 0
    ? data[0]
    : { message: `No existe al auto con el id: ${id}`, data };
};

module.exports.createAuthor = async (name, lastName, alive) => {
  const data = await request(`INSERT INTO authors 
           (name, lastName, alive) 
    VALUES ('${name}', '${lastName}', ${alive})`);

  return {
    created: data.insertId ? true : false,
  };
};

module.exports.updateAuthor = async (id, name, lastName, alive) => {
  const data = await request(`
        UPDATE authors 
        SET name = '${name}', lastName = '${lastName}', alive = ${alive} 
        WHERE id = ${id};
    `);

  return {
    updated: data.affectedRows ? true : false,
  };
};

module.exports.deleteAuthor = async (id) => {
  const data = await request(`DELETE FROM authors WHERE id = ${id}`);

  return data.affectedRows
    ? { message: `Autor eliminado`, deleted: true }
    : { message: `No existe el autor con el id: ${id}`, deleted: false };
};
