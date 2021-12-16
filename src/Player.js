import React, { useState, useEffect} from 'react';

const Player = ({ name, uuid }) => {
    return (
        <div>
            <h3>{name}</h3>
            <img src={"https://crafatar.com/avatars/" + uuid} />
        </div>
    )
};

export default Player