import { DefaultAnnotationState } from "./DefaultAnnotationState";
var DraggingAnnotationState = /** @class */ (function () {
    function DraggingAnnotationState(context) {
        var _this = this;
        this.onMouseDown = function () { return undefined; };
        this.onMouseMove = function () { return undefined; };
        this.onMouseUp = function () {
            var setAnnotationState = _this.context.setAnnotationState;
            setAnnotationState(new DefaultAnnotationState(_this.context));
        };
        this.onMouseLeave = function () { return _this.onMouseUp(); };
        this.context = context;
    }
    return DraggingAnnotationState;
}());
export default DraggingAnnotationState;
//# sourceMappingURL=DraggingAnnotationState.js.map