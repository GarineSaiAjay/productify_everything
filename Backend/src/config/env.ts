import dotenv from 'dotenv';

dotenv.config({ quiet: true });

export const ENV = {
  PORT: process.env.PORT || 3000,
  DATABASE_URL: process.env.DATABASE_URL || '',
  DB_HOST: process.env.DB_HOST || 'localhost',
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:5173',
  CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY || '',
  CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY || '', 
  NODE_ENV: process.env.NODE_ENV || 'development',
};