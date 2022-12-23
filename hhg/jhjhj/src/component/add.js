import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import {useNavigate} from "react-router-dom";
import Cars from "./cars";
import {v4 as uuid} from "uuid";

function Add() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [manufacturer, setManufacturer] = useState("");

    let history = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0, 8);
        let a = name, b = price, c = manufacturer;
        if (!Cars.find(item => item.name === a)) {
            Cars.push({id: uniqueId, name: a, price: b, manufacturer: c});
            history("/");
        } else {
            alert("Sản phẩm đã bị trùng !!!");
        }

    }
    return (
        <div>
            <Form className="d-grid gap-2" style={{margin: "15rem"}}>
                <Form.Group className="mb-3" controlID="formName">
                    <Form.Control type="text" placeholder="Enter Name" required
                                  onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlID="formPrice">
                    <Form.Control type="number" placeholder="Enter Price" required
                                  onChange={(e) => setPrice(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlID="formManufacturer">
                    <Form.Control type="text" placeholder="Enter Manufacturer" required
                                  onChange={(e) => setManufacturer(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
            </Form>
        </div>

    )
}

export default Add;
