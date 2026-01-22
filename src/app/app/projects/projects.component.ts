import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  selectedProject: any = null;

  projects = [
    {
      title: 'RTA Agents (Desktop App)',
      image: 'assets/RTA.png',
      description:
        'A Windows desktop application developed in .NET for RTA agents to manage customer registrations, document verification, and reporting.',
      tech: '.NET, WPF, PostgreSQL,SQL Server,MSI Installer',
    },
    {
      title: 'E-Parvaha 2025',
      image: 'assets/Eparvaha.png',
      description:
        'This project for DEPARTMENT OF CONSUMER AFFAIRS A government logistics and vehicle movement tracking system with role-based access and real-time workflow monitoring.',
      tech: 'Angular, .NET Core, PostgreSQL,Azure,Docker,Kubernetes,Microservices',
    },
    {
      title: 'POS System',
      image: 'assets/pos.png',
      description:
        'Retail POS system supporting billing, inventory management, GST calculation, and sales reports.Point of SaleIt is the point at which a customer makes a payment to a merchant in exchange for goods or services.',
      tech: '.NET, SQL Server,Crystal Reports,Barcode Integration,Printer Integration,Payment Gateway Integration',
    },
    {
      title: 'NHRDF',
      image: 'assets/NHRDF.png',
      description:
        'The National Horticultural Research and Development Foundation (NHRDF) is engaged in Research and developmental programmes. Research projects are carried out onion, garlic and other vegetable crops during the Kharif, Late Kharif and rabi seasons at Regional Research Stations. On-going research programmes during Kharif and Late Kharif 2015-16 and Rabi 2015-16 are mentioned below separately.',
      tech: 'Angular, .NET Core,PostgreSQL,Azure,Docker,Kubernetes,Microservices',
    },
    {
      title: 'Esprit',
      image: 'assets/Esprit.png',
      description:
        'Field service management software (FSM) is a comprehensive solution designed to streamline and optimize the operational activities of field service organizations. It serves as a centralized platform for managing various tasks including tracking, reporting, work order management, dispatching, and scheduling. The field service management system facilitates that helps field technicians, dispatchers, and back-office staff work together smoothly, guaranteeing prompt and efficient service.',
      tech: 'Angular, .NET, Azure,SQL Server,Docker,Kubernetes,Microservices,Power BI',
    },
  ];

  openProject(project: any) {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden';
  }

  closeProject() {
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }
}
