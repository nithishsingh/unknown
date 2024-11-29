import integrationsConfig from './integrations.json';

export interface TallyConfig {
    formId: string;
    defaultWidth: string;
    defaultHeight: string;
}

export interface CalendarConfig {
    username: string;
    defaultWidth: string;
    defaultHeight: string;
    apiKey: string;
}

export interface IntegrationsConfig {
    tally: TallyConfig;
    calendar: CalendarConfig;
}

export const getConfig = (): IntegrationsConfig => {
    return integrationsConfig;
};

export const getTallyConfig = (): TallyConfig => {
    return integrationsConfig.tally;
};

export const getCalendarConfig = (): CalendarConfig => {
    return integrationsConfig.calendar;
};
