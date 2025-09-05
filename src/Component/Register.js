import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Register() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});

    const [FormData, setFormData] = useState(
        {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            country: '',
            remember: false
        }
    );
    const onChangeHandler = (event) => {
        setFormData(
            {
                ...FormData,
                //  [event.target.name]: event.target.value
                [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value  //for checkbox value true or false

            }
        )
    };

    const onSubmitHandler = (event) => {
        setErrors({});
        setFormData(
            {
                firstname: '',
                lastname: '',
                email: '',
                password: '',
                country: '',
                remember:''
            }
        );
        event.preventDefault();

        if (FormData.firstname === '' || FormData.firstname === null) {
            //alert("First Name is must!!!");
            setErrors(
                {
                    fname: "First Name is required!"
                }
            );
            navigate('/Register');
        }
        else if (FormData.password.length < 6 || FormData.password.length > 12) {
            //alert("Password must be more than 6 and less than 12 ");
            setErrors(
                {
                    pass: 'Password must be more than 6 and less than 12'
                }
            )
        }
        else {
            console.log(FormData);
        }
    };

    return (

        <>
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4"><form onSubmit={onSubmitHandler}>
                    <div className="mb-3 mt-3">
                        <label htmlFor="firstname" className="form-label">First Name:</label>
                        <input type="firstname" className="form-control" id="firstname" placeholder="Enter First Name" name="firstname" value={FormData.firstname} onChange={onChangeHandler} />
                        {errors && <small className="text-danger">{errors.fname}</small>}
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="lastname" className="form-label">Last Name:</label>
                        <input type="lastname" className="form-control" id="lastname" placeholder="Enter Last Name" name="lastname" value={FormData.lastname} onChange={onChangeHandler} />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" value={FormData.email} onChange={onChangeHandler} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pwd" className="form-label">Password:</label>
                        <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="password" value={FormData.password} onChange={onChangeHandler} />
                        {errors && <p style={{ color: "green" }}>{errors.pass}</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="country" className="form-label">
                            Select Country
                        </label>
                        <select className="form-select" name="country" value={FormData.country} onChange={onChangeHandler}>
                            <option value="India">India</option>
                            <option value="Usa">Usa</option>
                            <option value="Japan">Japan</option>
                            <option value="Russia">Russia</option>
                            <option value="Austria">Austria</option>
                        </select>
                    </div>
                    <div className="form-check mb-3">
                        <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" name="remember" checked={FormData.remember} onChange={onChangeHandler} /> Remember me
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>
                <div className="col-sm-4"></div>
                <p>{JSON.stringify(FormData)}</p>

            </div>

        </>
    );
}
export default Register;