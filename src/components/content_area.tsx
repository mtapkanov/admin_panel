import type React from "react"
import {FeatureCardNew} from "@/components/feature_card.tsx";
import { Brain, BarChart, Settings, MessageCircle, Zap, ShieldCheck, FileText, Bot, MonitorCheck } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/external_components/tabs.tsx"


export const featureCardItems = [
    {
        title: "Мощный движок логики",
        icon: Brain,
        description: "Создавай гибкие сценарии, условия и автоматизацию без кода.",
    },
    {
        title: "Интерактивный анализ",
        icon: BarChart,
        description: "Следи за активностью пользователей и событиями в реальном времени.",
    },
    {
        title: "Настройка без кода",
        icon: Settings,
        description: "Управляй ботом через UI: команды, ответы, поведение — всё визуально.",
    },
    {
        title: "Обратная связь",
        icon: MessageCircle,
        description: "Взаимодействуй с пользователями через встроенные формы и опросы.",
    },
    {
        title: "Мгновенные реакции",
        icon: Zap,
        description: "Реакция на события и триггеры происходит мгновенно и без задержек.",
    },
    {
        title: "Безопасность данных",
        icon: ShieldCheck,
        description: "Защита информации, контроль доступа и журнал действий.",
    },
    {
        title: "Документооборот",
        icon: FileText,
        description: "Храни шаблоны, инструкции и файлы прямо в админке.",
    },
    {
        title: "Интеграция с Telegram",
        icon: Bot,
        description: "Подключай Telegram-бота в пару кликов — быстро и безопасно.",
    },
    {
        title: "Мониторинг и статус",
        icon: MonitorCheck,
        description: "Следи за стабильностью системы и отслеживай возможные сбои.",
    },
]

interface ContentAreaProps {
    title?: string
    children?: React.ReactNode
}

export function ContentArea({ title = "Контент", children }: ContentAreaProps) {
    return (
        <div className="flex-1 flex flex-col h-full overflow-hidden">
            <header className="h-10 border-b flex items-center justify-center px-4 bg-white">
                <h1 className="text-sm font-medium">{title}</h1>
            </header>
            <main className="flex-1 overflow-auto p-4 bg-white">
                {children || (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5 mx-auto">
                        {
                            featureCardItems.map(({title, icon, description}) =>(
                                <FeatureCardNew title={title} description={description} icon={icon}></FeatureCardNew>
                            ))
                        }
                    </div>
                )}

                <Tabs defaultValue="account" className="w-[400px]">
                    <TabsList>
                        <TabsTrigger value="account">Account</TabsTrigger>
                        <TabsTrigger value="password">Password</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">Make changes to your account here.</TabsContent>
                    <TabsContent value="password">Change your password here.</TabsContent>
                </Tabs>

            </main>
        </div>
    )
}
