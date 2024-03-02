import { PureComponent, Component, memo } from 'react';

// export class Greet extends PureComponent {
//     render() {
//         console.log("Greeting was rendered at", new Date().toLocaleTimeString());
//         return <h3>Hello{this.props.name && ', '}{this.props.name}!</h3>;
//     }
// }

const Greet = (props) => {
    console.log("Greeting was rendered at", props, new Date().toLocaleTimeString());
    return <h3>Hello{props.name && ', '}{props.name}!</h3>;
}


export default memo(Greet)

// const Greet = memo(function Greet({ name }) {
//     console.log("Greeting was rendered at", new Date().toLocaleTimeString());
//     return <h3>Hello{name && ', '}{name}!</h3>;
// });
// export default Greet