import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [state, setState] = useState({
    loading: false,
    init: true
  })
  const [events, setEvents] = useState([])

  const fetchEvents = async () => {
    setState({loading: true})
    let event = await fetch("https://api.raisely.com/v3/events?startAtLT=2021-06-24T15%3A29%3A52.161Z&sort=startAt&order=DESC&limit=20&campaign=f2a3bc70-96d8-11e9-8a7b-47401a90ec39")
    event = await event.json()
    setState({loading: false})

    setEvents(event.data)
  }
  useEffect(() => { 
    fetchEvents()
  }, [state.init])

  return (
    <div className="App-header">

      <div className="answers">
        <h1> Paul Mahoro</h1>
        <p>I'm a software engineer who constantly seeks out innovative solutions to everyday problems. In my years in this industry, I've honed my creative thinking, computational thinking, analytical thinking, problem-solving,  leadership skills and I  love working with a team.
        <br/>  
        <br/>  
        I'm looking for a great, enthusiastic engineering team to work for that will provide me with challenging, interesting work that I can learn from and contribute to
        </p>
        <section className="contact">
            <h3>My contact info </h3> 
            <p><span>Phone: </span> +250789850956</p>
            <p><span>email: </span> mahorojeanpaul037@gmail.com</p>
        </section>

        <section className="links">
          <p><span>Api Url: </span> <a href="https://api.raisely.com/v3/events?startAtLT=2021-06-24T15%3A29%3A52.161Z&sort=startAt&order=DESC&limit=20&campaign=f2a3bc70-96d8-11e9-8a7b-47401a90ec39" target="_blank"> api.raisely.com </a></p>
        </section>

        <section className="events">
          <h3>Sample event response </h3>
          { !state.loading ? events.map((elem, key) => {
            return (
              <div className="eventInfo" key={key}>
              <h5>{elem.name}</h5>
              <p>{elem.description} </p>
            </div>
            )
          }): <p> loading events ...</p>}
        </section>
      </div>
    </div>
  );
}

export default App;
