import { ReactPictureAnnotation } from "index";
import { IAnnotationState } from "./AnnotationState";
export default class CreatingAnnotationState implements IAnnotationState {
    private readonly context;
    constructor(context: ReactPictureAnnotation);
    onMouseDown: () => undefined;
    onMouseMove: () => undefined;
    onMouseUp: () => void;
    private applyDefaultAnnotationSize;
    onMouseLeave: () => void;
}
