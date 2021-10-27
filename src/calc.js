let calc = {
    add: function(var1,var2) {
        return var1 + var2;
    },
    sub(x,y) {
        return x - y;
    },
    mult: (x,y) => {
        return x*y;
    },
    div: (x,y) => x/y
};

// module.exports = calc; //commonJS

export default calc; // ES module