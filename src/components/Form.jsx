import { useState } from "react";
import validator from "./validation";

const Form = (props) => {
    const {login} = props;

const [userData, setUserData] = useState({
    email: "",
    password: "",
})

const [errors, setErrors] = useState({});

const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;

 setErrors(validator({...userData, [property]: value}))
 setUserData({...userData, [property]: value})
}

const handleSubmit = (e) => {
    e.preventDefault()
    login(userData);
}

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Email:</label>
                <input type="text" name="email" value={userData.email} onChange={handleChange} />
                {errors.e1 ? (<p>{errors.e1}</p>) : errors.e2? (<p>{errors.e2}</p>) : (<p>{errors.e3}</p>)}
                </div>
            <div>
                <label htmlFor="">Password:</label>
                <input type="password" name="password" value={userData.password} onChange={handleChange} />
                {errors.p1 ? (<p>{errors.p1}</p>) : (<p>{errors.p2}</p>)}
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;