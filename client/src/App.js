import React, { useEffect, useState } from 'react';
import Customer from './components/Customer';
import './App.css';
import { Table, TableBody, TableHead, TableRow, TableCell, Paper, makeStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
//import axios from "axios";
/*
import { Table } from '@material-ui/core/Table';
import { TableHead } from '@material-ui/core/TableHead';
import { TableBody } from '@material-ui/core/TableBody';
import { TableRow } from '@material-ui/core/TableRow';
import { TableCell} from '@material-ui/core/TableCell';
*/

/* function App() {
  return (
    <div className="gray-background">
      <img src={logo} alt="logo" />
      <h2>Let's develop management system!</h2>
    </div>
  );
} */

/* class App extends Component {
  return () {
    return (
      <Customer/>
    );
  }
} */

const styles = makeStyles({
  root: {
    width: '100%',
    //marginTop: theme.spacing(3),
    overflowX: 'auto'
  },
  table: {
    minwidth: 1080
  }
});


/* function cpnDidMount(){
  componentDidMount() {}
    this.callApi()
      .then(res => this.setState({customers: res}))
      .catch(err => console.log(err));
  }
} */


function App() {
  const classes = styles();
  const [customers, setCustom] = useState([]);

  useEffect(() => {
    fetch("/api/customers")
      .then(res => res.json())
      .then(newData => setCustom(newData));

  }, [])

  // useEffect(
  //   async() => {
  //   setInterval(() => {
  //     setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 1));
  //   }, 20);
  //   const result = await axios.get("./api/customers");
  //   setCustomers(result.data);
  // }, []);

  // useEffect(
  //   async() => {
  //     // const result = await axios.get("/api/customers");
  //     // setCustom(result.data);

  //   // fetch('/api/customers')
  //   //   .then(res => {
  //   //     return res.json()
  //   //   })
  //   //   .then(data => {
  //   //     console.log('3333')
  //   //     setCustom(data)
  //   //   });
  //   },[]);

  // useEffect(() => {
  //   fetch('/api/customers')
  //     .then(res => console.log(res));
  //     // .then(data => {
  //     //   setCustom(res)
  //     // })

  //     //.then((response) => response.json())
  //     // .then((customers) => {
  //     //   setCustom(customers);
  //     // });

  //     //const responseJson = res.data;
  //     // return res.json()
  //     // setCustom(responseJson);
  //     // console.log(customers);
  //   //});
      
  //     // .then(res => {
  //     //   //console.log(res);
  //     //   return res.json();
  //     // })
  //     // .then(data => {
  //     //   console.log(data)
  //     // })
  //     // .then((res) => {
  //     //   const responseJson = res.data;
  //     //   setCustom(responseJson);
  //     //   console.log('res.data');
  //     // });
  //     // .then((response) => response.json())
  //     // .then((customers) => {
  //     //   setCustom(customers);
  //     // });
  // }, []);

  // callApi = async () => {
  //   const response = await fetch('/api/customers');
  //   const body = await response.json();
  //   return body;
  // }

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {customers.map(c => ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/> ))}
        </TableBody>
      </Table>
    </Paper>
  );
} 

export default withStyles(styles)(App);
