import { Component, OnInit } from '@angular/core';

interface Ticket {
  name: string;
  date: string;
  time: string;
  location: string;
}

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.scss']
})
export class MyTicketsComponent implements OnInit {
  tickets: Ticket[] = [
    { name: 'Superfest 2024', date: '10/11/2024', time: '19:00', location: 'Trung Tâm Hội Nghị Quốc Gia' },
    { name: 'Concert Rock Việt', date: '15/11/2024', time: '20:00', location: 'Sân vận động Mỹ Đình' },
    { name: 'Hội Chợ Ẩm Thực Châu Á', date: '25/11/2024', time: '10:00', location: 'Công viên Thống Nhất' }
  ];

  constructor() {}

  ngOnInit(): void {}

  viewTicket(ticket: Ticket): void {
    alert(`Xem vé: ${ticket.name}`);
  }
}
