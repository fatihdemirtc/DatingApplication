import { Routes } from '@angular/router';
import { Home } from './features/home/home';
import { MemberList } from './features/members/member-list/member-list';
import { MemberDetailed } from './features/members/member-detailed/member-detailed';
import { Lists } from './features/lists/lists';
import { Messages } from './features/messages/messages';
import { authGuard } from '../core/guards/auth-guard';
import { NotFound } from './shared/errors/not-found/not-found';
import { ServerError } from './shared/errors/server-error/server-error';

export const routes: Routes = [
    { path: 'register', component: Home },
    {
        path: '',
        canActivate: [authGuard],
        runGuardsAndResolvers: 'always',
        children: [
            { path: 'members', component: MemberList },
            { path: 'members/:id', component: MemberDetailed },
            { path: 'lists', component: Lists },
            { path: 'messages', component: Messages },]
    },
    { path: 'server-error', component: ServerError },
    { path: '**', component: NotFound },
];
