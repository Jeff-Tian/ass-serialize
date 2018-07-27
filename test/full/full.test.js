import AssSerializer from '../../index'
import assert from 'assert'
import fs from 'fs'
import path from 'path'

describe('full', () => {
    it('should serialize', () => {
        const output = fs.readFileSync(path.join(__dirname, './output.ass'), 'utf-8')
        const input = require('./input.json')

        assert.equal(AssSerializer.serialize(input), output)
    })
})
