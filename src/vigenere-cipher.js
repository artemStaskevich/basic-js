const ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

class VigenereCipheringMachine {
    constructor(machine = true) {
        this.machine = machine;
    }

    getChipherArray(string, key) {
        var letters = string.replace(/[^A-Za-z]/g, '');
    
        if (key.length > letters.length) {
            key = key.slice(0, letters.length);
        } else {
            while  (key.length < letters.length) {
                key += key.slice(0, letters.length - key.length); 
            }
        }
        
        var array = [];
        for (var i = 0, j = 0; i < string.length; i++) {
            if (string[i].match(/[A-Za-z]/) != null) {
                array.push([ABC.indexOf(string[i].toUpperCase()), ABC.indexOf(key[j].toUpperCase())]);
                j++;
            } else {
                array.push(string[i]);
            }
        }
        
        return array;
    }
    
    chipher(type, string, key) {
        if (!string || !key) {
            throw new Error();
        }
        
        var chipherArray = this.getChipherArray(string, key),
            res = [],
            index  = 0;
            
        for(var i = 0; i < chipherArray.length; i++) {
            if (chipherArray[i].length == 1) {
                res.push(chipherArray[i]);
            } else {
                if (type == 'encrypt') {
                    index = chipherArray[i][0] + chipherArray[i][1];
                } else if (type == 'decrypt') {
                    index = chipherArray[i][0] - chipherArray[i][1];
                }

                if (index < 0) {
                    index  = ABC.length - Math.abs(index);
                }
            
                res.push(ABC[index % ABC.length]);
            }
        }
        if (this.machine) {
            return res.join('');
        } else {
            return res.reverse().join('');
        }
    }

    encrypt(string, key) {
        return this.chipher('encrypt', string, key);
    }

    decrypt(string, key) {
        return this.chipher('decrypt', string, key);
    }
}

module.exports = VigenereCipheringMachine;