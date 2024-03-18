import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import MainBanner from '../../components/blogsComponets/MainBanner';
import FeatureCard from '../../components/blogsComponets/Cards/FeatureCard';
import BlogListContainer from '../../components/blogsComponets/BlogListContainer';
import { useDispatch, useSelector } from 'react-redux';
import { addBlogsViews, fetchBlogs } from '../../redux/slices/blogSlice';
import useBlogsLikes from '../../Hooks/useBlogsLikes';

function Blogs() {
  const dispatch = useDispatch();
  const { blogs, status, error, existingBlogs } = useSelector((state) => state.blogReducer);
  const { mergedArray } = useBlogsLikes(existingBlogs, blogs);
  // callback for handling user blog views
  const handleBlogsViews = (blogId) => {
    let tempBlogsArray = [...mergedArray];
    tempBlogsArray.map((blog, index) => {
      if (blog.id === blogId) {
        let existViews = tempBlogsArray[index]?.Views ? tempBlogsArray[index]?.Views : 0;
        let tempObj = { ...tempBlogsArray[index] };
        tempObj.Views = existViews + 1;
        tempBlogsArray[index] = tempObj;
      }
    });
    dispatch(addBlogsViews(tempBlogsArray));
  };
  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);
  return (
    <Box>
      <MainBanner />
      <FeatureCard featureBlog={mergedArray[1]} handleBlogsViews={handleBlogsViews} />
      <BlogListContainer blogsArray={mergedArray} status={status} error={error} handleBlogsViews={handleBlogsViews} />
    </Box>
  );
}

export default Blogs;
