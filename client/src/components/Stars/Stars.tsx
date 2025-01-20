import React from 'react';

export type StarsProps = {
  numStars: number;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * Prop `numStars` should be between 0 and 5, including half steps.
 */
const Stars = ({ numStars = 0, ...props }: StarsProps) => {
  const validNumStars = isNaN(numStars) ? 0 : Math.max(0, Math.min(numStars, 5));
  const numFullStars = Math.floor(validNumStars);
  const numEmptyStars = 5 - Math.ceil(validNumStars);
  const shouldAddHalfStar = numFullStars + numEmptyStars < 5;

  return (
    <div dir="ltr" {...props}>
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
