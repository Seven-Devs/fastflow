import { Link } from "@tanstack/react-router";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { supabase } from "@/lib/supabase";
import { Button } from "../ui/button";
import { useAuth } from "@/hooks/auth";

export default function Navbar() {
  const session = useAuth();
  const login = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
    });
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <header className="px-4 lg:px-10 h-14 flex items-center border-b">
      <div className="flex items-center justify-center">
        <Link href="#" className="flex items-center justify-center">
          <img src="src/assets/react.svg" className="size-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
      </div>
      <nav className="flex-1 flex justify-center gap-4 sm:gap-6">
        <Link
          to="/"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Features
        </Link>
        <Link
          to="/pricing"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Pricing
        </Link>
        <Link
          to="/about"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          About
        </Link>
      </nav>
      <div>
        {!session?.session?.user ? (
          <Button
            onClick={login}
            variant={"outline"}
            type="submit"
            className="w-full"
          >
            Sign Up
          </Button>
        ) : (
          <div className="flex gap-8">
            <Link to="/dashboard">
              <Button variant={"outline"} type="submit" className="w-full">
                Dashboard
              </Button>
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Avatar className="h-9 w-9">
                  <AvatarImage src={session?.user?.user_metadata?.picture} />
                  <AvatarFallback>JP</AvatarFallback>
                  <span className="sr-only">Toggle user menu</span>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>My Account</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )}
      </div>
    </header>
  );
}
