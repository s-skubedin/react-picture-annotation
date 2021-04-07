import { withA11y } from "@storybook/addon-a11y";
import { addDecorator, storiesOf } from "@storybook/react";
import React, { useEffect, useState } from "react";

import {
  DefaultInputSection,
  defaultShapeStyle,
  ReactPictureAnnotation,
} from "../src";
import { IAnnotation } from "../src/Annotation";
import { IShapeData } from "../src/Shape";

addDecorator((storyFn) => <div>{storyFn()}</div>);

storiesOf("Hello World", module)
  .addDecorator(withA11y)
  .add("with text", () => {
    const AnnotationComponent = () => {
      const [size, setSize] = useState({
        width: window.innerWidth - 16,
        height: window.innerHeight - 16,
      });

      const [annotationData, setAnnotationData] = useState<
        IAnnotation<IShapeData>[]
      >([]);

      const [selectedId, setSelectedId] = useState<string | number | null>(-1);

      const onResize = () => {
        setSize({
          width: window.innerWidth - 16,
          height: window.innerHeight - 16,
        });
      };

      useEffect(() => {
        window.addEventListener("resize", onResize);
        return () => {
          window.removeEventListener("resize", onResize);
        };
      }, []);

      return (
        <ReactPictureAnnotation
          width={size.width}
          height={size.height}
          annotationData={annotationData}
          onChange={(data) => setAnnotationData(data)}
          selectedId={selectedId}
          onSelect={(e) => setSelectedId(e)}
          annotationStyle={{
            ...defaultShapeStyle,
            shapeStrokeStyle: "#2193ff",
            transformerBackground: "black",
          }}
          defaultAnnotationSize={[90, 120]}
          image="https://semiotech-ohio.s3-us-east-2.amazonaws.com/US7012345B2/US7012345B2-8.png"
          inputElement={(value, onChange, onDelete) => (
            <DefaultInputSection
              placeholder={"Hello world"}
              {...{ value, onChange, onDelete }}
            />
          )}
        />
      );
    };

    return <AnnotationComponent />;
  });
