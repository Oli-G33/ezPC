import { BsStar, BsFillStarFill } from 'react-icons/bs';

const Rating = ({ rating, onClick, style }) => {
  return (
    <div className="rating-style">
      <>
        {[...Array(5)].map((_, i) => (
          <span key={i} onClick={() => onClick(i)} style={style}>
            {rating > i ? (
              <BsFillStarFill fontSize="15px" />
            ) : (
              <BsStar fontSize="15px" />
            )}
          </span>
        ))}
      </>
    </div>
  );
};

export default Rating;
