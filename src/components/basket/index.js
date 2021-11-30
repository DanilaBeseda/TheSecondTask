import React from "react";
import propTypes from 'prop-types';
import ItemInfo from '../ItemInfo';
import './styles.css';

function Basket({ basket, onClickBasket }) {
   console.log('Basket')

   function conversionBasketItems() {
      const arr = []

      basket.forEach(i => {
         const index = arr.findIndex(j => j.code === i.code)

         if (index !== -1) {
            arr[index].count++
         } else {
            i.count = 1
            arr.push(i)
         }
      })

      return arr
   }

   return (
      <div className='bcg'>
         <div className='Popup'>

            <div className='Popup__title'>
               <h3>Корзина</h3>
               <button onClick={onClickBasket}>Закрыть</button>
            </div>

            <ul className='List'>{conversionBasketItems().map(item => (
               <li className='List__item Item' key={item.code}>
                  <ItemInfo item={item} />
                  <div className='Item__count'>{item.count} шт</div>
               </li>
            ))}

               <b><li className='Item'>
                  <div className='Item__total'>Итого</div>

                  <div className='Item__price'>
                     {new Intl.NumberFormat('ru-RU').format(basket.reduce((p, c) => p + c.price, 0))} ₽
                  </div>

                  <div className='Item__count'>
                     {basket.length} шт
                  </div>
               </li></b>
            </ul>

         </div>
      </div>
   );
}

Basket.propTypes = {
   basket: propTypes.arrayOf(propTypes.object).isRequired,
   onClickBasket: propTypes.func.isRequired
}

Basket.defaultProps = {
   basket: [],
   onClickBasket: () => { }
}

export default Basket;