import { Handle, Position } from "@xyflow/react";
import { UploadIcon } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import { Label } from "./ui/label";

export default function InitialNode() {
  return (
    <>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Upload Files</CardTitle>
          <CardDescription>
            Start by uploading the necessary files for this workflow step.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="files">Files</Label>
              <div className="flex h-16 items-center justify-center rounded-md border-2 border-dashed border-muted-foreground bg-muted px-4 text-muted-foreground transition-colors hover:border-primary hover:bg-muted-foreground hover:text-primary">
                <div className="grid gap-1 text-center">
                  <UploadIcon className="h-6 w-6" />
                  <p className="text-sm font-medium">
                    Drag and drop files or click to upload
                  </p>
                </div>
              </div>
            </div>
            <Button>Continue to next step</Button>
          </div>
        </CardContent>
      </Card>
      <Handle
        type="source"
        position={Position.Bottom}
        id="init"
        isConnectable={true}
      />
    </>
  );
}
