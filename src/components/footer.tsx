const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-2">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm">
                {/* Логотип / название */}
                <div className="mb-2 md:mb-0 font-semibold">
                    Botix © {new Date().getFullYear()}
                </div>

                {/* Навигация */}
                <nav className="flex space-x-4 mb-2 md:mb-0">
                    <a href="/about" className="hover:text-white transition-colors">О компании</a>
                    <a href="/privacy" className="hover:text-white transition-colors">Политика конфиденциальности</a>
                    <a href="/contact" className="hover:text-white transition-colors">Контакты</a>
                </nav>

                {/* Соцсети */}
                <div className="flex space-x-3">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-white transition-colors">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M22 12.07c0-5.52-4.48-10-10-10S2 6.55 2 12.07c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54v-2.2c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.88h2.74l-.44 2.89h-2.3v6.99C18.34 21.2 22 17.07 22 12.07z" />
                        </svg>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-white transition-colors">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M23 3a10.9 10.9 0 01-3.14.86A4.48 4.48 0 0022.4.36a9.14 9.14 0 01-2.88 1.1 4.52 4.52 0 00-7.7 4.12 12.85 12.85 0 01-9.32-4.73 4.52 4.52 0 001.4 6.05A4.47 4.47 0 012 9.8v.06a4.52 4.52 0 003.62 4.44 4.5 4.5 0 01-2.04.08 4.53 4.53 0 004.22 3.13A9.06 9.06 0 012 19.54 12.78 12.78 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.35-.01-.53A8.36 8.36 0 0023 3z" />
                        </svg>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-white transition-colors">
                        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                            <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6zm5.5-1.25a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
