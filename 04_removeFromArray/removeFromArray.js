const removeFromArray = function(arr , ...element) {
let newArr = [];

for (let i = 0 ; i < arr.length ; i++){
    if(!element.includes(arr[i])){
        newArr.push(arr[i]);
    }
}


return newArr;


};

// Do not edit below this line
module.exports = removeFromArray;
