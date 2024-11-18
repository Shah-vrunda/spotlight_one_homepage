import { useEffect } from "react";

const useIntersectionObserver = (
  ref: any,
  animationClass: any,
  delayClass: any
) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(animationClass);
            if (delayClass) {
              entry.target.classList.add(delayClass);
            }
          } else {
            entry.target.classList.remove(animationClass);
            if (delayClass) {
              entry.target.classList.remove(delayClass);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [ref, animationClass, delayClass]);
};

export default useIntersectionObserver;
