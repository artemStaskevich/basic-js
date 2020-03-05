const chainMaker = {
	chains:[],
	getLength() {
		return this.chains.length;
	},
	addLink(value) {
		this.chains.push(value);
	
		return this;
	},
	removeLink(position) {
        if (typeof(position) !== 'number' || position - 1 < 0 || position - 1 >= this.getLength()) {
            this.chains = [];
            throw new Error();
        }
        position--;

        this.chains.splice(position, 1);
        return this;
	},
	reverseChain() {
		this.chains.reverse();
		
		return this;
	},
	finishChain() {
		var res = '';
		
		for(var i = 0; i < this.getLength(); i++) {
			res += '( ' + this.chains[i] + ' )';
			
			if (i != this.getLength() - 1) {
				res += '~~';
			}
		}
		
		this.chains = [];
		return res;
	}
};

module.exports = chainMaker;
