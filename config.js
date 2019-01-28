const environment = {
  development: {
    httpPort: 3001,
    httpsPort: 3002,
    envName: 'development'
  },
  production: {
    port: 2200,
    httpsPort: 2201,
    envName: 'production'
  }
};

const currentEnv = typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV.toLowerCase() : '';
const envToExport = typeof(environment[currentEnv]) == 'object' ? environment[currentEnv] : environment.development;

module.exports = envToExport;