module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', 'strapi-database.ckjfdmyszhad.ap-southeast-1.rds.amazonaws.com'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'strapi'),
      user: env('DATABASE_USERNAME', 'cliffwong'),
      password: env('DATABASE_PASSWORD', 'Yy27022070'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
