export default function Posts() {
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
            {
              posts.length === 0 ?
                <p>There are no blog posts.</p>
            :
              
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
    )
}