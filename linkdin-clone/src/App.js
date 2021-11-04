import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
function App() {
  var title="Tahmid";
  var avatar="https://scontent.fdac11-1.fna.fbcdn.net/v/t1.6435-9/131243672_1314493388925746_197719383945329023_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=DdelShrhfXMAX-vnIbQ&tn=Psso7tf-T0sqS74K&_nc_ht=scontent.fdac11-1.fna&oh=3be4eb06e87e270e76295e88b44b9228&oe=61A9A0B0";
  return (
    <div class="bg-white-2 flex flex-col items-center">
        <Header/>
        <div>
            <Sidebar title={title} avatar={avatar}/>
        </div>
    </div>
  );
}

export default App;
