import { useSelector } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import { TypedRootState } from "../store/store";

export const useTypedSelector: TypedUseSelectorHook<TypedRootState> = useSelector;
