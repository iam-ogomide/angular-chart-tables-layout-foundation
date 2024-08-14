import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { FooterComponent } from '../components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule} from '@angular/material/list';
import { AreaComponent } from '../widgets/area/area.component';
import { UsertableComponent } from 'src/app/component/usertable/usertable.component';
import { MatSliderModule} from '@angular/material/slider';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule} from '@angular/material/sort';
import {MatCardModule} from "@angular/material/card";
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDialogModule} from "@angular/material/dialog"
import { AlertBoxComponent } from 'src/app/component/alert-box/alert-box.component';
import { DialogBoxComponent } from 'src/app/component/dialog-box/dialog-box.component';
import { TableComponent } from 'src/app/component/table/table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
// import { MatTableExporterModule } from '@angular-material-extensions/table-exporter';



@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AreaComponent,
    UsertableComponent,
    TableComponent,
    DialogBoxComponent,
    AlertBoxComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    MatSliderModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatFormFieldModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    FormsModule,
    MatSelectModule,
    
  ],
  exports:[
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    AreaComponent,
    UsertableComponent,
    TableComponent,
    DialogBoxComponent,
    AlertBoxComponent,
  ]
})
export class SharedModule { }
