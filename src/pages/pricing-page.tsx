import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { CheckIcon, XIcon } from "lucide-react";

export default function Pricing() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 md:py-20 lg:py-24 px-4 md:px-6">
      <div className="grid gap-6 md:gap-8 text-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Pricing for Every Team
          </h1>
          <p className="text-muted-foreground max-w-[700px] mx-auto mt-2 md:text-xl">
            Choose the plan that fits your workflow needs. No hidden fees,
            cancel anytime.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>Free</CardTitle>
              <CardDescription>Get started for free</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="text-4xl font-bold">$0</div>
              <ul className="grid gap-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-primary" />
                  Unlimited projects
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-primary" />
                  Basic collaboration tools
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-primary" />1 user
                </li>
                <li className="flex items-center gap-2">
                  <XIcon className="w-4 h-4 text-muted-foreground" />
                  No advanced features
                </li>
              </ul>
            </CardContent>
            <CardFooter className="w-full flex justify-end">
              <Button variant="outline" className="w-full">
                Get Started
              </Button>
            </CardFooter>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>Pro</CardTitle>
              <CardDescription>For growing teams</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="text-4xl font-bold">$19</div>
              <div className="text-sm text-muted-foreground">
                per user / month
              </div>
              <ul className="grid gap-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-primary" />
                  Unlimited projects
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-primary" />
                  Advanced collaboration tools
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-primary" />
                  Unlimited users
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-primary" />
                  Analytics and reporting
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="w-full">Get Started</Button>
            </CardFooter>
          </Card>
          <Card className="bg-card text-card-foreground">
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>For large organizations</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="text-4xl font-bold">Contact us</div>
              <div className="text-sm text-muted-foreground">
                Custom pricing for your needs
              </div>
              <ul className="grid gap-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-primary" />
                  Unlimited projects
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-primary" />
                  Advanced collaboration tools
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-primary" />
                  Unlimited users
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-primary" />
                  Advanced analytics and reporting
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-primary" />
                  Dedicated support
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-primary" />
                  Custom integrations
                </li>
              </ul>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="w-full">Contact Sales</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
