const pgp = require("pg-promise")({});

const db = pgp("postgress://localhost:5432/grover_groomers");

module.exports = { db }; 

