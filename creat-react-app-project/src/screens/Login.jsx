import React from "react";
import { Navigate } from "react-router-dom";

export class Login extends React.Component {
    state = { user: null};

    handleSubmit(event) {
        event.preventDefault();

        console.log(event.target, event.target[0], event.target[0].value);
        const user = { username: event.target[0].value, password: event.target[1].value }
        console.log(user);
        this.setState({ user })

        // try {
        //   let user = await login(event.target);
        //   this.setState({ user });
        // } catch (error) {
        //   this.setState({ error });
        // }
    }
    render() {
        let { user } = this.state;

        console.log(user, "user");
        return (
            <div>
                {user && (
                    <Navigate to="/todos" replace={true} />
                )}
                <form
                    onSubmit={(event) => this.handleSubmit(event)}
                    className="flex gap-2"
                >
                    <input type="text" name="username" placeholder="Enter your username" className="border border-black py-1" />
                    <input type="password" name="password" placeholder="Enter your password" className="border border-black py-1" />
                    <button className="bg-black text-white py-1 px-4 rounded">Submit</button>
                </form>
            </div>
        );
    }
}