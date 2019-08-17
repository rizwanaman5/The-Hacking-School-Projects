// // ******************** // matching the currentEnrollment with studentRecords

// function printRecords(recordIds) { 
//     recordIds = currentEnrollment.map(getStudent) 

//     function getStudent(valueFromCR) {
//         return studentRecords.find(match_data)

//         function match_data(valueFromSR) {
//             return valueFromCR == valueFromSR.id
//         }
//     }

// // ******************* // sorting recordIds alphabetically

// function compare(a, b) {
//     if (a.name < b.name) {
//         return -1;
//     }
//     if (a.name > b.name) {
//         return 1;
//     }
//     return 0;
// }

// recordIds.sort(compare);

// // ***************** *// using template literals to print the result in the given format

// recordIds.forEach(element => {
//     console.log(`${element.name} (${element.id}): ${element.paid == true ? 'Paid' : 'Not Paid'}`)
// });

// }

// **************************************************** //

function paidStudentsToEnroll(recordIds1) {
    recordIds1 = currentEnrollment.map(getStudent)

    function getStudent(valueFromCR) {
        return studentRecords.filter(match_data)

        function match_data(valueFromSR) {
            return ((valueFromCR != valueFromSR.id) && (studentRecords.paid == false))
        }
    }
    console.log(recordIds1)
} 

// function remindUnpaid(recordIds) {

// }


// ********************************

var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [
    { id: 313, name: "Frank", paid: true, },
    { id: 410, name: "Suzy", paid: true, },
    { id: 709, name: "Brian", paid: false, },
    { id: 105, name: "Henry", paid: false, },
    { id: 502, name: "Mary", paid: true, },
    { id: 664, name: "Bob", paid: false, },
    { id: 250, name: "Peter", paid: true, },
    { id: 375, name: "Sarah", paid: true, },
    { id: 867, name: "Greg", paid: false, },
];

// var recordIds = currentEnrollment.map(getStudent)

// function getStudent(valueFromCR) {
//     let match = studentRecords.find(match_data)

//     function match_data(valueFromSR) {
//         return valueFromCR == valueFromSR.id
//     } 
//     return match;
// } 
// console.log(recordIds)

// printRecords(currentEnrollment);
// console.log("----");
// currentEnrollment = paidStudentsToEnroll();
// printRecords(currentEnrollment);
// console.log("----");
// remindUnpaid(currentEnrollment);

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/