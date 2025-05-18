import { Button } from "@/external_components/button.tsx";
import { Link } from "react-router-dom";
import { FeatureCard } from "@/components/feature_card.tsx";

export function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
            <div className="text-white">
                <div className="text-center p-15">
                    <h1 className="text-5xl font-bold mb-4">👾 Telegram Bot Configurator</h1>
                    <p className="text-gray-300 text-lg">
                        Удобный интерфейс для управления и настройки ваших Telegram-ботов — быстро, просто, гибко.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5 max-w-1/2 mx-auto">
                    <FeatureCard
                        title="⚙️ Гибкая настройка"
                        description="Настрой команды, ответы, триггеры и поведение бота без единой строки кода."
                    />
                    <FeatureCard
                        title="🧠 Умный логика-движок"
                        description="Поддержка условий, сценариев и автоматизации на основе событий."
                    />
                    <FeatureCard
                        title="📊 Мониторинг"
                        description="Следи за активностью, сообщениями и ошибками в реальном времени."
                    />
                </div>

                <div className="text-center">
                    <Button
                        asChild
                        className="px-7 py-7 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-medium transition">
                        <Link to="/editor">Перейти к конфигурации →</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
