import { BodyLayout } from "@/components/body_layout.tsx"
import {Menu} from "@/components/menu.tsx";
import Footer from "@/components/footer.tsx";

export function EditorPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
            <div className="flex flex-col h-screen w-full">
                {/* Header: высота по контенту */}
                <div className="flex-none w-full">
                    <Menu />
                </div>

                {/* Body: всё оставшееся пространство */}
                <div className="flex-1 w-full overflow-auto">
                    <BodyLayout />
                </div>

                {/* Footer: высота по контенту */}
                <div className="flex-none w-full">
                    <Footer />
                </div>
            </div>
        </div>
    )
}
