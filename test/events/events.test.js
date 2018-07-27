import AssSerializer from '../../index'
import assert from 'assert'
import fs from 'fs'
import path from 'path'
import TestHlper from "../test-helper";

describe('events', () => {
    it('should serialize comment', () => {
        const expectedOutput = fs.readFileSync(path.join(__dirname, './output-comment.ass'), 'utf-8').replace(/\r/g, '')

        const input = require('./input-comment.json')
        let actualOutput = AssSerializer.serializeEvents(input)

        let identical = TestHlper.diff(expectedOutput, actualOutput)

        assert.equal(identical, true)
        assert.equal(actualOutput, expectedOutput)
    })

    it('should serialize', () => {
        const expectedOutput = fs.readFileSync(path.join(__dirname, './output.ass'), 'utf-8').replace(/\r/g, '')

        const input = require('./input.json')
        let actualOutput = AssSerializer.serializeEvents(input)

        let identical = TestHlper.diff(expectedOutput, actualOutput)

        assert.equal(identical, true)
        assert.equal(actualOutput, expectedOutput)
    })
})
