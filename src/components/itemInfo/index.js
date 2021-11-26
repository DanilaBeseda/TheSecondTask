import React from 'react';
import propTypes from 'prop-types';
import './styles.css'

function ItemInfo({item}) {
   return(
      <>
         <div className='Item__number'>{item.code}</div>
         <div className='Item__title'>{item.title}</div>
         <div className='Item__price'>{new Intl.NumberFormat('ru-RU').format(item.price)} ₽</div>
      </>
   )
}

ItemInfo.propTypes = {
   item: propTypes.object.isRequired
}

export default ItemInfo;