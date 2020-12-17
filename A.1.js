var A=[],B=[];

var n = prompt('Nhập sô phần tử mảng A:');
var m = prompt('Nhập sô phần tử mảng B:');
for(var i=0; i<n; i++){
    var value = prompt('Nhập phần tử thứ '+ i + ' của mảng');
    A.push(value);
}
for(var i=0; i<m; i++){
    var value = prompt('Nhập phần tử thứ '+ i + ' của mảng');
    B.push(value);
}
console.log(A);
console.log(B);

var C=[];
for(var i=0; i<n; i++){
    if(!B.includes(A[i]) && !C.includes(A[i])){
        C.push(A[i]);
    }
}
for(var i=0; i<m; i++){
    if(!A.includes(B[i]) && !C.includes(B[i])){
        C.push(B[i]);
    }
}
console.log(C);


