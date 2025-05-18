import { useState } from "react"
import { Home, Settings, Users, FileText, ChevronRight } from "lucide-react"
import { Button } from "@/external_components/button.tsx"

// Навигационные элементы
const navItems = [
    { title: "Notifications", icon: Home, href: "#" },
    { title: "Messages", icon: Users, href: "#" },
    { title: "Calendar", icon: FileText, href: "#" },
    { title: "Settings", icon: Settings, href: "#" },
]

interface RightSidebarProps {
    initialOpen?: boolean
}

export function RightSidebar(
    { initialOpen = true }: RightSidebarProps) {

    const [isOpen, setIsOpen] = useState(initialOpen)

    return (
        <div
            className={`h-full bg-gray-100 border-l transition-all duration-300 overflow-y-auto ${isOpen ? "w-48" : "w-12"}`}>
            <div className="p-2 border-b">
                <div className="flex items-stretch">
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0" onClick={() => setIsOpen(!isOpen)}>
                        <ChevronRight className={`h-4 w-4 transition-transform ${!isOpen && "rotate-180"}`} />
                    </Button>
                    {isOpen && <span className="font-medium text-sm">Инфо</span>}
                </div>
            </div>
            <nav className="p-1">
                {navItems.map((item) => (
                    <a
                        key={item.title}
                        href={item.href}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-md hover:bg-gray-200 text-sm"
                    >
                        <item.icon className="h-4 w-4 flex-shrink-0" />
                        {isOpen && <span>{item.title}</span>}
                    </a>
                ))}
            </nav>
        </div>
    )
}
