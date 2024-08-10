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

export default function FinalNode() {
  return (
    <>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Finalize Workflow</CardTitle>
          <CardDescription>
            Review your selections and click Finish to complete the workflow.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">Workflow Name:</p>
            <p>Monthly Reporting</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">Scheduled:</p>
            <p>Every 1st of the month</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground">Notifications:</p>
            <p>Enabled</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="ml-auto">Finish Workflow</Button>
        </CardFooter>
      </Card>
      <Handle
        type="target"
        position={Position.Top}
        id="final"
        isConnectable={true}
      />
    </>
  );
}
