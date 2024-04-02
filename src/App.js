//import logo from './logo.svg';
import './App.css';

const teamsinMichigan = [
  { id: 1, team: 'Michigan State', city: 'East Lansing', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Michigan_State_Athletics_logo.svg/1200px-Michigan_State_Athletics_logo.svg.png', mascot: true },
  { id: 2, team: 'Michigan', city: 'Ann Arbor', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Michigan_Wolverines_logo.svg/1200px-Michigan_Wolverines_logo.svg.png', mascot: false },
  { id: 3, team: 'Western Michigan', city: 'Kalamazoo', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Western_Michigan_Broncos_%282021%29_logo.svg/1200px-Western_Michigan_Broncos_%282021%29_logo.svg.png', mascot: true },
  { id: 4, team: 'Central Michigan', city: 'Mount Pleasant', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Central_Michigan_Chippewas_logo.svg/1200px-Central_Michigan_Chippewas_logo.svg.png', mascot: true },
  { id: 5, team: 'Eastern Michigan', city: 'Ypsilanti', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Eastern_Michigan_Eagles_logo.svg/901px-Eastern_Michigan_Eagles_logo.svg.png', mascot: true },
];

const MichiganFacts = {
  capital: 'Lansing',
  flag: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Flag_of_Michigan.svg/1280px-Flag_of_Michigan.svg.png',
  largestcity: 'Detroit',
  population: 'Around 10 Million',
}

function HaveMascot() {
  const listMascot = teamsinMichigan.map(mascotCheck =>
    <div
      key={mascotCheck.id}
      style={{  
        color: mascotCheck.mascot ? 'green' : 'red'
      }}
    > 
      {mascotCheck.team}
      {mascotCheck.mascot ? ' Yes ': ' No '}
    </div> 
  );
  
  return listMascot;
}

function TeamInfo() {
  const listTeams = teamsinMichigan.map(info =>
       <div key={info.id}>
        <h1>{info.team}</h1>
        <h3>{info.city}</h3>
        <img
          className="teamLogo"
          src={info.logo}
          alt={info.team + ' logo'}
        />
      </div>
    );

    return listTeams;
}

function FactsMichigan() {
  return(
  <div>
    <h1>Michigan Facts</h1>
    <h3>Capital: {MichiganFacts.capital}</h3>
    <img
      className='michiganLogo'
      src= {MichiganFacts.flag}
      alt='Michigan Flag'
    />
    <h3>Largest City: {MichiganFacts.largestcity}</h3>
    <h3>Population: {MichiganFacts.population}</h3>
  </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TeamInfo />
        <h2>Does this team have a mascot?</h2>
        <HaveMascot />
        <FactsMichigan />
      </header>
    </div>
  );
}

export default App;
