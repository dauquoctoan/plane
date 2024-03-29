module.exports = {
  apps: [
    {
      name: "plane-web",
      script: "npm",
      args: "run start",
      cwd: "web",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production"
      }
    },
    {
      name: "plane-server",
      script: "npm",
      args: "run start",
      cwd: "server",
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        NODE_ENV: "production"
      }
    }
  ]
};