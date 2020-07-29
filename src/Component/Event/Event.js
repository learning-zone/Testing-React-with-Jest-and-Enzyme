import React from 'react'
import Button from '@material-ui/core/Button'


export default function Event() {

    const [counter, setcounter] = React.useState(0);
    return (
        <div className="Counter">
            <h1>Event Testing</h1>
            
            <div data-test="counter-value">{counter}</div>

            <Button variant="contained" color="primary" data-test="increment-btn" onClick={() => setcounter(counter + 1)} >Increment</Button>
            <br/> <br/>
            <Button variant="contained" color="primary" data-test="decrement-btn" onClick={() => setcounter((counter > 0) ? (counter - 1) : 0)} >Decrement</Button>
        </div>
    )
}
