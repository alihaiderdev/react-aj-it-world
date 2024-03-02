// import { PureComponent } from "react";

import { PureComponent, useContext, useState } from "react";
import Greet from "./Greet";
import { GlobalContext } from "../App";
import PropTypes from 'prop-types';

class Greeting extends PureComponent {
    render() {
        return <h1>Hello, {this.props.name} your age is {this.props.age}</h1>;
    }
}

// Greeting.defaultProps = {
//     name: "Ali Haider",
//     age: 25,
// }

Greeting.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    setTodos: PropTypes.func.isRequired,
    html: PropTypes.element.isRequired,
}

export default Greeting

// export const PureComponent = () => {
//     const globalState = useContext(GlobalContext);
//     console.log({ globalState });
//     const [name, setName] = useState('');
//     const [address, setAddress] = useState('');

//     return (
//         <>
//             <label>
//                 Name{': '}
//                 <input value={name} onChange={e => setName(e.target.value)} className="border-red-400 border-2" />
//             </label>
//             <label>
//                 Address{': '}
//                 <input value={address} onChange={e => setAddress(e.target.value)} className="border-red-400 border-2" />
//             </label>
//             <Greet name={name} />
//         </>
//     );
// }
