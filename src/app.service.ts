import { Injectable } from '@nestjs/common';
import * as admin from 'firebase-admin';
@Injectable()
export class AppService {
  getHello(): {} {
    return {'product':'Teton Bath Scale'};
  }

  async getUser(): Promise<any> {
    try {
      let data = [];
      let userList = await  admin.firestore().collection('Users').get();
      userList.forEach((doc) => {
        data.push(doc.data());
      })
      return data;
    } catch (error) {
      console.log(error)
    }
  }

  async addUser(name: string, email: string): Promise<any> {
    try {
      const data = {
        email, name
      }
      const res = await admin.firestore().collection("Users").add(data)
      return res;

    } catch (error) {
      console.log(error)
    }
  }
}
