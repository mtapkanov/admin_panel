import {BrowserRouter, Route, Routes} from "react-router";
import {HomePage} from "@/pages/HomePage.tsx";
import {EditorPage} from "@/pages/EditorPage.tsx";
import {NotFoundPage} from "@/pages/NotFoundPage.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="editor" element={<EditorPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
