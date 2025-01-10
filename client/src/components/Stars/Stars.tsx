import React from 'react';

export type StarsProps = {
  numStars: number;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * Prop `numStars` should be between 0 and 5, including half steps.
 */
const Stars = ({ numStars, ...props }: StarsProps) => {
  const numFullStars = Math.floor(numStars);
  const numEmptyStars = 5 - Math.ceil(numStars);
  const shouldAddHalfStar = numFullStars + numEmptyStars < 5;

  return (
    <div {...props}>
      {[...Array(numFullStars)].map((_, i) => (
        <span className="material-icons" key={i}>
          star
        </span>
      ))}
      {shouldAddHalfStar && <span className="material-icons">star_half</span>}
      {[...Array(numEmptyStars)].map((_, i) => (
        <span className="material-icons" key={i}>
          star_outline
        </span>
      ))}
    </div>
  );
};

export default Stars;
