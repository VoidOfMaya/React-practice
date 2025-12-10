
import { Button } from './assets/components/button';
import { Profile } from './assets/components/router';
import { Link } from "react-router";
import './App.css'

function App() {


  return (
    <>
      {/*<Button/>*/}
      <div>
        <h1>Hello from the main page of the app!</h1>
        <p>Here are some Examples of linkes to other pages</p>
        <nav>
          <ul>
            <li>
              <Link to="profile">Profile page</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default App
