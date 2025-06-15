import React from "react";

type Props = {
    campaigns: string[];
    platforms: string[];
    selectedCampaign: string;
    selectedPlatform: string;
    onCampaignChange: (value: string) => void;
    onPlatformChange: (value: string) => void;
};

export default function MetricsFilters({
    campaigns,
    platforms,
    selectedCampaign,
    selectedPlatform,
    onCampaignChange,
    onPlatformChange
}: Props) {
    return (
        <div className="flex gap-4 mb-6">
            <select
                className="p-2 border rounded"
                value={selectedCampaign}
                onChange={(e) => onCampaignChange(e.target.value)}
            >
                <option value="">Todas las campañas</option>
                {campaigns.map((c) => (
                    <option key={c} value={c}>
                        {c}
                    </option>
                ))}
            </select>

            <select
                className="p-2 border rounded"
                value={selectedPlatform}
                onChange={(e) => onPlatformChange(e.target.value)}
            >
                <option value="">Todas las plataformas</option>
                {platforms.map((p) => (
                    <option key={p} value={p}>
                        {p}
                    </option>
                ))}
            </select>
        </div>
    );
}