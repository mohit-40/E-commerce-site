// let l=[];
// var d= new Date("2020,01,01")
// d.setMonth(d.getMonth() + 3);
// l.push(d.toLocaleString('default', { month: 'short',year: "numeric"}));
// d.setMonth(d.getMonth() + 3);
// l.push(d.toLocaleString('default', { month: 'short',year: "numeric"}));
// d.setMonth(d.getMonth() + 3);
// l.push(d.toLocaleString('default', { month: 'short',year: "numeric"}).replace('  ', '') );
// console.log(l);

var di = new Date("2020,01,01");
var df = new Date("2020,12,31");
var arr=[];
var i=new Date( di.setMonth(di.getMonth() + 2) )
for( ;i<=df; i.setMonth(i.getMonth() + 3) ){
	console.log(i);
	arr.push(i.toLocaleString('default', { month: 'short',year: "2-digit"}).replace(' ','') );
}

console.log(arr);