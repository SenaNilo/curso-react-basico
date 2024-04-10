import ListGroup from './components/ListGroup';
import Alert from './Alert';
import Button from "./Button";
import { useState } from 'react';

function App(){
  let items = ['New York','San Francisco','Tokyo','São Paulo'];
  let head = "Cities";
  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  const [alertVisible, alertVisibility] = useState(false);

  return (
    <>
      <div>
        <ListGroup items={items} heading={head} onSelectItem={handleSelectItem} />
      </div>
      <div>
        { 
          alertVisible && 
          <Alert onClose={() => alertVisibility(false) }>
            Hello <span>World</span>
          </Alert>
        }
      </div>
      <Button onClick={() => alertVisibility(true)}>
        Butão
      </Button>
    </>
  );
}

export default App;