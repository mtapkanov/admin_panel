import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/external_components/tooltip"
import { Button } from "@/external_components/button"
import type { LucideIcon } from "lucide-react"
import type { ComponentProps } from "react"

interface IconTooltipButtonProps extends ComponentProps<typeof Button> {
    icon: LucideIcon
    tooltip: string
}

export function IconTooltipButton({
                                      icon: Icon,
                                      tooltip,
                                  }: IconTooltipButtonProps) {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button className={"p-2 w-9 h-9 flex items-center justify-center transition-transform duration-200 hover:scale-105"}
                        variant="outline" size="icon"
                    >
                        <Icon className="w-4 h-4 text-foreground transition-colors duration-200 hover:text-primary" />
                    </Button>
                </TooltipTrigger>
                <TooltipContent side="right" align="center">
                    <p>{tooltip}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}
