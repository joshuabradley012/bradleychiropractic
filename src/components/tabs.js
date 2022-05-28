import { useState } from 'react';
import cn from 'classnames';

import Markdown from '@/components/markdown';
import styles from '@/styles/tabs.module.scss';

export default function Tabs({ tabs }) {
  const [tabNames, setTabNames] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  if (typeof tabs === 'undefined') return null;
  if (tabs.length < 1) return null;

  const handleClick = e => {
    const index = parseInt(e?.target?.dataset?.index) || 0;
    setActiveTab(index);
  };

  return (
    <div className={styles.tabs}>
      <div className={styles.tabHeader}>
        {tabs.map((tab, i) => (
          <div
            className={styles.tab}
            key={tab.name}
          >
            <div
              className={cn({
                [styles.tabInner]: true,
                [styles.tabActive]: i === activeTab,
              })}
              data-index={i}
              onClick={handleClick}
            >
              {tab.name}
            </div>
          </div>
        ))}
      </div>
      <div className={cn('content', styles.tabContent)}>
        <Markdown>
          {tabs[activeTab]?.content}
        </Markdown>
      </div>
    </div>
  );
}
