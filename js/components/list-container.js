import React from 'react';
import List from './list';

export class ListContainer extends React.Component{
  constructor(props) {
        super(props);
        this.state = {
            text: "",
            cardList: []
        };

    render(){
      return(
        <List cards={this.state.cardList} title={this.state.text}/>
      )
    }
}
