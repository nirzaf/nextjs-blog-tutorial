export async function getPosts(page = 1, limit = 9, search = '') {
  const files = await fs.readdir(postsDirectory);
  let posts = await Promise.all(
    files.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = await fs.readFile(filePath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug: filename.replace('.md', ''),
        title: data.title,
        date: data.date,
        content,
      };
    })
  );

  // Filter posts based on search query
  if (search) {
    posts = posts.filter(post => 
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.content.toLowerCase().includes(search.toLowerCase())
    );
  }

  // Sort posts by date
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const total = posts.length;
  const start = (page - 1) * limit;
  const end = start + limit;

  return {
    posts: posts.slice(start, end),
    total,
  };
}

// ... other existing functions ...