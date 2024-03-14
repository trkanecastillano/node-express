const mysql = require("mysql2/promise");

const query = async (q, params = []) => {
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "workshop",
    password: "Kncstlln0615.",
  });

  try {
    const [results] = await connection.query(q, params);
    console.log(results);
    return results;
  } catch (err) {
    console.log(err);
    throw err;
  } finally {
    await connection.end();
  }
};

module.exports = { query };
