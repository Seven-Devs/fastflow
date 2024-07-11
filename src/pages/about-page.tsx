import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Link } from "@tanstack/react-router";

export default function About() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_550px] lg:gap-12 xl:grid-cols-[1fr_650px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Streamline Your Workflow with Our Powerful Builder
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our workflow builder empowers you to create and automate
                    complex processes with ease. Unlock new levels of efficiency
                    and productivity for your team.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Get Started
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
              <img
                src="src/assets/about_workflow.jpg"
                width="650"
                height="650"
                alt="Hero"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Meet the Team
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our talented team of developers, designers, and product
                  experts are dedicated to building the best workflow automation
                  platform.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="grid gap-4">
                <div className="flex items-center justify-center">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </div>
                <div className="grid gap-1 text-center">
                  <h3 className="text-lg font-bold">John Doe</h3>
                  <p className="text-muted-foreground">Co-Founder, CEO</p>
                  <p className="text-sm text-muted-foreground">
                    John is a seasoned entrepreneur with a passion for building
                    innovative products that empower teams.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center justify-center">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </div>
                <div className="grid gap-1 text-center">
                  <h3 className="text-lg font-bold">Jane Doe</h3>
                  <p className="text-muted-foreground">Co-Founder, CTO</p>
                  <p className="text-sm text-muted-foreground">
                    Jane is a talented engineer with a deep understanding of
                    workflow automation and process optimization.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center justify-center">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                </div>
                <div className="grid gap-1 text-center">
                  <h3 className="text-lg font-bold">Alex Johnson</h3>
                  <p className="text-muted-foreground">Head of Product</p>
                  <p className="text-sm text-muted-foreground">
                    Alex is a product visionary who is dedicated to creating
                    intuitive and user-friendly workflow solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Powerful Features for Your Workflow
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our workflow builder offers a comprehensive set of features to
                  help you streamline your business processes and boost
                  productivity.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="grid gap-4">
                <div className="flex items-center justify-center">
                  <BotIcon className="h-12 w-12 text-primary" />
                </div>
                <div className="grid gap-1 text-center">
                  <h3 className="text-lg font-bold">Automation</h3>
                  <p className="text-muted-foreground">
                    Automate repetitive tasks and streamline your workflows with
                    our powerful automation tools.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center justify-center">
                  <CombineIcon className="h-12 w-12 text-primary" />
                </div>
                <div className="grid gap-1 text-center">
                  <h3 className="text-lg font-bold">Collaboration</h3>
                  <p className="text-muted-foreground">
                    Empower your team to work together seamlessly with our
                    built-in collaboration features.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center justify-center">
                  <ComponentIcon className="h-12 w-12 text-primary" />
                </div>
                <div className="grid gap-1 text-center">
                  <h3 className="text-lg font-bold">Customization</h3>
                  <p className="text-muted-foreground">
                    Tailor our workflow builder to your unique business needs
                    with our flexible customization options.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center justify-center">
                  <InfoIcon className="h-12 w-12 text-primary" />
                </div>
                <div className="grid gap-1 text-center">
                  <h3 className="text-lg font-bold">Analytics</h3>
                  <p className="text-muted-foreground">
                    Gain valuable insights into your workflows with our
                    comprehensive analytics and reporting tools.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center justify-center">
                  <ImportIcon className="h-12 w-12 text-primary" />
                </div>
                <div className="grid gap-1 text-center">
                  <h3 className="text-lg font-bold">Integrations</h3>
                  <p className="text-muted-foreground">
                    Seamlessly connect our workflow builder with your existing
                    tools and systems.
                  </p>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center justify-center">
                  <ScalingIcon className="h-12 w-12 text-primary" />
                </div>
                <div className="grid gap-1 text-center">
                  <h3 className="text-lg font-bold">Scalability</h3>
                  <p className="text-muted-foreground">
                    Scale your workflows with ease as your business grows,
                    without any infrastructure headaches.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function BotIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
      <path d="M15 13v2" />
      <path d="M9 13v2" />
    </svg>
  );
}

function CombineIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="8" x="2" y="2" rx="2" />
      <path d="M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M10 18H5c-1.7 0-3-1.3-3-3v-1" />
      <polyline points="7 21 10 18 7 15" />
      <rect width="8" height="8" x="14" y="14" rx="2" />
    </svg>
  );
}

function ComponentIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z" />
      <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z" />
      <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z" />
      <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z" />
    </svg>
  );
}

function ImportIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v12" />
      <path d="m8 11 4 4 4-4" />
      <path d="M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4" />
    </svg>
  );
}

function InfoIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  );
}

function ScalingIcon(props: { className: string }) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M14 15H9v-5" />
      <path d="M16 3h5v5" />
      <path d="M21 3 9 15" />
    </svg>
  );
}
