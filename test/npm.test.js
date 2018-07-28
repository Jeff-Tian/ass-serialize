var assert = require('assert');

describe('serialize time', function () {
    var AssSerializer = require('../lib/index.js').default
    it('should serialize time', function () {
        assert.equal(AssSerializer.serializeTime(0), '0:00:00.00')
        assert.equal(AssSerializer.serializeTime(5), '0:00:05.00')
    });
});

describe('serialize time', function () {
    var AssSerializer = require('../ass-serialize')

    it('should serialize time', function () {
        assert.equal(AssSerializer.serializeTime(0), '0:00:00.00')
        assert.equal(AssSerializer.serializeTime(5), '0:00:05.00')
    });
})
