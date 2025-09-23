import { useEffect } from "react";

let ScrollReveal;
let sr;

// Dynamically import ScrollReveal only on client-side
if (typeof window !== "undefined") {
  import("scrollreveal").then((module) => {
    ScrollReveal = module.default || module;
  });
}

const useScrollReveal = (shouldReveal = true) => {
  useEffect(() => {
    if (!shouldReveal || typeof window === "undefined" || !ScrollReveal) return;

    // Initialize ScrollReveal if not already initialized
    if (!sr) {
      sr = ScrollReveal({
        distance: "50px",
        duration: 800,
        easing: "ease-out",
        origin: "bottom",
        reset: false,
        delay: 100,
      });
    }

    // Reveal common elements
    sr.reveal(".reveal", {
      interval: 100,
    });

    sr.reveal(".reveal-left", {
      origin: "left",
      distance: "100px",
    });

    sr.reveal(".reveal-right", {
      origin: "right",
      distance: "100px",
    });

    sr.reveal(".reveal-top", {
      origin: "top",
      distance: "100px",
    });

    sr.reveal(".reveal-bottom", {
      origin: "bottom",
      distance: "100px",
    });

    sr.reveal(".reveal-delay-1", { delay: 300 });
    sr.reveal(".reveal-delay-2", { delay: 500 });
    sr.reveal(".reveal-delay-3", { delay: 700 });

    // Cleanup function
    return () => {
      if (sr && sr.destroy) {
        // Destroy ScrollReveal instance on unmount
        sr.destroy();
        sr = null;
      }
    };
  }, [shouldReveal]);
};

export default useScrollReveal;
