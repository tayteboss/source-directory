"use client";

import { ReactLenis } from "@studio-freight/react-lenis";

type Props = {
  children: React.ReactNode;
};

const LenisScroll = (props: Props) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5 }}>
      {props.children}
    </ReactLenis>
  );
};

export default LenisScroll;
