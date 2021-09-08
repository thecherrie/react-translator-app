import React from 'react';
import './optionsMenu.style.css';

class OptionsMenu extends React.Component {

    constructor() {
        super();
        this.state = {}
    }

    render() {
        const {headerLanguage, openLanguageWindow, isSelected} = this.props;
        return(
            <div
                style={this.props.style} 
                className={`optionsMenuWrapper ${this.props.side}`}>
                <ul>
                    <li className={this.props.isSelected ? "isSelected" : null} onClick={openLanguageWindow}>{headerLanguage}</li>
                </ul>
            </div>
        );
    }

}

export default OptionsMenu;