import { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
import Button from "./Components/Button";
import ListGroup from "./Components/ListGroup";
import Like from "./Components/Like";

function App() {
 
  const [alertVisible, setAlertVisible] = useState(false)
  const lists = ["singapore", "USA", "France", "India"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

 

  return (
    <div>
      {/* {alertVisible &&
     <Alert onClose={()=>setAlertVisible(false)}>
      Hello this is an Alert
     </Alert> } */}
     <Button color="primary" onClick={()=> setAlertVisible(true)} >MyButton</Button>
      
      <ListGroup selectedItem={handleSelectItem} items={lists} />

      <Like onClick={()=> console.log('clicked')} />
    </div>
  );
}

export default App;
