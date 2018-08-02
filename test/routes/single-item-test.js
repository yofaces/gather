const {assert} = require('chai');
const request = require('supertest');

const app = require('../../app');

const {parseTextFromHTML, seedItemToDatabase} = require('../test-utils');
const {connectDatabaseAndDropData, diconnectDatabase} = require('../setup-teardown-utils');

describe('Server path: /items/:id', () => {
  beforeEach(connectDatabaseAndDropData);

  afterEach(diconnectDatabase);

  // Write your test blocks below:

  describe('GET', () => {
    it('renders empty input fields', async () => {

      const item = seedItemToDatabase();

      const response = await request(app)
        .get(`/items/${item._id}`);
 
        assert.include(browser.getText('#item-title'), item.title);
        assert.include(browser.getText('#item-description'), item.description);
 
    });
  });



  


});
