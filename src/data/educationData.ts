interface Education {
  institution: string;
  degree: string;
  date: string;
  location: string;
  gpa?: string;
}

export const educationData: Education[] = [
  {
    institution: 'International Institute of Information Technology Bhubaneswar',
    degree: 'Bachelor of Technology in Computer Science and Engineering',
    date: 'June 2025',
    location: 'Bhubaneswar, India',
    gpa: '9.25/10.0'
  },
  {
    institution: 'Royale Concorde International School',
    degree: '12th std CBSE',
    date: 'July 2021',
    location: 'Bangalore, India',
    gpa: '96.4%'
  },
  {
    institution: 'ITI Central School',
    degree: '10th std CBSE',
    date: 'May 2019',
    location: 'Bangalore, India',
    gpa: '96.8%'
  }
];