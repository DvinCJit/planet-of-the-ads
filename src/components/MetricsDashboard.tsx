import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";
import MetricCard from "./MetricCard";
import type { Metric } from "../types";
import MetricsFilters from "./MetricsFilters";

export default function MetricsDashboard() {
    const [data, setData] = useState<Metric[]>([]);
    const [selectedCampaign, setSelectedCampaign] = useState("");
    const [selectedPlatform, setSelectedPlatform] = useState("");
    useEffect(() => {
        fetch('/data/metrics.json')
            .then(res => res.json())
            .then((json: Metric[]) => setData(json));
    }, []);
    const campaigns = Array.from(new Set(data.map((d) => d.campaign)));
    const platforms = Array.from(new Set(data.map((d) => d.platform)));
    const filtered = data.filter((d) => {
        return (
            (selectedCampaign === "" || d.campaign === selectedCampaign) &&
            (selectedPlatform === "" || d.platform === selectedPlatform)
        );
    });
    const totalImpressions = filtered.reduce((sum, d) => sum + d.impressions, 0);
    const totalClicks = filtered.reduce((sum, d) => sum + d.clicks, 0);
    const totalSpend = filtered.reduce((sum, d) => sum + d.spend, 0);
    const ctr = totalImpressions ? (totalClicks / totalImpressions) * 100 : 0;
    return (
        <div>
            <MetricsFilters campaigns={campaigns} platforms={platforms} selectedCampaign={selectedCampaign} selectedPlatform={selectedPlatform} onCampaignChange={setSelectedCampaign} onPlatformChange={setSelectedPlatform} />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <MetricCard label="Impresiones" value={totalImpressions.toLocaleString()} />
                <MetricCard label="Clics" value={totalClicks.toLocaleString()} />
                <MetricCard label="CTR" value={ctr.toFixed(2) + "%"} />
                <MetricCard label="Gasto (€)" value={totalSpend.toFixed(2)} />
            </div>

            <LineChart width={700} height={300} data={filtered}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line dataKey="clicks" stroke="#8884d8" />
                <Line dataKey="impressions" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
}