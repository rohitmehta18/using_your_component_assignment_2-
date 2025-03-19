const PostCard = ({ profileImage, username, content, isLiked, toggleLike }) => {
    return (
      <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", borderRadius: "8px" }}>
        <img src={profileImage} alt={username} style={{ width: "50px", borderRadius: "50%" }} />
        <h3>{username}</h3>
        <p>{content}</p>
        <button onClick={toggleLike} style={{ cursor: "pointer" }}>
          {isLiked ? "❤️ Liked" : "♡ Like"}
        </button>
      </div>
    );
  };
  
  export default PostCard;
  