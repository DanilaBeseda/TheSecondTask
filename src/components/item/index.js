import React, { useCallback, useState } from "react";
import propTypes from 'prop-types';
import ItemInfo from '../ItemInfo';
import './styles.css';

function Item({ item, onAdd }) {
  console.log('Item', item.title);

  return (
    <div className='Item'>
      <ItemInfo item={item} />
      <div className='Item__actions'>
        <button onClick={() => onAdd(item)}>
          Добавить
        </button>
      </div>
    </div>
  )
}

Item.propTypes = {
  item: propTypes.object.isRequired,
  onAdd: propTypes.func.isRequired,
}

Item.defaultProps = {
  onAdd: () => { }
}

export default React.memo(Item);