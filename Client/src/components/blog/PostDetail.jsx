import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../../utils/api';
import Loading from '../common/Loading';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      const response = await api.get(`/posts/${id}`);
      setPost(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.response?.data?.error || 'Error fetching post');
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await api.delete(`/posts/${id}`);
        navigate('/');
      } catch (err) {
        setError(err.response?.data?.error || 'Error deleting post');
      }
    }
  };

  if (loading) return <Loading />;
  if (error) return <div className="text-red-600 text-center mt-4">{error}</div>;
  if (!post) return <div className="text-center mt-4">Post not found</div>;

  const isAuthor = post.authorId === parseInt(localStorage.getItem('userId'));

  return (
    <div className="max-w-4xl mx-auto mt-10 px-4">
      {post.poster && (
        <img
          src={`https://blogapp-x629.onrender.com/${post.poster}`}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
      )}
      
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      
      <div className="flex items-center text-gray-600 mb-6">
        <span>By {post.author.username}</span>
        <span className="mx-2">•</span>
        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
      </div>

      <div 
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {isAuthor && (
        <div className="mt-6 space-x-4">
          <button
            onClick={() => navigate(`/post/edit/${post.id}`)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};


export default PostDetail;
