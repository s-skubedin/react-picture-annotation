import { DefaultAnnotationState } from "./DefaultAnnotationState";
import Transformer from "../Transformer";
var CreatingAnnotationState = /** @class */ (function () {
    function CreatingAnnotationState(context) {
        var _this = this;
        this.onMouseDown = function () { return undefined; };
        this.onMouseMove = function (positionX, positionY) {
            var _a = _this.context, shapes = _a.shapes, selectedId = _a.selectedId;
            if (shapes.length > 0 && !selectedId) {
                var currentShape = shapes[shapes.length - 1];
                var _b = currentShape.getAnnotationData().mark, x = _b.x, y = _b.y;
                currentShape.adjustMark({
                    width: positionX - x,
                    height: positionY - y,
                });
            }
        };
        this.onMouseUp = function () {
            var _a = _this.context, shapes = _a.shapes, onShapeChange = _a.onShapeChange, setAnnotationState = _a.setAnnotationState;
            var data = shapes.pop();
            _this.context.selectedId = null;
            var annotationData = data && data.getAnnotationData();
            if (data &&
                annotationData &&
                annotationData.mark.width !== 0 &&
                annotationData.mark.height !== 0) {
                var _b = _this.context.props.defaultAnnotationSize, width = _b[0], height = _b[1];
                if (Math.abs(annotationData.mark.width) >= width &&
                    Math.abs(annotationData.mark.height) >= height) {
                    if (typeof annotationData.id !== "number") {
                        _this.context.selectedId = annotationData.id;
                    }
                    _this.context.currentTransformer = new Transformer(data, _this.context.scaleState.scale);
                    shapes.push(data);
                }
            }
            onShapeChange();
            setAnnotationState(new DefaultAnnotationState(_this.context));
        };
        this.onMouseLeave = function () {
            if (!_this.context.selectedId) {
                _this.onMouseUp();
            }
        };
        this.context = context;
    }
    return CreatingAnnotationState;
}());
export default CreatingAnnotationState;
//# sourceMappingURL=CreatingAnnotationState.js.map