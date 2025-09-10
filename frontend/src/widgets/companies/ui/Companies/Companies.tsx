"use client";

import { useRef, useEffect } from 'react';
import { Container } from "@/shared/ui/Container/Container";
import { CompaniesList } from "../CompaniesList/CompaniesList";
import styles from './Companies.module.scss';

export const Companies = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);
  const scrollSpeed = isMobile ? 0.6 : 1;

  useEffect(() => {
    const scroll = scrollRef.current;

    if (!scroll) return;

    let scrollLeft = 0;
    let animateFrameId: number;

    const animate = () => {
      scrollLeft += scrollSpeed;
      if (scrollLeft >= scroll.scrollWidth / 2) {
        scrollLeft = 0;
      };
      scroll.scrollLeft = scrollLeft;
      animateFrameId = requestAnimationFrame(animate);
    };

    animateFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animateFrameId);
  }, [scrollSpeed])

  return (
    <section className={styles.companies}>
      <Container className={styles.companiesContainer}>
        <h1 className={styles.companiesTitle}>Trusted by 20,000+ companies</h1>
        <div
          className={styles.companiesList}
          ref={scrollRef}
        >
          <CompaniesList />
          <CompaniesList />
        </div>
      </Container>
    </section>
  );
};
