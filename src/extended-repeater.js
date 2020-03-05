module.exports = function repeater(str, options) {
	if(typeof(str) !== 'string'){ 
		str = str+'';
    }
    
	if (!options.separator) {
		options.separator = '+';
	}
	if (!options.additionSeparator) {
		options.additionSeparator = '|';
	}
	
	var additionStr = str,
		newStr = '';
	if (options.additionRepeatTimes) {
		for (var j=0; j<options.additionRepeatTimes; j++) {
			additionStr += options.addition;
			if (j != options.additionRepeatTimes -1) {
				additionStr += options.additionSeparator;
			}
		}
	}
	if (options.repeatTimes) {
		for (var i=0; i<options.repeatTimes; i++) {
			newStr += additionStr;
			if (i != options.repeatTimes-1) {
				newStr += options.separator;
			}
		}
	} else {
		str += options.addition;
		return str;
	}
	
    return newStr;
};
  