import Competitor from './competitor/competitor';
import './App.css';
import './competitor/competitor.css';

function App() {
  const competitors = require('./competitors.json').competitors;
  console.debug(competitors);
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="Competitors-container">
        { 
        competitors.map(competitor => {
          console.debug(competitor);
          return(<Competitor 
                  name={competitor.name}
                  photo={competitor.photo}
                  role={competitor.role}
                  points={competitor.points}
                  description={competitor.description}
                  className="Competitor">
                  </Competitor>)
        })
        }
      </div>
    </div>
  );
}

export default App;
