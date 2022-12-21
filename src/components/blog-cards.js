import BlogCard from '@/components/blog-card';

export default function BlogCards({ content }) {
  return (
    <div className="row gy-12">
      {content && content.length > 0 && content.map(post => (
        <div className="col-12 col-lg-6 col-xl-4" key={post.title}>
          <BlogCard {...post} />
        </div>
      ))}
    </div>
  );
}
