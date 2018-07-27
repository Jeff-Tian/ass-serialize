var assert = require('assert');
import AssSerializer from '../index';

describe('serialize time', function () {
    it('should serialize time', function () {
        assert.equal(AssSerializer.serializeTime(0), '0:00:00.00')
        assert.equal(AssSerializer.serializeTime(5), '0:00:05.00')
    });
});
