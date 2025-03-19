import { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <button
      style={{ backgroundColor: liked ? "red" : "gray", color: "white", padding: "5px 10px", border: "none", borderRadius: "5px", cursor: "pointer" }}
      onClick={() => setLiked(!liked)}
    >
      {liked ? "Liked ❤️" : "Like 👍"}
    </button>
  );
};

export default LikeButton;
