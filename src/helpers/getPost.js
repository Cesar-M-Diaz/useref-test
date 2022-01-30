const getPost = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  const post = await response.json();
  return post;
};

export default getPost;
