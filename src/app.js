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

  const callbacks = {
    onClickBasket: useCallback(() => setPopupVsbl(prev => !prev), [setPopupVsbl]),
    onAddGoods: useCallback((item) => store.addGoods(item), [store]),
  }

  return (
    <Layout head={<h1>Магазин</h1>}>
      <Controls
        sumOfBasket={store.getState().sumOfBasket}
        onClickBasket={callbacks.onClickBasket}
      />
      <List
        items={store.getState().items}
        onAddGoods={callbacks.onAddGoods}
      />
      {popupVsbl && <Basket
        basket={store.getState().basket}
        sumOfBasket={store.getState().sumOfBasket}
        onClickBasket={callbacks.onClickBasket}
        onAdd={callbacks.onAddGoods}
      />}
    </Layout>
  );
}

export default App;