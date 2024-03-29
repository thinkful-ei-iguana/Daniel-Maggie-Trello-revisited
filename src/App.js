import React from 'react';
// import Card from './Card.js';
import List from './List.js';



class App extends React.Component {

  state = {
    lists: [
      {
        id: '1',
        header: 'First list',
        cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
      },
      {
        id: '2',
        header: 'Second list',
        cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
      },
      {
        id: '3',
        header: 'Third list',
        cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
      },
      {
        id: '4',
        header: 'Fourth list',
        cardIds: [ 'l', 'm' ],
      },
    ],
    allCards: {
      'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
      'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
      'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
      'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
      'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
      'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
      'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
      'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
      'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
      'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
      'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
      'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
      'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
    },
  }

  omit(obj, keyToOmit) {
    return Object.entries(obj).reduce(
      (newObj, [key, value]) =>
          key === keyToOmit ? newObj : {...newObj, [key]: value},
      {}
    );
  }

  
  handleDeleteCard = (listId, cardId, cardIdsArr) => {
    const newCardIdsArr = cardIdsArr.filter(id => {
      return id !== cardId;
    })

    const newLists = this.state.lists.map(list => {
      if (list.id === listId) return Object.assign(list, {cardIds: newCardIdsArr});
      return list;
    })
  
    this.setState({
      lists: newLists
    })
  }

  

handleAddRandomCard = (listToAdd) => {
    
  const newRandomCard = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }
  const randomCard = newRandomCard();
  let randomCardObject = {[randomCard.id] : randomCard}
  const allCardsPlusRandom = Object.assign(this.state.allCards, randomCardObject);
  const cardIdsPlusRandom = [...listToAdd.cardIds, randomCard.id]
  console.log('cardidsplusrandom is', cardIdsPlusRandom);
  console.log('listtoadd.cardids is', listToAdd.cardIds);
  console.log('randomcard.id', randomCard.id);


  const newLists = this.state.lists.map(list => {
    if (list.id === listToAdd.id) {
      return Object.assign(listToAdd, {cardIds: cardIdsPlusRandom});
    }
  
    return list;
    
  })
  console.log('newLists is', newLists)


  this.setState({
    allCards: allCardsPlusRandom,
    lists: newLists
  })
}
  

  
  
  render() {
    const listElements = this.state.lists.map(list => {
      const cards = list.cardIds.map(id => {
        return this.state.allCards[id]
      } );
      
      return <List 
                list={list}
                cards={cards}
                key={list.id}
                handleDeleteCard={this.handleDeleteCard}
                handleAddRandomCard={this.handleAddRandomCard}  
              />
    });

    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
        {listElements}
        </div>
      </main>
    );
  }
}

export default App;