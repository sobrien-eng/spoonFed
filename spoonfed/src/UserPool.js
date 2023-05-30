import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData = {
    UserPoolId: 'us-east-2_G7G8vebPc',
    ClientId: '6vkdc2fb976jsg7s25g0ipofec',
};

export default new CognitoUserPool(poolData);