import { remark } from 'remark';
import html from 'remark-html';

export default async function markdown(string) {
  const result = await remark().use(html).process(string);
  return result.toString();
}
