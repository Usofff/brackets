module.exports = function check(str, bracketsConfig) {
    let arr = [];
    arr = str.split('');
    let configs = [];
    bracketsConfig.forEach(e => {
        e.forEach(element =>{
            configs.push(element);
        });
    });

    let open, close;
    
    if (configs.includes(arr[0]) && configs.indexOf(arr[0])%2==0) {    
        for (let i = 0; i < arr.length; i++) {
            open= arr[i];
            close = configs[configs.indexOf(open)+1];
            if(arr[i+1]==close){
                arr.splice(i,2);
                open=close=undefined;
                i=0;
                i--;
            }
        }
    }else{
        return false;
    }
    if(arr.length==0)
    {
        return true;
    }else{
        return false;
    }
}
