import { Box, Button, CircularProgress, Typography } from "@mui/material";
import useStore from "../store";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function getExcerpt(content) {
  return content.substring(0, 100) + "...";
}

export default function BlogListPage() {
  const posts = useStore((state) => state.blogStore.posts);
  const isLoading = useStore((state) => state.blogStore.isLoading);
  const fetchPosts = useStore((state) => state.blogStore.fetchPosts);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (isLoading && !posts) return <CircularProgress />;
  if (!posts) return null;
  return (
    <Box>
      <Typography variant="h1">Blog</Typography>
      {posts?.map((post) => (
        <Box key={post.id}>
          <Typography variant="h2">{post.title}</Typography>
          <Typography>{getExcerpt(post.content)}</Typography>
          <Link to={`./${post.slug}`}>
            <Button>See More</Button>
          </Link>
        </Box>
      ))}
    </Box>
  );
}
