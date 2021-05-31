import React, { useState, useEffect } from "react";
import {Button, Input, TextField} from "@material-ui/core";
import axios from 'axios';
import DropdownComponent from "./DropdownComponent";

function DashboardForm(params) {

    const [price, setPrice] = useState("");
    const [station, setStation] = useState({name: ''});
    const [stationsList, setList] = useState([]);
  
    const handleChange = () => (e) => {
      // setStation(e.target.value);
      let station = stationsList.filter(s => {
        return s.name === e.target.value
      })
      setStation(station[0]);
      setPrice(station[0].price);
      // console.log(price);
    };
  
    useEffect(() => {
      axios.get("http://localhost:3001/api/stations")
      .then(res => {
        setList(res.data);
      });
    }, []);

    const validatePrice = (e) => {

      ((e.target.value>0.1)&&(e.target.value<99) || (e.target.value==='')) ? 
      setPrice(e.target.value) 
      :
      console.log("Invalid Price = " + e.target.value);
    }

    const updatePrice = () => {
      station.price = price;
      axios.put(`http://localhost:3001/api/stations/${station._id}`, station);
    }


    return (
      <div>
        <form className="form">   

          <DropdownComponent station={station} stationsList={stationsList} handleChange={handleChange()} />
          {/* </DropdownComponent> */}

          <TextField
            label="Update Price"
            id="price"
            onChange={validatePrice}
            type="number"
            style={{margin: 10}}
            value={price}
          />

          <Button className="updatePriceButton" variant="contained" color="secondary" onClick={updatePrice}>
              Confirm Price
          </Button>

        </form>
      </div>
    );
}


export default DashboardForm;