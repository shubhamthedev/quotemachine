import React, { Component } from "react";
import axios from "axios";

class QuotesGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuote: "",
      currentAuthor: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    const getQuotes = async () => {
      const response = await axios.get(
        "https://programming-quotes-api.herokuapp.com/quotes/random"
      );
      this.setState({
        currentQuote: response.data.en,
        currentAuthor: response.data.author,
      });
    };
    getQuotes();
  }
  handleClick(e) {
    e.preventDefault();
    const getQuotes = async () => {
      const response = await axios.get(
        "https://programming-quotes-api.herokuapp.com/quotes/random"
      );
      this.setState({
        currentQuote: response.data.en,
        currentAuthor: response.data.author,
      });
    };
    getQuotes();
  }
  render() {
    return (
      <div id="quote-box">
        <h1 id="text">{this.state.currentQuote}</h1>
        <h2 id="author">&mdash; {this.state.currentAuthor}</h2>
        <button id="new-quote" onClick={this.handleClick}>
          Next Quote &rarr;
        </button>
        <a href="twitter.com/intent/tweet" id="tweet-quote">
          Tweet Quote
        </a>
      </div>
    );
  }
}
export default QuotesGenerator;
