const isArray = (input) => input && Array.isArray(input);

const isObject = (input) => input && !Array.isArray(input) && typeof input === 'object';

const isPrimitive = (input) => (!isArray(input) && !isObject(input));

function flatten(value) {
    if (isPrimitive(value)) {
        return value;
    } else if (isArray(value)) {
        return flattenArray(value);
    } else if (isObject(value)) {
        return flattenObject(value);
    }
}


function flattenArray(array = []) {
    let result = [];
    for (let value of array) {
        if (isPrimitive(value)) {
            result.push(value);
        } else if (isArray(value)) {
            result = result.concat(flattenArray(value));
        } else if (isObject(value)) {
            result.push(flattenObject(value));
        }
    }
    return result;
}


function flattenObject(object = {}) {
    let result = {};
    for (const [key, value] of Object.entries(object)) {
        if (isPrimitive(value)) {
            result[key] = value;
        } else if (isArray(value)) {
            result[key] = flattenArray(value);
        } else if (isObject(value)) {
            Object.assign(result, flattenObject(value));
        }
    }
    return result;
}
console.log(flatten([[], 1, 2, 3, 4, [[], [], [[], []]], 4, 5, []]));