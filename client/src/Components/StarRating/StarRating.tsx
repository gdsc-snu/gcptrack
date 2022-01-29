import './StarRating.css'

const StarRating = () => {
    return (
        <>
            {[...Array(5)].map((index) => {
                index += 1;
                return (
                    <span className="star">&#9733; </span>
                );
            })}
        </>
    );
};

export default StarRating;
