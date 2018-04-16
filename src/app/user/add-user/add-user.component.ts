import { Component, OnInit, ViewChild } from '@angular/core';

import { ZXingScannerComponent } from '@zxing/ngx-scanner';

import { Result } from '@zxing/library';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
    user: any = {};
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
        this.user.address = resultString;
    }

    onDeviceSelectChange(selectedValue: string) {
        console.log('Selection changed: ', selectedValue);
        this.selectedDevice = this.scanner.getDeviceById(selectedValue);
    }

    onSave(user) {
        console.log(user);
    }
}
