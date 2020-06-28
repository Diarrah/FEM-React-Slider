import React, { useState } from 'react';
import './styles/App.scss';
import ImageContainer from './components/ImageContainer/ImageContainer';
import QuoteContainer from './components/QuoteContainer/QuoteContainer';
import { users } from './config/users';

function App() {
  const [whichUser, setWhichUser] = useState(0);
  
  return (
    <div className='app'>
      <QuoteContainer 
        quote={users[whichUser].quote}
        name={users[whichUser].name}
        title={users[whichUser].title}
      />
      <ImageContainer 
        name={users[whichUser].name}
        clientPortrait={users[whichUser].image}
        allUsers={users}
        currentUserShown={whichUser}
        nextUserToShow={setWhichUser}
      />
    </div>
  );
}

export default App;
