// auth.js
export const logout = () => {
    // Clear any authentication tokens or user data from localStorage or cookies
    localStorage.removeItem('authToken');
    // You can add more logic here if needed
  };
  