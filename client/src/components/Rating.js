import { BsStar, BsFillStarFill } from 'react-icons/bs';

const Rating = ({ rating, onClick, style }) => {
  return (
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
  );
};

export default Rating;
