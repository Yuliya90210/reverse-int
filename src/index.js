module.exports = function reverse(n) {
    let i = 0;
    let result = '';
    if (n < 0) {
        n = -n;
    }
    n = String(n);
    while (i < n.length) {
        result = `${n[i]}${result}`;
        i++;
    }
    return Number(result);
}


