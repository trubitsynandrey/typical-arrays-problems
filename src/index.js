exports.min = function min(array) {
    if (!array || array.length == 0) {
        return 0;
    }
    let len = array.length,
        minimum = Infinity;
    while (len--) {
        if (array[len] < minimum) {
            minimum = array[len];
        }
    }
    return minimum;
}

exports.max = function max(array) {
    if (!array || array.length == 0) {
        return 0;
    }
    let len = array.length,
        maximum = -Infinity;
    while (len--) {
        if (array[len] > maximum) {
            maximum = array[len];
        }
    }
    return maximum;
}

exports.avg = function avg(array) {
    if (!array || array.length == 0) {
        return 0;
    }
    let len = array.length,
        sum = 0;
    for (i = 0; i < len; i++) {
        sum += array[i];
    }
    let average = sum / len;
    return average;
}
