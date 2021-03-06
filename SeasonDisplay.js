import './SeasonDisplay.css';
import React from 'react';

const SeasonConfig = {
    summer: {
        text:"let's hit the beach",
        iconName: 'sun'
    },
    winter: {
        text: "burr it is cold",
        iconName: 'snowflake'
    }
};

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
};

const SeasonDisplay = props => {
    const Season = getSeason(props.lat, new Date().getMonth());
    const {text, iconName } = SeasonConfig[Season];
    return ( 
    <div className={`Season-Display ${Season}`}>
        <i className={`icon-left massive ${iconName} icon`} />
       <h1>{text}</h1> 
       <i className={`icon-right massive ${iconName} icon`} />
    </div>
    );   
};

export default SeasonDisplay;