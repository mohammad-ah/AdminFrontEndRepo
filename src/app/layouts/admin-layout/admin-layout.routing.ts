import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import {AuthGuardService} from '../../Service/authGuard.service';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent, canActivate: [AuthGuardService] },
    { path: 'vendors',   component: UserProfileComponent, canActivate: [AuthGuardService] },
    { path: 'products',         component: TablesComponent, canActivate: [AuthGuardService] }
];
