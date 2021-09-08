import './App.css';
import React from 'react';
import TextArea from './components/TextArea/textarea.component';
import TextAreaZone from './components/TextAreaZone/textAreaZone.component';

class App extends React.Component {

  
  constructor() {
    super();

    this.state = {
      textareaOpened: false,
    }
  }

componentDidMount() {
  fetch("https://nlp-translation.p.rapidapi.com/v1/translate?text=Hello%2C%20world!!&to=es&from=en", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "nlp-translation.p.rapidapi.com",
		"x-rapidapi-key": "5b76ed2434mshd0bf91c42b04a64p14316ajsn46a65e936aaa"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
}

render() {
  return(
    <div>
      <div className="topWhiteBar">
        <h1>Translator</h1>
      </div>
      <div className="bg-strip">
        <div className="textAreaZoneWrapper">
          <TextAreaZone />
        </div>
      </div>
    </div>
  );
}

}

export default App;