import React from 'react';

class Classes6 extends React.Component {

    constructor(name= 'Anonymous', age = 0) {
        super();
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi. I am ${this.name}. `;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old. `;
    }
    render() {
        return (
            <h1>Hello</h1>
        );
    }
}

class traveller extends Classes6 {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    hasHomeLocation(){
        return !!this.homeLocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();
        if(this.hasHomeLocation()){
            greeting += `I am visiting from ${this.homeLocation}`;
        }
        return greeting;
    }

}

console.log(new traveller('Ashwani', 20,'Kalyan').getGreeting());
console.log(new traveller().getGreeting());
export default Classes6;