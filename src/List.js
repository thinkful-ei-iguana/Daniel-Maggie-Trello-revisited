import React from 'react';
import Card from './Card.js'

function List(props) {
  const cardElements = props.cards.map(card => {
    return <Card 
              title={card.title} 
              content={card.content}
              handleDeleteCard={props.handleDeleteCard}
              listId={props.list.id}
              cardIdsArr={props.list.cardIds}
              cardId={card.id}
              key={card.id}/>
  });

  return (
    <section className="List">
  <header className="List-header">
    <h2>{props.list.header}</h2>
  </header>
  <div className="List-cards">
      {cardElements}
    <button 
      type="button" 
      className="List-add-button"
      
      >
      + Add Random Card
    </button>
  </div>
</section>
  )
}

export default List;
