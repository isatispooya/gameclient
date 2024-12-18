export default {
  apps: [{
    name: "game",
    script: "dist/main.js",
    env: {
      PORT: 2558,
      NODE_ENV: "production"
    },
    instances: 1,
    exec_mode: "cluster",
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env_production: {
      NODE_ENV: "production"
    },
    interpreter: 'node',
    interpreter_args: '--require ts-node/register',
    error_file: 'logs/err.log',
    out_file: 'logs/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss',
  }]
}