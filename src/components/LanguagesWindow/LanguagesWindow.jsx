import React from 'react';
import './LanguagesWindow.style.css';

const LanguagesWindow = (props) => {
    const { languages, changeSelectedLanguage, isSelected } = props;

    return(
        props.open ? 
        <div className={"languageWindowWrapper"}>
            <input placeholder="Search languages" onChange={props.onLanguageSearch} />
            <div className="languageWindow">
                <ul className="languagesList">
                    {
                        languages.map(language => {
                            return <li onClick={() => changeSelectedLanguage(language)} >{language}</li>
                        })
                    }
                </ul>
            </div>
        </div> 
        
        : null
    );
}

export default LanguagesWindow;