import React,{useState} from 'react';
import 'antd/dist/antd.css';
import { Button, Row, Col, Form, Input,Card } from 'antd';


const List = () => {
    
    const [state, setstate] = useState([
        {content:"todo1", id:1},
        {content:"todo2", id:2},
        {content:"todo3", id:3},
        ])
    
    return (
        <div>
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
    )
}

export default List
