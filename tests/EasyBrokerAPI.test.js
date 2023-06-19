const EasyBrokerAPI = require('../EasyBrokerAPI');

describe('EasyBrokerAPI', () => {
  const apiKey = 'l7u502p8v46ba3ppgvj5y2aad50lb9';

  it('should fetch and print property titles', async () => {
    const api = new EasyBrokerAPI(apiKey);
    const propertyTitles = await api.getAllProperties();
    console.log(propertyTitles);
    expect(propertyTitles.length).toBeGreaterThan(0);
  });
});