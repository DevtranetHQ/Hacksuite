export const config = {
    APP_NAME: "the-dynamics",
    JWT_SECRET: process.env.JWT_SECRET || "000-12345-000",
    MONGODB_URI: process.env.MONGODB_URI || process.env.MONGO_ATLAS_URI,
    BCRYPT_SALT: process.env.BCRYPT_SALT || 10,
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
    }
};
