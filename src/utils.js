export const getWordForm = function (n, array) {
    var modN = n % 10;
    if (n > 10 && n < 21) {
        return array[2];
    } else if (modN > 1 && modN < 5) {
        return array[1];
    } else if (modN === 1) {
        return array[0];
    } else {
        return array[2];
    }
};

export const updateElementInArray = (el, set) => {
    set.delete(el) || set.add(el)
    return new Set(set.values());
};
