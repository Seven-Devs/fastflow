/* eslint-disable react-refresh/only-export-components */
import { supabase } from "@/lib/supabase";
import { Session, User } from "@supabase/supabase-js";
import { useContext, useState, useEffect, createContext } from "react";

export interface AuthContext {
  user: User | null | undefined;
  session: Session | null | undefined;
  isAuthenticated: boolean;
  signOut: () => void;
}

// create a context for authentication
export const AuthContext = createContext<AuthContext>({
  session: null,
  user: null,
  isAuthenticated: false,
  signOut: () => {},
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>();
  const [session, setSession] = useState<Session | null>();
  const isAuthenticated = session?.user.aud === "authenticated";

  useEffect(() => {
    const setData = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();
      if (error) throw error;
      setSession(session);
      setUser(session?.user);
    };

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
        setUser(session?.user);
      }
    );

    setData();

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const value = {
    session,
    user,
    isAuthenticated,
    signOut: () => supabase.auth.signOut(),
  };

  // use a provider to pass down the value
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// export the useAuth hook
export const useAuth = () => {
  return useContext(AuthContext);
};
