import { Button, CircularProgress, Grid, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import NormalCard from '../Cards/NormalCard';
import SkeletonLoading from '../../Skeleton';
import ErrorText from '../../ErrorText';
function BlogListContainer({ blogsArray, status, error, handleBlogsViews }) {
  const [loading, setLoading] = useState(false);
  const [visibleBlogs, setVisibleBlogs] = useState(6);
  const handleLoadMoreBlogs = () => {
    setLoading(true);
    // set for show loading and Ui better
    setTimeout(() => {
      setLoading(false);
      setVisibleBlogs((prevVisibleBlogs) => prevVisibleBlogs + 6);
    }, 2000);
  };

  // check redux state
  if (status === 'loading') {
    return <SkeletonLoading />;
  }
  if (status === 'failed') {
    return <ErrorText error={error} />;
  }
  return (
    <Grid container justifyContent="center" sx={{ py: 10 }}>
      <Grid item xs={12} md={10} lg={8}>
        <Grid container justifyContent="center">
          {blogsArray.length > 0 ? (
            <>
              {blogsArray.slice(0, visibleBlogs).map((blog) => (
                <Grid item xs={10} sm={6} md={5} lg={4} key={blog.id}>
                  <NormalCard blog={blog} handleBlogsViews={handleBlogsViews} />
                </Grid>
              ))}

              {visibleBlogs < blogsArray.length && (
                <Stack direction="row" justifyContent="center" alignItems="center" sx={{ width: '100%' }}>
                  <Button onClick={handleLoadMoreBlogs}>
                    {loading ? <CircularProgress size={24} sx={{ color: '#fff' }} /> : 'Load More'}
                  </Button>
                </Stack>
              )}
            </>
          ) : (
            <Stack direction="row" justifyContent="center" alignItems="center" sx={{ width: '100%' }}>
              <Typography variant="textOrange">No Blog Available</Typography>
            </Stack>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default BlogListContainer;
