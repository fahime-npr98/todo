import React, {useState} from "react";
import 'antd/dist/antd.css';
import { Button, Row, Col, Form, Input } from 'antd';


function App() {
    const [state, setstate] = useState([
    {content:"todo1", id:1},
    {content:"todo2", id:2},
    {content:"todo3", id:3},
    ])

    const test1=state.map((todos)=>{console.log(todos.content); });
    const onFinish= e =>{ console.log(e);}
      
    
  return (
  <div>
   <Form name="content" onFinish={onFinish}>
     <Row>
       <Col>
        <Form.Item >
          <Input type="text" />
        </Form.Item> 
         <Button htmlType="submit">
            CREAT
          </Button>
       </Col>
     </Row>
    </Form>
    <Row>
       <p >
        
       </p>
     </Row>
    

  </div>

  );
}

export default App;
