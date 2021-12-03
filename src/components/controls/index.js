import React from "react";
import propTypes from 'prop-types';
import plural from 'plural-ru';
import './styles.css';

function Controls({ sumOfBasket, onClickBasket }) {
  console.log('Controls');

  return (
    <div className='Controls'>
      <div className='Controls__info'>В корзине: <b>
        {sumOfBasket[0]
          ? `${sumOfBasket[1]} ${plural(sumOfBasket[1], 'товар', 'товара', 'товаров')} 
          / ${new Intl.NumberFormat('ru-RU').format(sumOfBasket[0])} ₽`
          : 'пусто'}
      </b></div>
      <button onClick={onClickBasket}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  onClickBasket: propTypes.func.isRequired,
  sumOfBasket: propTypes.array.isRequired
}

Controls.defaultProps = {
  onClickBasket: () => { },
  sumOfBasket: []
}

export default React.memo(Controls);