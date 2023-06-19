const axios = require('axios');

class EasyBrokerAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseURL = 'https://api.easybroker.com/v1';
  }

  async getAllProperties() {
    try {
      const response = await axios.get(`${this.baseURL}/contact_requests`, {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`
        }
      });

      return response.data.map(property => property.content);
    } catch (error) {
      throw new Error(`Failed to fetch properties: ${error.message}`);
    }
  }
}

module.exports = EasyBrokerAPI;