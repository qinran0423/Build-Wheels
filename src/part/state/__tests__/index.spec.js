const { createStore } = require('../index')

it('store统一存储转状态，commit()修改状态', () => {
  // 模拟一个函数
  const mockFn = jest.fn();

  const store = createStore({
    state: { num: 1 },
    mutations: {
      add(state) {
        state.num ++
      }
    }
  })

  // 添加副作用函数
  store.effect(mockFn);
  store.commit('add');

  const calls = mockFn.mock.calls;

  expect(calls.length).toBe(1);
  expect(store.state.num).toBe(2)
})