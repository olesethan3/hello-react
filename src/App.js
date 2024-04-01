//import logo from './logo.svg';
import './App.css';

const teamsinMichigan = [
  { id: 1, team: 'Michigan State', city: 'East Lansing', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Michigan_State_Athletics_logo.svg/225px-Michigan_State_Athletics_logo.svg.png', mascot: true },
  { id: 2, team: 'Michigan', city: 'Ann Arbor', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Michigan_Wolverines_logo.svg/1200px-Michigan_Wolverines_logo.svg.png', mascot: false },
  { id: 3, team: 'Western Michigan', city: 'Kalamazoo', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Western_Michigan_Broncos_%282021%29_logo.svg/1200px-Western_Michigan_Broncos_%282021%29_logo.svg.png', mascot: true },
  { id: 4, team: 'Central Michigan', city: 'Mount Pleasant', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Central_Michigan_Chippewas_logo.svg/1200px-Central_Michigan_Chippewas_logo.svg.png', mascot: true },
  { id: 5, team: 'Eastern Michigan', city: 'Ypsilanti', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Eastern_Michigan_Eagles_logo.svg/901px-Eastern_Michigan_Eagles_logo.svg.png', mascot: true },
];

function HaveMascot() {
  const listZines = teamsinMichigan.map(mascotCheck =>
    <li
      key={mascotCheck.id}
      style={{
        color: mascotCheck.mascot ? 'green' : 'red'
      }}
    >
      {mascotCheck.team}
    </li>
  );
  return (
    <ul>{listZines}</ul>
  )
}

function TeamInfo() {
  const listZines = teamsinMichigan.map(info =>
      <div>
        key={info.id}
        <h2>{teamsinMichigan.team}</h2>
        <p>{teamsinMichigan.city}</p>
        <img
          className="teamLogo"
          src={teamsinMichigan.logo}
          alt={teamsinMichigan.team + ' logo'}
        />
      </div>
    );
}

function MagicButton() {
  return (
    <div>
      <h3>This is a magic button</h3>
      <button>Magic</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TeamInfo />
        <HaveMascot />
        <MagicButton />
      </header>
    </div>
  );
}

export default App;
