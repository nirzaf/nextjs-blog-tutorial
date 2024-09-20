import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPosts: number;
  postsPerPage: number;
}

export default function Pagination({ currentPage, totalPosts, postsPerPage }: PaginationProps) {
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center space-x-2 mt-8">
      {currentPage > 1 && (
        <Link href={`/?page=${currentPage - 1}`} className="px-4 py-2 bg-gray-200 rounded">
          Previous
        </Link>
      )}
      {currentPage < totalPages && (
        <Link href={`/?page=${currentPage + 1}`} className="px-4 py-2 bg-gray-200 rounded">
          Next
        </Link>
      )}
    </div>
  );
}