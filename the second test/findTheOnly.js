var singleNumber = function(nums) {
    for(let i=1;i<=nums.length-1;i++){
        let a=nums[i];
        let b=nums.lastIndexOf(a);
        if (i>b) {
            nums.splice(i,1);
            nums.splice(b-1,1);
        }
        return nums;
    }
    
};
nums=[2,2,1];
console.log(singleNumber(nums));