export default function Navbar() {
    return (
        <nav className="bg-white flex justify-between items-center px-9 py-6">
            <h1 className="text-2xl flex font-bold gap-2"><img src="https://www.svgrepo.com/show/474453/rocket.svg" alt="logo" className="w-8 h-8" />Planet of the Ads</h1>
            <div className="flex gap-4 text-lg">
                <a href="/" className="hover:text-yellow-300">Galería</a>
                <a href="/metrics" className="hover:text-yellow-300">Métricas</a>
            </div>
        </nav>
    );
}