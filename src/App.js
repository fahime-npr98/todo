import React, {useState} from "react";
import 'antd/dist/antd.css';
import { Button, Row, Col, Form, Input,Card } from 'antd';


function App() {
    const [state, setstate] = useState([
    {content:"todo1", id:1},
    {content:"todo2", id:2},
    {content:"todo3", id:3},
    ])


      
    
  return (
  <div>
    <Card>
   <Form  onFinish={(e)=>setstate([...state, {content: e.todo, id:Math.random()}])} name="creat">
     <Row >
       <Col span={24}>
       <Col span={12}>
        <Form.Item name="todo">
          <Input type="text" />
        </Form.Item>   
        </Col>
        <Col span={3}>
         <Button htmlType="submit">
            CREAT
          </Button>
         </Col> 
        </Col>
     </Row>
    </Form>
    </Card>
    <Row>
      <Col span={24}>
       {state.map((item)=>(
         <Card>
           <Row justify={"space-around"}>
              
                
                 <Col span={12} ><Card>{item.content}</Card></Col> 
                 <Col>
                 <Button onClick={()=>setstate(state.filter((items)=>items.id!==item.id))}>delete</Button>
                 </Col>
                 
              
           </Row>
         </Card>
       ))}
      </Col>
     </Row>
    

  </div>

  );
}

export default App;
