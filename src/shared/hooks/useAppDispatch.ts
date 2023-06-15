import { useDispatch } from 'react-redux';
import { AppDispatch } from 'app/providers/StoreProvider/config/storeConfig';

export const useAppDispatch: () => AppDispatch = useDispatch;
