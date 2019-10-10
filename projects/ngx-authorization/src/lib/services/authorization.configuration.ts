export class AuthorizationConfiguration {
    public authRoute: string | Function = '/login';
    public failRoute = '/403';

    private secureMap: Map<string, string[]> = new Map();

    /**
     * 
     * @param route
     * @param requireRoles
     */
    public secure(route: string, roles: string[]) {
        this.secureMap.set(route, roles);
    }

    public exposed(url: string): boolean {
        return !this.secureMap.has(url);
    }

    public isAuthorized(url, role): boolean {
        const roles = this.secureMap.get(url);
        return roles.includes(role); 
    }
}