import React from 'react';
import './Card.css';

export default function Card(props) {
    const classes = 'card ' + props.className; //are un spatiu "card spatiu" altfel nu merge

  return (
    <div className={classes}>{props.children}</div>
  );
}
