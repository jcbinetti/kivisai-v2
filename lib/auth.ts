// Simple authentication system for admin access
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

// In a real application, this would be stored in a database
// For now, we'll use a simple in-memory store
let currentUser: User | null = null;

export const auth = {
  // Check if user is logged in
  isAuthenticated: () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('kivisai-auth') !== null;
    }
    return false;
  },

  // Get current user
  getCurrentUser: (): User | null => {
    if (typeof window !== 'undefined') {
      const userData = localStorage.getItem('kivisai-auth');
      if (userData) {
        try {
          return JSON.parse(userData);
        } catch {
          return null;
        }
      }
    }
    return null;
  },

  // Login function
  login: (email: string, password: string): Promise<boolean> => {
    return new Promise((resolve) => {
      // Simple admin credentials (in production, use proper authentication)
      if (email === 'admin@kivisai.com' && password === 'admin123') {
        const user: User = {
          id: '1',
          name: 'Admin',
          email: email,
          role: 'admin'
        };
        
        if (typeof window !== 'undefined') {
          localStorage.setItem('kivisai-auth', JSON.stringify(user));
        }
        currentUser = user;
        resolve(true);
      } else {
        resolve(false);
      }
    });
  },

  // Logout function
  logout: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('kivisai-auth');
    }
    currentUser = null;
  },

  // Check if user is admin
  isAdmin: (): boolean => {
    const user = auth.getCurrentUser();
    return user?.role === 'admin';
  }
}; 