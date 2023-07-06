import { Button } from "./button";
import { ChevronRight } from "lucide-react";

export default function ButtonComponent() {
  return (
    <>
      <Button variant="outline" size="icon">
        <ChevronRight className="h-4 w-4" />
      </Button>
    </>
  );
}
