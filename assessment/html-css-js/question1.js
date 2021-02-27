const positions = [
  {
    name: "pos0",
    orgId: "1427ff32-ad88-4a46-ab2b-0b61337c1a11"
  },
  {
    name: "pos1",
    orgId: "a6e3b058-3596-413a-9810-66f5098f7c30"
  },
  {
    name: "pos2",
    orgId: "b9b88fd0-d36e-48ba-8607-07377f5c2907"
  },
  {
    name: "pos3",
    orgId: "1427ff32-ad88-4a46-ab2b-0b61337c1a11"
  }
];

const organizations = [
  {
    id: "a6e3b058-3596-413a-9810-66f5098f7c30",
    name: "org0"
  },
  {
    id: "b9b88fd0-d36e-48ba-8607-07377f5c2907",
    name: "org1"
  },
  {
    id: "1427ff32-ad88-4a46-ab2b-0b61337c1a11",
    name: "org2"
  }
];

// ASSESSMENT:
// Using array methods, create a new array of objects named 'positionsWithOrgNames'
// We want to put position name and its organization name together, using the orgId relationship
// Bonus point if you think about the time complexity, a fast solution, these arrays can be huge (thousands of elements maybe!)
// SOLUTION:




// so that when we log the final result
console.log(positionsWithOrgNames)
/* Should print:

[
  {name: "pos0", orgName: "org2"},
  {name: "pos1", orgName: "org0"},
  {name: "pos2", orgName: "org1"},
  {name: "pos3", orgName: "org2"}
]

*/
