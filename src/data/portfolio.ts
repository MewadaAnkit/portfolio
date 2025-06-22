export const portfolioData = {
  personal: {
    name: "Ankit Mewada",
    title: "Full Stack MERN Developer",
    subtitle: "Backend Specialist",
    tagline: "Building Scalable Systems for Real-World Needs",
    bio: [
      "Passionate Full Stack MERN Developer with 1.5 years of hands-on experience, specializing in robust backend architecture and scalable system design. I thrive on transforming complex business requirements into efficient, maintainable code.",
      "My expertise lies in crafting secure APIs, optimizing database performance, and implementing authentication systems that power real-world applications. From university management systems to healthcare platforms, I've built solutions that handle thousands of users with seamless performance.",
      "I believe in clean code, thorough testing, and continuous learning. When I'm not coding, you'll find me exploring new backend technologies and contributing to open-source projects."
    ],
    email: "ankitmewada1402@gmail.com",
    linkedin: "https://www.linkedin.com/in/ankit-mewada47/",
    github: "https://github.com/MewadaAnkit",
    resume: "/Ankit_Mewada_01.pdf"
  },
  
  skills: [
    { name: "Node.js", level: 90, category: "backend" },
    { name: "Express.js", level: 88, category: "backend" },
    { name: "MongoDB", level: 85, category: "database" },
    { name: "MySql", level: 85, category: "database" },
    { name: "PostgresSQL", level: 85, category: "database" },
    { name: "React.js", level: 82, category: "frontend" },
    { name: "JavaScript", level: 90, category: "language" },
    { name: "TypeScript", level: 75, category: "language" },
    { name: "Python", level: 90, category: "language" },
    { name: "Java", level: 75, category: "language" },
    { name: "REST APIs", level: 92, category: "backend" },
    { name: "JWT Authentication", level: 88, category: "backend" },
    { name: "Git & GitHub", level: 85, category: "tools" },
    { name: "Docker", level: 70, category: "tools" },
    { name: "AWS", level: 65, category: "cloud" },
    { name: "Socket.io", level: 78, category: "backend" }
  ],

  projects: [
    {
      id: 1,
      name: "University ERP System",
      description: "Comprehensive enterprise resource planning system for educational institutions with student management, course scheduling, and administrative workflows.",
      longDescription: "Built a scalable ERP system handling 10,000+ student records with role-based access control, automated report generation, and real-time notifications. Implemented complex database relationships and optimized queries for fast data retrieval.",
      tech: ["Node.js", "Express", "MongoDB", "React", "JWT", "Socket.io"],
      category: "Full Stack",
      github: "https://github.com/ankit-mewada/",
      live: "https://sssutms.ac.in",
      image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=800",
      highlights: ["Real-time notifications", "Role-based access", "10K+ records", "API optimization"]
    },
    {
      id: 2,
      name: "Hospital Management System",
      description: "Digital healthcare platform streamlining patient records, appointment scheduling, and medical inventory management with secure data handling.",
      longDescription: "Developed a HIPAA-compliant healthcare management system with encrypted patient data, automated appointment reminders, and inventory tracking. Features include doctor-patient portals and prescription management.",
      tech: ["Node.js", "Express", "MongoDB", "React", "Bcrypt", "Nodemailer"],
      category: "Backend Heavy",
      github: "https://github.com/ankit-mewada/hospital-management",
      live: "https://hospital-mgmt-demo.netlify.app",
      image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800",
      highlights: ["HIPAA compliant", "Encrypted data", "Email automation", "Multi-role dashboard"]
    },
    {
      id: 3,
      name: "Claims Nidaan Platform",
      description: "Insurance claims processing system with automated workflow management, document verification, and stakeholder communication tools.",
      longDescription: "Created an intelligent claims processing platform that reduced manual processing time by 60%. Integrated OCR for document scanning, automated workflow routing, and real-time status tracking for all stakeholders.",
      tech: ["Node.js", "Express", "MongoDB", "React", "Multer", "PDF-lib"],
      category: "Backend Heavy",
      github: "https://github.com/ankit-mewada",
      live: "",
      image: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=800",
      highlights: ["60% faster processing", "OCR integration", "Automated workflows", "Document management"]
    },
    {
      id: 4,
      name: "E-commerce Platform",
      description: "Full-featured e-commerce solution with payment integration, inventory management, order tracking, and customer analytics dashboard.",
      longDescription: "Built a complete e-commerce platform with Stripe payment integration, real-time inventory tracking, order management system, and comprehensive admin dashboard with sales analytics and customer insights.",
      tech: ["Node.js", "Express", "MongoDB", "React", "Stripe", "Cloudinary"],
      category: "Full Stack",
      github: "https://github.com/ankit-mewada/ecommerce-platform",
      live: "https://ecommerce-demo.netlify.app",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      highlights: ["Stripe integration", "Real-time inventory", "Analytics dashboard", "Order tracking"]
    }
  ],

  experience: [
    {
      title: "Full Stack Developer (MERN)",
      company: "Sri Satya Sai University of Technology and Medical Sciences",
      duration: "Oct 2023 - Jun 2025",
      description: "Developed RESTful APIs for client projects, optimized database queries reducing response time by 40%, and collaborated with frontend teams to deliver seamless user experiences.",
      achievements: [
        "Built 100+ REST API endpoints with comprehensive documentation",
        "Optimized MongoDB queries reducing average response time by 40%",
        "Implemented JWT-based authentication system for 3 client projects",
        "Collaborated with 5-member cross-functional team using Agile methodology"
      ]
    },
    {
      title: "Backend Developer",
      company: "content ketchup",
      duration: "Jan 2024 - Mar 2024",
      description: "Working with small businesses to digitize their operations through custom web applications, focusing on backend architecture and database design.",
      achievements: [
        "Delivered 8+ custom web applications for local businesses",
        "Reduced client operational costs by average 30% through automation",
        "Maintained 99.9% uptime across all deployed applications",
        "Established long-term maintenance contracts with 6 clients"
      ]
    }
  ],

  stats: [
    { label: "Years Experience", value: "1.5+" },
    { label: "Projects Completed", value: "4+" },
    { label: "GitHub Commits", value: "500+" },
    { label: "API Endpoints Built", value: "160+" }
  ]
};
