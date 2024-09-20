import React from 'react';
import { getAllPosts } from '@/lib/posts';
import PostCard from '@/components/PostCard';
import Pagination from '@/components/Pagination';
import SearchBar from '@/components/SearchBar';

export default function Home() {
  const posts = getAllPosts();

  return (
    <div className="container mx-auto p-4">
      <SearchBar />
      <div className="my-8">
        {posts.map((post) => (
          <PostCard key={post.id} title={post.title} excerpt={post.excerpt} />
        ))}
      </div>
      <Pagination currentPage={1} totalPages={5} />
    </div>
  );
}
