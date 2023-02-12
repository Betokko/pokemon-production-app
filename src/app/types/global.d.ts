declare module '*.scss' {
    type IClassNames = {
        [className: string]: string
    }
    const classNames: IClassNames;
    export = classNames;
}
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare const __IS_DEV__: boolean;
