import React, { useState } from "react";

function Login() {
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    // const handleInputEmail = (e) => {
    //     setEmail(e.target.value);
    // }

    // const handeInputPassword = (e) => {
    //     setPassword(e.target.value)
    // }
    // const handleLogin = () => {
    //     console.log({
    //         email: email,
    //         password: password
    //     })
    // }

    const [state, setState] = useState({
        email: "",
        password: "",
        mobile: ""
    })

    const handleInput = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }
    const handleLogin = () => {
        console.log(state)
    }

    const updateInfo = () => {
        setState({
            ...state,
            email: "thanh@gamil.com",
            password: "123456",
            mobile: "113114"
        })
        // setEmail("thanh@gamil.com");
        // setPassword("123456");
    }
    console.log(state)
    const { email, password, mobile } = state;
    return (
        <main className="flex-shrink-0">
            <div className="container">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input className="form-control" value={email} type="email" name="email" id="email" onInput={handleInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="pw">Password</label>
                    <input className="form-control" value={password} type="password" name="password" id="pw" onInput={handleInput} />
                </div>
                <div className="form-group">
                    <label htmlFor="mobile">Mobile</label>
                    <input className="form-control" value={mobile} type="tel" name="mobile" id="mobile" onInput={handleInput} />
                </div>
                <div className="form-group">
                    <button onClick={handleLogin} className="btn btn-danger me-3">Login</button>
                    <button onClick={updateInfo} className="btn btn-warning">Update</button>
                </div>
            </div>
        </main>
    )
}
export default Login;