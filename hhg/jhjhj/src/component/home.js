import React from "react";
import Header from "./header";
import Footer from "./footer";
import cars from "./cars";
import Cars from "./cars";
import {Link, useNavigate} from "react-router-dom";
import {Button} from "react-bootstrap";

function Home() {

    let history = useNavigate();

    const handleDelete = (id) => {
        const index = Cars.map(e => e.id).indexOf(id);
        Cars.splice(index, 1);
        history("/");
    };

    return (
        <div>
            < Header/>
            < br/>
            <table className="table table-hover">
                <thead className="table-dark">
                <tr>
                    <th>#</th>
                    <th>Tên xe</th>
                    <th>Giá xe</th>
                    <th>Hãng xe</th>
                    <th colSpan="2">Action</th>
                </tr>
                </thead>
                <tbody>
                {cars.map((car, i) =>
                    <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{car.name}</td>
                        <td>{car.price}</td>
                        <td>{car.manufacturer}</td>
                        <td>
                            <Link to={"/edit/" + car.id}>
                                <Button>Edit</Button>
                            </Link>
                        </td>
                        <td>
                            <Button onClick={() => handleDelete(car.id)}>Delete</Button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
            <Link to="/create" className="d-grid gap-2">
                <Button size="lg">Create</Button>
            </Link>
            < br/>
            < Footer/>
        </div>
    );

}

export default Home;
