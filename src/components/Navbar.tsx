export default function Navbar() {
    return (
        <nav className="bg-gray-900 text-white flex justify-between items-center px-6 py-3">
            <h1 className="text-2xl font-bold">Planet of the Ads</h1>
            <div className="flex gap-4 text-lg">
                <a href="/" className="hover:text-yellow-300">Galería</a>
                <a href="/metrics" className="hover:text-yellow-300">Métricas</a>
            </div>
        </nav>
    );
}