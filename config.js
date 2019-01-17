const environment = {
  development: {
    port: 3001,
    envName: 'development'
  },
  production: {
    port: 2200,
    envName: 'production'
  }
};

const currentEnv = typeof(process.env.NODE_ENV) === 'string' ? process.env.NODE_ENV.toLowerCase() : '';
const envToExport = typeof(environment[currentEnv]) == 'object' ? environment[currentEnv] : environment.development;

module.exports = envToExport;