import React, { Component } from 'react';
import DomPurify from 'dompurify';
import { marked } from 'marked';
import './Previewer.css';
import Navbar from './components/Navbar';
class Previewer extends Component {

  constructor() {

    super();

    this.state = {

      body: '# h1 \n ## h2 \n[a](https://commonmark.org/help/tutorial/07-links.html)\n\n `Code`  <pre>```html: console.log("My actual code"); ```</pre> \n  \n - bananas \n - apples \n - muffins \n > Please do not quote me on that \n\n![Markdown symbol](https://commonmark.org/help/images/favicon.png) \n **Extra bold text** ```boolean != true``` \n <pre>```codeblock```</pre> \n '

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
    var markdown = marked(rawText).replace(/  +/g, "<br/>");
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
        <Navbar></Navbar>
        <h1>Markdown previewer</h1>
        <p>This app lets you render markdown into html.</p>
        <p>Learn more about markdown <a href="https://www.markdowntutorial.com/">here.</a></p>
        <br />
        <div className="row">
          <div className="column">
            <strong>Markdown:</strong>
            <br />


            <textarea className="fullContent" id="editor"


              value={this.state.body}

              onChange={this.handleChange} />

          </div>
          <div className="column">
            <strong>Preview:</strong>
            <p id="preview" >
            </p>
          </div>
        </div>

        <br></br>

      </div>
    );
  }
}


export default Previewer;
