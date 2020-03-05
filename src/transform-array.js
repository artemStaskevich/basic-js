module.exports = function transform(arr) {
    if (!Array.isArray(arr)) {
        throw 'Error';
    }

	var res = [], i=0, control = ['--discard-next', '--discard-prev', '--double-next', '--double-prev'];
    while (i<arr.length) {
        if (arr[i] == '--discard-next') {
			if (!control.includes(arr[i+1])) {
				i++;
			}
        } else if (arr[i] == '--discard-prev') {
            if (i != 0) {
                res.pop();
            }
        } else if (arr[i] == '--double-next') {
			if (i != arr.length-1 && !control.includes(arr[i+1])) {
				res.push(arr[i+1]);
			}
        } else if (arr[i] == '--double-prev') {
            if (i != 0 && !control.includes(arr[i-1])) {
                res.push(arr[i-1]);
            }
        } else {
			res.push(arr[i]);
		}
		i++;
    }

    return res;
};
