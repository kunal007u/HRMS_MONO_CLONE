export interface IPermissionRoute {
    id: string;
    name: string;
    priority: number;
    path: string | null;
    childRoute: IPermissionRoute[];
}