import React from "react";
import propTypes from 'prop-types';
import plural from 'plural-ru';
import './styles.css';

function Controls({ items, onClickBasket }) {
  console.log('Controls');
  let goods = 0;
  let total = 0;

  if(items.find(item => item.count)) {
    goods = items.reduce((p, c) => c.count ? p+c.count : p, 0)
    total = new Intl.NumberFormat('ru-RU').format(items.reduce((p, c) => c.count ? p + c.count * c.price : p, 0))
  }

  return (
    <div className='Controls'>
      <div className='Controls__info'>В корзине: <b>
        {items.find(item => item.count) 
            ? `${goods} ${plural(goods, 'товар', 'товара', 'товаров')} / ${total} ₽` 
            : 'пусто'}
      </b></div>
      <button onClick={onClickBasket}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  items: propTypes.arrayOf(propTypes.object).isRequired,
  onClickBasket: propTypes.func.isRequired
}

Controls.defaultProps = {
  items: [],
  onClickBasket: () => {}
}

export default React.memo(Controls);