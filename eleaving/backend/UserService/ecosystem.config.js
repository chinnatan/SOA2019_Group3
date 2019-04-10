module.exports = {
  apps : [{
    name: "user-service",
    script: "app.js",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}