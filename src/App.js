
import './App.css';
import Address from './Component/Profile/Address';
import Fullname from './Component/Profile/FullName';
import Image from './Component/Profile/ProfilePhoto';

function App() {
  return (
    <div className="App">
      <Image/>
       <div style={{backgroundColor:'#d0cc95'}}><Fullname/></div>
       <div style={{backgroundColor:'#d0cc95'}}><Address/></div>
       
      </div>
   
  );
}

export default App;
