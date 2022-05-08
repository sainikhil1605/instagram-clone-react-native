import { Image, Text, View } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
const Post = (props) => {
  const { userImage, userName, postImage, postText } = props;

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          padding: 10,
        }}
      >
        <Image
          source={require("../assets/photo1.jpg")}
          style={{ width: 50, height: 50, borderRadius: 25 }}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold", marginLeft: 10 }}>
          {userName}
        </Text>
      </View>
      <View>
        <Image
          source={require("../assets/photo1.jpg")}
          style={{ width: "100%", height: 200, resizeMode: "contain" }}
        />
        <View style={{ flexDirection: "row", padding: 10 }}>
          <FontAwesome
            name="heart"
            size={30}
            style={{ marginRight: 20, marginTop: 5 }}
          />
          <FontAwesome
            name="comment-o"
            size={30}
            style={{ marginRight: 20, marginTop: 5 }}
          />
          <FontAwesome
            name="send-o"
            size={30}
            style={{ marginRight: 20, marginTop: 5 }}
          />
        </View>

        <Text style={{ fontSize: 20, marginTop: 10, marginLeft: 10 }}>
          {postText}
        </Text>
      </View>
    </View>
  );
};
export default Post;
