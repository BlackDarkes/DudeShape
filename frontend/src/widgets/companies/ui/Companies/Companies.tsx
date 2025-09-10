"use client";

import { useRef } from 'react';
import { Container } from "@/shared/ui/Container/Container";
import { CompaniesList } from "../CompaniesList/CompaniesList";
import styles from './Companies.module.scss';
import { useAutoScroll } from '../../hooks/autoScroll';

export const Companies = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  useAutoScroll({ scrollRef });

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
