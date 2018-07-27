import AssSerializer from '../../index'
import assert from 'assert'
import fs from 'fs'
import path from 'path'

describe.skip('full', () => {
    it('should serialize', () => {
        const output = fs.readFileSync(path.join(__dirname, './output.ass'), 'utf-8')
        const input = fs.readFileSync(path.join(__dirname, './input.json'), 'utf-8')

        assert.equal(AssSerializer.serialize(input), output)
    })
})
