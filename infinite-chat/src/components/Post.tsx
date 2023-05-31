import {
  Card,
  CardHeader,
  // CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";
import { Favorite, MoreVert, Comment } from "@mui/icons-material";

interface PostProps {
  id: string;
  title: string;
  contents: string;
}

const Post = ({ id, title, contents }: PostProps) => {
  return (
    <Card sx={{ width: "100%" }}>
      <CardHeader
        avatar={<Avatar aria-label="recipe">R</Avatar>}
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={title}
        subheader="September 14, 2016"
      />
      {/* <CardMedia
        component="img"
        height="194"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      /> */}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {contents}
        </Typography>
      </CardContent>
      <CardActions disableSpacing sx={{ justifyContent: "end" }}>
        <IconButton aria-label="like">
          <Favorite />
        </IconButton>
        <IconButton aria-label="comment" sx={{ ml: "3px", mr: "1px" }}>
          <Comment />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
