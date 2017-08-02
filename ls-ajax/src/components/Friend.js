import React, { Component } from 'react';

const Friend = ({ friend, index }) => {
    return (
        <li key={index}>
            <p>{`Friend ${index+1}`}</p>
            <p>{`Name: ${friend.name}`}</p>
            <p>{`Age: ${friend.age}`}</p>
            <p>{`Email: ${friend.email}`}</p>
        </li>
    );
};

export default Friend;