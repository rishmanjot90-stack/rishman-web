export interface MTechStudent {
  name: string;
  course: string;
  batch: string;
  branch: string;
  title: string;
}

export interface MScEconStudent {
  name: string;
  year: string;
  title: string;
}

export interface BSMSStudent {
  name: string;
  year: string;
  title: string;
}

export interface SupervisionData {
  mtech: MTechStudent[];
  mscecon: MScEconStudent[];
  bsms: BSMSStudent[];
}

export const supervisionData: SupervisionData = {
  mtech: [
    {
      name: 'B Bhanu Prasanth',
      course: 'M. Tech. (Artificial Intelligence)',
      batch: '2021 – 2023',
      branch: 'Mehta Family School of Data Science and Artificial Intelligence',
      title:
        'Portfolio Management based on Technical Indicators using Deep Learning Techniques.',
    },
    {
      name: 'Francis Narzary',
      course: 'M. Tech. (Artificial Intelligence)',
      batch: '2022 – 2024',
      branch: 'Mehta Family School of Data Science and Artificial Intelligence',
      title:
        'Estimating District-Level GDP from Night-Time Light Data Using Deep Learning Techniques.',
    },
    {
      name: 'Suraj Pal Kurrey',
      course: 'M. Tech. (Artificial Intelligence)',
      batch: '2023 – 2025',
      branch: 'Mehta Family School of Data Science and Artificial Intelligence',
      title:
        'Forecasting the Future of Internal Combustion Engine Vehicles and Electric Vehicles Ownership along with their CO₂ Emission in Delhi.',
    },
    {
      name: 'Abhishek Patel',
      course: 'M. Tech. (Artificial Intelligence)',
      batch: '2023 – 2025',
      branch: 'Mehta Family School of Data Science and Artificial Intelligence',
      title:
        'Decoding Asian Stock Market Predictions: An XAI Inquiry into the Efficacy of Sentiment vs. Technical Indicators.',
    },
    {
      name: 'Pranay Majumder',
      course: 'M. Tech. (Data Science)',
      batch: '2023 – 2025',
      branch: 'Mehta Family School of Data Science and Artificial Intelligence',
      title:
        'Predicting District-wise GDP based on NTL Data from VIIRS Satellite Imagery using ML models.',
    },
    {
      name: 'Amit Kumar Singh',
      course: 'M. Tech. (Data Science)',
      batch: '2024 – 2026',
      branch: 'Mehta Family School of Data Science and Artificial Intelligence',
      title:
        'Investigating the impact of sentiments on stock market using digital proxies.',
    },
    {
      name: 'Ruhul Amin Laskar',
      course: 'M. Tech. (Data Science)',
      batch: '2024 – 2026',
      branch: 'Mehta Family School of Data Science and Artificial Intelligence',
      title:
        'Comparative Analysis of News vs Social Media sentiments in forecasting Stock Markets',
    },
    {
      name: 'Vishal Ramkrishna Patil',
      course: 'M. Tech. (Data Science)',
      batch: '2024 – 2026',
      branch: 'Mehta Family School of Data Science and Artificial Intelligence',
      title:
        'Advanced Financial Intelligence via Domain-Adapted Large Language Models and Multi-Source Aggregation.',
    },
  ],

  mscecon: [
    {
      name: 'Komal Srivastava',
      year: '2022',
      title:
        'Financial Reporting Quality, Political Connection and Investment Efficiency',
    },
    {
      name: 'Anupama Vijay',
      year: '2023',
      title:
        'Board Interlocks and performance of the Indian Stock Exchange during COVID-19 crisis',
    },
    {
      name: 'Gary Haobam',
      year: '2023',
      title:
        'The Impact of Corporate Governance on Firms&apos; Financial Performance',
    },
    {
      name: 'Ahana Saha',
      year: '2024',
      title: 'Board Interlocks, Deep-in-Debt Firms and Indian Banking Crisis',
    },
    {
      name: 'Neha Meena',
      year: '2025',
      title:
        'Research Evolution and Prospects of the Applications of Centrality Measures in Corporate Governance and Organizational Outcomes: A PRISMA-Informed Bibliometric Analysis',
    },
    {
      name: 'Alok Varun',
      year: '2026',
      title:
        'Do ETFs Influence Stock Market Volatility? Insights from Indian Markets',
    },
    {
      name: 'Arghya Debnath',
      year: '2026',
      title:
        'Sustainable Development of Indian Banks in the Era of Digital Finance',
    },
  ],

  bsms: [
    {
      name: 'Hemant Bidasaria',
      year: '2026',
      title: 'Climate stress testing for Indian banks',
    },
    {
      name: 'Akshat Trehan',
      year: '2026',
      title:
        'Urban Expansion and its Influence on Local Climate in Himalayan Cities : Evidence from Dehradun and Jammu',
    },
    {
      name: 'Moulik Gupta',
      year: '2026',
      title:
        'Experimental Validation of Fraud Using Generation of Synthetic Data Outperforming Traditional Methods',
    },
  ],
};
