import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'us-east-2_pOuvUxjaJ',
    ClientId: '15jnp6dc0h6j98pc3u0ou80dqr',
};

export default new CognitoUserPool(poolData);