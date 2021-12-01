import React, { useCallback, useMemo, useState } from 'react';
import Controls from "./components/controls";
import List from "./components/list";
import Layout from "./components/layout";
import Basket from './components/basket';

/**
 * Приложение
 * @param store {Store} Состояние с действиями
 */
function App({ store }) {
  console.log('App');

  const [popupVsbl, setPopupVsbl] = useState(false)

  const callbacks = {
    onClickBasket: useCallback(() => setPopupVsbl(prev => !prev), [setPopupVsbl]),
    onAddGoods: useCallback((item) => store.onAddGoods(item), [store])
  }

  const sumOfBasket = useMemo(() => {
    return [
      store.getState().basket.reduce((p, c) => p + c.price * c.count, 0), //price
      store.getState().basket.reduce((p, c) => p + c.count, 0)            //count
    ]
  }, [store.getState()])

  return (
    <Layout head={<h1>Магазин</h1>}>
      <Controls
        sumOfBasket={sumOfBasket}
        onClickBasket={callbacks.onClickBasket}
      />
      <List
        items={store.getState().items}
        onAddGoods={callbacks.onAddGoods}
      />
      {popupVsbl && <Basket
        basket={store.getState().basket}
        sumOfBasket={sumOfBasket}
        onClickBasket={callbacks.onClickBasket}
      />}
    </Layout>
  );
}

export default App;