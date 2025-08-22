import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

// Define the schema - keeping it minimal for this auth test
const schema = a.schema({
  // You can add your data models here when needed
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});