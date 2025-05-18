import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger
} from "@/external_components/menubar.tsx";

export const Menu = () => {
    return (
        <div className=" text-gray-500">
            <Menubar className="bg-gradient-to-br from-gray-800 to-gray-700 border-0 text-gray-400 rounded-none">
                <MenubarMenu>
                    <MenubarTrigger>File</MenubarTrigger>
                    <MenubarContent
                        className="bg-gradient-to-br from-gray-800 to-gray-700 border-0 text-gray-400">
                        <MenubarItem className="">
                            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>New Window</MenubarItem>
                        <MenubarSeparator className="bg-gray-600 m-1"/>
                        <MenubarItem>Share</MenubarItem>
                        <MenubarSeparator className="bg-gray-600 m-1"/>
                        <MenubarItem>Print</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>About</MenubarTrigger>
                    <MenubarContent className="bg-gradient-to-br from-gray-800 to-gray-700 border-0 text-gray-400">
                        <div>
                            привет
                        </div>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </div>

    );
};
