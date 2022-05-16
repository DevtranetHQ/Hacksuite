export const config = {
  APP_NAME: "the-dynamics",
  JWT_SECRET: process.env.JWT_SECRET || "000-12345-000",
  MONGODB_URI: process.env.MONGODB_URI || process.env.MONGO_ATLAS_URI,
  BCRYPT_SALT: process.env.BCRYPT_SALT || 10,
  apiKey: process.env.API_KEY,
  role: {
    USER: ["user", "admin"],
    ADMIN: ["admin"]
  },
  url: {
    CLIENT_URL: process.env.CLIENT_URL || "http://localhost:3000"
  },
  mailer: {
    HOST: process.env.SMTP_HOST,
    USER: process.env.SMTP_USER,
    PASSWORD: process.env.SMTP_PASS,
    PORT: process.env.SMTP_PORT,
    SECURE: true
  },
  discord: {
    clientID: process.env.DISCORD_CLIENT_ID,
    clientSecret: process.env.DISCORD_CLIENT_SECRET,
    callbackURL: process.env.DISCORD_CALLBACK_URL,
    scope: ["identify", "email", "guilds"]
  },
  vapid: {
    publicKey: process.env.VAPID_PUBLIC_KEY,
    privateKey: process.env.VAPID_PRIVATE_KEY
  },
  aws: {
    region: process.env.X_AWS_REGION,
    accessKeyId: process.env.X_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.X_AWS_SECRET_ACCESS_KEY,
    bucket: process.env.X_AWS_BUCKET
  },
  agenda: {
    apiUrl: process.env.AGENDA_API_URL
  }
};
