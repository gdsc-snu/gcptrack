import React, { useEffect, useState } from 'react';
import SearchSuggestion from '../SearchSuggestion/SearchSuggestion';
import './SearchPage.css'
import SearchImage from "../../../Assets/Images/google-30days_img.jpeg"
import SearchIcon from "../../../Assets/Icons/search-icon.png"

const SearchPage = () => {
    const [searchInput, setSearchInput] = useState("");
    const [institutions, setInstitutions] = useState([{}]);

    function onFullSuggestion(suggestion: string) {
        setSearchInput(suggestion);
    }

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(event.target.value);

        fetch(`/viewer/search-institute?name=${event.target.value}`)
            .then((res: Response) => {
                res.json().then((data) => {
                    setInstitutions(data)
                    console.log(data);
                })
            })
    }
    return (
        <div className="search_page">
            <div className="search_image">
                <img src={SearchImage} />
            </div>
            <div className="search_box">
                <div className="input-container">
                    <input className="input_text" type="search" placeholder="Search College Name" value={searchInput} onChange={onChangeInput} />
                    <img className="input_icon" src={SearchIcon} alt=" search icon" />
                </div>
            </div>
            <div className='scroller'>
                <ul className="suggestions-list">
                    {institutions.map((val: any) => {
                        return (
                            <SearchSuggestion suggestion={val?.details?.name} onFullSuggestion={onFullSuggestion} />
                        )
                    })}
                </ul>
            </div>
        </div >
    );
};

export default SearchPage;