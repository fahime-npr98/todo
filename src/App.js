import React, {useState} from "react";
import 'antd/dist/antd.css';
import { Button, Row, Col, Form, Input,Card } from 'antd';
import Cred from "./Cred"
import List from "./List"


function App() {
  const [state, setstate] = useState([
    {content:"todo1", id:1},
    {content:"todo2", id:2},
    {content:"todo3", id:3},
    ])
    
  return (
  <div>
    <Card>
     <Cred state={state} setstate={setstate}/>
    </Card>
    <List state={state} setstate={setstate} />
  
  </div>

  );
}

export default App;
