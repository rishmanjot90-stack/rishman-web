export interface Experience {
  title: string;
  organization: string;
  duration: string;
  description: string;
}

export const experience: Experience[] = [
  {
    title: 'Assistant Professor',
    organization: 'Indian Institute of Technology Roorkee',
    duration: '23 Nov 2020 - Present',
    description: 'Teaching and research in Economics',
  },
  {
    title: 'Joint Faculty',
    organization: 'Mehta Family School of DS & AI, IIT Roorkee',
    duration: '28 Jun 2021 - Present',
    description: 'Interdisciplinary research in Data Science and Economics',
  },
  {
    title: 'Research Internship',
    organization: 'SCBD, UNEP, Montreal, Canada',
    duration: '03 Sep 2019 - 29 Feb 2020',
    description: 'Research on environmental economics and policy',
  },
];

export interface Position {
  position: string;
  organization: string;
  duration: string;
}

export const positions: Position[] = [
  {
    position: 'Member of SFSC',
    organization: 'Mehta Family School of DS & AI, IIT Roorkee',
    duration: '25 Jul 2022 - Present',
  },
  {
    position: 'MSc. Seminar and Dissertation Coordinator',
    organization: 'IIT Roorkee',
    duration: '23 Jul 2024 - Present',
  },
  {
    position: 'Examination-Incharge',
    organization: 'Department of HSS, IIT Roorkee',
    duration: '20 Apr 2022 - 02 Sep 2024',
  },
  {
    position: 'Member Secretary',
    organization: 'Mehta Family School of DS & AI, IIT Roorkee',
    duration: '03 Nov 2023 - 23 Jul 2024',
  },
  {
    position: 'Chief Warden, Kasturba Bhawan',
    organization: 'Indian Institute of Technology Roorkee',
    duration: '06 Jul 2022 - 20 Jun 2024',
  },
  {
    position: 'Warden, Kasturba Bhawan',
    organization: 'Indian Institute of Technology Roorkee',
    duration: '01 Jul 2021 - 30 Jun 2022',
  },
];

export interface Honor {
  title: string;
  organization: string;
  year: string;
  description: string;
}

export const honors: Honor[] = [
  {
    title:
      'Best Paper Award at the Symposium on Ecology, Governance & Technology',
    organization:
      'Mehta Family School of Sustainability, IIT Indore, Indore, India',
    year: '2026',
    description:
      'Best Paper Award at the Symposium on Ecology, Governance & Technology',
  },
  {
    title: 'Datathon Challenge',
    organization: 'NIUA, MoHUA',
    year: '2023',
    description: 'Recognition in national datathon competition',
  },
  {
    title: 'National Eligibility Test (NET) in Economics',
    organization: 'UGC',
    year: '2014',
    description: 'Qualified National Eligibility Test',
  },
  {
    title: 'Merit Certificate (HSSC)',
    organization: 'CBSE',
    year: '2010',
    description: 'Awarded to top 0.1% successful candidates',
  },
];

export interface Visit {
  location: string;
  date: string;
  purpose: string;
}

export const visits: Visit[] = [
  {
    location: 'UNEP, Montreal, Canada',
    date: '2019',
    purpose: 'Research Internship',
  },
  {
    location: 'UNSW, Sydney',
    date: '2022',
    purpose: 'Technical Discussion',
  },
];
