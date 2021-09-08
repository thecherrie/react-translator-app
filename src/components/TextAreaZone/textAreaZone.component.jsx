import React from 'react';
import './style.css';
import TextArea from '../TextArea/textarea.component';
import OptionsMenu from '../OptionsMenu/optionsMenu';
import LanguagesWindow from '../LanguagesWindow/LanguagesWindow';
import { HiSwitchHorizontal } from 'react-icons/hi';

class TextAreaZone extends React.Component {

    constructor() {
        super();
        this.state = {
            LanguagesWindowOpen: false,
            currentlySelectingNative: true,
            selectedNativeLanguage: "English",
            selectedForeignLanguage: "Spanish",
            languages: ["English", "Spanish", "French"],
            filteredLanguages: ["English", "Spanish", "French"]
        }
    }

    toggleLanguageWindow = () => {
        this.setState({
            LanguagesWindowOpen: !this.state.LanguagesWindowOpen,
            currentlySelectingNative: true,
        })
    }
    toggleForeignLanguageWindow = () => { 
        this.setState({
            LanguagesWindowOpen: !this.state.LanguagesWindowOpen,
            currentlySelectingNative: false, //because you're currently selecting foreign language
        })
    }

    onLanguageSearch = (e) => {
        const {languages, filteredLanguages} = this.state;
        this.setState({ 
            filteredLanguages: languages.filter((language) => {
                return language.toLowerCase().includes(e.target.value);
            })
         })
         console.log( filteredLanguages );
    }

    changeSelectedLanguage = (language) => {
        const { currentlySelectingNative, selectedNativeLanguage, selectedForeignLanguage } = this.state;
        
        if( currentlySelectingNative ) {
            this.setState({ 
                selectedNativeLanguage: language,
                LanguagesWindowOpen: false
            }) 
        }else{
            this.setState({ 
                selectedForeignLanguage: language,
                LanguagesWindowOpen: false
            }) 
        }

    }

    render() {
        const {
            LanguagesWindowOpen,
            currentlySelectingNative,
            selectedNativeLanguage,
            selectedForeignLanguage,
            languages,
            filteredLanguages
        } = this.state;

        return(
            <div className="textAreaZone">
                <div className="menuWrapper">
                    <OptionsMenu 
                        isSelected={LanguagesWindowOpen && currentlySelectingNative}
                        headerLanguage={selectedNativeLanguage}
                        style={{ "border-top-left-radius": "20px" }}
                        side="" 
                        languages={languages} 
                        openLanguageWindow={this.toggleLanguageWindow}
                    />
                    <HiSwitchHorizontal onClick={() => console.log("d")} className="icon" size="3em"/>
                    <OptionsMenu
                        isSelected={LanguagesWindowOpen && !currentlySelectingNative}
                        headerLanguage={selectedForeignLanguage}
                        openLanguageWindow={this.toggleForeignLanguageWindow}
                        style={{ 
                            "border-top-right-radius": "20px",
                            "justify-content": "flex-end",
                         }} 
                        side="" 
                    />
                </div>
                <LanguagesWindow 
                    open={this.state.LanguagesWindowOpen} 
                    languages={filteredLanguages} 
                    onLanguageSearch={this.onLanguageSearch}
                    changeSelectedLanguage={(language) => this.changeSelectedLanguage(language)} 
                />
                <div className="textAreaWrapper">
                    <TextArea className="left"/>
                    <TextArea className="right" readonly="true" />
                </div>
            </div>
        );
    }
}

export default TextAreaZone;