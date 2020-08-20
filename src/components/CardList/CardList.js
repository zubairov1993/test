import React from 'react';
import CardProduct from '../CardProduct/CardProduct';

import './CardList.scss'

const CardList = ({posts, onToggleActive}) => {
  const elements = posts.map((item) => {
    const {id, ...itemProps} = item;
    return(
      <CardProduct
       key={id}
       {...itemProps}
       onToggleActive={() => onToggleActive(id)}
      />
    )
  })
  return(
    <div className="card-list">
      {elements}
    </div>
  )
}

export default CardList;