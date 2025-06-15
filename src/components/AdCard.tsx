type Ad = {
    title: string;
    description: string;
    image: string;
    cta: string;
    platform: string;
};

export default function AdCard({ ad }: { ad: Ad }) {
    return (
        <div className="bg-white rounded-2xl shadow p-4">
            <img src={ad.image} className="rounded-lg mb-2" />
            <h2 className="font-semibold">{ad.title}</h2>
            <p className="text-sm text-gray-600">{ad.description}</p>
            <p className="mt-2 text-blue-500 font-medium">{ad.cta}</p>
            <span className="text-xs text-gray-500">{ad.platform}</span>
        </div>
    );
}