// import React from 'react';
// import { Fragment } from 'react';

// const Greeting = (props) => {
//     console.log("props greeting", props);
//     return (
//         <div>
//             <h1>Hello {props.name}, Your age is {props.age} years old.</h1>
//             <p>You are living in { }</p>
//         </div>
//     )
// }

// const Greeting = (props) => {
//     console.log("props greeting", props);
//     return (
//         <React.Fragment>
//             <h1>Hello {props.name}, Your age is {props.age} years old.</h1>
//             <p>You are living in { }</p>
//         </React.Fragment>
//     )
// }

// const Greeting = (props) => {
//     console.log("props greeting", props);
//     return (
//         <Fragment>
//             <h1>Hello {props.name}, Your age is {props.age} years old.</h1>
//             <p>You are living in { }</p>
//         </Fragment>
//     )
// }

// const Greeting = ({ name, age, isAdult, location }) => {
const Greeting = (props) => {
    const { name, age, isAdult, location } = props;
    const { city, country, street, zipCode } = location || {};

    console.log("props greeting", props);
   
   
    return (

        
        <>
            {/* <h1>Hello {name}, Your age is {age} years old. and your are {isAdult}</h1> */}
            {/* <h1>Hello {name}, Your age is {age} years old. and your are {isAdult === true || name ? "an Adult" : "a Child"}</h1> */}
            <h1>Hello {name}, Your age is {age} years old. and your are {isAdult === true ? "an Adult" : "a Child"}</h1>
            {/* {location ? <p>You are living in {JSON.stringify(location)}</p> : <p>No location key found</p>} */}
            {/* {location && name1 && <p>You are living in {JSON.stringify(location)}</p>} */}
            {location &&
                <ul>
                    <li>City: {location.city}</li>
                    <li>Country: {location.country}</li>
                    <li>Street: {location.street}</li>
                    <li>Zip Code: {location.zipCode}</li>
                    {/* <li>City: {city}</li>
                    <li>Country: {country}</li>
                    <li>Street: {street}</li>
                    <li>Zip Code: {zipCode}</li> */}
                </ul>
            }
            {/* conditional rendering  */}
        </>
    )
}



export default Greeting;