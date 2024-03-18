import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBlogById } from '../../../redux/slices/blogSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Grid, Stack, Typography } from '@mui/material';
import SkeletonLoading from '../../../components/Skeleton';
import ErrorText from '../../../components/ErrorText';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import CardImage from '../../../assets/images/banner-bg.jpg';
function BlogDetail() {
  const dispatch = useDispatch();
  const { singleBlog, statusTwo, error, existingBlogs } = useSelector((state) => state.blogReducer);
  const { id } = useParams();
  const [singleBlogView, setSingleBlogView] = useState({});

  useEffect(() => {
    if (existingBlogs.length > 0 && singleBlog) {
      for (let i = 0; i < existingBlogs.length; i++) {
        if (existingBlogs[i].id === singleBlog.id) {
          let tempData = { ...singleBlog };
          tempData.Views = existingBlogs[i].Views || 0;
          setSingleBlogView(tempData);
          break;
        }
      }
    }
  }, [singleBlog]);
  useEffect(() => {
    dispatch(fetchBlogById(id));
  }, [id]);
  return (
    <Grid container justifyContent="center">
      <Grid item xs={10} sm={10} md={8} lg={8}>
        {statusTwo === 'loading' ? (
          <SkeletonLoading />
        ) : statusTwo === 'failed' ? (
          <ErrorText error={error} />
        ) : (
          <Box sx={{ mt: 4, mb: 6 }}>
            <Stack direction="row" alignItems="center" spacing={4}>
              <Typography variant="textCaption">Posted on October 6th 2021</Typography>
              <Typography variant="textCaption">
                <RemoveRedEyeOutlinedIcon sx={{ fontSize: '20px' }} /> {singleBlogView?.Views ? singleBlogView?.Views : 0} Views
              </Typography>
            </Stack>
            <Typography variant="h4" sx={{ mt: 2 }}>
              {singleBlogView?.Title}
            </Typography>
            <Typography variant="body2" sx={{ mt: 2 }}>
              {singleBlogView?.Subtitle}
            </Typography>
            <Stack direction="row" alignItems="center" justifyContent="center" sx={{ mt: 2 }}>
              <Box component="img" src={CardImage} alt="card" sx={{ width: '100%', height: '250px', objectFit: 'cover' }} />
            </Stack>
            <Typography variant="body2" sx={{ mt: 2 }}>
              {singleBlogView?.Article}
            </Typography>
          </Box>
        )}
      </Grid>
    </Grid>
  );
}

export default BlogDetail;
