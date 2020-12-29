import React from "react";
import { IAnnotation } from "./Annotation";
import { IAnnotationState } from "./annotation/AnnotationState";
import { IShape, IShapeBase, IShapeStyle } from "./Shape";
import { ITransformer } from "./Transformer";
interface IReactPictureAnnotationProps {
    annotationData?: IAnnotation[];
    selectedId?: string | null;
    panelClassName?: string;
    panelStyle?: ElementCSSInlineStyle;
    scrollSpeed: number;
    hideBoundingBoxes?: boolean;
    marginWithInput: number;
    onChange: (annotationData: IAnnotation[]) => void;
    onSelect: (id: string | null) => void;
    onLoad?: (e: Event) => void;
    width: number;
    height: number;
    image: string;
    annotationStyle: IShapeStyle;
    defaultAnnotationSize: number[];
    inputElement: (value: string, onChange: (value: string) => void, onDelete: () => void) => React.ReactElement;
}
interface IStageState {
    scale: number;
    originX: number;
    originY: number;
}
export default class ReactPictureAnnotation extends React.Component<IReactPictureAnnotationProps> {
    static defaultProps: {
        marginWithInput: number;
        scrollSpeed: number;
        defaultAnnotationSize: number[];
        hideBoundingBoxes: boolean;
        panelClassName: string;
        annotationStyle: IShapeStyle;
        onLoad: () => undefined;
        inputElement: (value: string, onChange: (value: string) => void, onDelete: () => void) => JSX.Element;
    };
    state: {
        inputPosition: {
            left: number;
            top: number;
        };
        showInput: boolean;
        inputComment: string;
    };
    set selectedId(value: string | null);
    get selectedId(): string | null;
    get annotationStyle(): IShapeStyle;
    get defaultAnnotationSize(): number[];
    shapes: IShape[];
    scaleState: IStageState;
    currentTransformer: ITransformer;
    private currentAnnotationData;
    private selectedIdTrueValue;
    private canvasRef;
    private canvas2D?;
    private imageCanvasRef;
    private imageCanvas2D?;
    private currentImageElement?;
    private currentAnnotationState;
    componentDidMount: () => void;
    componentDidUpdate: (preProps: IReactPictureAnnotationProps) => void;
    calculateMousePosition: (positionX: number, positionY: number) => {
        positionX: number;
        positionY: number;
    };
    calculateShapePosition: (shapeData: IShapeBase) => IShapeBase;
    render(): JSX.Element;
    setAnnotationState: (annotationState: IAnnotationState) => void;
    onShapeChange: () => void;
    private syncAnnotationData;
    private syncSelectedId;
    private onDelete;
    private setCanvasDPI;
    private onInputCommentChange;
    private cleanImage;
    private onImageChange;
    private onMouseDown;
    private onMouseMove;
    private onMouseUp;
    private onMouseLeave;
    private onWheel;
}
export {};
