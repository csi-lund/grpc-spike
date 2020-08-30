const dotenv = require("dotenv");

// read in the .env file
dotenv.config();

//  environment variables
const {
  SQL_SERVER,
  SQL_DATABASE,
  SQL_USER,
  SQL_PASSWORD,
} = process.env;

const sqlEncrypt = process.env.SQL_ENCRYPT === "true";
const validateBulkParams = process.env.VALIDATE_BULK_PARAMS === "true";

// export the config
module.exports = {
  server: SQL_SERVER,
  authentication: {
    type: "default",
    options: {
      userName: SQL_USER, 
      password: SQL_PASSWORD,
    },
  },
  options: {
    validateBulkLoadParameters: validateBulkParams,
    database: SQL_DATABASE,
    encrypt: sqlEncrypt,
  },
};
