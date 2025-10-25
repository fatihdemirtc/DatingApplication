import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { MemberList } from './features/members/member-list/member-list';
import { MemberDetailed } from './features/members/member-detailed/member-detailed';
import { authGuard } from '../core/guards/auth-guard';
import { NotFound } from './shared/errors/not-found/not-found';
import { ServerError } from './shared/errors/server-error/server-error';
import { MemberMessages } from './features/members/member-messages/member-messages';
import { MemberPhotos } from './features/members/member-photos/member-photos';
import { MemberProfile } from './features/members/member-profile/member-profile';
import { memberResolver } from './features/members/member-resolver';
import { preventUnsavedChangesGuard } from '../core/guards/prevent-unsaved-changes-guard';
import { Messages } from './features/messages/messages';
import { Lists } from './features/lists/lists';
import { adminGuard } from '../core/guards/admin-guard-guard';
import { Admin } from './features/admin/admin';

export const routes: Routes = [
    { path: '', component: Home },
    {
        path: '',
        canActivate: [authGuard],
        runGuardsAndResolvers: 'always',
        children: [
            { path: 'members', component: MemberList },
            {
                path: 'members/:id',
                resolve: { member: memberResolver },
                runGuardsAndResolvers: 'always',
                component: MemberDetailed,
                children: [
                    { path: '', redirectTo: 'profile', pathMatch: 'full' },
                    {
                        path: 'profile', component: MemberProfile, title: 'Profile',
                        canDeactivate: [preventUnsavedChangesGuard]
                    },
                    { path: 'photos', component: MemberPhotos, title: 'Photos' },
                    { path: 'messages', component: MemberMessages, title: 'Messages' },
                ]
            },
            { path: 'lists', component: Lists },
            { path: 'messages', component: Messages },
            { path: 'admin', component: Admin, canActivate: [adminGuard] },

            { path: 'server-error', component: ServerError },
            { path: '**', component: NotFound },
        ]
    }];
