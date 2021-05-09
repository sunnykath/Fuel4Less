import React, { useState } from "react";
import {Button, Input, TextField} from "@material-ui/core";

function DashboardForm(params) {

    const [price, setPrice] = useState("");

    return (
      <div>
        <form className="form">
          
          <TextField
            label="Update Price"
            id="price"
            onChange={(e) => {setPrice(e.target.value)}}
            type="text"
            style={{margin: 10}}
          />

          <Button className="updatePriceButton" variant="contained" color="secondary" onClick={() => { console.log(price) }}>
              Confirm Price
          </Button>

                 
         

        </form>
      </div>
    );
}


export default DashboardForm;