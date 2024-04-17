var getLastMoment = function(n, left, right) {
    let leftMax = -Infinity;
   let rightMin = Infinity;
   
   for (let pos of left) {
       leftMax = Math.max(leftMax, pos);
   }
   
   for (let pos of right) {
       rightMin = Math.min(rightMin, pos);
   }
   
   return Math.max(leftMax, n - rightMin)
};
console.log(
    getLastMoment(4,[4,3],[0]))