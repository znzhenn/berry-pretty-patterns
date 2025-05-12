const con = require("../db_connect");

async function createTable() {
  let sql = `
    CREATE TABLE IF NOT EXISTS Pattern_Library (
      Pattern_Library_ID INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
      Pattern_ID INT,
      FOREIGN KEY(Pattern_ID) REFERENCES Pattern(Pattern_ID)
    );
  `;
  await con.query(sql);
}
createTable();

async function addToLibrary(patternID) {
  let sql = `INSERT INTO Pattern_Library (Pattern_ID) VALUES (?)`;
  await con.query(sql, [patternID]);
}

async function getLibrary() {
  let sql = `SELECT * FROM Pattern_Library`;
  return await con.query(sql);
}

module.exports = { addToLibrary, getLibrary };
