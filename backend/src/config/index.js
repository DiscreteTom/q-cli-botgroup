require('dotenv').config();

module.exports = {
  server: {
    port: process.env.PORT || 3001,
    jwtSecret: process.env.JWT_SECRET || '',
    authPassword: process.env.AUTH_PASSWORD || ''
  },
  aws: {
    region: process.env.AWS_REGION || 'us-east-1'
    // No explicit credentials - will use default credential provider chain
  },
  models: {
    deepseek: {
      modelId: process.env.DEEPSEEK_MODEL_ID || 'us.deepseek.r1-v1:0',
      parameters: {
        temperature: parseFloat(process.env.DEEPSEEK_TEMPERATURE || '0.7'),
        maxTokens: parseInt(process.env.DEEPSEEK_MAX_TOKENS || '1000')
      }
    },
    nova: {
      modelId: process.env.NOVA_MODEL_ID || 'us.amazon.nova-lite-v1:0',
      parameters: {
        temperature: parseFloat(process.env.NOVA_TEMPERATURE || '0.7'),
        maxTokens: parseInt(process.env.NOVA_MAX_TOKENS || '1000')
      }
    }
  }
};
