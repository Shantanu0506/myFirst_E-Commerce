import { useForm } from "react-hook-form";
import { data } from "react-router-dom";

function About() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    //to stop the refresh behaviour we use handleSubmit
    const myHandleSubmit = (data) => {
        console.log(data);
        
    }
    return (
        <>
            <p>This is my About page!</p>
            <p>This is my registration page using react library!</p>
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4"><form onSubmit={handleSubmit(myHandleSubmit)}>
                    <div className="mb-3 mt-3">
                        <label htmlFor="firstname" className="form-label">First Name:</label>
                        <input type="firstname" className="form-control" id="firstname" placeholder="Enter First Name" {...register('firstname', { required: true })} />
                        {errors.firstname && <p style={{ color: "red" }}>This field is required!</p>}

                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="lastname" className="form-label">Last Name:</label>
                        <input type="lastname" className="form-control" id="lastname" placeholder="Enter Last Name" {...register('lastname', { required: true })} />
                        {errors.lastname && <p style={{ color: "green" }}>This field is optional!</p>}
                    </div>
    
                    <div className="mb-3 mt-3">
                        <label htmlFor="age" className="form-label">Age:</label>
                        <input type="age" className="form-control" id="age" placeholder="Enter age" {...register('age', { required: true, min: { value: 18, message: 'mini age should be 18' }, max: { value: 75, message: 'max age should be 75' } })} />
                        <p style={{ color: "yellowgreen" }}>{errors.age?.message}</p>
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="mobile" className="form-label">Mobile:</label>
                        <input type="tel" className="form-control" id="mobile" placeholder="Enter Mobile" {...register('mobile', { required: true })} />
                    </div>
                    <div className="mb-3 mt-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter email" {...register('email', { required: true })} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="pwd" className="form-label">Password:</label>
                        <input type="password" className="form-control" id="pwd" placeholder="Enter password" {...register('password', { required: true, maxLength: { value: 12, message: 'max length should be 12' }, minLength: { value: 3, message: 'mini length should be 4' } })} />
                        <p style={{ color: "orange" }}>{errors.password?.message}</p>


                    </div>
                    <div className="mb-3">
                        <label htmlFor="country" className="form-label" >
                            Select Country
                        </label>
                        <select className="form-select" {...register('country')}>
                            <option value="India">India</option>
                            <option value="Usa">Usa</option>
                            <option value="Japan">Japan</option>
                            <option value="Russia">Russia</option>
                            <option value="Austria">Austria</option>
                        </select>
                    </div>
                    <div className="form-check mb-3">
                        <label className="form-check-label">
                            <input className="form-check-input" type="checkbox" {...register('remember')} /> Remember me
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                </div>
                <div className="col-sm-4"></div>

            </div>

        </>
    );
}
export default About;