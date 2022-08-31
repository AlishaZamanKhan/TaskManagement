import '../UI/LoginPage.css'
import Header from './Header';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useState } from 'react';
import { addUser } from '../redux/user/actions';


const LoginPage = () => {
    const [userName, setUserName] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(userName.length() !== 0){
            console.log(userName);
            dispatch(addUser(userName))
            navigate("/home");
        }
  

        
    }


    const handleChange = (e) => {   
        setUserName(e.target.value);  
    }
    return (  
        <>
            <h2 className="login-header">Task Management</h2>
            <form action="" onSubmit={() => handleSubmit()}>
                <div className="login-input">
                    <label>
                        <input type="name"
							onChange={handleChange}
							className="input"
							id="username"
							placeholder="Enter name"
							pattern="[A-Za-z0-9]{1,20}"
							required />

                    </label>
                </div>
                <button className="submit-button" type="submit">
                    Submit
                </button>
            </form>
        </>
    );
}
 
export default LoginPage;