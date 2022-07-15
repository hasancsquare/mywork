

if (!global.hasOwnProperty('db')) {

  var mysql = require('mysql2');

  let CONNECTION_POOL = 50;
  
  console.log('Connection Pool Size:' + CONNECTION_POOL)
  global.db = global.db ? global.db : mysql.createPool({
    connectionLimit : CONNECTION_POOL,
    host            : "148.66.136.123",
    user            : "csquare_crm_user",
    password        : "P@ssw0rd123",
    database        : "csquare_crm",
    multipleStatements: true,
    charset : 'utf8mb4',

    dateStrings: [
        'DATE',
        'DATETIME'
    ]
  });      
}

module.exports = global.db
