import React from 'react';

function Card(props) {
  return(
    <div className="Card">
      <button type="button"
              onClick={() => props.handleDeleteCard(props.listId, props.cardId, props.cardIdsArr)}>
        delete
      </button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
      </div>
  )
}

export default Card;