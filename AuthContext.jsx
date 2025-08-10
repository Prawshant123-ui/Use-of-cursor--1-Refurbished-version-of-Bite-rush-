import React, { createContext, useContext, useReducer, useEffect } from 'react';

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'REGISTER':
      return {
        ...state,
        users: [...state.users, action.payload],
        currentUser: null,
        isAuthenticated: false
      };
    
    case 'LOGIN':
      return {
        ...state,
        currentUser: action.payload,
        isAuthenticated: true
      };
    
    case 'LOGOUT':
      return {
        ...state,
        currentUser: null,
        isAuthenticated: false
      };
    
    case 'UPDATE_PROFILE':
      return {
        ...state,
        currentUser: { ...state.currentUser, ...action.payload },
        users: state.users.map(user => 
          user.email === state.currentUser.email 
            ? { ...user, ...action.payload }
            : user
        )
      };
    
    default:
      return state;
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    users: [],
    currentUser: null,
    isAuthenticated: false
  });

  // Load users from localStorage on component mount
  useEffect(() => {
    const savedUsers = localStorage.getItem('biterush_users');
    if (savedUsers) {
      const users = JSON.parse(savedUsers);
      dispatch({ type: 'REGISTER', payload: null, users });
    }
  }, []);

  // Save users to localStorage whenever users change
  useEffect(() => {
    if (state.users.length > 0) {
      localStorage.setItem('biterush_users', JSON.stringify(state.users));
    }
  }, [state.users]);

  // Load current user from localStorage on component mount
  useEffect(() => {
    const savedUser = localStorage.getItem('biterush_current_user');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      dispatch({ type: 'LOGIN', payload: user });
    }
  }, []);

  // Save current user to localStorage whenever currentUser changes
  useEffect(() => {
    if (state.currentUser) {
      localStorage.setItem('biterush_current_user', JSON.stringify(state.currentUser));
    } else {
      localStorage.removeItem('biterush_current_user');
    }
  }, [state.currentUser]);

  const register = (userData) => {
    // Check if user already exists
    const existingUser = state.users.find(user => user.email === userData.email);
    if (existingUser) {
      throw new Error('User with this email already exists');
    }
    
    const newUser = {
      ...userData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString()
    };
    
    dispatch({ type: 'REGISTER', payload: newUser });
    return newUser;
  };

  const login = (email, password) => {
    const user = state.users.find(u => u.email === email && u.password === password);
    if (!user) {
      throw new Error('Invalid email or password');
    }
    
    dispatch({ type: 'LOGIN', payload: user });
    return user;
  };

  const logout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const updateProfile = (profileData) => {
    dispatch({ type: 'UPDATE_PROFILE', payload: profileData });
  };

  const value = {
    users: state.users,
    currentUser: state.currentUser,
    isAuthenticated: state.isAuthenticated,
    register,
    login,
    logout,
    updateProfile
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
