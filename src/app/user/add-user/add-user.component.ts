import { Component, OnInit, ViewChild } from '@angular/core';

import { ZXingScannerComponent } from '@zxing/ngx-scanner';

import { Result } from '@zxing/library';

import trueID from '../../web3/trueID';
import { Router } from '@angular/router';

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

    addresses: any;

    constructor(private router: Router) {}

    async ngOnInit() {
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

        this.addresses = localStorage.getItem('accounts');

        if (!this.addresses) {
            this.router.navigate(['/users']);
        } else {
            this.addresses = JSON.parse(this.addresses);
        }
    }

    handleQrCodeResult(resultString: string) {
        this.user.address = resultString;
    }

    onDeviceSelectChange(selectedValue: string) {
        console.log('Selection changed: ', selectedValue);
        this.selectedDevice = this.scanner.getDeviceById(selectedValue);
    }

    async onSave(user) {

        // const age = this.calculateAge(user.birthdate);
        await trueID.methods.editUser(
            user.address,
            user.fullName,
            user.fatherName,
            user.motherName,
            user.contactAddress,
            user.gender,
            user.birthdate,
            user.country
        ).send({
            gas: 2000000,
            from: this.addresses[0]
        });
    }

    // calculateAge(birthdateStr) {
    //     const birthdate = new Date(birthdateStr);
    //     const ageDifMs = Date.now() - birthdate.getTime();
    //     const ageDate = new Date(ageDifMs); // miliseconds from epoch
    //     return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}
