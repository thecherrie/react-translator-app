import React from 'react';
import './textarea.css';

class TextArea extends React.Component {

    constructor() {
        super();

        this.state ={}
    }

    render() {
        const { readonly } = this.props;
        return(
            <textarea className={this.props.className} readonly={readonly}>
                
            </textarea>
        );
    }

}
export default TextArea;