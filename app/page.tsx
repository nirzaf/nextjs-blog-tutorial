import React from 'react';
import { getAllPosts } from '@/app/lib/posts';
import PostPreview from '@/app/components/PostPreview';
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
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostPreview key={post.slug} {...post} subtitle={post.subtitle || ''} />
        ))}
      </div>
      <Pagination currentPage={page} totalPosts={total} postsPerPage={postsPerPage} />
    </div>
  );
}
