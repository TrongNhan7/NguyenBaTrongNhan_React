import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"
import {useNavigate, useParams} from "react-router-dom";
import Cars from "./cars";

function Edit() {
    let history = useNavigate();
    let {id} = useParams();
    const index = Cars.map(e => e.id).indexOf(id);
    let car = Cars[index];

    const [name, setName] = useState(car.name);
    const [price, setPrice] = useState(car.price);
    const [manufacturer, setManufacturer] = useState(car.manufacturer);

    const handleSubmit = (e) => {
        e.preventDefault();
        let a = Cars[index];
        a.name = name;
        a.price = price;
        a.manufacturer = manufacturer;
        history("/");
    }

    return (
        <div>

            <Form className="d-grid gap-2" style={{margin: "15rem"}}>
                <Form.Group className="mb-3" controlid="formName">
                    <Form.Control type="text" placeholder="Enter Name" required value={name}
                                  onChange={(e) => setName(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlid="formPrice">
                    <Form.Control type="number" required value={price}
                                  onChange={(e) => setPrice(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlid="formManufacturer">
                    <Form.Control type="text" placeholder="Enter Manufacturer" required value={manufacturer}
                                  onChange={(e) => setManufacturer(e.target.value)}>
                    </Form.Control>
                </Form.Group>
                <Button onClick={(e) => handleSubmit(e)} type="submit">Update</Button>
            </Form>
        </div>
    )
}

export default Edit;
