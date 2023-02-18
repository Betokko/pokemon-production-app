import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('class1')).toBe('class1');
    });

    test('with additional class', () => {
        expect(classNames(
            'class1',
            { hovered: true, scrollable: true },
            ['class4', 'class5'],
        )).toBe('class1 class4 class5 hovered scrollable');
    });

    test('with additional class', () => {
        expect(classNames(
            'class1',
            { hovered: true, scrollable: false },
            ['class4', 'class5'],
        )).toBe('class1 class4 class5 hovered');
    });

    test('with additional class', () => {
        expect(classNames(
            'class1',
            { hovered: true, scrollable: undefined },
            ['class4', 'class5'],
        )).toBe('class1 class4 class5 hovered');
    });
});
