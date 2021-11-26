import React from "react";
import propTypes from 'prop-types';
import ItemInfo from '../ItemInfo';
import './styles.css';

function Basket({items, onClickBasket}) {
   console.log('Basket')
   return (
      <div className='bcg'>
         <div className='Popup'>

            <div className='Popup__title'>
               <h3>Корзина</h3>
               <button onClick={onClickBasket}>Закрыть</button>
            </div>

            <ul className='List'>{items.map(item => {
               if(item.count) {
                  return <li className='List__item Item' key={item.code}>
                     <ItemInfo item={item}/>
                     <div className='Item__count'>{item.count} шт</div>
                  </li>
               }
               })}

               <b><li className='Item'>
                     <div className='Item__total'>Итого</div>

                     <div className='Item__price'>
                        {new Intl.NumberFormat('ru-RU').format(items.reduce((p, c) => (
                           c.count ? p + c.count * c.price : p
                        ), 0))}
                        ₽
                     </div>
                     
                     <div className='Item__count'>
                        {items.reduce((p, c) => c.count ? p + c.count : p, 0)} шт
                     </div>
               </li></b>
            </ul>

         </div>
      </div>
   );
}

Basket.propTypes = {
   items: propTypes.arrayOf(propTypes.object).isRequired,
   onClickBasket: propTypes.func.isRequired
}

Basket.defaultProps = {
   item: [],
   onClickBasket: () => {}
}

export default Basket;