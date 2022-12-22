import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from "./header";
import Footer from "./footer";

class App extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
    cars: [
        {
            id: 1,
            name: "Kia K150",
            price: 1000,
            manufacturer : "Kia",
        },
        {
            id: 2,
            name: "Bus BlueSky",
            price: 9999,
            manufacturer : "Thaco Auto",
        },
        {
            id: 3,
            name: "Towner 990",
            price: 500,
            manufacturer : "Thaco Auto",
        },
        {
            id: 4,
            name: "Kia K100",
            price: 900,
            manufacturer : "Kia",
        },
    ]
    }
  }
  render() {
    return (
        <div>
            <Header />
            <br/>
          <table className="table table-hover">
              <thead className="table-dark">
              <tr>
                  <th>#</th>
                  <th>Tên xe</th>
                  <th>Giá xe</th>
                  <th>Hãng xe</th>
              </tr>
              </thead>
              <tbody>
              {this.state.cars.map((car,i)=>
              <tr>
                  <td>{i+1}</td>
                  <td>{car.name}</td>
                  <td>{car.price}</td>
                  <td>{car.manufacturer}</td>
              </tr>
              )}
              </tbody>
          </table>
            <br />
            <Footer />
        </div>
    );
  }
}

export default App;
