const { query } = require("../mysql");
var bodyParser = require("body-parser");

var jsonParser = bodyParser.json();

module.exports = (router) => {
  router.get("/users/", async (req, res) => {
    try {
      const users = await query(`
        SELECT u.id, CONCAT(u.first_name, ' ', u.last_name) AS full_name, u.age, u.birthday, o.name AS organisation_name
        FROM users u
        LEFT JOIN organisation o ON u.organisation_id = o.id
      `);
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  router.get("/users/:userId", async (req, res) => {
    const id = req.params.userId;
    try {
      const user = await query(
        `
        SELECT u.id, CONCAT(u.first_name, ' ', u.last_name) AS full_name, u.age, u.birthday, o.name AS organisation_name
        FROM users u
        LEFT JOIN organisation o ON u.organisation_id = o.id
        WHERE u.id = ?
      `,
        [id]
      );

      res.json(user);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  router.post("/users/", jsonParser, async (req, res) => {
    const { first_name, last_name, age, birthday, organisation_id } = req.body;

    try {
      await query(
        `INSERT INTO users (first_name, last_name, age, birthday, organisation_id) VALUES (?, ?, ?, ?, ?)`,
        [first_name, last_name, age, birthday, organisation_id]
      );

      const fullNameUser = await query(
        `SELECT u.id AS user_id, CONCAT(u.first_name, ' ', u.last_name) AS full_name, u.age, u.birthday, o.name AS organisation_name 
        FROM users u
        LEFT JOIN organisation o ON u.organisation_id = o.id
        WHERE u.first_name = ? AND u.last_name = ?`,
        [first_name, last_name]
      );

      res.json(fullNameUser);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  router.put("/users/:userId", jsonParser, async (req, res) => {
    const { userId } = req.params;
    const { first_name, last_name, age, birthday, organisation_id } = req.body;

    try {
      const fieldsToUpdate = {
        first_name,
        last_name,
        age,
        birthday,
        organisation_id,
      };

      const updates = Object.entries(fieldsToUpdate)
        .filter(([key, value]) => value !== undefined)
        .map(([key]) => `${key} = ?`)
        .join(", ");

      await query(`UPDATE users SET ${updates} WHERE id = ?`, [
        ...Object.values(fieldsToUpdate).filter((value) => value !== undefined),
        userId,
      ]);

      const fullNameUser = await query(
        `SELECT u.id AS user_id, CONCAT(first_name, ' ', last_name) AS full_name, age, birthday, o.name AS organisation_name 
        FROM users u
        LEFT JOIN organisation o ON u.organisation_id = o.id
        WHERE u.id = ?`,
        [userId]
      );

      res.json(fullNameUser);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });
};
