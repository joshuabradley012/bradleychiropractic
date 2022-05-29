import BlogCard from '@/components/blog-card';

export default function BlogCards({ content }) {
  return (
    <div className="row gy-12">
      {content.map(post => (
        <div className="col-12 col-md-6 col-lg-4" key={post.title}>
          <BlogCard {...post} />
        </div>
      ))}
    </div>
  );
}
