export default function MetricCard({ label, value }: { label: string; value: string | number }) {
    return (
        <div className="bg-white rounded-2xl p-4 shadow text-center">
            <h3 className="text-gray-600 text-sm">{label}</h3>
            <p className="text-2xl font-bold">{value}</p>
        </div>
    );
}