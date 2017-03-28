import React from 'react';
import Card from './card';

export default function CardList(props) {
    // console.log("props", props);
    // console.log("props.title", props.title);
    // console.log("props.cards", props.cards);
    // console.log("props.cards[0]", props.cards[0]);
    function Button(props) {
    return <button onClick={props.onClick}>{props.text}</button>;
    };

    function onAddInputChanged(){
        ListContainer.setState{
            text:{this.props.text}
        }
    };

    function onAddSubmit(e){
        e.preventDefault();

    };

    return (
        <div className="card-list">
            <div className = "title">{props.title}</div>
            <div className = "cards">
                <Card text = {props.cards[0]} />
                <Card text = {props.cards[1]} />
                <Card text = {props.cards[2]} />
            </div>
            <input type = "text" className = "list-input" value = "some value" onChange = {onAddInputChanged}/>
            <Button type = "submit"
                onClick ={onAddSubmit}
                text = "im a button"
                />
        </div>
    );
}
