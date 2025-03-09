function mincost(arr)
{ 
	let minost = 0
	while (arr.length>1) {
		arr.sort((a,b)=>a-b);
		let first = arr.shift();
		let second = arr.shift();
		let cost = first + second;
		mincost += cost;
		arr.push(cost);
	}
	return minost
	
//write your code here
// return the min cost
  
}


module.exports=mincost;
