import React,{useEffect,useState} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, ButtonGroup } from '@mui/material';
import {useDispatch, useSelector} from "react-redux";
import {loadUsers,deleteUsers} from "../redux/action";
import { useHistory } from 'react-router-dom';
// import { ButtonGroup } from '@material-ui/core';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


const Home = () => {
    const [del,setDel] = useState();
  // const classes=useStyles();
  const dispatch=useDispatch();
  const history=useHistory();
  const {users}= useSelector(state => state.data)

  useEffect(()=>{
    dispatch(loadUsers());
  },[dispatch,del])

  const handleDelete= (id,e) =>{

    if(window.confirm("Are you sure you want to delete the user?")){
        dispatch(deleteUsers(id));
        setDel(id);
    }
}

  return (
    <div>
      <Button onClick={()=> history.push("./createUser")}>
        Create User
      </Button>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Designation</StyledTableCell>
            <StyledTableCell align="right">E-mail</StyledTableCell>
             <StyledTableCell align="right"></StyledTableCell>
           {/* <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.designation}</StyledTableCell>
              <StyledTableCell align="right">{row.email}</StyledTableCell>
              {/* <StyledTableCell align="right">{row.carbs}</StyledTableCell>*/}
              <StyledTableCell align="center">
                <ButtonGroup varient="contained" arial-label= "contained primary button group">
                        <Button color="secondary" onClick={() => handleDelete(row.id)}>Delete</Button>
                        <Button color="primary" onClick={()=> history.push(`./updateUser/${row.id}`)}>Update</Button>
                </ButtonGroup>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Home