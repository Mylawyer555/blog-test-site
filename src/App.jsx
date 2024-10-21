import { useState, useEffect } from "react"
import Form from "./Form";
import Lists from "./Lists";
import Table from "./Table";
function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [reqType, setReqType] = useState("users");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        // console.log(data);
        setItems(data);
      } catch (error) {
        console.log(error);
      
      }
    }

    fetchData();
  }, [reqType]);


  return (
    <div className="app">
      <Form
        reqType={reqType}
        setReqType={setReqType}
      />
      {/* <Lists
        items = {items}
      /> */}

      <Table items = {items}/>
    </div>
  )
}

export default App
