import { ReactPictureAnnotation } from "index";
import { IAnnotationState } from "./AnnotationState";
export default class DraggingAnnotationState implements IAnnotationState {
    private readonly context;
    constructor(context: ReactPictureAnnotation);
    onMouseDown: () => undefined;
    onMouseMove: () => undefined;
    onMouseUp: () => void;
    onMouseLeave: () => void;
}
