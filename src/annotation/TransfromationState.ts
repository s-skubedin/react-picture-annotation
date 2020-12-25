import { ReactPictureAnnotation } from "index";
import { IAnnotationState } from "./AnnotationState";
import { DefaultAnnotationState } from "./DefaultAnnotationState";

export default class TransformationState implements IAnnotationState {
  private readonly context: ReactPictureAnnotation;
  constructor(context: ReactPictureAnnotation) {
    this.context = context;
  }
  public onMouseDown = () => undefined;
  public onMouseMove = () => undefined;

  public onMouseUp = () => {
    const { setAnnotationState } = this.context;
    setAnnotationState(new DefaultAnnotationState(this.context));
  };

  public onMouseLeave = () => this.onMouseUp();
}
