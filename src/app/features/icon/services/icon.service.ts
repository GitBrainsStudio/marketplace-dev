import { Injectable } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { APP_URL } from "src/environments/environment";

@Injectable({
    providedIn: "root",
})
export class IconService {
    private _icons: string[] = [
        'star'
    ];

    constructor(private matIconRegistry: MatIconRegistry,
        private domSanitizer: DomSanitizer) {
    }

    init() {
        this._icons.forEach(icon => this.add(icon));
    }

    private add(name: string) {
        this.matIconRegistry.addSvgIcon(
            name,
            this.domSanitizer.bypassSecurityTrustResourceUrl(`${APP_URL}assets/icons/${name}.svg`)
        );
    }
}