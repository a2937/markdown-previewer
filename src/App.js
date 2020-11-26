import React, { Component } from 'react';
import DomPurify from 'dompurify'
import marked from 'marked'
import 'marked'
import './App.css';
import notebook from './notebook.jpg';
class App extends Component {

  constructor() {

    super();

    this.state = {

      body: '# h1 \n ## h2 '

    };



    this.handleChange = this.handleChange.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleChange(event) {

    this.setState({ body: event.target.value });
    var rawText = event.target.value;
    document.getElementById("preview").innerHTML = this.parseMarkdown(rawText);
  }

  parseMarkdown(rawText) {
    var markdown = marked(rawText).replace(/\r?\n/g, "<br />");
    return DomPurify.sanitize(markdown);
  }

  handleSubmit(event) {

    console.log(this.state);

    event.preventDefault();
  }

  componentDidMount() {
    document.getElementById("preview").innerHTML = this.parseMarkdown(this.state.body);
  }

  render() {

    return (

      <div id="body">

        <h1>Markdown previewer</h1>
        <p>This app lets you render markdown into html.</p>
        <p>Learn more about markdown <a href="https://www.markdowntutorial.com/">here.</a></p>
        <img src={notebook} alt="notebook" height="15%" width="15%" />
        <br />
        <strong>Markdown:</strong>
        <br />

        <textarea id="editor"

          value={this.state.body}

          onChange={this.handleChange} />
        <br></br>
        <strong>Preview:</strong>
        <p id="preview" >

        </p>




      </div>

    );

  }

}


export default App;
