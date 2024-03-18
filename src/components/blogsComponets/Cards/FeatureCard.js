import * as React from 'react';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Card, Grid, Stack } from '@mui/material';
import { featureCardCaptionContainer, featureCardMTextCaption, featureCardMainContainer } from './cardStyles';
import CardImage from '../../../assets/images/banner-bg.jpg';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import ArrowRightAltOutlinedIcon from '@mui/icons-material/ArrowRightAltOutlined';
import { useNavigate } from 'react-router-dom';
function FeatureCard({ featureBlog, handleBlogsViews }) {
  const navigate = useNavigate();
  const handleBlogDetail = (blogId) => {
    handleBlogsViews(blogId);
    navigate(`/blog-detail/${blogId}`);
  };
  return (
    <Box sx={featureCardMainContainer}>
      <Grid container justifyContent="center">
        <Grid item xs={10} sm={10} md={9} lg={8}>
          <Card sx={{ display: { md: 'flex' } }}>
            <CardMedia
              component="img"
              sx={{ width: { md: 250, sm: '100%' }, height: 250, p: 2 }}
              image={CardImage}
              alt="Live from space album cover"
            />
            <CardContent>
              <Stack direction="column" justifyContent="space-between" sx={{ height: { md: 220, sm: 'auto', xs: 'auto' } }}>
                <Box>
                  <Stack sx={featureCardCaptionContainer}>
                    <Stack direction="row" spacing={4}>
                      <Typography sx={featureCardMTextCaption}>Posted on October 6th 2021</Typography>
                      <Typography sx={featureCardMTextCaption}>
                        <RemoveRedEyeOutlinedIcon /> {featureBlog?.Views ? featureBlog?.Views : 0} Views
                      </Typography>
                    </Stack>
                    <Typography variant="textOrange">Feature</Typography>
                  </Stack>
                  <Typography variant="h4" sx={{ mt: 2 }}>
                    {featureBlog?.Title}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 2 }}>
                    {featureBlog?.Subtitle.substring(0, 120)}...
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }} onClick={() => handleBlogDetail(featureBlog.id)}>
                  Read more <ArrowRightAltOutlinedIcon sx={{ mt: '4px' }} />
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FeatureCard;
