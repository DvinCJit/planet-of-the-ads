import { useEffect, useState } from "react";
import AdCard from "./AdCard";
import GalleryFilters from "./GalleryFilters";
import type { Ad } from "../types";

export default function Gallery() {
    const [creatives, setCreatives] = useState<Ad[]>([]);
    const [selectedCampaign, setSelectedCampaign] = useState("");
    const [selectedPlatform, setSelectedPlatform] = useState("");

    useEffect(() => {
        fetch('/data/creatives.json')
            .then(res => res.json())
            .then(data => setCreatives(data));
    }, []);

    const campaigns = Array.from(new Set(creatives.map((c) => c.campaign)));
    const platforms = Array.from(new Set(creatives.map((c) => c.platform)));

    const filtered = creatives.filter((ad) => {
        return (
            (selectedCampaign === "" || ad.campaign === selectedCampaign) &&
            (selectedPlatform === "" || ad.platform === selectedPlatform)
        );
    });

    return (
        <div>
            <GalleryFilters campaigns={campaigns} platforms={platforms} selectedCampaign={selectedCampaign} selectedPlatform={selectedPlatform} onCampaignChange={setSelectedCampaign} onPlatformChange={setSelectedPlatform} />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {filtered.map((ad) => (
                    <AdCard key={ad.id} ad={ad} />
                ))}
            </div>
        </div>
    );
}