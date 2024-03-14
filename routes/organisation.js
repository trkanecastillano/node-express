const { query } = require("../mysql");
var bodyParser = require("body-parser");

var jsonParser = bodyParser.json();

module.exports = (router) => {
  router.get("/organisation/", async (req, res) => {
    const organisation = await query("SELECT * FROM organisation");
    res.json(organisation);
  });

  router.get("/organisation/:organisationId", async (req, res) => {
    const id = req.params.organisationId;
    const organisation = await query(
      `SELECT * FROM organisation WHERE id = ${id}`
    );
    res.json(organisation);
  });

  router.post("/organisation/", jsonParser, async (req, res) => {
    const name = req.body.name;

    try {
      const organization = await query(
        `INSERT INTO organisation (name) VALUES (?)`,
        [name]
      );

      const response = await query(`SELECT * FROM organisation WHERE id = ?`, [
        organization.insertId,
      ]);

      res.json(response);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  });

  router.put("/organisation/:organisationId", jsonParser, async (req, res) => {
    const id = req.params.organisationId;
    const name = req.body.name;
    const organisation = await query(
      `UPDATE organisation SET name = '${name}' WHERE id = ${id}`
    );
    res.json(organisation);
  });
};
