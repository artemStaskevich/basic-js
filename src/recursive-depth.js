module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (typeof (arr) !== "object") {
            return 0;
        }

        var count = 0;
        arr.forEach(item => {
            count = Math.max(this.calculateDepth(item), count);
        });

        return count + 1;
    }
};