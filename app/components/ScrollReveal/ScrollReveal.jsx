"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    // Re-query and bind to elements on the newly navigated page
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            // Remove active state to trigger the animation again on re-visit
            entry.target.classList.remove("active");
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of element is in viewport
        rootMargin: "0px 0px -50px 0px",
      }
    );

    revealElements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      revealElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, [pathname]); // Depend on pathname to re-run on page transitions!

  return null;
}
