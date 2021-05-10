const useEffect = (methodFn) => {
    methodFn();
}

const test = () => {
    // useEffect(() => console.log("test"));
}

test();
let obj = {prop : 1};
var obj2 = { prop: 0};
var array = obj.props || {};

let array2 = null;

let test2 = array2?.map(test => 1);

console.log(test2);