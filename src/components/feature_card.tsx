import {LucideIcon} from "lucide-react";

export function FeatureCard({title, description}: { title: string; description: string }) {
    return (
        <div className="bg-gray-700 rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-300">{description}</p>
        </div>
    );
}

interface FeatureCardProps {
    title: string
    description: string
    icon: LucideIcon
}

export function FeatureCardNew({ title, description, icon: Icon }: FeatureCardProps) {
    return (
        <div
            className="rounded-xl p-6 shadow-md transition-all duration-300
                 bg-card text-card-foreground border border-border
                 hover:shadow-lg hover:scale-[1.02]"
        >
            <div className="flex items-center gap-4 mb-3">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                    <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
            </div>
            <p className="text-muted-foreground text-sm">{description}</p>
        </div>
    )
}
