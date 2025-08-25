import { Button } from "@/components/ui/button"
import DocumentView from "@/components/ui/icons/document-view"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export const AgreementButton = () => {
  return <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline" size="icon" className="border-primary text-primary hover:bg-primary hover:text-white size-10">
          <DocumentView />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Show Agreement as PDF</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
}