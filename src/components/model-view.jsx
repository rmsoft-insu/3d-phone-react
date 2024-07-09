import { PerspectiveCamera, View } from "@react-three/drei";
import Lights from "./lights";
import IPhone from "./iPhone";
import { Suspense } from "react";

export const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationSize,
  size,
  item,
}) => {
  return (
    <>
      <View
        index={index}
        id={gsapType}
        className={`h-full w-full ${index === 2} ? 'right-[-100%]':''`}
      >
        {/* Amient Light */}
        <ambientLight intensity={0.3} />

        <PerspectiveCamera makeDefault position={[0, 0, 4]} />

        <Lights />

        <Suspense fallback={<div>Loading...</div>}>
          <IPhone />
        </Suspense>
      </View>
    </>
  );
};
