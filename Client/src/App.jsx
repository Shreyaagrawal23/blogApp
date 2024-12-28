import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import ProtectedRoute from './components/common/ProtectedRoute';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Profile from './components/auth/Profile';
import PostList from './components/blog/PostList';
import PostDetail from './components/blog/PostDetail';
import CreatePost from './components/blog/CreatePost';
import EditPost from './components/blog/EditPost';

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<PostList />} />

        <Route path="/post/:id" element={<PostDetail />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />

        <Route path="/create" element={<ProtectedRoute><CreatePost /></ProtectedRoute>} />

        <Route path="/post/edit/:id" element={<ProtectedRoute><EditPost /></ProtectedRoute>} />

      </Routes>
    </Router>
  );
};

export default App;