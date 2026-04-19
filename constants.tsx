import { ExperienceItem, EducationItem, SkillCategory, Project, Course, Testimonial } from './types';
import { Code, Server, Database, Globe, Cpu, BookOpen, Terminal, Layers } from 'lucide-react';

export const PERSONAL_INFO = {
  name: "Muhammad Sheeraz",
  title: "Academic Professional",
  tagline: "Computer Science Educator | Expert in: Coding Instruction - Student Mentorship - Digital Literacy",
  email: "sheeraziqbal2010@gmail.com",
  location: "Karachi, Pakistan",
  phone: "0092331-2402943",
  socials: {
    github: "https://github.com",
    linkedin: "https://www.linkedin.com/in/msheeraziqbal/",
    twitter: "https://twitter.com",
    facebook: "https://www.facebook.com/share/17VdFpVQf2/",
    instagram: "https://www.instagram.com/sheeraz44444",
    youtube: "https://youtube.com/@digitalguy2023?si=c5DSbqiSXwBaYQ76"
  }
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp1',
    role: "Lecturer",
    institution: "FAST National University, Karachi",
    period: "Aug 2025 – Present",
    description: "Developing and implementing evaluations to facilitate student learning in core Computer Science areas.",
    achievements: [
      "Facilitate learning in Programming, OOP, Data Structures & related applications.",
      "Provide detailed and actionable feedback on exams, projects, and lab assignments.",
      "Update course materials to reflect advancements in CS & AI, ensuring alignment with industry trends.",
      "Provide constructive guidance to foster student development."
    ],
    techStack: ["C++", "OOP", "Data Structures", "AI"]
  },
  {
    id: 'exp2',
    role: "Associate Lecturer",
    institution: "IQRA University, Karachi",
    period: "Sep 2024 – Aug 2025",
    description: "Planned and delivered lectures, facilitating student learning in computer skills and applications.",
    achievements: [
      "Developed and administered assessments to evaluate student performance.",
      "Maintained and updated course materials for Computer Science, AI, and Cyber Security.",
      "Provided constructive feedback to support student growth through quizzes and practical evaluations."
    ],
    techStack: ["CS Fundamentals", "AI", "Cyber Security"]
  },
  {
    id: 'exp3',
    role: "Computer Lecturer",
    institution: "Unayzah International School, Saudi Arabia",
    period: "Dec 2019 – Sep 2024",
    description: "Designed innovative digital learning strategies to enhance engagement in a blended learning environment.",
    achievements: [
      "Integrated educational technologies like Class-Era, Google Classrooms, and MS Teams.",
      "Created structured digital content plans aligned with curriculum objectives.",
      "Supported blended and remote learning through interactive whiteboards."
    ],
    techStack: ["Google Classroom", "MS Teams", "Class-Era", "EdTech"]
  },
  {
    id: 'exp4',
    role: "Lecturer of Computer Science",
    institution: "Commecs College, Karachi",
    period: "Jul 2015 – Dec 2019",
    description: "Delivered engaging lessons and provided mentoring support to students.",
    achievements: [
      "Developed schedules, lesson plans, and teaching methods for comprehensive subject coverage.",
      "Created a safe and healthy classroom environment conducive to learning.",
      "Attended staff meetings, conferences, workshops, and continuing education programs."
    ],
    techStack: ["Curriculum Design", "Mentoring", "Classroom Mgmt"]
  },
  {
    id: 'exp5',
    role: "ICT Teacher",
    institution: "The Smart School, Karachi",
    period: "Feb 2014 – Jun 2015",
    description: "Built foundational and advanced computer skills in students.",
    achievements: [
      "Developed engaging instructional materials and activities.",
      "Managed classroom dynamics and administered assessments.",
      "Actively participated in parent-teacher conferences for collaborative student support."
    ],
    techStack: ["ICT", "Instructional Design"]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: 'edu1',
    degree: "Bachelors of Computer Science (BSCS)",
    school: "Sukkur IBA University",
    year: "16 Years Edu",
    details: "Focus on Computer Science fundamentals and advanced topics."
  },
  {
    id: 'edu2',
    degree: "Intermediate (Pre-Engineering)",
    school: "Govt. Degree College",
    year: "Higher Secondary",
    details: "Foundation in Engineering sciences."
  },
  {
    id: 'edu3',
    degree: "Matriculation",
    school: "FG Sir Syed Boys Secondary School",
    year: "Secondary",
    details: "Secondary School Certificate."
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Core Subjects Mastery",
    skills: [
      { name: "Programming Fundamentals", level: 100 },
      { name: "Data Structures & Algorithms", level: 99 },
      { name: "Database Systems", level: 99 },
      { name: "Object Oriented Programming", level: 98 },
      { name: "Digital Logic Design (DLD)", level: 99 },
      { name: "Python Programming", level: 97 },
      { name: "Analysis of Algorithms", level: 95 },
    ]
  },
  {
    category: "Languages & Dev",
    skills: [
      { name: "C / C++", level: 100 },
      { name: "C#", level: 99 },
      { name: "Python", level: 97 },
      { name: "Java", level: 92 },
      { name: "R-Programming", level: 88 },
    ]
  },
  {
    category: "Tools & Graphics",
    skills: [
      { name: "MS Office Suite", level: 100 },
      { name: "Adobe Photoshop", level: 97 },
      { name: "VS Code / Visual Studio", level: 95 },
      { name: "After Effects / Canva", level: 85 },
    ]
  },
  {
    category: "Specializations",
    skills: [
      { name: "Curriculum Design", level: 100 },
      { name: "Digital Learning", level: 95 },
      { name: "IoT Technologies", level: 88 },   
      { name: "Mobile App Dev", level: 80 },
    ]
  }
];

export const PROJECTS: Project[] = [
  // Generalized
  {
    id: 'gen1',
    title: "Marks Analyzer",
    description: "A utility tool for educators and students to analyze academic performance.",
    tags: ["Utility", "Analytics"],
    imageUrl: "", // Will be auto-generated in component
    category: "Personal",
    liveUrl: "https://marks-analysis-zeta.vercel.app/"
  },
  {
    id: 'gen2',
    title: "Countdown Timer",
    description: "A sleek, responsive timer application.",
    tags: ["React", "Time Management"],
    imageUrl: "",
    category: "Personal",
    liveUrl: "https://aura-rouge.vercel.app/"
  },
  {
    id: 'gen3',
    title: " Date & Day Finder",
    description: "Find all occurrences of a specific day.",
    tags: ["React", "Days Managment", "date Management"],
    imageUrl: "",
    category: "Personal",
    liveUrl: "https://dates-finder.vercel.app/"
  },
  // DSA
  {
    id: 'dsa1',
    title: "Bubble Sort Visualizer",
    description: "Interactive visualization of the Bubble Sort algorithm.",
    tags: ["DSA", "Sorting"],
    imageUrl: "",
    category: "Curriculum",
    liveUrl: "https://bubble-sort-1.vercel.app/"
  },
  {
    id: 'dsa2',
    title: "Insertion Sort Visualizer",
    description: "Step-by-step demonstration of Insertion Sort logic.",
    tags: ["DSA", "Sorting"],
    imageUrl: "",
    category: "Curriculum",
    liveUrl: "https://insertion-sort-flame.vercel.app/"
  },
  {
    id: 'dsa3',
    title: "Radix Sort Algorithm",
    description: "Implementation and visualization of non-comparative sorting.",
    tags: ["DSA", "Sorting"],
    imageUrl: "",
    category: "Curriculum",
    liveUrl: "https://radixsort.vercel.app/"
  },
  {
    id: 'dsa4',
    title: "N-Queen Solver",
    description: "Backtracking algorithm visualization for the classic N-Queen problem.",
    tags: ["DSA", "Backtracking"],
    imageUrl: "",
    category: "Curriculum",
    liveUrl: "https://n-queen-problem-tau.vercel.app/"
  },
  {
    id: 'dsa5',
    title: "Binary Search Mechanism",
    description: "Visualizing the divide and conquer strategy of Binary Search.",
    tags: ["DSA", "Searching"],
    imageUrl: "",
    category: "Curriculum",
    liveUrl: "https://binary-search-seven.vercel.app/"
  },
  {
    id: 'dsa6',
    title: "Infix to Postfix Converter",
    description: "Stack-based conversion tool for mathematical expressions.",
    tags: ["DSA", "Stacks"],
    imageUrl: "",
    category: "Curriculum",
    liveUrl: "https://in-to-post.vercel.app/"
  },
  {
    id: 'dsa7',
    title: "Queue Operations",
    description: "Interactive demonstration of Queue data structure (FIFO).",
    tags: ["DSA", "Queue"],
    imageUrl: "",
    category: "Curriculum",
    liveUrl: "https://queueplanet1.vercel.app/"
  },
  {
    id: 'dsa8',
    title: "Stack Implementation",
    description: "Visualizing LIFO operations in a Stack data structure.",
    tags: ["DSA", "Stack"],
    imageUrl: "",
    category: "Curriculum",
    liveUrl: "https://stack-beige.vercel.app/"
  },
  {
    id: 'dsa9',
    title: "AVL Tree Visualizer",
    description: "Demonstrating self-balancing binary search trees.",
    tags: ["DSA", "Trees"],
    imageUrl: "",
    category: "Curriculum",
    liveUrl: "https://avl-tree-delta.vercel.app/"
  },
  {
    id: 'dsa10',
    title: "Fibonacci Recursion",
    description: "Visualizing recursive calls in the Fibonacci sequence.",
    tags: ["DSA", "Recursion"],
    imageUrl: "",
    category: "Curriculum",
    liveUrl: "https://fibonacci-recursion.vercel.app/"
  },
  {
    id: 'dsa11',
    title: "Binary Search Tree Master",
    description: "Comprehensive BST operations: Insert, Delete, Search.",
    tags: ["DSA", "Trees"],
    imageUrl: "",
    category: "Curriculum",
    liveUrl: "https://binary-search-tree-bst.vercel.app/"
  },
  {
    id: 'dsa12',
    title: "Bitwise Operations",
    description: "Low-level bit manipulation visualizer.",
    tags: ["DSA", "Bitwise"],
    imageUrl: "",
    category: "Curriculum",
    liveUrl: "https://bitwise-operations.vercel.app/"
  },
  {
    id: 'dsa13',
    title: "Infix to Prefix",
    description: "Expression conversion tool utilizing stack logic.",
    tags: ["DSA", "Stacks"],
    imageUrl: "",
    category: "Curriculum",
    liveUrl: "https://infix-to-prefix.vercel.app/"
  },
    {
    id: 'dsa14',
    title: "Quick Sort",
    description: "A divide-and-conquer algorithm.",
    tags: ["DSA", "Quick Sort", "Recursion"],
    imageUrl: "",
    category: "Curriculum",
    liveUrl: "https://quick-sort-pi.vercel.app/"
  },
  // C/C++
  {
    id: 'c1',
    title: "If-ElseIf Logic",
    description: "Interactive guide to conditional logic in C.",
    tags: ["C/C++", "Fundamentals"],
    imageUrl: "",
    category: "Student",
    liveUrl: "https://ifelseif.vercel.app/"
  },
  {
    id: 'c2',
    title: "Loops in C",
    description: "Visualizing iterative control structures.",
    tags: ["C/C++", "Fundamentals"],
    imageUrl: "",
    category: "Student",
    liveUrl: "https://loops-in-c.vercel.app/"
  },
  {
    id: 'c3',
    title: "1D Array Explorer",
    description: "Visualizing array memory allocation and traversal.",
    tags: ["C/C++", "Data Structures"],
    imageUrl: "",
    category: "Student",
    liveUrl: "https://array1d.vercel.app/"
  }
];

export const COURSES: Course[] = [
  {
    id: 'c_ap',
    title: "AP Computer Science A",
    level: "Advanced Placement (College Board)",
    description: "Rigorous Java-based curriculum focusing on object-oriented programming, algorithm analysis, and data structures to prepare students for the AP exam.",
    topics: ["Java OOP", "Inheritance", "Polymorphism", "Recursion", "Standard Algorithms"]
  },
  {
    id: 'c_ib',
    title: "IB Computer Science (HL/SL)",
    level: "International Baccalaureate",
    description: "Holistic approach covering system fundamentals, computer organization, networks, and computational thinking with a practical internal assessment.",
    topics: ["System Design", "Computer Org", "Networks", "Computational Thinking", "OOP (Java/C++)"]
  },
  {
    id: 'c_igcse',
    title: "IGCSE Computer Science (0478)",
    level: "Cambridge International",
    description: "Foundational course covering theory of computer science and practical problem-solving and programming skills.",
    topics: ["Data Representation", "Data Transmission", "Logic Gates", "Algorithm Design", "Ethics"]
  },
  {
    id: 'c_dsa',
    title: "Data Structures & Algorithms",
    level: "University Core",
    description: "Deep dive into efficiency, sorting, searching, graph theory, and dynamic programming.",
    topics: ["Time Complexity", "Trees & Graphs", "Hashing", "Dynamic Programming"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: "MUN Organizer",
    role: "Commecs College",
    content: "Received the Best Event Advisor Award in Model United Nations for outstanding guidance and leadership.",
    image: "https://picsum.photos/100/100?random=10"
  },
  {
    id: 't2',
    name: "Workshop Participant",
    role: "Adobe Workshop",
    content: "The 2-day workshop on Adobe Photoshop Basics & Advance Techniques was incredibly insightful and practical.",
    image: "https://picsum.photos/100/100?random=11"
  },
  {
  id: 't3',
  name: "Best Teacher Award",
  role: "Unayzah International School (KSA)",
  content: "Awarded Best Teacher of the Year 2023 for outstanding teaching performance and student engagement.",
  image: "https://picsum.photos/100/100?random=12"
},
{
  id: 't4',
  name: "Innovative ICT Educator",
  role: "Unayzah International School (KSA)",
  content: "Recognized for implementing innovative ICT strategies and enhancing digital learning experiences in the classroom.",
  image: "https://picsum.photos/100/100?random=13"
},
{
  id: 't5',
  name: "Teacher Trainer",
  role: "Unayzah International School (KSA)",
  content: "Honored with Teacher Trainer Excellence Award for mentoring educators and promoting modern teaching methodologies.",
  image: "https://picsum.photos/100/100?random=14"
},
{
  id: 't6',
  name: "EdTech Leadership",
  role: "Unayzah International School (KSA)",
  content: "Received Digital & EdTech Leadership Award for integrating advanced technologies into academic environments.",
  image: "https://picsum.photos/100/100?random=15"
},
{
  id: 't7',
  name: "Curriculum Developer",
  role: "IQRA University",
  content: "Contributed to curriculum development in computer science, AI, and cybersecurity, aligning with modern industry standards.",
  image: "https://picsum.photos/100/100?random=21"
},
{
  id: 't8',
  name: "Research Workshop",
  role: "Iqra University",
  content: "Participated in 'Concept to Publication' workshop, enhancing research writing and academic publication skills.",
  image: "https://picsum.photos/100/100?random=17"
},
{
  id: 't9',
  name: "Assessment Strategies",
  role: "Agha Khan University",
  content: "Completed training on Differentiated Assessment Strategies, improving classroom evaluation techniques.",
  image: "https://picsum.photos/100/100?random=18"
},
{
  id: 't10',
  name: "Adobe Trainer",
  role: "Sukkur IBA University",
  content: "Led a 2-day workshop on Adobe Photoshop Basics & Advanced Techniques, focusing on practical design skills.",
  image: "https://picsum.photos/100/100?random=19"
}

];
