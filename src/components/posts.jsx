import React from "react";
import queryString from 'query-string'

// const Posts = (props) => { -- P23M@# --
const Posts = ({ match, location }) => {  // Recuerda como funciona la destructuracion, usando esa logica podemos poner { propertie } 
  // para asi evitar poner 'props' -- P23M@# -- como el caso de arriba
  // const year = props.match.params.year
  // const month = props.match.params.month
  const year = match.params.year
  const month = match.params.month
  
  // location.search retorna la url actual
  const resultQueryString = queryString.parse(location.search) // Retorna un object en el cual sus propiedades son los query string de la url actual
  const sortBy = resultQueryString.sortBy // Retorna string
  const approved = resultQueryString.approved // Retorna string
  console.log(approved, sortBy) // Al retornar string si queremos usar esto para hacer validaciones por ejemplo hay que castear las variables y convertirlas
  // en el caso de 'approved' a boolean
  return (
    <div>
      <h1>Posts</h1>
      Year: {year}, Month: {month ? month : 'No disponible'}
    </div>
  );
};

export default Posts;
