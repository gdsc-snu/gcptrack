import React, { Component } from 'react';
import SearchSuggestion from '../SearchSuggestion/SearchSuggestion';
import './SearchPage.css'
import SearchImage from "../../../Assets/Images/google-30days_img.jpeg"
import SearchIcon from "../../../Assets/Icons/search-icon.png"
import suggestionsList from '../suggestionsList/suggestionsList';


class SearchPage extends Component {

    state = {
        searchInput: " ",

    }
    onChangeInput = (event: { target: { value: string; }; }) => {
        this.setState({
            searchInput: event.target.value,
        })

    }
    onFullSuggestion = (suggestion: any) => {
        this.setState({ searchInput: suggestion })
    }



    render() {
        const { searchInput } = this.state
        // const { suggestionsList } = this.props
        const filteredList = suggestionsList.filter((each: { suggestion: any }) =>
            each.suggestion.toUpperCase().includes(searchInput.toUpperCase()),
        )


        return (
            <div className="search_page">
                <div className="search_image">
                    <img src={SearchImage} />
                </div>
                <div className="search_box">
                    <div className="input-container">
                        <input className="input_text" type="search" placeholder="Search College Name" value={searchInput} onChange={this.onChangeInput} />
                        <img className="input_icon" src={SearchIcon} alt=" search icon" />
                    </div>
                </div>
                {/* <div className="btn">
                    <button onClick={() => this.onChangeInput.bind(this)}> Search</button>
                </div> */}
                <div className='scroller'>
                    <ul className="suggestions-list">
                        {filteredList.map((each: { id: React.Key | null | undefined; suggestion: any; }) => (
                            <SearchSuggestion
                                key={each.id}
                                suggestion={each.suggestion}
                                onFullSuggestion={this.onFullSuggestion}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default SearchPage;
