

import axios from "axios";
import { useState, useEffect } from "react";
import { Button } from 'react-bootstrap'


const AddAsset = () => {

    const [options, setOptions] = useState();

    const [formValue, setFormValue] = useState({
        units: '',
        bought_price: '',
        asset: ''
    })

    const handleChange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name] : e.target.value
        })
    }
    
    useEffect(() => {
        axios.get('localhost:8000/assets/')
          .then(({data}) => {
              setOptions(data);
          })
          .catch((error) => {
              console.log(error);
          })
    }, [])


    const submitHandle = async() => {
        const assetData = new FormData();
        assetData.append('units', formValue.units)
        assetData.append('bought_price', formValue.bought_price)
        assetData.append('asset', formValue.asset)
  // write url
        try {
            const response = await axios({
                method: 'post',
                url: '',
                data: assetData,
                headers: { 'Content-Type': 'multipart/form-data'},
            })
        } catch(error) {
            console.log(error)
        }
    }


    return ( 
        <div className="form-wrapper">
           <form>
                <label>
                   Assets:
                    <select onChange={handleChange} value={formValue.asset}>
                       {options.map((option) => (
                         <option value={option._id}>{option.name}</option>
                    ))}
                    </select>  
                </label>   
                <label>
                    Units:
                    <input 
                        type='number' 
                        name='units' 
                        value={formValue.units}
                        onChange={handleChange}
                        />
                </label>
                <label>
                    Bought Price:
                    <input 
                        type='number' 
                        name='bought_price' 
                        value={formValue.units}
                        onChange={handleChange}
                        />
                </label>
              <Button onClick={submitHandle} variant="danger" size="lg" block="block" type="submit">
                 Add Assets
              </Button>
            </form>  
        </div>
     );
}
 
export default AddAsset;