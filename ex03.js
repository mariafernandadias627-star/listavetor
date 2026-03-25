let nums = [4, 6, 8, 10, 2,]
let vmaior = nums[0];
for(let i = 1; i <nums.length; i++){
    if(nums[i]>maior){
        maior = nums[i]
    }
}
console.log("maior valor", maior);
