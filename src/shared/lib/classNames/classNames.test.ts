import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with classname', () => {
        const expected = 'classname';
        expect(classNames('classname', {}, [])).toBe(expected);
    });
    test('with mods additional class', () => {
        const expected = 'classname cls1 cls2 hovered';
        expect(classNames('classname', { hovered: true }, ['cls1', 'cls2'])).toBe(expected);
    });
    test('with mods additional class', () => {
        const expected = 'classname hovered';
        expect(classNames('classname', { hovered: true }, [])).toBe(expected);
    });
    test('with mods false additional class', () => {
        const expected = 'classname cls1 cls2 hovered';
        expect(classNames('classname', { hovered: true, clicked: false }, ['cls1', 'cls2']))
            .toBe(expected);
    });
    test('with mods undefined additional class', () => {
        const expected = 'classname cls1 cls2 clicked';
        expect(classNames('classname', { hovered: undefined, clicked: true }, ['cls1', 'cls2']))
            .toBe(expected);
    });
});
