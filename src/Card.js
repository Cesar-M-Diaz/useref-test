import { useState, useEffect, useRef } from 'react';
import getPost from './helpers/getPost';

const Card = () => {
  const [post, setPost] = useState('');
  const [loading, setLoading] = useState(true);
  const isMountedRef = useRef(true);

  const updatePost = () => {
    getPost().then((newPost) => {
      setTimeout(() => {
        if (isMountedRef.current) {
          setPost(newPost);
          setLoading(false);
        }
      }, 2000);
    });
  };

  useEffect(() => {
    updatePost();
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  return <div>{loading ? <h1>Loading...</h1> : <h1>{post.title}</h1>}</div>;
};

export default Card;
