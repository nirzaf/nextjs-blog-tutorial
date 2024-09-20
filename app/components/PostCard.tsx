import React from 'react';

interface PostCardProps {
  // Add your post properties here
  title: string;
  // ... other properties
}

const PostCard: React.FC<PostCardProps> = ({ title /* other props */ }) => {
  return (
    <div>
      <h2>{title}</h2>
      {/* Add other post content here */}
    </div>
  );
};

export default PostCard;
