import './App.css'
import { useState } from 'react';
import data from './assignmentData.json';

import Header from './components/Headers/Header'
import Banner from './components/Banner/Banner';
import UserList from './components/UserList/UserList'

function App() {
  const [userData, setUserData] = useState(data[0].data);
  return (
    <div>
      <Header />


      <Banner />

    <h2 className='user-played'>These are the users that have played the game </h2>

      <UserList userData={userData} />
    </div>
  )
}

export default App
