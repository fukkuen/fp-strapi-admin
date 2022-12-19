console.log('loading dev database.js')
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: "strapi-database.cejgpwrykkoc.ap-southeast-1.rds.amazonaws.com",
      port: 5432,
      database: "strapi",
      user: "postgres",
      password: "Yy27022070",
    },
    debug: false,
  },
});
