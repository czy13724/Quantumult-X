var str =
  "以英文,分隔（可根据情况改）";

var arr = str.split(", ");
console.log(arr);
var newArr = [];
for (var i = 0; i < arr.length; i++) {
  if (newArr.indexOf(arr[i]) === -1) {
    newArr.push(arr[i]);
  }
}
var out = JSON.stringify(newArr)
var out1 = out.replace(/\"/g,"")
console.log(out1)