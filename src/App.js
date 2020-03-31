import React from 'react';
import NavBar from './Components/Navbar/Navbar';
import Search from './Components/Search/Search'


class App extends React.Component {
  render() {
    return (
        <div>
          <NavBar />
          <Search/>
        </div>
    );
  }
}

export default App;
