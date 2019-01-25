function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var resArr=[];
    for(var i=0; i<arr.length; i++){
        var res = Math.round(2*Math.PI*Math.sqrt(Math.pow(earthRadius+arr[i].avgAlt,3)/GM));
        resArr.push({name: arr[i].name, orbitalPeriod: res})
    }
    return resArr;
}