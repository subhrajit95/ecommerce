const mysql = require ('mysql2')
//const Connection = require('mysql2/typings/mysql/lib/Connection');

const {HOST, USER, DB} = require('../config/db.config')

const connection = mysql.createConnection({
    host: HOST,
    user: USER,
    database: DB
});

//connection.query(
//    'select * from employee',
//    function(err, result){
//        console.log('result', result)
//    }
//)

const userInsertQuery = ` Insert into employee (name, role, doj)
values (?,?,?)
`

const userInsertData = ['Ankita', 'Sproging', '2022-07-31 14:25:50']
connection.query(userInsertQuery, userInsertData, function(err, data){
    if(err){
        console.log(err)
    }
    console.log(data)
}) 
