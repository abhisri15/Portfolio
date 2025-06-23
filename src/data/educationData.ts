interface Education {
  institution: string;
  degree: string;
  date: string;
  location: string;
  gpa?: string;
}

export const educationData: Education[] = [
  {
    institution: 'International Institute of Information Technology Bhubaneswar (IIIT Bhubaneswar)',
    degree: 'Bachelor of Technology (B.Tech) - Computer Science and Engineering',
    date: 'June 2025',
    location: 'Bhubaneswar, India',
    gpa: '9.27/10.0'
  },
  {
    institution: 'Royale Concorde International School',
    degree: '12th Standard - CBSE',
    date: 'July 2021',
    location: 'Bangalore, India',
    gpa: '96.4%'
  },
  {
    institution: 'ITI Central School',
    degree: '10th Standard - CBSE',
    date: 'May 2019',
    location: 'Bangalore, India',
    gpa: '96.8%'
  }
];
