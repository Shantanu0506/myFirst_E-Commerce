import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [FormData, setFormData] = useState({
        email: '',
        password: '',
        remember: false
    });

    const onChangeHandler = (event) => {
        setFormData({
            ...FormData,
            [event.target.name]: event.target.type === 'checkbox'
                ? event.target.checked
                : event.target.value
        });
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (FormData.email === "" || FormData.password === "") {
            alert("Please fill all fields!");
            return;
        }

        console.log("Login successful!", FormData);


        navigate("/home");
    };

    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <div className="row">
                    <div className="col-sm-4"></div>
                    <div className="col-sm-4 ">
                        <div className="mb-3 mt-3">
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input type="email" className="form-control" id="email"
                                placeholder="Enter email" name="email"
                                value={FormData.email} onChange={onChangeHandler} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pwd" className="form-label">Password:</label>
                            <input type="password" className="form-control" id="pwd"
                                placeholder="Enter password" name="password"
                                value={FormData.password} onChange={onChangeHandler} />
                        </div>
                        <div className="form-check mb-3">
                            <label className="form-check-label">
                                <input className="form-check-input" type="checkbox"
                                    name="remember" checked={FormData.remember}
                                    onChange={onChangeHandler} /> Remember me
                            </label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
            </form>
        </>
    );
}
export default Login;
