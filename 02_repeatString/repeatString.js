const repeatString = function(str, num) {
    let repeatStr = "";
    if(num >= 0){
        for (let i = 1; i <= num ; i++){
            repeatStr = repeatStr + str;
        }
        return repeatStr;
    }else{
        return "ERROR";
    }
    
};

// Do not edit below this line
module.exports = repeatString;
