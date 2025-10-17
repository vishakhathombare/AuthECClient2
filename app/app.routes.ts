import { Routes } from '@angular/router';
import { User } from './user/user';
import { Registration } from './user/registration/registration';
import { LocationUpgradeModule } from '@angular/common/upgrade';
import { LoginComponent } from './user/login/login';
import { Dashboard } from './dashboard/dashboard';
import { authGuard } from './shared/auth-guard';
import { AdminOnly } from './authorizeDemo/admin-only/admin-only';
import { AdminOrTeacher } from './authorizeDemo/admin-or-teacher/admin-or-teacher';
import { ApplyForMaternityLeave } from './authorizeDemo/apply-for-maternity-leave/apply-for-maternity-leave';
import { LibraryMembersOnly } from './authorizeDemo/library-members-only/library-members-only';
import { Under10AndFemale } from './authorizeDemo/under10-and-female/under10-and-female';
import { MainLayout } from './layouts/main-layout/main-layout';
import { Forbidden } from './forbidden/forbidden';
import { claimReq } from './utils/claimReq-utils';




export const routes: Routes = [
    {path:'', component:User,
    children:[
        { path: '', redirectTo: 'signup', pathMatch: 'full' },
        { path:'signup', component:Registration },
        { path:'signin', component:LoginComponent },
 ]
 },

 {
 path:'',component:MainLayout, canActivate:[authGuard],
 canActivateChild:[authGuard],
 children:[
 {path:'dashboard',component:Dashboard,
    
},
 {path:'admin-only',component:AdminOnly,
    data:{claim: 'adminOnly'}
    
},
{path:'admin-or-teacher',component:AdminOrTeacher,
    data:{claimReq: claimReq.adminOrTeacherOnly }

    
},
{path:'apply-for-maternity-leave',component:ApplyForMaternityLeave,
    
},
 {path:'library-members-only',component:LibraryMembersOnly,
    
},

{path:'under-10-and-female',component:Under10AndFemale,
    
},


{path:'forbidden',component:Forbidden,
    
}

]}
]
