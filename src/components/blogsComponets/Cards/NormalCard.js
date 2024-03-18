import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardImage from '../../../assets/images/banner-bg.jpg';
import { Card, Stack } from '@mui/material';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { normalCardCaption, normalCardContent, normalCardSubTitle, normalCardTitle } from './cardStyles';
import { useNavigate } from 'react-router-dom';
export default function NormalCard({ blog, handleBlogsViews }) {
  const navigate = useNavigate();
  const handleBlogDetail = (blogId) => {
    handleBlogsViews(blogId);
    navigate(`/blog-detail/${blogId}`);
  };
  return (
    <Card sx={{ ml: 2, height: '420px' }} onClick={() => handleBlogDetail(blog.id)}>
      <CardMedia sx={{ height: 160 }} image={CardImage} title="green iguana" />
      <CardContent sx={normalCardContent}>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Typography sx={normalCardCaption}>Posted on October 6th 2021</Typography>
          <Typography sx={normalCardCaption}>
            <RemoveRedEyeOutlinedIcon sx={{ fontSize: '20px' }} /> {blog?.Views ? blog?.Views : 0} Views
          </Typography>
        </Stack>
        <Typography sx={normalCardTitle}>{blog.Title}</Typography>
        <Typography sx={normalCardSubTitle}>{blog?.Subtitle.substring(0, 120)}...</Typography>
      </CardContent>
    </Card>
  );
}
