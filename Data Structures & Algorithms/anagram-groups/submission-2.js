class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let map = new Map();
        let t;
        for (let i = 0; i < strs.length; i++) {
            t = strs[i].split("").sort().join("");
            if (map.has(t)) {
                map.get(t).push(strs[i]);
            } else {
                map.set(t, []);
                map.get(t).push(strs[i]);
            }
        }
       return Array.from(map.values())
    }
}
