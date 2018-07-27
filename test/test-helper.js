const jsdiff = require('diff')

export default class TestHelper {
    static diff(source, target) {
        let identical = true
        let results = jsdiff.diffLines(source, target)

        results.forEach((part) => {
            if (part.added) {
                console.log('( added )[+] ', part.value)
                identical = false
            }

            if (part.removed) {
                console.log('(removed)[-] ', part.value)
                identical = false
            }
        })

        return identical
    }
}
