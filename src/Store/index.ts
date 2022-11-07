import { TypedUseSelectorHook, useSelector } from 'react-redux';
import {
   combineReducers,
   configureStore,
   isRejectedWithValue,
   Middleware,
} from '@reduxjs/toolkit';
import type { PreloadedState } from '@reduxjs/toolkit';

import { api } from 'Services';

const rootReducer = combineReducers({
   [api.reducerPath]: api.reducer,
});

export const middlewareErrorToast: Middleware = () => next => action => {
   if (isRejectedWithValue(action)) {
      // eslint-disable-next-line no-console
      console.log(action.payload);
   }

   return next(action);
};

// eslint-disable-next-line no-use-before-define
export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
   configureStore({
      reducer: rootReducer,
      middleware: getDefaultMiddleware =>
         getDefaultMiddleware({ serializableCheck: false })
            .concat(api.middleware)
            .concat(middlewareErrorToast),
      preloadedState,
   });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
