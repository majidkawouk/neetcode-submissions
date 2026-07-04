class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let b = [];
        for (let i = 0; i < strs.length; i++) {
            b.push(strs[i].length + "#" + strs[i]);
        }
        let n = b.join("");
        return n;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */ ;
    decode(str) {
        let final = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") {
                j++;
            }
            let len = parseInt(str.substring(i, j));

            i = j + 1;

            let wo = str.substring(i, i + len);
            final.push(wo);

            i = i + len;
        }

        return final;
    }
}
