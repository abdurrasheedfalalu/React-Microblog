export default function App () {

  const posts =[
    {
      id: 1,
      text: "Hello World",
      timestamp: "a minutes ago.",
      author: {
        username: "Abdool",
      },
  },

  {
    id: 1,
    text: "Second Post",
    timestamp: "an hour ago.",
    author: {
      username: "Abba",
    },
  }
]
  return (
    <>
      <h1>Microblog</h1>
      {
        posts.map(post=>{
          return (
          <p>
            <b>{post.author.username}</b> &mdash; {post.timestamp}
            <br />
            {post.text}
        </p>
          )
        })
      }
    </>
  );
}