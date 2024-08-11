import UserProfile from "../Components/UserProfile";
import { IUser } from "../Utils/Interfaces/user.interface";

interface UserProps {
  user: IUser;
}

const User = ({ user }: UserProps) => {
  return (
    <div>
      <UserProfile url={user.profilePicture} />
    </div>
  );
};

export default User;
