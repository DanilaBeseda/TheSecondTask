class Store {
  constructor(initState) {
    // Состояние приложения (данные)
    this.state = initState;
    // Подписчики на изменение state
    this.listners = [];
  }

  /**
   * Подписка на изменение state
   * @param callback {Function}
   */
  subscribe(callback) {
    this.listners.push(callback);
    // Возвращаем функцию для отписки
    return () => {
      this.listners = this.listners.filter(item => item !== callback);
    }
  }

  /**
   * Выбор state
   * @return {*}
   */
  getState() {
    return this.state;
  }

  /**
   * Установка state
   * @param newState {*}
   */
  setState(newState) {
    this.state = newState;
    // Оповещаем всех подписчиков об изменении стейта
    for (const lister of this.listners) {
      lister(this.state);
    }
  }

  // Действия приложения.
  // @todo
  // Нужно вынести в отдельный слой, так как Store не определяет конкретную структуру состояния.
  // Может быть как модуль (расширение) для Store

  /**
   * Создание записи
   */
  /* createItem() {
    const code = Math.max(0, ...this.state.items.map(item => item.code)) + 1;
    this.setState({
      items: this.state.items.concat({
        code,
        title: 'Новая запись №' + code
      })
    });
  } */

  /**
   * Удаление записи по её коду
   * @param code
   */
  addGoods(code) {
    const basket = [...this.state.basket]
    const index = basket.findIndex(item => item.code === code)
    const sum = [...this.state.sumOfBasket]

    sum[1]++

    if (index === -1) {
      const item = { ...this.state.items.find(item => item.code === code) }
      item.count = 1
      sum[0] += item.price

      this.setState({ ...this.state, basket: basket.concat(item), sumOfBasket: sum });
    } else {
      basket[index].count++
      sum[0] += basket[index].price

      this.setState({ ...this.state, basket, sumOfBasket: sum })
    }

  }
}

export default Store;