import React from "react";

interface Props {
  movies: any[];
}

export default function Results({ movies }: Props) {
  const texts = movies.map((movie) => {
    let text = `${movie.title} (${movie.year})`;
    return <p key={text}>{text}</p>;
  });

  return (
    <div>
      <p>"Results for..."</p>
      {texts}
    </div>
  );
}
