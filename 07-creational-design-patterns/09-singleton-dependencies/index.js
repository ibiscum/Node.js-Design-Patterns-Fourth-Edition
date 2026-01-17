import { Blog } from "./blog.js";

const blog = new Blog();
blog.initialize();
const posts = blog.getAllPosts();
if (posts.length === 0 || !posts) {
  console.log(
    "No post available. Run `node import-posts.js`" +
      " to load some sample posts",
  );
}

for (const post of posts) {
  console.log(post.title);
  console.log("-".repeat(post.title.length));
  console.log(`Published on ${new Date(post.created_at).toISOString()}`);
  console.log(post.content);
}
