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

  // Login function - now uses secure API route
  login: async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        const user: User = data.user;
        
        if (typeof window !== 'undefined') {
          localStorage.setItem('kivisai-auth', JSON.stringify(user));
        }
        currentUser = user;
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
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