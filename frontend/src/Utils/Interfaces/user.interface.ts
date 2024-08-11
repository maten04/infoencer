export interface IUser {
  id: number;
  usename: string;
  password: string;
  email: string;
  phoneNumber: string;
  profilePicture: string;
  socials: number[];
  admin: boolean;
}
