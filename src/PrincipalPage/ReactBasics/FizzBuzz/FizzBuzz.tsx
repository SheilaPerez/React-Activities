import React from "react";

const FizzBuzz = () => {
    const fizzbuzz = () => {
        for (let i = 0; i <= 100; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log('fizzbuzz');
            } else if (i % 3 === 0) {
                console.log('fizz');
            } else if (i % 5 === 0) {
                console.log('buzz');
            } else {
                console.log(i);
            }
        }
    }
    fizzbuzz();
    return (
        <div>
            
        </div>
    )
}

export default FizzBuzz;