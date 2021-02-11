import './App.css';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import Messages from './components/Messages/Messages'
import { addPost } from './redux/state';

const App = (props) => {



  return (
    <BrowserRouter>
    <div className="app"> 
      <Header />
      <main>
        <Aside />

<Route path='/profile' render={() => <Profile state={props.state.profilePage} addPost={props.addPost} />} />
<Route path='/messages' render={() => <Messages state={props.state.messagePage} />} />
      
   
      </main>
    </div>
    </BrowserRouter>);
}

export default App;
