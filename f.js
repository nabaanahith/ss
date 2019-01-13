
var f=true
console.log('\n'+ Date().valueOf().toLocaleString())
var r='Sun Jan 13 2019 '+'16:52:03 '+'GMT+0300 (Arabic Standard Time)'
console.log('\n'+'d: '+Date().valueOf());
while(f)
{
if(Date().valueOf()==r){

f=false
console.log('ok');
console.log('r: '+r);
console.log('\n'+'d: '+Date().valueOf());
break
}
else{
    f=true
    console.log('r: '+r);
    console.log('\n'+'d: '+Date().valueOf());
    
}}