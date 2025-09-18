import type React from 'react';

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export interface Article {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  url: string;
}

export interface Encouragement {
  quote: string;
  author: string;
}