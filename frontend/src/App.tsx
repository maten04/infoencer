import { users_db } from "./Data/users";
import User from "./Pages/User";
import "./Styles/App.css";
import { IUser } from "./Utils/Interfaces/user.interface";

const App = () => {
  const users: IUser[] = users_db;

  return (
    <>
      <User user={users[0]} />
    </>
  );
};

export default App;
