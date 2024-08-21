import React, { useState } from 'react';

const TrafficLights = () =>{
    const [light, setLights] = useState('dark');

    const ChangeLight = () => {
        if(light === 'success'){
            setLights('danger'); 
        } else if(light === 'warning'){
            setLights('success')
        } else if(light === 'danger'){
            setLights('warning')
        }
    }

    const AddLight = () => {
        
    }

    return (
        <div className="container">
            <div className="semaforo">
                <button type="button" className={`btn btn-danger ${light === 'danger' ? 'glow-red' : 'dark'}`} onClick={() => setLights('danger')} ></button>
                <button type="button" className={`btn btn-warning ${light === 'warning' ? 'glow-yellow' : 'dark'}`} onClick={() => setLights('warning')} ></button>
                <button type="button" className={`btn btn-success ${light === 'success' ? 'glow-green' : 'dark'}`} onClick={() => setLights('success')} ></button>
            </div>
            <button type="button" class="btn btn-secondary btn-lg" onClick={ChangeLight}>CHANGE</button>
        </div>
    );
}

export default TrafficLights;


