// Types used by both implementations
export interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

export const API_URL = "https://jsonplaceholder.typicode.com";

export const fetchUser = async (userId: number): Promise<User> => {
  const response = await fetch(`${API_URL}/users/${userId}`);
  if (!response.ok) throw new Error("Network error");
  return response.json() as Promise<User>;
};
