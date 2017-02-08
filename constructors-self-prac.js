// function Person(name){
//     this.name = name
// }
// Person.prototype.sayHi = function(){
//     return 'Hi, I am ' + this.name
// }

// var jack = new Person('Jack')
// var jill = new Person('Jill')
// jack.sayHi()
// // 'Hi, I am Jack'
// jill.sayHi()
// // 'Hi, I am Jill'

// function sing(){
//     return this.name + ' sings!'
// }
// sing.apply(jack)
// // 'Jack sings!'

// function Flower(name){
//     this.name = name
// }
// var tulip = new Flower('Tulip')
// jack.sayHi.apply(tulip)
// // 'Hi, I am Tulip'

// function singTo(other){
//     return this.name + ' sings for ' + other.name
// }
// singTo.apply(jack, [jill])
// // 'Jack sings for Jill'

// sing.call(jack, jill)
// // 'Jack sings for Jill'

// var myarray = [2,2,3,4,5,10,12,15];

// console.log(Math.max.apply(Math, myarray));
//---------------------------------------------------------
function Person(name){
    this.name = name
}
Person.prototype.sayHi = function(){
    return 'Hi, I am ' + this.name
}

Function.prototype.new = function(){
    var args = arguments
    var constructor = this
    function Fake(){
         constructor.apply(this, args)
    }
    Fake.prototype = constructor.prototype
    return new Fake
}

var bob = Person.new('Bob')

var children = [new Person('Ben'), new Person('Dan')]
var args = ['Bob'].concat(children)
var bob = Person.new.apply(Person, args)

Function.prototype.applyNew = function(){
     return this.new.apply(this, arguments)
}

var bob = Person.applyNew(args)