import './App.css';
import Description from './Components/Description';
import Image from './Components/Image';
import Name from './Components/Name';
import Price from './Components/Price';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function App() {
  var name="Hela"
  return (
    <div>
      
      <Card >
        {name !== "" && <Image/>}
        <Card.Body>
          <Card.Title ><Name/></Card.Title>
          <Card.Text >
              <Price/>
              <Description/>
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
    <br/><br/>
    <h3>{name === "" ? "Bonjour, là !" : `Bonjour ${name}`}</h3>
    </div>
  );
}

export default App;
