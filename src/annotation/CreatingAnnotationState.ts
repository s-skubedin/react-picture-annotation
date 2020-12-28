import { ReactPictureAnnotation } from "../index";
import { IAnnotationState } from "./AnnotationState";
import { DefaultAnnotationState } from "./DefaultAnnotationState";
import Transformer from "../Transformer";

export default class CreatingAnnotationState implements IAnnotationState {
  private readonly context: ReactPictureAnnotation;
  constructor(context: ReactPictureAnnotation) {
    this.context = context;
  }
  public onMouseDown = () => undefined;
  public onMouseMove = (positionX: number, positionY: number) => {
    const { shapes, selectedId } = this.context;
    if (shapes.length > 0 && !selectedId) {
      const currentShape = shapes[shapes.length - 1];
      const {
        mark: { x, y },
      } = currentShape.getAnnotationData();
      currentShape.adjustMark({
        width: positionX - x,
        height: positionY - y,
      });
    }
  };

  public onMouseUp = () => {
    const { shapes, onShapeChange, setAnnotationState } = this.context;
    const data = shapes.pop();
    this.context.selectedId = null;
    const annotationData = data && data.getAnnotationData();
    if (
      data &&
      annotationData &&
      annotationData.mark.width !== 0 &&
      annotationData.mark.height !== 0
    ) {
      const [width, height] = this.context.props.defaultAnnotationSize;

      if (
        Math.abs(annotationData.mark.width) >= width &&
        Math.abs(annotationData.mark.height) >= height
      ) {
        if (typeof annotationData.id !== "number") {
          this.context.selectedId = annotationData.id;
        }
        this.context.currentTransformer = new Transformer(
          data,
          this.context.scaleState.scale
        );
        shapes.push(data);
      }
    }
    onShapeChange();
    setAnnotationState(new DefaultAnnotationState(this.context));
  };

  public onMouseLeave = () => {
    if (!this.context.selectedId) {
      this.onMouseUp();
    }
  };
}
