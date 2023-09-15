import { BorderType, PixelSize, Size } from '../style-enum/box';
import { Colors } from '../style-enum/color';
import { Display, FlexDirection, FlexWrap, JustifyContent, Overflow, Position } from '../style-enum/layout';
export interface Div {
    width: Size;
    height: Size;
    margin: Size | [Size, Size] | [Size, Size, Size, Size]
    padding: Size | [Size, Size] | [Size, Size, Size, Size]

    display: Display;
    "justify-content": JustifyContent;
    "align-items": JustifyContent;
    "flex-direction": FlexDirection;
    "flex-wrap": FlexWrap;

    "background-color": Colors;

    overflow: Overflow;
    position: Position;

    top: Size;
    bottom: Size;
    left: Size;
    right: Size;

    border: [PixelSize, BorderType, Colors];
    "border-top": [PixelSize, BorderType, Colors];
    "border-bottom": [PixelSize, BorderType, Colors];
    "border-radius": Size;
}