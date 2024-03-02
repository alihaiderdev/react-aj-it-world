import React, { Component, PureComponent, useContext } from 'react'
import AnotherNestedChild from './AnotherNestedChild';
import { GlobalContext } from '../App';

const NestedChild = ({ todos, user }) => {
    const globalState = useContext(GlobalContext);

    console.log("NestedChild component render", { globalState });
    return (
        <div>
            <AnotherNestedChild todos={todos} user={user} />
            <input type="text" value={globalState.user} onChange={(e) => globalState.setUser(e.target.value)} />
            {globalState.user}    NestedChild</div>
    )
}

export default NestedChild


// export class ChildComponent extends Component {
//     render() {
//         return <h1>Hello, World!</h1>;
//     }
// }