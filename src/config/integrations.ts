import config from './index';
import type { TallyConfig, CalendarConfig, IntegrationsConfig } from './types';

// Helper functions that use the centralized config
export const getConfig = (): IntegrationsConfig => {
    return config.integrations;
};

export const getTallyConfig = (): TallyConfig => {
    return config.integrations.tally;
};

export const getCalendarConfig = (): CalendarConfig => {
    return config.integrations.calendar;
}; 