/* Following is the input.csv
Mail App, Authentication API, v6
Video Call App, Authentication API, v7
Mail App, Data Storage API, v10
Chat App, Data Storage API, v11
Mail App, Search API, v6
Chat App, Authentication API, v8
Chat App, Presence API, v2
Video Call App, Data Storage API, v11
Video Call App, Video Compression API, v3
*/
/* Output should be the App name using the oldest API
Ex. In above case Mail App uses oldest versions of Authentication & Data storage API
*/
var log = console.log;
let result = new Set();
let input = {
    "Authentication API": {
        "Video Call App": 7,
        "Chat App" : 8,
        "Mail App": 6
    },
    "Data Storage API": {
        "Video Call App": 11,
        "Chat App": 11,
        "Mail App": 10
    },
    "Search API": {
        "Mail App" : 10
    },
    "Presence API": {
        "Chat App": 2,
        "Video Call App" : 1
    },
    "Video compression API": {
        "Video Call App" : 3
    }
}
// for (let key in input) {
//     if (Object.keys(input[key]).length > 1) {
//         log(key);
//         let obj = input[key];
//         result.add(Object.keys(obj).reduce((a, b) => obj[a] < obj[b] ? a : b));
//     }
// }
let obj = {
    "abc": 1,
    afn: () => { log(this.abc) },
    nfn: function (params) {
        log(this);
    }
}

obj.afn();
obj.nfn();