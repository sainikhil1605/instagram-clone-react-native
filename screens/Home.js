import { FlatList, View } from "react-native";
import Post from "../components/Post";

const Home = (props) => {
  const posts = [
    {
      id: 1,
      userName: "John Doe",
      userImage: "../assets/photo1.jpg",
      postImage: "https://randomuser.me/api/portraits/",
      postText: "This is a post",
    },
    {
      id: 2,
      userName: "John Doe",
      userImage: "../assets/photo1.jpg",
      postImage: "https://randomuser.me/api/portraits/",
      postText: "This is a post",
    },
    {
      id: 3,
      userName: "John Doe",
      userImage: "../assets/photo1.jpg",
      postImage: "https://randomuser.me/api/portraits/",
      postText: "This is a post",
    },
    {
      id: 4,
      userName: "John Doe",
      userImage: "../assets/photo1.jpg",
      postImage: "https://randomuser.me/api/portraits/",
      postText: "This is a post",
    },
    {
      id: 5,
      userName: "John Doe",
      userImage: "../assets/photo1.jpg",
      postImage: "https://randomuser.me/api/portraits/",
      postText: "This is a post",
    },
    {
      id: 6,
      userName: "John Doe",
      userImage: "../assets/photo1.jpg",
      postImage: "https://randomuser.me/api/portraits/",
      postText: "This is a post",
    },
    {
      id: 7,
      userName: "John Doe",
      userImage: "../assets/photo1.jpg",
      postImage: "https://randomuser.me/api/portraits/",
      postText: "This is a post",
    },
    {
      id: 8,
      userName: "John Doe",
      userImage: "../assets/photo1.jpg",
      postImage: "https://randomuser.me/api/portraits/",
      postText: "This is a post",
    },
  ];
  return (
    <View style={{ backgroundColor: "white" }}>
      <FlatList data={posts} renderItem={({ item }) => <Post {...item} />} />
    </View>
  );
};
export default Home;
