import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { BRANCHES } from "./branches";


const dbUri =
  process.env.DB_URI || "mongodb://127.0.0.1:27017/ph-car-wash-system";
const client = new MongoClient(dbUri);
const db = client.db("ph-car-wash-system");

export const auth = betterAuth({
  secret:
    process.env.BETTER_AUTH_SECRET ||
    "default_development_auth_secret_must_be_overridden_in_production",
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
  database: mongodbAdapter(db, {
    client,
  }),

  user: {
    additionalFields: {
      role: {
        type: ["admin", "user", "branchManager"],
        input: false,
        defaultValue: "user",
      },
      // Only branch managers have a branch. Set by an admin on the server, never by the user.
      // Better Auth does not check enum values at runtime, so Express must validate the value.
      branch: {
        type: [...BRANCHES],
        input: false,
        required: false,
        defaultValue: null,
      },

    }
  },

  //...other options
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {

  },
});