module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
	var result = [];
	for (var i=0; i<members.length; i++) {
		if (typeof(members[i]) == 'string') {
			result.push(members[i].trim().slice(0,1).toUpperCase());
		}
	}
	return result.sort().join('');
};