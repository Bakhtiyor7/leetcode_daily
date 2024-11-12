/**
 * @param {number[]} nums
 * @return {number}
 */
function lengthOfLIS (nums) {
    if(nums.length === 0) return 0;
    const n = nums.length;
    console.log('n:', n);

    const dp = Array(n).fill(1)
    console.log("dp BEFORE for loop:", dp);

    for (let i= 1; i < n; i++) {
        for(let j = 0; j < i; j++) {
            if(nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], 1 + dp[j])
            }
        }
    }
    console.log("dp AFTER for loop:", dp);


    let ans = 0;
    for (let i= 0; i < n; i++) {
        console.log("dp[i]:", dp[i]);
        ans = Math.max(ans, dp[i]);
    }

    return ans;
}

console.log('answer:', lengthOfLIS([10, 22, 33, 9, 25, 30, 40, 60, 80]))