import { Component } from '@angular/core';

export interface OurClients {
  name: string;
  id: string;
  birth: string;
  phoneNumber: string;
  // qr: string;
}

const ELEMENT_DATA: OurClients[] = [
  {id: '#1', name: 'Назар', birth: '07/09/1989', phoneNumber: '0680128743'},
  {id: '#2', name: 'Тарас', birth: '12/02/1999', phoneNumber: '0693457861'},
  {id: '#3', name: 'Андріана', birth: '13/05/1995', phoneNumber: '0983281930'},
  {id: '#4', name: 'Василь', birth: '02/09/2003', phoneNumber: '0972683016'},
  {id: '#5', name: 'Анастасія', birth: '08/10/1998', phoneNumber: '0678925600'},
  {id: '#6', name: 'Катя', birth: '12/02/2002', phoneNumber: '0986304629'},
  {id: '#7', name: 'Наталя', birth: '19/02/2002', phoneNumber: '0939536720'},
  {id: "#8", name: 'Артем', birth: '07/09/1999', phoneNumber: '0995239178'},
  {id: '#9', name: 'Саша', birth: '07/09/1989', phoneNumber: '0685082608'},
  {id: '#10', name: 'Владислав', birth: '07/09/1989', phoneNumber: '0982689467'},
];

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.css']
})
export class ClientsTableComponent {
  // myQR: any;
  // getValue(val: string) {
  //   console.warn(val);
  //   this.myQR = val;
  // };
  displayedColumns: string[] = ['id', 'name', 'birth', 'phoneNumber'];
  dataSource = ELEMENT_DATA;
}
