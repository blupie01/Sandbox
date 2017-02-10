var array = [
    { name:"string 1", value:"this", other: "that" },
    { name:"string 2", value:"this", other: "that" }
];

var obj = array.filter(function ( obj ) {
    return obj.name === 'string 1';
})[0];

console.log( obj );