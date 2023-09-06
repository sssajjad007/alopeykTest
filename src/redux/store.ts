import { configureStore } from '@reduxjs/toolkit';
import { useDispatch as useAppDispatch, useSelector as useAppSelector } from 'react-redux';

let flipperMiddlewares: any = null;

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  flipperMiddlewares = createDebugger();
}
import appReducer from './slices/app';
import orderReducer from './slices/order';
const store = configureStore({
  reducer: {
    app: appReducer,
    order: orderReducer,
  },
  middleware: (getDefaultMiddleware) =>
    __DEV__ ? getDefaultMiddleware().concat(flipperMiddlewares) : getDefaultMiddleware(),
});

const { dispatch } = store;

const useSelector = useAppSelector;

const useDispatch = () => useAppDispatch();

export { store, dispatch, useSelector, useDispatch };
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
