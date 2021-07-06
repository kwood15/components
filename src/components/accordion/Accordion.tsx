// Accordion.module.css.d.ts
// @ts-ignore
import styles from './Accordion.module.css';

import { ReactElement, ReactNode, useState } from 'react';

interface AccordionProps {
  title: string;
  id: string;
  ariaControls: string;
  ariaLabelledBy: string;
  children: ReactNode;
  expanded?: boolean;
}

export default function Accordion({
  title,
  ariaControls,
  ariaLabelledBy,
  children,
  expanded
}: AccordionProps): ReactElement {
  const [isOpen, setIsOpen] = useState(expanded);

  return (
    <div role="tablist" className={styles.test} aria-multiselectable="true">
      <div
        id={ariaLabelledBy}
        role="tab"
        className={styles.testAgain}
        aria-expanded={isOpen}
        aria-controls={ariaControls}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="accordion-tab__title">
          <button
            className={`accordion-tab__title-link ${isOpen ? 'open' : ''}`}
          >
            {title}
          </button>
        </h3>
      </div>
      <div
        id={ariaControls}
        aria-labelledby={ariaLabelledBy}
        className={`accordion-item ${isOpen ? 'collapsed' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="accordion-item__content">{children}</div>
      </div>
    </div>
  );
}