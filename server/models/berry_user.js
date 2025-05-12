const con = require("../db_connect");
const bcrypt = require("bcrypt");

async function createTable() {
  let sql = `
    CREATE TABLE IF NOT EXISTS Berry_User (
      User_ID INT AUTO_INCREMENT UNIQUE PRIMARY KEY,
      Email VARCHAR(500),
      Username VARCHAR(50),
      Password VARCHAR(100),
      Biography TEXT,
      Craft_Preference SET('Knitting','Crochet','General Crafts'),
      Pattern_Library_ID INT
    );
  `;
  await con.query(sql);
}
createTable();

async function userExists(username) {
  let sql = `SELECT * FROM Berry_User WHERE Username = ?`;
  const result = await con.query(sql, [username]);
  return result;
}

async function register(user) {
  const check = await userExists(user.username);
  if (check.length) throw Error("Username already exists");

  const hashed = await bcrypt.hash(user.password, 10);
  let sql = `
    INSERT INTO Berry_User (Email, Username, Password)
    VALUES (?, ?, ?)
  `;
  await con.query(sql, [user.email, user.username, hashed]);

  return await login(user);
}

async function login(user) {
  const result = await userExists(user.username);
  if (!result[0]) throw Error("User not found");

  const valid = await bcrypt.compare(user.password, result[0].Password);
  if (!valid) throw Error("Incorrect password");

  return result[0];
}

module.exports = { register, login, userExists };