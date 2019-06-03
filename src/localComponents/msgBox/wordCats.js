import React, { Component } from 'react';
import firebase from '../../globalComponents/firebase';
import WordsHandler from './wordsHandler'

class WordCats extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      activeCat: "null",
      counter: 200
    }
  }

  callBack = (chosenWord) => {
    let currWord = chosenWord.word
    this.props.sendBack(currWord)
  }

  render() {
    return (
      <div className="wordCats">
        {this.state.categories.map((cats) => {
          return (
            <div className="wordCategory" key={cats.id}>
              <h2 id={cats.id + "_header"} tabIndex="200">{cats.id}</h2>
              <ul className={cats.id} id={cats.id}>
                <WordsHandler
                  wordId={cats.id}
                  wordText={cats.text}
                  cats={this.state.activeCat}
                  sendBack={this.callBack}
                />
              </ul>
            </div>
          )
        })
        }
      </div>
    )
  }

  componentDidMount() {
    const structure = firebase.database().ref("messageData/words");

    structure.on('value', (response) => {
      const newState = [];
      const data = response.val();

      for (let key in data) {
        newState.push({
          id: key,
          text: data[key],
        });
      }
      this.setState({ categories: newState })
    })
  }
}

export default WordCats;