exports.getLen = function (obj) {
    var len = 0
    for (var key in obj) {
        len ++;
    }
    return len
}