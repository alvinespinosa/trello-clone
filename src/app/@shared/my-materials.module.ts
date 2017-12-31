import { NgModule } from '@angular/core';

import { 
    MatToolbarModule,  
    MatButtonModule, 
    MatDialogModule, 
    MatIconModule,
    MatGridListModule
} from '@angular/material';

@NgModule({
  
    imports: [
        MatToolbarModule,        
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatGridListModule
    ],

    exports: [
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatGridListModule
    ]
})

export class MyMaterials { }
