const mysql = require('mysql');
const keys = require('../config/keys');

const pool = mysql.createPool({
    connectionLimit: keys.authDBConnectionPoolLimit || 10,
    host: keys.dbAuthHost,
    port: keys.dbAuthPort,
    user: keys.dbAuthUser,
    password: keys.dbAuthPassword,
    database: keys.dbAuthSchema
})

pool.getConnection((err, connection) => {

    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('Database connection was closed.')
        }
        else if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('Database has too many connections.')
        }
        else if (err.code === 'ECONNREFUSED') {
            console.error('Database connection was refused.')
        }
        else {
            console.error('Unexpected Databae error')
            throw err
        }
    }

    if (connection) connection.release()
})

module.exports = pool;