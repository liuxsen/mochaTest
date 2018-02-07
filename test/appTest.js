let assert = require('chai').assert
// const sayHello = require('../app').sayHello
// const addNumbers = require('../app').addNumbers

let app = require('../app')

// results

let sayHelloRestult = app.sayHello()
let addNumbersResult = app.addNumbers(5,5)

describe('App', function(){

	describe('sayHello()', function(){
		it('it should return hello', function(){
			// let result = app.sayHello()
			assert.equal(sayHelloRestult, 'hello')
		})

		it('sayHello should return type string', function(){
			// let result = app.sayHello()
			assert.typeOf(sayHelloRestult, 'string')
		})		
	})

	describe('addNumbers()', function(){
		it('addNumbers should be above 5', function(){
			// let result = app.addNumbers(5,5)
			assert.isAbove(addNumbersResult, 5)
		})

		it('addNumbers should return type number', function(){
			// let result = app.addNumbers(5,5)
			assert.typeOf(addNumbersResult, 'number')
		})		
	})
	
})

