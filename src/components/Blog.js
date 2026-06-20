import React from 'react';
import { FaCalendar, FaArrowRight } from 'react-icons/fa';
import './Blog.css';

function Blog() {
  const posts = [
    {
      id: 1,
      title: 'Student Internship management System',
      excerpt: 'Learn how to use to manage state and side effects in functional components.',
      date: 'feb 15, 2026',
      category: 'MERN Stack',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Attendance Management System',
      excerpt: 'Best practices for creating responsive websites that work on all device sizes.',
      date: 'march10, 2026',
      category: 'python',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'SEE Our Country',
      excerpt: 'Deep dive into asynchronous JavaScript with async/await syntax and error handling.',
      date: 'dec 5, 2025',
      category: 'JavaScript,HTML, CSS',
      readTime: '8 min read'
    },
    {
      id: 4,
      title: 'E-Commerce Website',
      excerpt: 'Learn how to design efficient and scalable database schemas for your applications.',
      date: 'May 28, 2025',
      category: 'MERN Stack',
      readTime: '10 min read'
    }
  ];

  return (
    <section id="blog" className="blog">
      <div className="container">
        <h2 className="section-title">Latest Blog Posts</h2>
        <div className="blog-grid">
          {posts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-header">
                <span className="blog-category">{post.category}</span>
                <span className="blog-read-time">{post.readTime}</span>
              </div>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="blog-footer">
                <span className="blog-date">
                  <FaCalendar /> {post.date}
                </span>
                <a href="#" className="read-more">
                  Read More <FaArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
