import React, {useState} from "react";
import 'antd/dist/antd.css';
import { Button, Row, Col, Form, Input } from 'antd';


function App() {
    const [state, setstate] = useState([
    {content:"todo1", id:1},
    {content:"todo2", id:2},
    {content:"todo3", id:3},
    ])

    const onFinish= (e) =>{ 
      return(
        e.todo
      )
    }
      
    
  return (
  <div>
   <Form  onFinish={(e)=>setstate([...state, {content: e.todo, id:state.length}])} name="creat">
     <Row>
       <Col>
        <Form.Item name="todo">
          <Input type="text" />
        </Form.Item> 
         <Button htmlType="submit"  >
            CREAT
          </Button>
       </Col>
     </Row>
    </Form>
    <Row>
       {state.map((item)=>(
         <p>
           {item.content}
         </p>
       ))}
      
     </Row>
    

  </div>

  );
}

export default App;
