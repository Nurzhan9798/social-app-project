import { useDispatch, useSelector } from 'react-redux';
import { counterAction } from 'entity/Counter/model/slices/counterSlice';
import { getCounterValue } from 'entity/Counter/model/selectors/getCounterValue/getCounterValue';
import { useTranslation } from 'react-i18next';

interface CounterProps {
    className?: string;
}

export const Counter = (props: CounterProps) => {
    const { className } = props;
    const dispatch = useDispatch();
    const value = useSelector(getCounterValue);
    const { t } = useTranslation();

    const onClickIncrement = () => {
        dispatch(counterAction.increment());
    };

    const onClickDecrement = () => {
        dispatch(counterAction.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">
                {t('value')}
                {' '}
                -
                {value}
            </h1>
            <button
                type="button"
                data-testid="increment-btn"
                onClick={onClickIncrement}
            >
                {t('increment')}
            </button>
            <button
                type="button"
                data-testid="decrement-btn"
                onClick={onClickDecrement}
            >
                {t('decrement')}
            </button>
        </div>
    );
};
