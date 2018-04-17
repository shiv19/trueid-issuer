import { Component, OnInit, ViewChild } from '@angular/core';

import { ZXingScannerComponent } from '@zxing/ngx-scanner';

import { Result } from '@zxing/library';

@Component({
    selector: 'app-add-provider',
    templateUrl: './add-provider.component.html',
    styleUrls: ['./add-provider.component.css']
})
export class AddProviderComponent implements OnInit {
    provider: any = {};
    @ViewChild('scanner') scanner: ZXingScannerComponent;
    hasCameras = false;
    hasPermission: boolean;
    qrResultString: string;

    availableDevices: MediaDeviceInfo[];
    selectedDevice: MediaDeviceInfo;

    constructor() {}

    ngOnInit() {
        this.scanner.camerasFound.subscribe((devices: MediaDeviceInfo[]) => {
            this.hasCameras = true;

            this.availableDevices = devices;

            if (devices.length > 0) {
                this.selectedDevice = devices[0];
            }
        });

        this.scanner.camerasNotFound.subscribe((devices: MediaDeviceInfo[]) => {
            console.error(
                'An error has occurred when trying to enumerate your video-stream-enabled devices.'
            );
        });

        this.scanner.permissionResponse.subscribe((answer: boolean) => {
            this.hasPermission = answer;
        });
    }

    handleQrCodeResult(resultString: string) {
        this.provider.address = resultString;
    }

    onDeviceSelectChange(selectedValue: string) {
        console.log('Selection changed: ', selectedValue);
        this.selectedDevice = this.scanner.getDeviceById(selectedValue);
    }

    onSave(provider) {
        console.log(provider);
    }
}
