import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'wallet',
        children: [
          {
            path: '',
            loadChildren: '../pages/wallet/wallet.module#WalletPageModule'
          },
          {
            path: 'profile-list',
            children: [
              {
                path: '',
                loadChildren: '../pages/profile-list/profile-list.module#ProfileListPageModule',
              },
              {
                path: 'card-detail',
                loadChildren: '../pages/card-detail/card-detail.module#CardDetailPageModule',
              },
              { path: 'accept-detail',
                loadChildren: './pages/accept-detail/accept-detail.module#AcceptDetailPageModule',
              },

            ]
          },
        ]
      },
      {
        path: 'scanner',
        children: [
          {
            path: '',
            loadChildren: '../pages/scanner/scanner.module#ScannerPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/wallet',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/wallet',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
