import React,{useState} from 'react'
import 'antd/dist/antd.css';
import { Button, Row, Col, Form, Input,Card } from 'antd';

const Cred = (props) => {
  const {state, setstate} = props

    return (
    <div>
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
    </div>
    )
}

export default Cred
