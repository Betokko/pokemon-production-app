import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('class1')).toBe('class1');
    });

    test('with additional class', () => {
        expect(classNames(
            'class1',
            ['class4', 'class5'],
            { hovered: true, scrollable: true },
        )).toBe('class1 class4 class5 hovered scrollable');
    });

    test('with additional class', () => {
        expect(classNames(
            'class1',
            ['class4', 'class5'],
            { hovered: true, scrollable: false },
        )).toBe('class1 class4 class5 hovered');
    });

    test('with additional class', () => {
        expect(classNames(
            'class1',
            ['class4', 'class5'],
            { hovered: true, scrollable: undefined },
        )).toBe('class1 class4 class5 hovered');
    });
});
