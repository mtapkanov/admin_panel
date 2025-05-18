import { Link } from 'react-router-dom';
import {Button} from "@/external_components/button";

export function NotFoundPage() {
    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center p-6">
            <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
            <p className="text-2xl font-semibold mb-2">Страница не найдена</p>
            <p className="text-gray-400 mb-6 text-center max-w-md">
                Упс! Похоже, вы перешли по несуществующему адресу. Попробуйте вернуться на главную или воспользоваться навигацией.
            </p>

            <Button asChild className="px-7 py-7 bg-red-500 hover:bg-red-600 rounded-lg text-white text-lg font-medium transition">
                <Link to="/">На главную</Link>
            </Button>
        </div>
    );
}
