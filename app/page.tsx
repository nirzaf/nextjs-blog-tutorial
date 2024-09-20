import React from 'react';
import { getAllPosts } from '@/app/lib/posts';
import PostCard from '@/app/components/PostCard';
import Pagination from './components/Pagination';
import SearchBar from './components/SearchBar';

export default async function Home({
  searchParams,
}: {
  searchParams: { page?: string; search?: string };
}) {
  const page = Number(searchParams.page) || 1;
  const search = searchParams.search || "";
  const postsPerPage = 9;

  const { posts, total } = await getAllPosts(page, postsPerPage, search);

  return (
    <div className="container mx-auto p-4">
      <SearchBar initialSearch={search} />
      <div className="my-8">
        {posts.map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </div>
      <Pagination currentPage={page} totalPosts={total} postsPerPage={postsPerPage} />
    </div>
  );
}
