import { DOMElement, DOMTag } from "../typing/Element";
import * as fs from "fs";
import { formatCheck } from "./formatcheck";

import { app } from "../app"

const SPACE_COUNT = 4;
// 通过递归的方式生成代码
function generatehtml(dom: DOMElement<DOMTag>, space = SPACE_COUNT): string {
    let html = "";
    for (let i = 0; i < space; i++) html += " ";
    html += `<${dom.tag}`;
    if (dom.id) {
        html += ` id="${dom.id}"`;
    }
    if (dom.class) {
        html += ` class="${dom.class.map(cls => cls.name).join(" ")}"`;
    }
    if (dom.style) {
        html += ` style="${dom.style.map(style => `${style.key}:${style.value}`).join(";")}"`;
    }
    html += ">";
    // 强制规则：一个元素含有innerText属性时，不可含有子节点
    if (dom.children) {
        html += `\n`;
        html += dom.children.map(child => generatehtml(child, space + SPACE_COUNT)).join("\n");
        html += `\n`;
    }
    if (dom.innerText) {
        if (dom.innerText.length < 6) {
            html += dom.innerText;
        } else {
            html += "\n";
            for (let i = 0; i < space + SPACE_COUNT; i++) html += " ";
            html += dom.innerText;
            html += "\n";
        }
    }
    if (html.endsWith("\n")) {
        for (let i = 0; i < space; i++) html += " ";
    }
    html += `</${dom.tag}>`;
    if (space == SPACE_COUNT) {
        html = "<!DOCTYPE html>\n<html>\n<body>\n" + html + "\n<body>\n</html>";
    }
    return html;
}

function generatecss(dom: DOMElement<DOMTag>, prex: string = ''): string {
    let css = "body{\n    margin:0;\n    padding:0;\n}\n";
    if (dom.class) {
        if (prex != '') {
            css += `${prex} `;
        }
        css += `.${dom.class.map(cls => cls.name).join(".")}{\n`;
        for (let i = 0; i < 4; i++) {
            css += " ";
        }
        css += dom.class.map(cls => cls.style.map(style => {
            if (style.value instanceof Array) {
                return `${style.key}:${style.value.join(" ")}`
            } else {
                return `${style.key}:${style.value}`
            }
        }).join(";\n    "));
        css += "\n}\n";
    }
    if (dom.children) {
        for (const child of dom.children) {
            const childcss = generatecss(child, prex + (dom.class ? `.${dom.class.map(cls => cls.name).join(".")}` : ''));
            css += childcss;
        }
    }

    if (prex == '') {
        css = "<style>\n" + css + "\n</style>";
    }
    return css;
}

formatCheck(app);
if (!fs.existsSync("./static")) {
    fs.mkdirSync("./static");
}
fs.writeFileSync("./static/index.html", generatehtml(app) + "\n\n" + generatecss(app));