import { useEffect, useRef, useState } from "react";

/**
 * Fires `true` (once) when the referenced element first scrolls into view.
 * Falls back to `true` immediately when IntersectionObserver is unavailable.
 */
export const useInViewOnce = <T extends Element>(threshold = 0.3) => {
    const ref = useRef<T>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        if (typeof IntersectionObserver === "undefined") {
            setInView(true);
            return;
        }
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold },
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    return { ref, inView };
};

/**
 * Counts an integer up from 0 to `value` (easeOutCubic) the first time it
 * scrolls into view. Used for the animated metric figures on the hero stat
 * cards and performance panels.
 */
export const CountUp = ({ value, durationMs = 1200, className }: { value: number; durationMs?: number; className?: string }) => {
    const [display, setDisplay] = useState(0);
    const { ref, inView } = useInViewOnce<HTMLSpanElement>();

    useEffect(() => {
        if (!inView) return;
        let start: number | null = null;
        let raf = 0;
        const tick = (t: number) => {
            if (start === null) start = t;
            const progress = Math.min((t - start) / durationMs, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(Math.round(eased * value));
            if (progress < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, [inView, value, durationMs]);

    return (
        <span ref={ref} className={className}>
            {display}
        </span>
    );
};
