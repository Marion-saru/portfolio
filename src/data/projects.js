import jifunzeImg from '../assets/images/jifunze.png';
import eventhubImg from '../assets/images/eventhub.png';
import lastchapterImg from '../assets/images/lastchapter.png';
import journalImg from '../assets/images/journal.png';
import poesyImg from '../assets/images/poesy.png';


export const projects = [
  {
    id: 1,
    title: "Jifunze",
    description: "Jifunze is a learning management platform that connects schools, educators, and students.It supports user management, attendance tracking, course resources, and facilitates classroom communication.",
    image: jifunzeImg,
    tech: ["React", "Vitest", "Flask","JWT Authentication","SQLAlchemy ORM","Pytest", "PostgreSQL"],
    liveUrl: "https://phase-5-group-4-jifunze.onrender.com/",
    githubUrl: "https://github.com/Marion-saru/jifunze-project",
    featured: true
  },
  {
    id: 2,
    title: "Event Hub",
    description: "A web application to create, view, and manage events. Users can browse all events, create their own, and delete events they have created. The app also supports booking tickets for events.",
    image: eventhubImg,
    tech: ["React", "Flask", "SQLAlchemy", "SQLite"],
    liveUrl: "https://eventhub-hxlf.onrender.com/",
    githubUrl: "https://github.com/Marion-saru/group5-events-app",
    featured: true
  },
  {
    id: 3,
    title: "Last Chapter",
    description: "Last Chapter is a web application for book lovers. It allows users to search for books, manage favorites, create reading lists, and explore a wide collection using the Google Books API.",
    image: lastchapterImg,
    tech: ["React", "React Router", "CSS", "Google Books Api"],
    liveUrl: "https://next-chapter-books.netlify.app/",
    githubUrl: "https://github.com/Marion-saru/last-chapter-project",
    featured: true
  },
  {
    id: 4,
    title: "Journal Application",
    description: "This is a simple and minimalistic journaling app. Users can create entries, edit or delete what you’ve outgrown, and pin the ones that stick with you.",
    image: journalImg,
    tech: ["React", "CSS", "JSON Placeholder API"],
    liveUrl: "https://marion-saru.github.io/journal-app/",
    githubUrl: "https://github.com/Marion-saru/journal-app",
    featured: false
  },
  {
    id: 5,
    title: "Poesy Application",
    description: "A web application for managing and displaying poems. Users can add new poems, mark them as read or unread, and view a list of all available poems.",
    image: poesyImg,
    tech: ["React", "CSS", "JSON Placeholder API"],
    liveUrl: "https://Marion-saru.github.io/poesy-project",
    githubUrl: "https://github.com/Marion-saru/poesy-project",
    featured: false
  },
];

