import Header from "../components/Header";
import Footer from "../components/Footer";

export default function MainLayout({ children }) {
    return (
        <div>
            <div className="relative">
                <Header />

                <main className="py-10 px-8 min-h-[90vh] relative z-1">
                    {children}
                </main>
            </div>

            <Footer />
        </div>
    );
}
