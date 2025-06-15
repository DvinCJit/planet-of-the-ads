export interface Metric {
    campaign: string;
    platform: string;
    date: string;
    impressions: number;
    clicks: number;
    spend: number;
}

export interface Ad {
    id: string;
    campaign: string;
    platform: string;
    title: string;
    description: string;
    image: string;
    cta: string;
}