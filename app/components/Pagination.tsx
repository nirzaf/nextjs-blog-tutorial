import React from 'react';
import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalPosts: number;
  postsPerPage: number;
}

function Pagination({ currentPage, totalPosts, postsPerPage }: PaginationProps) {
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  return (
    <div className="flex justify-center space-x-2 mt-4">
      {currentPage > 1 && (
        <Link href={`/?page=${currentPage - 1}`}>
          <span className="px-3 py-2 bg-blue-500 text-white rounded">Previous</span>
        </Link>
      )}
      {currentPage < totalPages && (
        <Link href={`/?page=${currentPage + 1}`}>
          <span className="px-3 py-2 bg-blue-500 text-white rounded">Next</span>
        </Link>
      )}
    </div>
  );
}

export default Pagination;