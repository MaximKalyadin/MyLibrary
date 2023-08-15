import { ProjectEnvironment } from 'src/environments/project-environment';

export const environment: ProjectEnvironment = {
    baseUrl: '/api',
    production: true,
    useRest: true,
    enableRouterTracing: false,
};
