/**
 * Prop `numStars` should be between 0 and 5, including half steps.
 * @param {{
 *   numStars: number;
 * } & React.HTMLAttributes<HTMLDivElement>} props
 */
const Stars = ({ numStars, ...props }) => {
  const numFullStars = Math.floor(numStars);
  const numEmptyStars = 5 - Math.ceil(numStars);
  const shouldAddHalfStar = numFullStars + numEmptyStars < 5;

  return (
    <div {...props}>
      {Array(numFullStars)
        .fill()
        .map((_, i) => (
          <span className="material-icons" key={i}>
            star
          </span>
        ))}
      {shouldAddHalfStar && <span className="material-icons">star_half</span>}
      {Array(numEmptyStars)
        .fill()
        .map((_, i) => (
          <span className="material-icons">star_outline</span>
        ))}
    </div>
  );
};

export default Stars;
