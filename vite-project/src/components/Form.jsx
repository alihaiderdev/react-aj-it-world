import React, { useRef, useState } from 'react'

const Form = () => {
    {/* controlled components */ }
    {/* uncontrolled components */ }
    {/* Virtual DOM */ }
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [data, setData] = useState({ name: "", email: "", password: "" });
    const { name, email, password } = data

    // const [count, setCount] = useState(0);

    // const passwordInputRef = useRef();

    const isFormValid = name !== "" && email !== "" && password !== "";

    // console.log("render", { password: passwordInputRef.current?.value, name, email, isFormValid });
    // console.log("render", { password, name, email, isFormValid });
    console.log("render", data);

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("event: ", event, { name, email, password });
        // console.log("event: ", event, { name: name, email: email, password: passwordInputRef.current?.value });
    };

    const onInputChangeHandler = (event) => {
        const { id, value } = event.target;
        console.log("event: ", event.target, { id, value });
        setData({ ...data, [id]: value })
    } 
    return (
        <>
            {/* <button onClick={() => setCount((prevValue) => prevValue + 1)}>Add</button>
            {count}
            <button onClick={() => setCount((prevValue) => prevValue - 1)}>Subtract</button> */}
            {/* <form className='form-container' onSubmit={onSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id='name' placeholder='Enter your name' value={name} onChange={(e) => {
                        console.log("e.target.value: ", e.target.value);
                        setName(e.target.value)
                    }} />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" id='email' placeholder='Enter your email' value={email} onChange={(e) => {
                        console.log("e.target.value: ", e.target.value);
                        setEmail(e.target.value)
                    }} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id='password' placeholder='Enter your password' ref={passwordInputRef} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id='password' placeholder='Enter your password' value={password} onChange={(e) => {
                        console.log("e.target.value: ", e.target.value);
                        setPassword(e.target.value)
                    }} />
                </div>
                <button disabled={!isFormValid}>Submit</button>
            </form> */}
            <form className='form-container' onSubmit={onSubmit}>
                <div>
                    <label htmlFor="name">Name: </label>
                    {/* <input type="text" id='name' placeholder='Enter your name' value={name} onChange={(e) => {
                        console.log("e.target.value: ", e.target.value);
                        // setData({ ...data, name: e.target.value })
                        onInputChangeHandler(e);
                    }} /> */}
                    <input type="text" id='name' placeholder='Enter your name' name='name' value={name} onChange={onInputChangeHandler} />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" id='email' placeholder='Enter your email' name='email' value={email} onChange={(e) => {
                        console.log("e.target.value: ", e.target.value);
                        // setData({ ...data, email: e.target.value });
                        onInputChangeHandler(e);

                    }} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="password" id='password' placeholder='Enter your password' name='password' value={password} onChange={(e) => {
                        console.log("e.target.value: ", e.target.value);
                        // setData({ ...data, password: e.target.value });
                        onInputChangeHandler(e);

                    }} />
                </div>
                <button disabled={!isFormValid}>Submit</button>
            </form>
        </>
    )
}

export default Form