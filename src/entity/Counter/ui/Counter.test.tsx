import { renderComponent } from 'shared/lib/test/renderComponent/renderComponent';
import { screen } from '@testing-library/react';
import { Sidebar } from 'widget/Sidebar';
import { userEvent } from '@storybook/testing-library';
import { Counter } from './Counter';

describe('Sidebar', () => {
    test('Test render', () => {
        renderComponent(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('10');
    });
    test('increment', () => {
        renderComponent(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('11');
    });

    test('decrement', () => {
        renderComponent(<Counter />, {
            initialState: { counter: { value: 10 } },
        });
        userEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('9');
    });
});
