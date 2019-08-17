// TODO: write `findAll(..)`
function matchForZero(match, v) {
	if (((match === 0) || match === '0') && ((v === "") || (v === false))) {
		return false;
	}
	return true;
}

function matchForEmptyString(match, v) {
	if ((match === "") && ((v === false) || (v === 0) || (v === '0'))) {
		return false;
	}
	return true;
}

function findAll(match, values) {
	var ret = []
	for (let v of values) {
		if (identical(match, v) && matchForZero(match, v) && matchForEmptyString(match, v)) {
			if (typeof match !== 'boolean') {
				ret.push(v)
			} else if (typeof v === 'boolean') {
				ret.push(v);
			}
		}
	}
	// console.log(ret)
	return ret;
}

function identical(x, y) {
	var xNegZero = Neg(x)
	var yNegZero = Neg(y)

	if (xNegZero || yNegZero) {
		return xNegZero && yNegZero
	}
	else if (Number.isNaN(x) && Number.isNaN(y)) { // checking is both are NaN
		return true
	}
	else if (x == y) { // checking if both values are same
		return true
	}
	else { return false }  // false if the two values are not same

	function Neg(v) {
		if (v == 0 && 1 / v == -Infinity) { // function to check -0
			return true
		}
		else { return false }
	}

}




// tests:
var myObj = { a: 2 };

var values = [
	null, undefined, -0, 0, 13, 42, NaN, -Infinity, Infinity,
	"", "0", "42", "42hello", "true", "NaN", true, false, myObj
];

// console.log(setsMatch(findAll(null,values),[null,undefined]) === true);
// console.log(setsMatch(findAll(undefined,values),[null,undefined]) === true);
// console.log(setsMatch(findAll(0,values),[0,"0"]) === true);
// console.log(setsMatch(findAll(-0,values),[-0]) === true);
// console.log(setsMatch(findAll(13,values),[13]) === true);
// console.log(setsMatch(findAll(42,values),[42,"42"]) === true);
// console.log(setsMatch(findAll(NaN,values),[NaN]) === true);
// console.log(setsMatch(findAll(-Infinity,values),[-Infinity]) === true);
// console.log(setsMatch(findAll(Infinity,values),[Infinity]) === true);
// console.log(setsMatch(findAll("",values),[""]) === true);
// console.log(setsMatch(findAll("0",values),[0,"0"]) === true);
// console.log(setsMatch(findAll("42",values),[42,"42"]) === true);
// console.log(setsMatch(findAll("42hello",values),["42hello"]) === true);
// console.log(setsMatch(findAll("true",values),["true"]) === true);
// console.log(setsMatch(findAll(true,values),[true]) === true);
console.log(setsMatch(findAll(false,values),[false]) === true);
console.log('*****', setsMatch(findAll(myObj,values),[myObj]) === true);

// console.log(setsMatch(findAll(null,values),[null,0]) === false);
// console.log(setsMatch(findAll(undefined,values),[NaN,0]) === false);
// console.log(setsMatch(findAll(0,values),[0,-0]) === false);
// console.log(setsMatch(findAll(42,values),[42,"42hello"]) === false);
// console.log(setsMatch(findAll(25,values),[25]) === false);
// console.log(setsMatch(findAll(Infinity,values),[Infinity,-Infinity]) === false);
// console.log(setsMatch(findAll("",values),["",0]) === false);
// console.log(setsMatch(findAll("false",values),[false]) === false);
// console.log(setsMatch(findAll(true,values),[true,"true"]) === false);
// console.log(setsMatch(findAll(true,values),[true,1]) === false);
// console.log(setsMatch(findAll(false,values),[false,0]) === false);

// ***************************

function setsMatch(arr1, arr2) {
	if (Array.isArray(arr1) && Array.isArray(arr2) && arr1.length == arr2.length) {
		for (let v of arr1) {
			if (!arr2.includes(v)) return false;
		}
		return true;
	}
	return false;
}