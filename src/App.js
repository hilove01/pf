// import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

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
  return (
    <div>
      {customer.map(c => { return ( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/> ); }) }
    </div>
  );
} 

export default App;
