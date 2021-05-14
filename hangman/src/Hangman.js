import React, { Component } from "react";
import { randomWord } from './words';
import img0 from "./0.jpg";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import img4 from "./4.jpg";
import img5 from "./5.jpg";
import img6 from "./6.jpg";
import "./Hangman.css";

class Hangman extends Component {
  /** by default, allow 6 guesses and use provided gallows images. */
  static defaultProps = {
    maxWrong: 6,
    images: [img0, img1, img2, img3, img4, img5, img6]
  };

  constructor(props) {
    super(props);
    const hangWord = randomWord();
    this.state = { nWrong: 0, nCorrect: 0, guessed: new Set(), answer: hangWord };
    this.handleGuess = this.handleGuess.bind(this);
    this.restartGame = this.restartGame.bind(this);
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord() {
    return this.state.answer
      .split("")
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : "_"));
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess(evt) {
    let ltr = evt.target.value;
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1),
      nCorrect: st.nCorrect + (st.answer.includes(ltr) ? 1 : 0)
    }));
  }

  /** generateButtons: return array of letter buttons to render */
  generateButtons() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((ltr, index) => (
      <button
        value={ltr}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(ltr)}
        key={index}
      >
        {ltr}
      </button>
    ));
  }

  displayMain(){
    if(this.state.nWrong !== this.props.maxWrong && this.state.nCorrect !== this.state.answer.length){
      return this.generateButtons();
    } else if (this.state.nCorrect === this.state.answer.length) {
      return 'You win!';
    } else {
      return `You lose! The word was ${this.state.answer}.`
    }
  }

  restartGame(){
    let hangWord = randomWord();
    this.setState({ nWrong: 0, nCorrect: 0, guessed: new Set(), answer: hangWord });
  }

  /** render: render game */
  render() {
    return (
      <div className='Hangman'>
        <h1>Hangman</h1>
        <img src={this.props.images[this.state.nWrong]} alt={`${this.state.nWrong}/${this.props.maxWrong}`} />
        <p>Number wrong: {this.state.nWrong}</p>
        <p className='Hangman-word'>{ this.guessedWord() }</p>
        <p className='Hangman-btns'>{ this.displayMain() }</p>
        <br />
        {(this.state.nWrong === this.props.maxWrong || this.state.nCorrect === this.state.answer.length)
        ? <button onClick={this.restartGame}>Restart Game</button>
        : null }
      </div>
    );
  }
}

export default Hangman;
