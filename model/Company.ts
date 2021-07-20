export interface Company {
    id: number;

    is_using_jobs: 0 | 1;
    
    name: string;

    created_at: string;
    updated_at: string;

    payment_interval: string | 'Monthly';
    subscription_plan: string | 'Enterprise';
    subscription_type_id: number;
    is_subscription_active: 0 | 1;
    show_subscription_page: 0 | 1;

    stripe_id: string;
    card_band: string;
    card_last_four: string;

    trial_call_limit: number;
    trial_ends_at: string;
}