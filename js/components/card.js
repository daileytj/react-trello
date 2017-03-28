import React from 'react';

export default function Card(props) {
        return (
            <div className="card">
                <input className="card-input" value={props.text} />
            </div>
        );
}
