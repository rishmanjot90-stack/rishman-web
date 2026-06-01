export interface NewsItem {
  id: string;
  date: string;
  title: string;
  excerpt: string;
  source: string;
  category: string;
  isFeatured?: boolean;
}

export const newsItems: NewsItem[] = [
  {
    id: '1',
    date: 'APR 2026',
    title:
      'Manish Selected for Quantitative Finance Summer School and Workshop 2026',
    excerpt:
      'Manish was selected to participate in the Quantitative Finance Summer School and Workshop 2026 at the Institute for Mathematical Sciences, National University of Singapore. The program is partially funded and brings together researchers and students working in quantitative finance.',
    source: 'Student Achievement',
    category: 'Academic Recognition',
    isFeatured: true,
  },
  {
    id: '2',
    date: 'FEB 2026',
    title: 'Yogesh Yadav Receives Best Paper Award at IIT Indore Symposium',
    excerpt:
      'Yogesh Yadav received the Best Paper Award at the Symposium on Ecology, Governance & Technology organized by the Mehta Family School of Sustainability, IIT Indore, in recognition of his outstanding research contribution.',
    source: 'Student Achievement',
    category: 'Award',
  },

  // {
  //   id: '1',
  //   date: 'FEB 20 2026',
  //   title: 'New Features Released: Enhanced AI Capabilities',
  //   excerpt:
  //     'We are thrilled to announce the release of our latest features, including improved AI integration and faster processing speeds.',
  //   source: 'Official',
  //   category: 'Product Update',
  //   isFeatured: true,
  // },
  // {
  //   id: '2',
  //   date: 'FEB 18 2026',
  //   title: 'Case Study: How TechCorp Increased Productivity by 40%',
  //   excerpt:
  //     'Discover how leading companies are using our platform to streamline their workflows and boost team efficiency.',
  //   source: 'Press',
  //   category: 'Success Story',
  // },
  // {
  //   id: '3',
  //   date: 'FEB 15 2026',
  //   title: 'Upcoming Webinar: Best Practices for Modern Development',
  //   excerpt:
  //     'Join industry experts as we discuss the latest trends in web development and share insights from our team.',
  //   source: 'Events',
  //   category: 'Webinar',
  // },
  // {
  //   id: '4',
  //   date: 'FEB 12 2026',
  //   title: 'Security Update: Improved Data Protection Measures',
  //   excerpt:
  //     'We have implemented additional security protocols to ensure your data remains safe and protected.',
  //   source: 'Security',
  //   category: 'Update',
  // },
  // {
  //   id: '5',
  //   date: 'FEB 10 2026',
  //   title: 'Q4 2025 Report: Record Growth and Expansion',
  //   excerpt:
  //     'Our latest quarterly report shows significant growth in user adoption and market expansion across regions.',
  //   source: 'Reports',
  //   category: 'Announcement',
  // },
];
