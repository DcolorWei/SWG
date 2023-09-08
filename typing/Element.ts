//tag
export class DOMElement<T extends DOMTag = DOMTag> {
    tag: DOMTag;
    id?: string;
    class?: Array<DOMClass>;
    style?: Array<DOMStyle>;
    innerText?: string;
    children?: DOMElement<T>[];
}

export interface DOMTagKey {
    div: {
        width: "100vw"|"10vh",
        height: "100vh",
        display: "flex" | "block" | "inline-block" | "inline",
    },
}
export type DOMTag = keyof DOMTagKey;

// class
export interface DOMClass {
    name: string;
    style: Array<DOMStyle>;
}

// style
export interface DOMStyle<T extends DOMTag = DOMTag, K extends keyof DOMTagKey[T] = keyof DOMTagKey[T]> {
    key: StyleKey<T>;
    value: StyleValue<T, K>;
}

// style-key & style-value
export type StyleKey<T extends DOMTag> = keyof DOMTagKey[T]
export type StyleValue<T extends DOMTag, K extends keyof DOMTagKey[T]> = DOMTagKey[T][K]
