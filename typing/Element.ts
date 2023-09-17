import { Div } from "./style-key/div";

//tag
export class DOMElement<T extends DOMTag = "div"> {
    tag: DOMTag;
    id?: string;
    class?: DOMClass;
    style?: Array<DOMStyle>;
    innerText?: string;
    children?: DOMElement<T>[];
}

export interface DOMTagKey {
    div: Div;
}
export type DOMTag = keyof DOMTagKey;

// class
export interface DOMClass<T extends keyof DOMTagKey = "div"> {
    name: string;
    style: Array<DOMStyle<T>>;
}

// style
export interface DOMStyle<T extends DOMTag = "div", K extends keyof DOMTagKey[T] = keyof DOMTagKey[T]> {
    key: StyleKey<T>;
    value: StyleValue<T, K> | Array<StyleValue<T, K>>;
}

// style-key & style-value
export type StyleKey<T extends DOMTag> = keyof DOMTagKey[T]
export type StyleValue<T extends DOMTag, K extends keyof DOMTagKey[T]> = DOMTagKey[T][K]
