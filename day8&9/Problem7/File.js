// Create two TypeScript objects, Person and Employee, with different properties.
// Write a function that takes an object with an Intersection Type of Person & Employee and prints the combined properties.
function DisplayUserData(user) {
    console.log(user.Name + " " + user.LastName);
    console.log(user);
}
var user = {
    Name: "Abhijeet",
    LastName: "Bhattacharya",
    Department: "HR",
    EmpId: 5
};
DisplayUserData(user);
