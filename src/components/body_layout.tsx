import { RightSidebar } from "@/components/right_sidebar.tsx"
import { ContentArea } from "@/components/content_area.tsx"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup, } from "@/external_components/resizable"
import { IconTooltipButton } from "./buttons.tsx"
import {Bell, Home, Search, Settings, User} from "lucide-react";

const openSidebarState: boolean = true;
const title: string = "Панель управления";

export function BodyLayout() {
    return (

            <ResizablePanelGroup
                direction="horizontal"
                className="flex w-full h-full overflow-hidden j">

                <div className="w-[50px] border border-gray-400 flex flex-col items-center gap-3 py-4 bg-background">
                    <IconTooltipButton icon={Home} tooltip="Домой" />
                    <IconTooltipButton icon={Search} tooltip="Поиск" />
                    <IconTooltipButton icon={User} tooltip="Профиль" />
                    <IconTooltipButton icon={Bell} tooltip="Уведомления" />
                    <IconTooltipButton icon={Settings} tooltip="Настройки" />
                </div>

                <ResizablePanel defaultSize={75}>
                    <div className="flex h-full items-center justify-center">
                        <TabContent/>
                    </div>
                </ResizablePanel>


                <ResizableHandle withHandle className="border-2"/>
                <ResizablePanel defaultSize={75}>
                    <div className="flex h-full items-center justify-center">
                        <ContentArea title={title}/>
                    </div>
                </ResizablePanel>



                <ResizablePanel defaultSize={150}>
                    <div className="flex h-full items-center justify-stretch">
                        <RightSidebar initialOpen={openSidebarState} />
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>

    )
}

export function TabContent() {
    return(
        <div className="w-full h-full bg-background p-5">
            <p>Контент для табов</p>
        </div>
    );
}

