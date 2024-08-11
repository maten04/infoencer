interface UserProfileProps {
  url: string;
}

const UserProfile = ({ url }: UserProfileProps) => {
  return (
    <div className="user-profile">
      <img src={require(`../Assets/Users/${url}`)} />
    </div>
  );
};

export default UserProfile;
