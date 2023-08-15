import { ProjectEnvironment } from 'src/environments/project-environment';

export const environment: ProjectEnvironment = {
    baseUrl: '/api',
    production: false,
    useRest: true,
    enableRouterTracing: false,
};
