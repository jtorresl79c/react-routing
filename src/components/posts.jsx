import React from "react";

// const Posts = (props) => { -- P23M@# --
const Posts = ({ match }) => {  // Recuerda como funciona la destructuracion, usando esa logica podemos poner { propertie } 
  // para asi evitar poner 'props' -- P23M@# -- como el caso de arriba
  // const year = props.match.params.year
  // const month = props.match.params.month
  const year = match.params.year
  const month = match.params.month
  return (
    <div>
      <h1>Posts</h1>
      Year: {year}, Month: {month ? month : 'No disponible'}
    </div>
  );
};

export default Posts;
