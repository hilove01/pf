// import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';
import { Table, TableBody, TableHead, TableRow, TableCell, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';
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

const styles = {
  root: {
    width: '100%',
    //marginTop: theme.spacing(3),
    overflowX: 'auto'
  },
  table: {
    minwidth: 1080
  }
}

const customer = [
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/1',
  'name': '나동빈',
  'birthday': '961222',
  'gender': '남자',
  'job': '대학생'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/2',
  'name': '홍길동',
  'birthday': '960305',
  'gender': '남자',
  'job': '개발자'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/3',
  'name': '김영희',
  'birthday': '980405',
  'gender': '여자',
  'job': '디자이너'
}
]

function App() {
  //const { classes } = this.props;
  return (
    <Paper className={styles.root}>
      <Table className={styles.table}>
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
          {customer.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/> ); }) }
        </TableBody>
      </Table>
    </Paper>
  );
} 

export default withStyles(styles)(App);
