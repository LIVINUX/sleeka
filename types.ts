import { ReactNode } from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  tags: string[];
  bgColor: string;
}

export interface ServiceItem {
  icon: ReactNode;
  title: string;
}

export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  description: string;
  items: ServiceItem[];
}
