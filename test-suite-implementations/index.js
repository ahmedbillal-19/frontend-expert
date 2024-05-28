const describe = (testSuiteName, func) => {
    try {
        console.log(`beginning test suite ${testSuiteName}`);
        func();
        console.log(`successfully completed test suite ${testSuiteName}`); 
    } catch (err) {
        console.error(`failed running test suite ${testSuiteName} on ${err.message}`); 
    }
};

const it = (testCaseName, func) => {
    try {
        console.log(`beginning test case ${testCaseName}`);
        func();
        console.log(`successfully completed test case ${testCaseName}`); 
    } catch (err) {
        throw new Error(`test case ${testCaseName} with error message ${err.message}`); 
    }
};

const expect = (actual) => {
    return {
        toExist: () => {
            if (actual !== null && actual !== undefined) {
                return true;
            }
            throw new Error(`expected value to exist but got ${actual}`); 
        },
        toBe: (expected) => {
            if (actual === expected) {
                return true;
            }
            throw new Error(`expected ${JSON.stringify(actual)} to be ${JSON.stringify(expected)}`); 
        },
        toBeType: (type) => {
            const typeOfActual = typeof actual;
            if (typeOfActual === type) {
                return true;
            }
            throw new Error(`expected ${JSON.stringify(actual)} to be of type ${type} but got ${typeOfActual}`); 
        },
    };
};

exports.describe = describe;
exports.it = it;
exports.expect = expect;
