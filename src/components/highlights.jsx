import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
  });
  return (
    <>
      <section
        id="highlights"
        className="common-padding h-full w-screen overflow-hidden bg-zinc"
      >
        <div className="screen-max-width">
          <div className="mb-12 w-full items-end justify-between">
            <h1 id="title" className="section-heading">
              Get the highlights.
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};
