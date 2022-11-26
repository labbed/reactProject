import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './components/profile/ProfilePhoto';
import Fullname from './components/profile/Fullname';
import Adress from './components/profile/Adress';

function App() {
  return (
    <div className="App">
      <ProfilePhoto />
      <Adress />
      <Fullname />
  
    </div>
  );

}




export default App;
