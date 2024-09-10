import { defineAuth } from '@aws-amplify/backend';
import { preTokenGenerationV2 } from './pre-token-generation-v2/resource';
/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
  },
  triggers:{
    preTokenGeneration: preTokenGenerationV2,
  },
  userAttributes: {
    "custom:tenant_id": {
      dataType: "String",
      mutable: true,
    },
  },
});
