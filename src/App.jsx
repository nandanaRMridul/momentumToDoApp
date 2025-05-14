import React from 'react'
import Todo from './components/Todo'
import logo from '/favicon.png'

const App = () => {
  return (
    <div className='text-light d-flex flex-column align-items-center justify-content-center'>
      <h2 className="title text-center my-5"><img className='me-2' style={{width:'60px'}} src={logo} />Momentum: Where tasks gain traction.</h2>
      <Todo />
    </div>
  );
}

export default App