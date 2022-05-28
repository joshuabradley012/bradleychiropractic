import { useEffect, useState } from 'react';

import markdown from '@/lib/markdown';

export default function Markdown({ children, className }) {
  const [content, setContent] = useState('');

  useEffect(() => {
    const processMarkdown = async () => {
      const html = await markdown(children);
      setContent(html);
    };

    processMarkdown()
      .catch(console.error);

    return () => setContent('');
  }, [children]);

  return <div className={className} dangerouslySetInnerHTML={{ __html: content }} />;
}
