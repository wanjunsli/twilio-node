'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('AddressConfiguration', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should treat the first each arg as a callback',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://conversations.twilio.com/v1/Configuration/Addresses?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://conversations.twilio.com/v1/Configuration/Addresses?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'address_configurations'
          },
          'address_configurations': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'IGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'address': '+37256123457',
                  'type': 'sms',
                  'friendly_name': 'My Test Configuration',
                  'auto_creation': {
                      'enabled': true,
                      'type': 'webhook',
                      'conversation_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'webhook_url': 'https://example.com',
                      'webhook_method': 'POST',
                      'webhook_filters': [
                          'onParticipantAdded',
                          'onMessageAdded'
                      ]
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://conversations.twilio.com/v1/Configuration/Addresses/IGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'IGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
                  'address': '+37256123458',
                  'type': 'sms',
                  'friendly_name': 'Studio Test Configuration',
                  'auto_creation': {
                      'enabled': false,
                      'type': 'studio',
                      'conversation_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'studio_flow_sid': 'FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'studio_retry_count': 3
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://conversations.twilio.com/v1/Configuration/Addresses/IGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'IGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac',
                  'address': '+37256123459',
                  'type': 'sms',
                  'friendly_name': 'Default Test Configuration',
                  'auto_creation': {
                      'enabled': true,
                      'type': 'default'
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://conversations.twilio.com/v1/Configuration/Addresses/IGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.conversations.v1.addressConfigurations.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://conversations.twilio.com/v1/Configuration/Addresses?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://conversations.twilio.com/v1/Configuration/Addresses?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'address_configurations'
          },
          'address_configurations': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'IGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'address': '+37256123457',
                  'type': 'sms',
                  'friendly_name': 'My Test Configuration',
                  'auto_creation': {
                      'enabled': true,
                      'type': 'webhook',
                      'conversation_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'webhook_url': 'https://example.com',
                      'webhook_method': 'POST',
                      'webhook_filters': [
                          'onParticipantAdded',
                          'onMessageAdded'
                      ]
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://conversations.twilio.com/v1/Configuration/Addresses/IGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'IGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
                  'address': '+37256123458',
                  'type': 'sms',
                  'friendly_name': 'Studio Test Configuration',
                  'auto_creation': {
                      'enabled': false,
                      'type': 'studio',
                      'conversation_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'studio_flow_sid': 'FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'studio_retry_count': 3
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://conversations.twilio.com/v1/Configuration/Addresses/IGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'IGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac',
                  'address': '+37256123459',
                  'type': 'sms',
                  'friendly_name': 'Default Test Configuration',
                  'auto_creation': {
                      'enabled': true,
                      'type': 'default'
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://conversations.twilio.com/v1/Configuration/Addresses/IGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.conversations.v1.addressConfigurations.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://conversations.twilio.com/v1/Configuration/Addresses',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://conversations.twilio.com/v1/Configuration/Addresses?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://conversations.twilio.com/v1/Configuration/Addresses?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'address_configurations'
          },
          'address_configurations': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'IGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'address': '+37256123457',
                  'type': 'sms',
                  'friendly_name': 'My Test Configuration',
                  'auto_creation': {
                      'enabled': true,
                      'type': 'webhook',
                      'conversation_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'webhook_url': 'https://example.com',
                      'webhook_method': 'POST',
                      'webhook_filters': [
                          'onParticipantAdded',
                          'onMessageAdded'
                      ]
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://conversations.twilio.com/v1/Configuration/Addresses/IGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'IGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
                  'address': '+37256123458',
                  'type': 'sms',
                  'friendly_name': 'Studio Test Configuration',
                  'auto_creation': {
                      'enabled': false,
                      'type': 'studio',
                      'conversation_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'studio_flow_sid': 'FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'studio_retry_count': 3
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://conversations.twilio.com/v1/Configuration/Addresses/IGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'IGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac',
                  'address': '+37256123459',
                  'type': 'sms',
                  'friendly_name': 'Default Test Configuration',
                  'auto_creation': {
                      'enabled': true,
                      'type': 'default'
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://conversations.twilio.com/v1/Configuration/Addresses/IGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.conversations.v1.addressConfigurations.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.conversations.v1.addressConfigurations.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://conversations.twilio.com/v1/Configuration/Addresses';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_all response',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://conversations.twilio.com/v1/Configuration/Addresses?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://conversations.twilio.com/v1/Configuration/Addresses?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'address_configurations'
          },
          'address_configurations': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'IGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'address': '+37256123457',
                  'type': 'sms',
                  'friendly_name': 'My Test Configuration',
                  'auto_creation': {
                      'enabled': true,
                      'type': 'webhook',
                      'conversation_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'webhook_url': 'https://example.com',
                      'webhook_method': 'POST',
                      'webhook_filters': [
                          'onParticipantAdded',
                          'onMessageAdded'
                      ]
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://conversations.twilio.com/v1/Configuration/Addresses/IGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'IGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
                  'address': '+37256123458',
                  'type': 'sms',
                  'friendly_name': 'Studio Test Configuration',
                  'auto_creation': {
                      'enabled': false,
                      'type': 'studio',
                      'conversation_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'studio_flow_sid': 'FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'studio_retry_count': 3
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://conversations.twilio.com/v1/Configuration/Addresses/IGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'IGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac',
                  'address': '+37256123459',
                  'type': 'sms',
                  'friendly_name': 'Default Test Configuration',
                  'auto_creation': {
                      'enabled': true,
                      'type': 'default'
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://conversations.twilio.com/v1/Configuration/Addresses/IGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac'
              }
          ]
      };

      holodeck.mock(new Response(200, body));

      var promise = client.conversations.v1.addressConfigurations.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_blank response',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://conversations.twilio.com/v1/Configuration/Addresses?PageSize=50&Page=0',
              'url': 'https://conversations.twilio.com/v1/Configuration/Addresses?PageSize=50&Page=0',
              'previous_page_url': null,
              'next_page_url': null,
              'key': 'address_configurations'
          },
          'address_configurations': []
      };

      holodeck.mock(new Response(200, body));

      var promise = client.conversations.v1.addressConfigurations.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_by_address_type response',
    function(done) {
      var body = {
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://conversations.twilio.com/v1/Configuration/Addresses?Type=sms&PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://conversations.twilio.com/v1/Configuration/Addresses?Type=sms&PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'address_configurations'
          },
          'address_configurations': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'IGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'address': '+37256123457',
                  'type': 'sms',
                  'friendly_name': 'My Test Configuration',
                  'auto_creation': {
                      'enabled': true,
                      'type': 'webhook',
                      'conversation_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'webhook_url': 'https://example.com',
                      'webhook_method': 'POST',
                      'webhook_filters': [
                          'onParticipantAdded',
                          'onMessageAdded'
                      ]
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://conversations.twilio.com/v1/Configuration/Addresses/IGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'IGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
                  'address': '+37256123458',
                  'type': 'sms',
                  'friendly_name': 'Studio Test Configuration',
                  'auto_creation': {
                      'enabled': false,
                      'type': 'studio',
                      'conversation_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'studio_flow_sid': 'FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                      'studio_retry_count': 3
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://conversations.twilio.com/v1/Configuration/Addresses/IGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab'
              },
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'sid': 'IGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac',
                  'address': '+37256123459',
                  'type': 'sms',
                  'friendly_name': 'Default Test Configuration',
                  'auto_creation': {
                      'enabled': true,
                      'type': 'default'
                  },
                  'date_created': '2016-03-24T21:05:50Z',
                  'date_updated': '2016-03-24T21:05:50Z',
                  'url': 'https://conversations.twilio.com/v1/Configuration/Addresses/IGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaac'
              }
          ]
      };

      holodeck.mock(new Response(200, body));

      var promise = client.conversations.v1.addressConfigurations.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.conversations.v1.addressConfigurations('IGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'IGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://conversations.twilio.com/v1/Configuration/Addresses/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'IGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'address': '+37256123457',
          'type': 'sms',
          'friendly_name': 'My Test Configuration',
          'auto_creation': {
              'enabled': true,
              'type': 'webhook',
              'conversation_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
              'webhook_url': 'https://example.com',
              'webhook_method': 'POST',
              'webhook_filters': [
                  'onParticipantAdded',
                  'onMessageAdded'
              ]
          },
          'date_created': '2016-03-24T21:05:50Z',
          'date_updated': '2016-03-24T21:05:50Z',
          'url': 'https://conversations.twilio.com/v1/Configuration/Addresses/IGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.conversations.v1.addressConfigurations('IGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var opts = {'type': 'sms', 'address': 'address'};
      var promise = client.conversations.v1.addressConfigurations.create(opts);
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://conversations.twilio.com/v1/Configuration/Addresses';

      var values = {'Type': 'sms', 'Address': 'address', };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'IGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'address': '+37256123457',
          'type': 'sms',
          'friendly_name': 'My Test Configuration',
          'auto_creation': {
              'enabled': true,
              'type': 'webhook',
              'conversation_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
              'webhook_url': 'https://example.com',
              'webhook_method': 'POST',
              'webhook_filters': [
                  'onParticipantAdded',
                  'onMessageAdded'
              ]
          },
          'date_created': '2016-03-24T21:05:50Z',
          'date_updated': '2016-03-24T21:05:50Z',
          'url': 'https://conversations.twilio.com/v1/Configuration/Addresses/IGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(201, body));

      var opts = {'type': 'sms', 'address': 'address'};
      var promise = client.conversations.v1.addressConfigurations.create(opts);
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid update request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.conversations.v1.addressConfigurations('IGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'IGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://conversations.twilio.com/v1/Configuration/Addresses/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function(done) {
      var body = {
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'sid': 'IGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'address': '+37256123457',
          'type': 'sms',
          'friendly_name': 'My Test Configuration Updated',
          'auto_creation': {
              'enabled': false,
              'type': 'studio',
              'conversation_service_sid': 'ISaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
              'studio_flow_sid': 'FWaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
              'studio_retry_count': 3
          },
          'date_created': '2016-03-24T21:05:50Z',
          'date_updated': '2016-03-24T21:05:51Z',
          'url': 'https://conversations.twilio.com/v1/Configuration/Addresses/IGaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.conversations.v1.addressConfigurations('IGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid remove request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.conversations.v1.addressConfigurations('IGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'IGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://conversations.twilio.com/v1/Configuration/Addresses/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function(done) {
      var body = null;

      holodeck.mock(new Response(204, body));

      var promise = client.conversations.v1.addressConfigurations('IGXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise.then(function(response) {
        expect(response).toBe(true);
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});