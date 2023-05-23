import { CircularProgress, List, ListItem } from "@mui/material";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "components/Post";

interface Data {
  id: string;
  title: string;
  contents: string;
}

const newData = [
  { id: "0", title: "제목0", contents: "내용" },
  { id: "1", title: "제목1", contents: "내용1" },
  { id: "2", title: "제목2", contents: "내용2" },
  { id: "3", title: "제목3", contents: "내용" },
  { id: "4", title: "제목4", contents: "내용1" },
  { id: "5", title: "제목5", contents: "내용2" },
  { id: "6", title: "제목6", contents: "내용" },
  { id: "7", title: "제목7", contents: "내용1" },
  { id: "8", title: "제목8", contents: "내용2" },
];

const PostList = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setTimeout(() => {
      setData((prevData) => [...prevData, ...newData]);
    }, 1500);
  };

  return (
    <>
      <h1>무한스크롤 게시판 데모</h1>
      <hr />
      <InfiniteScroll
        dataLength={data.length}
        next={fetchData}
        hasMore={true}
        loader={<CircularProgress sx={{ position: "absolute" }} />}
      >
        <List>
          {data.map((item, index) => (
            <ListItem>
              <Post />
            </ListItem>
          ))}
        </List>
      </InfiniteScroll>
    </>
  );
};

export default PostList;
