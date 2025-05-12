
const sqlConfig = {
    user: process.env.SQLUSER,
    password: process.env.SQLPASSWORD,
    server: process.env.SQLSERVER, // You can use 'localhost\\instance' to connect to named instance
    database: process.env.SQLDATABASE,
    synchronize: true,
    trustServerCertificate: true
  }

  module.exports = sqlConfig;