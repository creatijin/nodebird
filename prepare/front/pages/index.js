import { useSelector } from "react-redux";

import AppLayout from "../components/AppLayout";
import PostForm from "../components/postForm";
import PostCard from "../components/postCard";

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  return (
    <AppLayout>
      {isLoggedIn && <PostForm />}
      {mainPosts.map((post, index) => (
        <PostCard key={post.id} post={post} />
        //key에 index를 넣지말자 지워지거나 변경될 가능성이 있는것들은 쓰면 안된다. 바뀌지 않을 경우에만 사용은 가능
      ))}
    </AppLayout>
  );
};

export default Home;
