const UserItem = (props) => {
    console.log(props);
    const { firstName, lastName, username, userEmail, userImage } = props;
    return (
      <div>
        <h3>{`${firstName} ${lastName}`}</h3>
        <p>{username}</p>
        <h5>{userEmail}</h5>
        <img src={userImage} alt={username} />
      </div>
    );
  };
  export default UserItem;
  