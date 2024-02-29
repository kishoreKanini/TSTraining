// Record<Keys, Type> - constructs an object type whose property keys are Keys and values are Type

type Weekday = 'Monday' | 'Tuesday';

var numericalWeek:Record<Weekday, string> = {
    Monday:"one",
    Tuesday:"two"
}

console.log(numericalWeek.Monday);