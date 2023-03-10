export interface Qualification {
  name: string;
  organization: string;
  term: string;
  type: string;
  gradeOrExperience: string;
  id: string;
}

export interface Service {
  title: string;
  id: string;
  icon: string;
  serviceDescription: string[];
}

export interface Portfolio {
  titile: string;
  urlToImage: string;
  description: string;
  demoUrl: string;
  id: string;
}

export interface Testimonial {
  id: string;
  name: string;
  designation: string;
  isClient: boolean;
  rating: number;
  description: string;
  urlToImage: string;
}

export interface Contact {
  source: string;
  value: string;
  id: string;
  icon: string;
}
