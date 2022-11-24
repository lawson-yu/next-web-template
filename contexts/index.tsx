import { useReducer, createContext, useContext } from 'react';
import type { ReactNode, Dispatch, PropsWithChildren } from 'react';
import reducer from './reducer';
import type { State } from './initialState';
import initialState from './initialState';
import type { Action } from './actions';

interface IProps extends PropsWithChildren {
  children: ReactNode;
  userInfo: AUTHORIZATION_API.CurrentUser;
}

interface GlobalDispatch {
  dispatch: Dispatch<Action>;
}

const GlobalStateContext = createContext<State>(initialState);
const DispatchContext = createContext<GlobalDispatch>({} as GlobalDispatch);
function Provider(props: IProps) {
  const { children, userInfo } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DispatchContext.Provider
      value={{
        dispatch,
      }}
    >
      <GlobalStateContext.Provider value={{ ...state, userInfo }}>
        {children}
      </GlobalStateContext.Provider>
    </DispatchContext.Provider>
  );
}

export const useGlobalState = () => {
  const context = useContext(GlobalStateContext);

  if (typeof context === 'undefined') {
    throw new Error('useGlobalState 必须在 GlobalStateContext 下使用');
  }

  return context;
};

export const useDispatch = () => {
  const context = useContext(DispatchContext);

  if (typeof context === 'undefined') {
    throw new Error('useDispatch 必须在 DispatchContext 下使用');
  }

  return context;
};

export default Provider;
