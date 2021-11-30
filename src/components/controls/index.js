import React from "react";
import propTypes from 'prop-types';
import plural from 'plural-ru';
import './styles.css';

function Controls({ basket, onClickBasket }) {
  console.log('Controls');
  return (
    <div className='Controls'>
      <div className='Controls__info'>В корзине: <b>
        {basket.length
          ? `${basket.length} ${plural(basket.length, 'товар', 'товара', 'товаров')} 
          / ${new Intl.NumberFormat('ru-RU').format(basket.reduce((p, c) => p + c.price, 0))} ₽`
          : 'пусто'}
      </b></div>
      <button onClick={onClickBasket}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  basket: propTypes.arrayOf(propTypes.object).isRequired,
  onClickBasket: propTypes.func.isRequired
}

Controls.defaultProps = {
  basket: [],
  onClickBasket: () => { }
}

export default React.memo(Controls);