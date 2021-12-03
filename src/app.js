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
  console.log('App', store.getState());

  const [popupVsbl, setPopupVsbl] = useState(false)
  const sumOfBasket = useMemo(() => store.getSumOfBasket(), [store.getState().basket])

  const callbacks = {
    onClickBasket: useCallback(() => setPopupVsbl(prev => !prev), [setPopupVsbl]),
    onAddGoods: useCallback((item) => store.addGoods(item), [store]),
  }

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