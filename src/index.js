module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');
    let newArr = [];
    for(let i = 0; i < arr.length; i++) {
        let del = false;
        for(let k = 0; k < bracketsConfig.length; k++) {
            if ( arr[i] == bracketsConfig[k][1] && bracketsConfig[k][0] == newArr[newArr.length - 1] ) {
                 newArr.pop();
                 del = true;
                 break;
            } 
            if (arr[i] == bracketsConfig[k][1] && bracketsConfig[k][0] != bracketsConfig[k][1] && (newArr.length == 0 || bracketsConfig[k][0] != newArr[newArr.length - 1])) {
                return false;
            }
        }

        if (!del) {
            newArr.push(arr[i]);
        }
    }
    return newArr.length ? false : true;
}
