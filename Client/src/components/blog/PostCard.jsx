import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {post.poster && (
        <img
          src={`https://blogapp-x629.onrender.com/${post.poster}`}
          alt={post.title}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-4">
          By {post.author.username} • {new Date(post.createdAt).toLocaleDateString()}
        </p>
        <Link
          to={`/post/${post.id}`}
          className="text-blue-600 hover:text-blue-800"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
