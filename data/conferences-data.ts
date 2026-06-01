export interface Conference {
  year: number;
  title: string;
  authors: string[];
  conferenceName: string;
  location: string;
  award?: string;
}

export const conferences: Conference[] = [
  {
    year: 2026,
    title:
      'ML-based Prediction of District-Level GDP and Mapping of Inequalities in GDP Distribution in India',
    authors: ['Yadav, Yogesh', 'Chahal, Rishman Jot Kaur', 'Agarwal, Amit'],
    conferenceName: 'Symposium on Ecology, Governance and Technology',
    location: 'IIT Indore, Indore, India',
    award: 'Best Paper Award',
  },
  {
    year: 2026,
    title:
      "Understanding the Tone, Uncertainty and Emotion in RBI's CBDC Communication: A Textual Analysis Approach",
    authors: ['Pallath, Sneha', 'Chahal, Rishman Jot Kaur'],
    conferenceName: 'Global Finance Conclave 2026',
    location: 'O.P Jindal Global University, Sonipat, India',
  },
  {
    year: 2025,
    title:
      'Symmetric and Asymmetric Impacts of Climate Shocks on Fiscal Policy: Urbanization as a Transmitting Mechanism in India',
    authors: ['Sahu, Parthasarathi', 'Chahal, Rishman Jot Kaur'],
    conferenceName:
      'ADBI-SAU Conference on Climate Change and Resilience in South Asia',
    location:
      'Asian Development Bank Institute (ADBI) and South Asian University (SAU)',
  },
  {
    year: 2025,
    title:
      'Unpacking the Urban-Climate Puzzle: Lessons from Six Decades of Indian Development',
    authors: ['Sahu, Parthasarathi', 'Chahal, Rishman Jot Kaur'],
    conferenceName:
      '13th World Congress of the Econometric Society (ESWC 2025)',
    location: 'Seoul, South Korea',
  },
  {
    year: 2025,
    title:
      'Climate-Urban Nexus in India: A Time Series Analysis of Economic Growth and Environmental Interactions',
    authors: ['Sahu, Parthasarathi', 'Chahal, Rishman Jot Kaur'],
    conferenceName:
      'International Conference on Enabling Sustained Growth in Emerging Asia (ESGEA)',
    location: 'University of Hyderabad, Hyderabad, India',
  },
  {
    year: 2025,
    title:
      'Dynamics of Climate Change and Urbanization in India: A Time Series Analysis Using VECM Approach',
    authors: ['Sahu, Parthasarathi', 'Chahal, Rishman Jot Kaur'],
    conferenceName:
      '59th Annual Conference of the The Indian Econometric Society (TIES)',
    location: 'Banaras Hindu University, Varanasi, India',
  },
  {
    year: 2025,
    title:
      'Reconstructing the Digital Financial Inclusion Index through Benefit-of-the-Doubt (BoD) Approach: Further determining growth and policy implications',
    authors: ['Yadav, Kavita', 'Chahal, Rishman Jot Kaur'],
    conferenceName:
      'Empowering Viksit Bharat@2047: Innovations in Finance, Inclusion, & Economic Growth',
    location: 'IIT (ISM), Dhanbad, India',
    award: 'Best Paper Award',
  },
  {
    year: 2025,
    title:
      'Revisiting the Dimensions of Digital Financial Inclusion: A Benefit-of-the-Doubt (BoD) Approach',
    authors: ['Yadav, Kavita', 'Chahal, Rishman Jot Kaur'],
    conferenceName:
      'The 59th Annual Conference of the Indian Econometric Society (TIES)',
    location: 'Banaras Hindu University (BHU), Varanasi, India',
  },
  {
    year: 2025,
    title:
      'When Politics Meet Accounting: The Moderating effect of Corporate Political Connections on the Reporting Quality-Investment Efficiency Nexus in India',
    authors: [
      'Ahmad, Danish',
      'Srivasatava, Komal',
      'Chahal, Rishman Jot Kaur',
    ],
    conferenceName:
      'The 59th Annual Conference of the Indian Econometric Society (TIES)',
    location: 'Banaras Hindu University (BHU), Varanasi, India',
  },
  {
    year: 2025,
    title:
      'Central bank digital currency and multidimensional bank stability index: Does monetary policy play a moderating role?',
    authors: ['Gupta, Garima', 'Gulati, Rachita', 'Chahal, Rishman Jot Kaur'],
    conferenceName:
      'From Crisis to Resilience Shaping the Future of Banking in Asia Pacific',
    location:
      'Asian Development Bank Institute (ADBI), Japan and South Asian University, India',
  },
  {
    year: 2025,
    title:
      'CBDC attention and uncertainty spillovers across asset returns and market sentiments: Implications from an emerging financial market',
    authors: ['Gupta, Garima', 'Khan, Hera Asif', 'Chahal, Rishman Jot Kaur'],
    conferenceName:
      '1st International Conference on Sustainability and Economic Growth amid Global Uncertainty',
    location:
      'The Applied Economics Society (TAES) and National Institute of Technology, Goa',
  },
  {
    year: 2025,
    title:
      'CBDC attention and uncertainty spillovers across asset returns and market sentiments: Implications from an emerging financial market',
    authors: ['Gupta, Garima', 'Khan, Hera Asif', 'Chahal, Rishman Jot Kaur'],
    conferenceName:
      'International Conference in Banking and Financial Studies (ICBFS 2025)',
    location:
      'The Catholic University of the Sacred Heart, Piacenza-Milan, Italy',
  },
  {
    year: 2025,
    title:
      'Monetary Policy: Evolution, Transmission Dynamics, and Future Horizons through Bibliometric Analysis',
    authors: ['Gupta, Garima', 'Gulati, Rachita', 'Chahal, Rishman Jot Kaur'],
    conferenceName:
      'Bibliometrics and Research Impact Community (BRIC) Conference',
    location: 'University of Montreal, Canada',
  },
  {
    year: 2025,
    title:
      'Hedging volatility with intelligence: AI-enhanced portfolio optimization using alternative risk measures and commodity futures',
    authors: ['Manish', 'Chahal, Rishman Jot Kaur'],
    conferenceName:
      'International Conference on Financial Markets and Corporate Finance',
    location: 'VGSoM IIT Kharagpur',
  },
  {
    year: 2025,
    title:
      'Integrating technical and sentiment indicators in the Black-Litterman model: Deep learning insights in different market conditions',
    authors: ['Manish', 'Chahal, Rishman Jot Kaur'],
    conferenceName:
      'International Conference on Financial Markets and Corporate Finance',
    location: 'VGSoM, IIT Kharagpur',
  },
  {
    year: 2025,
    title:
      'From variability to uniformity: Standardization of electronic ticketing machines data for urban transit systems in India',
    authors: [
      'Fedujwar, Rupam',
      'Rawat, Nishtha',
      'Agarwal, Amit',
      'Chahal, Rishman Jot Kaur',
    ],
    conferenceName:
      '8th Conference of Transportation Research Group of India (CTRG)',
    location: 'Guwahati, India',
  },
  {
    year: 2024,
    title:
      'Boarding Alighting Counting in Different Transit Vehicles under Crowded Conditions',
    authors: [
      'Rawat, Nishtha',
      'Jeengar, Kuldeep',
      'Agarwal, Amit',
      'Chahal, Rishman Jot Kaur',
    ],
    conferenceName: 'IEEE CONECCT 2024',
    location: 'IISc Bangalore',
  },
  {
    year: 2024,
    title:
      'Quantile connectedness between conventional bond market sentiments and Global Green Bond Returns: Implications for effective hedging',
    authors: [
      'Chahal, Rishman Jot Kaur',
      'Bidasaria Hemant',
      'Khan, Hera Asif',
      'Ahmad, Wasim',
    ],
    conferenceName:
      '6th PAN-IIT International Conference of Financial Markets & Corporate Finance',
    location: 'IIT(ISM) Dhanbad, India',
  },
  {
    year: 2024,
    title:
      'Asymmetric impact of social media sentiments and stock market uncertainty on Indian sectoral returns: A quantile-on-quantile approach',
    authors: ['Khan, Hera Asif', 'Chahal, Rishman Jot Kaur'],
    conferenceName:
      '14th Financial Markets & Corporate Governance Conference (FMCG)',
    location: 'Monash University, Malaysia',
  },
  {
    year: 2024,
    title:
      'Asymmetric impact of social media sentiments and stock market uncertainty on Indian sectoral returns: A quantile-on-quantile approach',
    authors: ['Khan, Hera Asif', 'Chahal, Rishman Jot Kaur'],
    conferenceName: '99th Western Economic Association International (WEAI)',
    location: 'Seattle, USA',
  },
  {
    year: 2024,
    title:
      'Quantile connectedness between conventional bond market sentiments and Global Green Bond Returns: Implications for effective hedging',
    authors: [
      'Chahal, Rishman Jot Kaur',
      'Bidasaria, Hemant',
      'Khan, Hera Asif',
      'Ahmad, Wasim',
    ],
    conferenceName:
      '11th International Conference on Finance and Banking (FIBA)',
    location: 'Bucharest University of Economic Studies, Romania',
  },
  {
    year: 2024,
    title:
      'General Equilibrium Approach to Evaluate Economic Growth and Welfare Policy Analysis: Network and Meta-Analysis in a Systematic Review',
    authors: ['Sahu, Parthasarathi', 'Chahal, Rishman Jot Kaur'],
    conferenceName:
      '64th Annual Conference of the Indian Society of Labour Economics (ISLE)',
    location: 'University of Hyderabad, Hyderabad, India',
  },
  {
    year: 2024,
    title:
      'Central bank digital currency and multidimensional bank stability index: Does monetary policy play a moderating role? Evidence from BRICS',
    authors: ['Gupta, Garima', 'Gulati, Rachita', 'Chahal, Rishman Jot Kaur'],
    conferenceName:
      'DEA 2024: International Conference of Data Envelopment Analysis',
    location: 'BIMTECH, Noida and University of Surrey, United Kingdom',
  },
  {
    year: 2024,
    title:
      'Forecasting the future of EV and ICEV markets and their associated CO2 emissions in Delhi using the deep learning method',
    authors: [
      'Kurray, Suraj Pal',
      'Kumar, Rajat',
      'Chahal, Rishman Jot Kaur',
      'Agarwal, Amit',
    ],
    conferenceName: 'India Just Transition Summit 2024',
    location: 'New Delhi, India',
  },
  {
    year: 2024,
    title:
      "Mapping Kerala's economic landscape: a non-survey approach to constructing regional Input-Output tables for 2018-19",
    authors: [
      'Sain, Jitendra Kumar',
      'Kumar, Rajat',
      'Chahal, Rishman Jot Kaur',
      'Agarwal, Amit',
    ],
    conferenceName: '8th International Conference on Economic Structures',
    location: 'Osaka, Japan',
  },
  {
    year: 2023,
    title:
      'Wider economic impact at electric vehicle penetration in India: a CGE analysis',
    authors: [
      'Kumar, Rajat',
      'Sahu, Parthasarathi',
      'Agarwal, Amit',
      'Chahal, Rishman Jot Kaur',
    ],
    conferenceName: '51st European Transport Conference',
    location: 'Milan, Italy',
  },
  {
    year: 2023,
    title: 'Investor sentiment and stock price crash risk in India',
    authors: ['Khan, Hera Asif', 'Chahal, Rishman Jot Kaur'],
    conferenceName:
      'International Conference on Applied Economic and Finance (ICAEF)',
    location: 'BITS Pilani, India',
  },
  {
    year: 2023,
    title:
      'Board network position investment efficiency: The mediating influence of ESG on Indian firms',
    authors: ['Ahmad, Danish', 'Chahal, Rishman Jot Kaur'],
    conferenceName: 'Asian Meeting of Econometric Society (AMES-CSW)',
    location: 'IIT Delhi, India',
  },
  {
    year: 2023,
    title:
      'Board network position investment efficiency: The mediating influence of ESG on Indian firms',
    authors: ['Ahmad, Danish', 'Chahal, Rishman Jot Kaur'],
    conferenceName: '12th India Finance Conference (IFC)',
    location:
      'N.L. Dalmia Institute of Management Studies and Research, Mumbai, India',
  },
  {
    year: 2023,
    title:
      'Board network position investment efficiency: The mediating influence of ESG on Indian firms',
    authors: ['Ahmad, Danish', 'Chahal, Rishman Jot Kaur'],
    conferenceName:
      'International Conference on Applied Economic and Finance (ICAEF)',
    location: 'BITS Pilani, India',
  },
  {
    year: 2021,
    title:
      'The Trinity Effect of Corporate-Political-Banking relationship over Debt Structure: Evidence from India',
    authors: ['Chahal, Rishman Jot Kaur', 'Ahmad, Wasim', 'Bhanumurthy, N. R.'],
    conferenceName:
      'Allied Social Sciences Association Meeting (ASSA), American Economic Association (AEA)',
    location: 'Chicago, USA',
    award: 'A+ Conference',
  },
  {
    year: 2018,
    title: 'Firm-Political Connections: A Resource Based View Analysis',
    authors: [
      'Chahal, Rishman Jot Kaur',
      'Ahmad, Wasim',
      'Uddin, Gazi Salah',
      'Boustanifar, Hamid',
    ],
    conferenceName: '14th Annual Conference on Economic Growth & Development',
    location: 'Indian Statistical Institute Delhi, Delhi, India',
  },
  {
    year: 2018,
    title:
      'Overinvestment, Political Connections and Government-Owned Banks: Evidence from India',
    authors: ['Chahal, Rishman Jot Kaur', 'Ahmad, Wasim'],
    conferenceName: '93rd Western Economic Association International (WEAI)',
    location: 'Vancouver, Canada',
  },
  {
    year: 2018,
    title:
      'Overinvestment, Political Connections and Government-Owned Banks: Evidence from India',
    authors: ['Chahal, Rishman Jot Kaur', 'Ahmad, Wasim'],
    conferenceName:
      '3rd International Conference on Financial Markets & Corporate Finance (ICFMCF)',
    location: 'Indian Institute of Technology Kanpur, Kanpur, India',
  },
  {
    year: 2017,
    title: 'Politicking Behaviour of Indian Firms',
    authors: ['Chahal, Rishman Jot Kaur', 'Ahmad, Wasim'],
    conferenceName: 'Paris Finance Management Conference',
    location: 'Paris, France',
  },
  {
    year: 2017,
    title: "Political Connections and Firm's Performance: Evidence from India",
    authors: ['Chahal, Rishman Jot Kaur', 'Ahmad, Wasim'],
    conferenceName: '7th Indian Finance Conference (IFC)',
    location: 'Indian Institute of Management Bangalore, Bengaluru, India',
  },
  {
    year: 2017,
    title: 'Politicking Behaviour of Indian Firms',
    authors: ['Chahal, Rishman Jot Kaur', 'Ahmad, Wasim'],
    conferenceName: '8th Emerging Markets Finance Conference (EMFC)',
    location: 'Indira Gandhi Institute of Development Research, Mumbai, India',
  },
];
