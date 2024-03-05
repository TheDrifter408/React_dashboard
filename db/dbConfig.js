const { Sequelize, QueryTypes } = require("sequelize");

const dbConfig = {
    database: 'sakila',
    user: 'root',
    pass: 'asdf1234',
    host:'localhost',
    dialect:'mysql'
}

const sequelize = new Sequelize(dbConfig.database,dbConfig.user,dbConfig.pass,{
    host: dbConfig.host,
    dialect:dbConfig.dialect
})

async function testConnect(){
    try{
        await sequelize.authenticate();
        console.log('Connection successful.');
    }
    catch( err ){
        console.error("Unable to connect",err);
    }
}

testConnect();

module.exports = sequelize;