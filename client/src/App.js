import { useState } from 'react'

function App() {

  const [first, setfirst] = useState('')

  const handlerSubmit = (e) => {
    e.preventDefault()
    createTest()
  }

  const createTest = async () => {
    const response = await fetch('https://testapp-fordev.herokuapp.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        test: first
      })
      }
    )
    const data = await response.json()
    console.log(data)
  }

  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>HEROKU TEST</h1>
      <form onSubmit={(e) => {handlerSubmit(e)}} style={{margin: '0 auto', display: 'grid', gridTemplateRows: '1fr 1fr', width: '300px'}}>
        <input type='text' placeholder='...' style={{margin: '5px', padding: '10px'}} onChange={(e) => {setfirst(e.target.value)}}></input>
        <button type='submit'>CREATE TEST</button>
      </form>
    </div>
  );
}

export default App;
