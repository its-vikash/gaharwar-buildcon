import { Component } from '@angular/core';
import { BannerComponent } from "../../components/layout/banner/banner.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [BannerComponent]
})
export class HomeComponent {

}
