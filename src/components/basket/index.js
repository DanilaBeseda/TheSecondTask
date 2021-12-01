import React from "react";
import propTypes from 'prop-types';
import ItemInfo from '../ItemInfo';
import './styles.css';

function Basket({ basket, sumOfBasket, onClickBasket }) {
   console.log('Basket')

   return (
      <div className='bcg'>
         <div className='Popup'>

            <div className='Popup__title'>
               <h3>Корзина</h3>
               <button onClick={onClickBasket}>Закрыть</button>
            </div>

            <ul className='List'>{basket.map(item => (
               <li className='List__item Item' key={item.code}>
                  <ItemInfo item={item} />
                  <div className='Item__count'>{item.count} шт</div>
               </li>
            ))}

               <b><li className='Item'>
                  <div className='Item__total'>Итого</div>
                  <div className='Item__price'>
                     {new Intl.NumberFormat('ru-RU').format(sumOfBasket[0])} ₽
                  </div>
                  <div className='Item__count'>
                     {sumOfBasket[1]} шт
                  </div>
               </li></b>
            </ul>

         </div>
      </div>
   );
}

Basket.propTypes = {
   basket: propTypes.arrayOf(propTypes.object).isRequired,
   sumOfBasket: propTypes.array.isRequired,
   onClickBasket: propTypes.func.isRequired
}

Basket.defaultProps = {
   basket: [],
   sumOfBasket: [],
   onClickBasket: () => { }
}

export default Basket;