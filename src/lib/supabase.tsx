import React from "react";
import { useState, useEffect } from "react";
import { createClient, Session } from "@supabase/supabase-js";

export interface AuthContext {
  isAuthenticated: boolean;
  session: Session | undefined;
}

const AuthContext = React.createContext<AuthContext | null>(null);

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || "",
  import.meta.env.VITE_SUPABASE_ANON_KEY || ""
);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session>();
  const isAuthenticated = session?.user !== null;

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        console.log("session", session);
        setSession(session);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        console.log("session", session);
        setSession(session);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, session }}>
      {children}
    </AuthContext.Provider>
  );
}
