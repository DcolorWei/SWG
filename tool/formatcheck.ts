import { DOMClass, DOMElement } from "../typing/Element";

export function formatCheck(dom: DOMElement, idList: Array<string> = []) {
    // 检查是否有相同的id
    if (dom.id) {
        if (idList.includes(dom.id)) {
            throw new Error(`id存在唯一性限制下的重复：${dom.id}`);
        }
        idList.push(dom.id);
    }
    // 检查是否有相同的class, 判断方法为children中是否有相同的classname但是style不同
    if (dom.children) {
        const classList: Array<DOMClass> = [];
        for (const child of dom.children) {
            if (child.class) {
                for (const cls of child.class) {
                    const index = classList.findIndex(item => item.name === cls.name);
                    if (index === -1) {
                        classList.push(cls);
                    } else {
                        if (JSON.stringify(classList[index].style) !== JSON.stringify(cls.style)) {
                            console.log(classList[index].style, cls.style);
                            throw new Error(`class存在样式不一致冲突：${cls.name}`);
                        }
                    }
                }
                formatCheck(child, idList);
            }
        }
    }

    // 强制格式规定：一个元素含有innerText属性时，不可含有子元素
    if (dom.innerText && dom.children) {
        throw new Error(`元素的innerText和children是不可共存的：${dom.tag}`);
    }
}
