/* eslint-disable react/prop-types */

const Square = ({value, onSquareClick}) => {

  return (
    <>
      <button
        className="border bg-white border-gray-400 h-12 w-12 m-1 leading-9 text-lg font-bold"
        onClick={onSquareClick}
      >
        {value}
      </button>
    </>
  );
};

export default Square;
