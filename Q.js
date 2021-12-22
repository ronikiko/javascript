
// new object 
/*
    function compare(oldObjects, newObjects) {
      let arr = []
            for (const [key, values] of Object.entries(oldObjects)) {
              if(newObjects[key].id !== oldObjects[key].id){
                  arr.push(newObjects[key])
              }
        }
        return  arr
    }
*/    


// removed object 
/*
function compare(oldObjects, newObjects) {
  let arr = []
        for (const [key, values] of Object.entries(oldObjects)) {
          if(newObjects[key].id !== oldObjects[key].id){
              arr.push(oldObjects[key])
          }
    }
    return  arr
}

*/

// updated object 
function compare(oldObjects, newObjects) {
  let arr = []
        for (const [key, values] of Object.entries(oldObjects)) {
           if(newObjects[key].id !== oldObjects[key].id){
                 continue
              }
          if(
              (newObjects[key].name !== oldObjects[key].name) ||
              (newObjects[key].job !== oldObjects[key].job)   ||
              (newObjects[key].age !== oldObjects[key].age)   ||
              (newObjects[key].salary !== oldObjects[key].salary)
            ){
              arr.push(newObjects[key])
          }
       
    }
    return  arr
}


let oldObjects = [
	{ id: '1', name: 'Tom Bird', job: 'Lifeguard', age: 30, salary: 82 },
	{ id: '2', name: 'Kobi Perry', job: 'Actor', age: 18, salary: 68 },
	{ id: '3', name: 'Moni Levi', job: 'VP R&D', age: 44, salary: 700 },
	{ id: '5', name: 'Tal David', job: 'Devops', age: 20, salary: 100 }
];

let newObjects = [
	{ id: '1', name: 'Tom Bird', job: 'Waiter', age: 31, salary: 120 },
	{ id: '2', name: 'Kobi Perry', job: 'Actor', age: 18, salary: 68 },
	{ id: '3', name: 'Moni Levi', job: 'Architect', age: 44, salary: 210 },
	{ id: '4', name: 'Jacob Brener', job: 'CEO', age: 44, salary: 630 }
];

console.log(compare(oldObjects, newObjects));

/* Expected Result
  {
  new: [ 
    { id: '4', name: 'Jacob Brener', job: 'CEO', age: 44, salary: 630 } 
  ],
  removed: [ 
    { id: '5', name: 'Tal David', job: 'Devops', age: 20, salary: 100 } 
  ],
  updated: [
    { id: '3', name: 'Moni Levi', job: 'Architect', age: 44, salary: 210 },
    { id: '1', name: 'Tom Bird', job: 'Waiter', age: 31, salary: 120 }
  ]
}
*/

