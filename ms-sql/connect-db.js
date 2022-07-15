const appConfig = require('../../appConfig')
const sql = require("mssql");
const config = {
    user: appConfig.SQL_USERNAME,
    password: appConfig.SQL_PASSWORD,
    server: appConfig.SQL_HOSTNAME,
    database: 'CRM',
    pool: {
        max: appConfig.SQL_MAX_CONNECTION_POOL,
        min: 0,
        idleTimeoutMillis: 30000
    }
}

const dbConnection = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

module.exports = {
  sql, dbConnection
}