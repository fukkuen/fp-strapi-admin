module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'localhost'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'cliff'),
      user: env('DATABASE_USERNAME', 'cliff'),
      password: env('DATABASE_PASSWORD', ''),
      ssl: env.bool('DATABASE_SSL', false)
    }
  },
});

