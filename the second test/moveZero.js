var moveZeroes = function(nums) {
    let count=0;
    let b=nums.length;
    for (let i=0;i<=nums.length-1;i++){
        if (nums[i]==0){
            nums.splice(i,1);
            count+=1;
        }
    }
    for(let j=b-count;j<=b-1;j++){
        nums[j]=0;
    }
    return nums;
};
nums=[0];
console.log(moveZeroes(nums));
nums=[3,5,7,1,0,4,0,3];
console.log(moveZeroes(nums));