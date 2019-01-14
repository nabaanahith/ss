
var f=true
console.log('\n'+ Date().valueOf().toLocaleString())
var r='Sun Jan 13 2019 '+'16:52:03 '+'GMT+0300 (Arabic Standard Time)'
var d = new Date();
console.log('\n'+'d: '+d.getHours());
let rt=`${d.getHours()}:${d.getMinutes()}`
console.log(r+'\n'+Date().valueOf());
while(f){
    let rt=`${d.getHours()}:${d.getMinutes()}`
    console.log(r+'\n'+Date().valueOf());

    console.log('Date.valueOf()',Date.getTime());
    
}

console.log(rt);
