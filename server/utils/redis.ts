import { Redis} from "ioredis";
require("dotenv").config();
let client;

const redisClient = () => {
  if (process.env.REDIS_URL) {
    client = new Redis(process.env.REDIS_URL);
    client.on('connect', () => {
      console.log('Redis Connected');
    });
    client.on('error', (error) => {
      console.log('Redis error: ', error);
      throw new Error("Redis connection failed: " + error);
    });
  } else {
    console.log('Redis URL not defined');
    throw new Error("Redis URL not defined");
  }
};

redisClient();

export const redis = client;
