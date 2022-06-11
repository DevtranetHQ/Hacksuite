import mongoose from "mongoose";
import { config } from "../config";

const { MONGODB_URI } = config;

let cached: { id: number; conn: typeof mongoose; promise: null | Promise<typeof mongoose> } =
  global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null, id: 0 };
}

export async function dbConnect() {
  if (cached.conn) {
    console.log({ id: cached.id });
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = { bufferCommands: false };

    cached.promise = mongoose.connect(MONGODB_URI, opts);
    cached.id = Math.floor(Math.random() * 1000000);
  }

  cached.conn = await cached.promise;

  console.log({ id: cached.id });
  return cached.conn;
}
