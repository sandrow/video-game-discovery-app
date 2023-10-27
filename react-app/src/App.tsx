import { useState } from "react";
import { BsFillCalendarFill } from "react-icons/bs";
import Alert from "./components/Alert";
import Button from "./components/Button/Button";
import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />

      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>
          Hello <span>world</span>
        </Alert>
      )}
      <Button onClick={() => setAlertVisibility(true)}>new button3</Button>
      <BsFillCalendarFill color="blue" size="40" />
    </div>
  );
}

export default App;
