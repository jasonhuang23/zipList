/*
* Implements the ziplist function for E27
* Created by jasonhuang on 9/18/17
 */

const testList1 = [1, 2, 3, 5];
const testList2 = ['t', 'p', 'q', 'r'];

function zipList(list1, list2) {
  const outcome = [];
  for(let i = 0; i < list1.length; i++) { // only one for loop because list1 and list2 will have the same length
    outcome.push(list1[i], list2[i]);
  }
  return outcome;
}

console.log(zipList(testList1, testList2));

function zipListTheSimpleWay(list1, list2) {
  let outcome = _.zip(list1, list2);
  return _.flatten(outcome); //puts the arrays into a single level
}

console.log(zipListTheSimpleWay(testList1, testList2));