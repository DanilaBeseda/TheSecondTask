import React, { useCallback, useState } from 'react';
import Controls from "./components/controls";
import List from "./components/list";
import Layout from "./components/layout";
import Basket from './components/basket';

/**
 * Приложение
 * @param store {Store} Состояние с действиями
 */
function App({ store }) {
  const [popupVsbl, setPopupVsbl] = useState(false)
  console.log('App');

  const callbacks = {
    onClickBasket: useCallback(() => setPopupVsbl(prev => !prev), [setPopupVsbl]),
    onAddGoods: useCallback((code) => store.onAddGoods(code), [store])
  }

  return (
    <Layout head={<h1>Приложение на чистом JS</h1>}>
      <Controls
        items={store.getState().items}
        onClickBasket={callbacks.onClickBasket} 
      />
      <List 
        items={store.getState().items}
        onAddGoods={callbacks.onAddGoods}
      />
      {popupVsbl && <Basket 
        items={store.getState().items} 
        onClickBasket={callbacks.onClickBasket} 
      />}
    </Layout>
  );
}

export default App;