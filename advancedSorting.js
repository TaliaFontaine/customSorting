var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); //ignore upper and lowercase
    var nameB = b.name.toUpperCase(); //ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      } else if (nameA > nameB) {
        return 1;
      } else if (nameA === nameB) {
        return b.age - a.age;
      }
});

console.log(students);
// Write a sorting function (a.k.a. custom comparator) that sorts the above array first by the name ascending alphabetically
//in cases where the names are equal sort by descending age.