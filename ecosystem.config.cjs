module.exports = {
  apps: [{
    name: "game",
    script: "npm",
    args: "run preview -- --port 2558 --host",
    env: {
      PORT: 2558,
      NODE_ENV: "production"
    },
    instances: 1,
    exec_mode: "fork",
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env_production: {
      NODE_ENV: "production"
    },
    error_file: 'logs/err.log',
    out_file: 'logs/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
  }]
} 