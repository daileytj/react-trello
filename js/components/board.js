import React from 'react';
import ListContainer from './list-container';

export default function Board(props) {
    return ( <div className = "board" >
          <div className = "board-title">{props.title}</div>
          <div className = "lists">
            <ListContainer title = "list 1" cards = {props.cards[0]}/>
            <ListContainer title = "list 2" cards = {props.cards[1]}/>
            <ListContainer title = "list 3" cards = {props.cards[2]}/>
          </div>
        </div>
    );
}
