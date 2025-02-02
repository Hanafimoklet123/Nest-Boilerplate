export default () => {
  return {
    port: parseInt(process.env.PORT, 10) || 3000,
    database: {
      client: process.env.DB_CLIENT,
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD || '',
      name: process.env.DB_NAME,
    },
  };
};
