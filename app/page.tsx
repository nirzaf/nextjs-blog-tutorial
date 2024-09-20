import { getPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import Pagination from "@/components/Pagination";
import SearchBar from "@/components/SearchBar";

export default async function Home({
  searchParams,
}: {
  searchParams: { page?: string; search?: string };
}) {
  const page = Number(searchParams.page) || 1;
  const search = searchParams.search || "";
  const postsPerPage = 9;

  const { posts, total } = await getPosts(page, postsPerPage, search);

  return (
    <main className="mx-auto max-w-5xl px-6">
      <SearchBar initialSearch={search} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} {...post} />
        ))}
      </div>
      <Pagination currentPage={page} totalPosts={total} postsPerPage={postsPerPage} />
    </main>
  );
}
