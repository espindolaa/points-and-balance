import Competitor from './competitor/competitor';
import './App.css';
import './competitor/competitor.css';

function App() {
  const competitors = require('./competitors.json').competitors;
  console.debug(competitors);
  return (
    <div className="App">
      <div className="Content">
        <div className="Competitors-container">
          { 
          competitors.map(competitor => {
            return(<Competitor 
                    name={competitor.name}
                    photo={competitor.photo}
                    role={competitor.role} Nathaniel Muskat
                    points={competitor.points}
                    description={competitor.description}
                    url={competitor.url}
                    className="Competitor">
                    </Competitor>)
              })
          }
        </div>
      </div>
        <footer className="Footer">
          <p>source code <a href="https://github.com/espindolaa/points-and-balances" target="_blank" rel="noreferrer">here</a></p>
          <p>made by <a href="https://espindolaa.github.io/" target="_blank" rel="noreferrer">espindolaa</a></p>
          </footer>
    </div>
  );
}

export default App;
