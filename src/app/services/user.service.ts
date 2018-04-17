import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  private users = [
    {
      fullName: 'Ashish Prajapati',
      address: '0x32Be343B94f860124dC4fEe278FDCBD38C102D88',
      contactAddress: '#429, 1st Floor 10th Main\nAGB Layout\nBangalore',
      gender: 'Male',
      birthdate: new Date('04/19/1995'),
      country: 'India',
      isAbove18: true,
      fatherName: 'John Doe',
      motherName: 'Jane Doe',
      email: 'someone@something.com',
      mobileNumber: '9977665544'
    },
    {
      fullName: 'Shiva Prasad',
      address: '0x6f46cf5569aefa1acc1009290c8e043747172d89',
      contactAddress: '#429, 1st Floor 10th Main\nAGB Layout\nBangalore',
      gender: 'Male',
      birthdate: new Date('04/19/1995'),
      country: 'India',
      isAbove18: true,
      fatherName: 'John Doe',
      motherName: 'Jane Doe',
      email: 'someone@something.com',
      mobileNumber: '9977665544'
    },
    {
      fullName: 'Suvarna Mishra',
      address: '0x281055afc982d96fab65b3a49cac8b878184cb16',
      contactAddress: '#429, 1st Floor 10th Main\nAGB Layout\nBangalore',
      gender: 'Female',
      birthdate: new Date('04/19/1995'),
      country: 'India',
      isAbove18: true,
      fatherName: 'John Doe',
      motherName: 'Jane Doe',
      email: 'someone@something.com',
      mobileNumber: '9977665544'
    },
    {
      fullName: 'Shristi PA',
      address: '0x90e63c3d53e0ea496845b7a03ec7548b70014a91',
      contactAddress: '#429, 1st Floor 10th Main\nAGB Layout\nBangalore',
      gender: 'Female',
      birthdate: new Date('04/19/1995'),
      country: 'India',
      isAbove18: true,
      fatherName: 'John Doe',
      motherName: 'Jane Doe',
      email: 'someone@something.com',
      mobileNumber: '9977665544'
    },
    {
      fullName: 'Shubham',
      address: '0xab7c74abc0c4d48d1bdad5dcb26153fc8780f83e',
      contactAddress: '#429, 1st Floor 10th Main\nAGB Layout\nBangalore',
      gender: 'Male',
      birthdate: new Date('04/19/1995'),
      country: 'India',
      isAbove18: true,
      fatherName: 'John Doe',
      motherName: 'Jane Doe',
      email: 'someone@something.com',
      mobileNumber: '9977665544'
    },
    {
      fullName: 'Shivanshu',
      address: '0x53d284357ec70ce289d6d64134dfac8e511c8a3d',
      contactAddress: '#429, 1st Floor 10th Main\nAGB Layout\nBangalore',
      gender: 'Male',
      birthdate: new Date('04/19/1995'),
      country: 'India',
      isAbove18: true,
      fatherName: 'John Doe',
      motherName: 'Jane Doe',
      email: 'someone@something.com',
      mobileNumber: '9977665544'
    },
  ];

  constructor() { }

  getUsers() {
    return this.users.slice();
  }

  getUser(index) {
    return Object.assign({}, this.users[index]);
  }

}
