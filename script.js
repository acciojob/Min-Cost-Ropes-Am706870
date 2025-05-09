function mincost(arr)
{ 
	let mincost = 0;
	while (arr.length>1) {
		arr.sort((a,b)=>a-b);
		let first = arr.shift();
		let second = arr.shift();
		let cost = first + second;
		mincost += cost;
		arr.push(cost);
	}
	return mincost
	
//write your code here
// return the min cost
  
}
alert("The minimum cost is: " + mincost([1, 2, 3, 4, 5]));


module.exports=mincost;
