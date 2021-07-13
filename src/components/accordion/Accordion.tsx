import styles from './Accordion.module.scss';
import { ReactElement, ReactNode, useState } from 'react';

export interface AccordionProps {
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
    <div
      role="tablist"
      className={styles.accordion}
      aria-multiselectable="true"
    >
      <div
        id={ariaLabelledBy}
        role="tab"
        className={styles.accordionTab}
        aria-expanded={isOpen}
        aria-controls={ariaControls}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className={styles.accordionTabTitle}>
          <button
            className={`${styles.accordionTabTitleLink} ${
              isOpen ? `${styles.open}` : ''
            }`}
          >
            {title}
          </button>
        </h3>
      </div>
      <div
        id={ariaControls}
        aria-labelledby={ariaLabelledBy}
        className={`${isOpen ? `${styles.collapsed}` : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={styles.accordionItemContent}>{children}</div>
      </div>
    </div>
  );
}
