import React from "react";
import propTypes from 'prop-types';
import Item from "../item";
import './styles.css';

function List({items, onAddGoods}){
  console.log('List');
  return (
    <div className='List'>{items.map(item =>
      <div className='List__item' key={item.code}>
        <Item item={item} onAdd={onAddGoods}/>
      </div>
    )}
    </div>
  )
}

List.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
  onAddGoods: propTypes.func.isRequired
}

List.defaultProps = {
  items: [],
  onAddGoods: () => {}
}

export default React.memo(List);