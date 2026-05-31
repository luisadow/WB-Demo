import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const splash = document.querySelector<HTMLElement>("#color-splash");

if (splash) {
  gsap.set(splash, { scale: 0.4, rotation: -12, opacity: 0 });
  gsap.to(splash, {
    scale: 1.1,
    rotation: 6,
    opacity: 1,
    duration: 1.1,
    ease: "power3.out"
  });

  gsap.to(splash, {
    opacity: 0,
    duration: 1,
    delay: 1.2,
    ease: "power2.out"
  });
}

const revealItems = gsap.utils.toArray<HTMLElement>("[data-reveal]");

revealItems.forEach((item, index) => {
  gsap.fromTo(
    item,
    { y: 32, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay: Math.min(index * 0.08, 0.4),
      ease: "power2.out",
      scrollTrigger: {
        trigger: item,
        start: "top 85%"
      }
    }
  );
});

const copyButtons = document.querySelectorAll<HTMLButtonElement>("[data-copy]");

copyButtons.forEach((button) => {
  const defaultLabel = button.textContent || "Kopieren";

  button.addEventListener("click", async () => {
    const value = button.dataset.copy;
    if (!value) {
      return;
    }

    try {
      await navigator.clipboard.writeText(value);
      button.textContent = "Kopiert!";
      button.disabled = true;

      window.setTimeout(() => {
        button.textContent = defaultLabel;
        button.disabled = false;
      }, 1600);
    } catch {
      button.textContent = "Nicht kopiert";

      window.setTimeout(() => {
        button.textContent = defaultLabel;
      }, 1600);
    }
  });
});
