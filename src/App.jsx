import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { auth } from './config'
import AuthService from './services/auth.service'
import DatabaseService from './services/db.service'
import { Timestamp } from 'firebase/firestore'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
          AuthService.register('zara@gmail.com', '123456').then((value) => {
            console.log('User created successfully', value);
          }).catch((error) => {
            console.log(error.error);
          });
        }}>
          Register
        </button>
        <button onClick={() => {
          AuthService.login('zara@gmail.com', '123456').then((value) => {
            console.log('User logged in successfully', value);
          }).catch((error) => {
            console.log(error);
          });
        }}>
          Login
        </button>
        <br />
        <button onClick={() => {
         DatabaseService.add(
          {"name": "Musa Jibril", "comment": "I am a dummy", "date": Timestamp.now(), "age": 10, "isMarried": false}
        ).then((value) => {
          console.log('Comment added. Hurray!!!');
        }).catch((error) => {
          console.log(error);
        });
        }}>
          Add Document
        </button>
        <button onClick={() => {
          DatabaseService.get(
          ).then((value) => {
            console.log('Your comments are ', value.map((element) => element.data()));
          }).catch((error) => {
            console.log(error);
          });
        }}>
          Get Document
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
