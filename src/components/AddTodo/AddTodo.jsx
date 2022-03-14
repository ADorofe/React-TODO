import React, { useState } from "react";
import { Col, Row , Button, FormControl} from "react-bootstrap";
import {v4 as uuidv4} from 'uuid'
import s from './AddTodo.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'


function AddTodo({todo, setTodo}){

    const[value, setValue]=useState('')

    function addTodo(){
        if(value)
        setTodo(
            [...todo, {
                id:uuidv4(),
                title: value,
                status: true
            }]
        )
        setValue('')
    }

    return(
        <Row>
            <Col className={s.addTodoForm}>
                <FormControl placeholder="Введите название задачи..." value={value} onChange={(e)=>setValue(e.target.value)}/>
                <Button onClick={addTodo} className={s.btn}><FontAwesomeIcon icon={faPlus}/></Button>
            </Col>
        </Row>
    )
}

export default AddTodo