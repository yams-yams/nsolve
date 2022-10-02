import React from 'react';
import './Create.css';
//import DescriptionEditor from './DescriptionEditor';


export default function Create(props) {

    const createProblem = console.log("Tried to create problem");

    return(
        <div className="create-wrapper">
            <h2>Create a Problem</h2>
            <form onSubmit={createProblem}>
                <label>
                    <p>Problem name</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Description</p>
                
                </label>
                <label>
                    <p>Test Cases</p>
                    <input type="text" />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}