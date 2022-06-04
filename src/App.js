import './App.css';
import Nav from './Nav';
import Card from './Card';
import data from './data'

function App() {
  const cardList = data.map((item) => {
    return(
      <Card 
      key={item.id}
      {...item}
    />
    )
  })

  return (
    <div className="App">
     <Nav />
     {cardList}
    </div>
  );
}

export default App;
