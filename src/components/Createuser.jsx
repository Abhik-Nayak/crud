import React, {useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import EmailIcon from '@mui/icons-material/Email';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/action';
import { useHistory } from 'react-router-dom';

export default function Createuser() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [state, setState] = useState({name:"",email:"",designation:"",});
    const { name, email, designation} = state;
    const [error, setError] = useState("");

    const handleInputChange = (e) => {
        // let { name, value } = e.target;
        setState({...state, [e.target.name]: e.target.value });

    };
    console.log(state);
    const handleSubmit=(e)=>{
        if(!name || !email || !designation)
        {
            setError("All fields must be Filled")
        }
        else{
        dispatch(addUser(state));
        setError("");
        }
    };
    return (
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
                {error? <h2>{error}</h2>: ""}
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <VerifiedUserIcon  sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx"  type="text" label="Verified User Name" variant="standard"  value={name} name="name" onChange={handleInputChange}/>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx" type="text" label="Designaion" variant="standard"  value={designation} name="designation" onChange={handleInputChange}/>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx" type="email" label="E-mail" variant="standard" value={email} name="email" onChange={handleInputChange}/>
            </Box>
            <Button type="submit">save</Button>
            <Button onClick={()=> history.push("/")}>back</Button>
            </form>
        </Box>
    );
}