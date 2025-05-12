const con = require("../db_connect");

// Check if table exists
async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS Berry_User (
    User_ID INT NOT NULL AUTO_INCREMENT,
    Email VARCHAR(500) NOT NULL UNIQUE,
    Username VARCHAR(50) NOT NULL UNIQUE,
    Password VARCHAR(100) NOT NULL,
    FirstName VARCHAR(100),
    CONSTRAINT userPK PRIMARY KEY(User_ID)
  );`;
  await con.query(sql);
}
createTable();

// Check if user exists
async function userExists(username) {
  const sql = `SELECT * FROM Berry_User WHERE Username = ?`;
  const results = await con.query(sql, [username]);
  return results;
}

// Register user
async function register(user) {
  const existing = await userExists(user.Username);
  if (existing.length > 0) throw Error("Username already in use!");

  const sql = `
    INSERT INTO Berry_User (FirstName, Email, Username, Password)
    VALUES (?, ?, ?, ?)`;
  await con.query(sql, [user.FirstName, user.Email, user.Username, user.Password]);

  return await login(user); // Log them in after registering
}

// Login user
async function login(user) {
  const results = await userExists(user.Username);
  if (!results[0]) throw Error("Username not found");
  if (results[0].Password !== user.Password) throw Error("Incorrect password");
  return results[0];
}

module.exports = {
  register,
  login,
};
