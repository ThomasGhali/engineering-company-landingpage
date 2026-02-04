export type Message = {
  firstName: string;
  lastName: string;
  email: string | null;
  country: string | null;
  phone: string | null;
  createdAt: Date;
  id: string;
  replied: boolean;
  message: string;
  about: string;
};
