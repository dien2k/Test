var a = [
    {
        name: "Arsenal",
        points: 99,
        GD: 45
    },
    {
        name: "Chelsea",
        points: 99,
        GD: 39
    },
    {
        name: "Manchester United",
        points: 60,
        GD: 29
    },
    {
        name: "Liverpool",
        points: 88,
        GD: 39
    },
]
var tg;
for (var i = 0; i < a.length - 1; i++) {
    for (var j = i + 1; j < a.length; j++) {
        if (a[i].points < a[j].points) {
            tg = a[i];
            a[i] = a[j];
            a[j] = tg;
        }
        else if(a[i].points == a[j].points){
            if(a[i].GD > a[j].GD){
                tg = a[i];
                a[i] = a[j];
                a[j] = tg;
            }
        }
    }
}
console.log(a)
for(var i = 0; i < a.length; i++){
    a[i]={...a[i],position : i+1}
}
console.log(a)


// cách 2
// var point =a.map(function(point){
//     return point["points"];
// });
// console.log(point)
// var GD=a.map(function(GD){
//     return GD["GD"];
// });
// console.log(GD);
// console.log(P=point.sort((a,b)=> (b-a)));
// var dem = 1;
// for( var i = 0; i < a.length; i++){
//     for(var j=0; j < a.length; j++){
//         // console.log(a[j])

//         if(a[j]["points"]== P[i]){
//             a[j] = {...a[j], position : dem};
//             dem++;
//         }
//     }
// }
// console.log(a);


