import React, {useState} from "react";
import 'antd/dist/antd.css';
import { Button, Row, Col, Form, Input } from 'antd';


function App() {
    const [state, setstate] = useState([
    {content:"todo1", id:1},
    {content:"todo2", id:2},
    {content:"todo3", id:3},
    ])
    const test=state.map((states)=>console.log(state.content));
    const onFinish= e =>{ console.log(e);}
      
    
  return (
  <div>
   <Form name="content" >
     <Row>
       <Col>
        <Form.Item name="content" onFinish={onFinish} >
          <Input type="text" />
        </Form.Item> 
         <Button htmlType="submit">
            CREAT
          </Button>
       </Col>
     </Row>
    </Form>
    <Row>
       <Col>
         
       </Col>
     </Row>
    

  </div>

  );
}

export default App;
