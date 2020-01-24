import React, { useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

//actions
import { fetchSmurfs, addSmurf } from '../actions';



const SmurfCard = props => {
    
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: 0,
        height: ''
    });

    
    const handleChange = e => {
        setNewSmurf({
            ...newSmurf,
            [e.target.name]: e.target.value
        });
        console.log(e.target.name, "e.target.name");
      }

    const handleSubmit = e => {
        e.preventDefault();
        console.log(newSmurf, "newSmurf");
        axios.post('http://localhost:3333/smurfs',
        newSmurf)
        setNewSmurf({name: '', age: 0, height: ''})
    }

    return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label>Name: 
                        <input 
                        type="text" 
                        value={newSmurf.name} 
                        onChange={handleChange}
                        name="name"
                        />
                    </label>
                    <label>Age:
                        <input type="number" value={newSmurf.age} onChange={handleChange} name="age"></input>
                    </label>
                    <label>Height:
                        <input type="text" value={newSmurf.height} onChange={handleChange} name="height"></input>
                    </label>
                    <input type="submit" value="Add Smurf" onSubmit={handleSubmit}></input>
                </form>
                {console.log(props, "props from smurfcard")}
                <button onClick={props.fetchSmurfs}>Get Smurfs</button>
                {!props.smurf && !props.isLoading && (<h2> hello smurf </h2>
                )}
                {props.isLoading && (
                    <h1>Smurfy load...</h1>
                )}
                {props.smurf && !props.isLoading && <h2>{props.smurf.map(obj => `Hello, ${obj.name} Smurf. `)}</h2>}
            </div>)
}


const mapStateToProps = state => {
    console.log(state, "state from smurfcard");
    return {
        isLoading: state.isLoading,
        smurf: state.smurf,
        error: state.error
    }
    
}
export default connect(mapStateToProps, { fetchSmurfs })(SmurfCard);