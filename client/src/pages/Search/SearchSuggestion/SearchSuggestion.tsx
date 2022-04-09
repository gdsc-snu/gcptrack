import "./SearchSuggestion.css"
import ArrowIcon from "../../../Assets/Icons/arrow-left-up.png"

const SearchSuggestion = (props: { suggestion: any; onFullSuggestion: any; }) => {
    const { suggestion, onFullSuggestion } = props
    const onClickfullSuggestion = () => {
        onFullSuggestion(suggestion)
    }
    return (
        <li className="suggestion-item" onClick={onClickfullSuggestion}>
            <p className="suggestion-name">{suggestion}</p>
            <img className="arrowicon" src={ArrowIcon} alt="arrowIcon" />
        </li>
    )
};
export default SearchSuggestion;
