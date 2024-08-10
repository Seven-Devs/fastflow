import { Handle, Position } from "@xyflow/react";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

export default function AddUserNode() {
  return (
    <>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Step 2</CardTitle>
          <CardDescription>
            Enter your name and email below to continue.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Enter your name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex justify-end gap-2">
            <Button variant="outline">Back</Button>
            <Button>Next</Button>
          </div>
        </CardFooter>
      </Card>
      <Handle
        type="target"
        position={Position.Top}
        id="a"
        isConnectable={true}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="b"
        isConnectable={true}
      />
    </>
  );
}
