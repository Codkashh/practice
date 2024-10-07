var isAnagram = function(s, t) {
    if (s.length !== t.length) {
     return false;
   }
 
   s = s.toLowerCase();
   t = t.toLowerCase();
 
   let arr1 = s.split("").sort();
   let arr2 = t.split("").sort();
 
   function check(arr1, arr2){
     for(let i = 0; i < arr1.length; i++){
       if(arr1[i] !== arr2[i]){
         return false;
       }
     }
     return true;
   }

   let ans = check(arr1, arr2); 
   return ans;
};