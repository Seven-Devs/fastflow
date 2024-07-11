import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Landing() {
  return (
    <main className="flex-1 flex items-center justify-center">
      <div className="max-w-md px-4 md:px-6 space-y-6 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Streamline Your Workflow
        </h1>
        <p className="text-muted-foreground md:text-xl">
          Simplify your team's processes with our powerful workflow management
          tools.
        </p>
        <div className="bg-background shadow-lg rounded-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Get Started</h2>
          <form className="space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full"
            />
            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
}
