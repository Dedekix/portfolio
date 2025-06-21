import React from 'react';

// Import lucide-react components for icons
import { Briefcase, MapPin, Calendar, Mail, Linkedin, Phone, GraduationCap, Code, Award, Lightbulb } from 'lucide-react'; // Added Lightbulb for projects

// Main App component
const App = () => {
  // Define experience data
  const experiences = [
    {
      title: 'Chief Executive Officer',
      company: 'Global Voice Initiative ltd',
      duration: 'Oct 2024 - Present (9 mos)',
      location: 'Kigali City, Rwanda · Hybrid',
      description: 'As CEO, my core responsibilities include setting the overall vision and strategic direction of the organization, ensuring that our goals align with our mission to empower youth. I lead and inspire our team, manage company operations, and oversee financial planning to ensure sustainable growth. I represent the organization in public forums, build partnerships, and maintain strong relationships with stakeholders. Additionally, I focus on creating a positive work culture, attracting and developing talent, and driving innovation to maximize our impact.',
    },
    {
      title: 'Information Technology Support Officer',
      company: 'National Agriculture Export Development Board',
      duration: 'Jul 2024 - Sep 2024 (3 mos)',
      location: 'Kigali City, Rwanda · On-site',
      description: 'As an IT Support Officer, I was responsible for keeping our computer systems and networks running smoothly. I provided day-to-day technical support to staff, helping them resolve hardware and software issues both in person and remotely. My role involved installing and configuring new equipment, setting up user accounts, managing system permissions, and ensuring everything was secure with proper antivirus tools and firewalls. I regularly handled troubleshooting tasks—everything from fixing network problems to guiding users through software glitches. I also maintained documentation for recurring issues and worked closely with other IT team members when more complex problems came up. Beyond just solving technical problems, I enjoyed helping people feel more confident using technology and often trained team members on new systems or tools.',
    },
    {
      title: 'Customer Service Representative',
      company: 'Montabory Company Ltd.',
      duration: 'Dec 2019 - Sep 2023 (3 yrs 10 mos)',
      location: 'Kigali City, Rwanda · On-site',
      description: 'As a Customer Service Representative, I was the first point of contact for customers, helping them with questions, concerns, and product-related issues. I handled inquiries through phone, email, and live chat, always aiming to provide a friendly and helpful experience. I took pride in resolving customer problems quickly and effectively, whether it involved troubleshooting an issue, processing orders, or explaining product features. I maintained detailed records of interactions and followed up with customers to ensure satisfaction. I also worked closely with other departments to solve more complex problems and continuously updated myself on company products and policies. My focus was always on making sure every customer felt heard, supported, and valued.',
    }
  ];

  // Define education data
  const education = {
    degree: "Bachelor's degree, Software Engineering",
    university: "Adventist University of Central Africa",
    duration: "Dec 2020 - Present",
    grade: "Final Year",
    activities: [
      "Operating System", "Web Technology", "Applied Mathematics", "PL/SQL"
    ]
  };

  // Define certifications data
  const certifications = [
    {
      name: "Certificate of participation at Code + Design Camp",
      organization: "The GYM",
      year: "2022"
    },
    {
      name: "Advanced Computer Programming courses in Web Development, Leadership and Entrepreneurship",
      organization: "Igire Rwanda Organization",
      year: "2022"
    }
  ];

  // Define project data - updated to include all projects with correct statuses
  const projects = [
    {
      title: 'Rental House App',
      status: 'Completed',
      description: 'A mobile application designed to simplify the process of finding and renting houses. It connects landlords with potential tenants, offering features like property listings, search filters, and direct communication channels.',
    },
    {
      title: 'Book Nest App',
      status: 'Completed',
      description: 'An application focused on creating a digital library and reading platform. It allows users to browse, borrow, and read e-books, providing a convenient and accessible way to engage with literature.',
    },
    {
      title: 'Axis Mobile Growth Rwanda',
      status: 'Currently working on it',
      description: 'A project focused on boosting user engagement and visibility across social media platforms within Rwanda. This involves developing strategies and tools to enhance online presence, grow audience reach, and maximize digital interaction for users.',
    },
  ];

  // Define comprehensive skills list, categorized
  const skills = {
    technical: [
      'Coding', 'Database management', 'IT troubleshooting', 'MS Office',
      'Web Development', 'Web Design', 'Networking', 'Internet Protocol Suite (TCP/IP)', 'SQL',
      'Information Technology Support'
    ],
    soft: [
      'Time Management', 'Decision Making', 'Positive Attitude'
    ],
    leadership: [
      'Team Leadership', 'Project Oversight', 'University Student Support'
    ],
    communication: [
      'Effective Communication', 'Event & Schedule Coordination', 'Client Relation'
    ],
    other: [ // Catch-all for any skills not fitting specific categories naturally
      'Event Planning', 'Event Management', 'Social Media Marketing', 'Training', 'Fundraising',
      'Customer Support', 'Customer Service', 'Customer Relations', 'Sales'
    ]
  };


  return (
    <>
      <style>
        {`
        /* General Body Styles */
        body {
            font-family: 'Inter', sans-serif;
            min-height: 100vh;
            background-color: #f9fafb; /* bg-gray-50 */
            color: #374151; /* text-gray-800 */
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            margin: 0;
        }

        /* Base Portfolio Container */
        .portfolio-container {
            /* This is the root div in App.jsx. It primarily controls the overall layout if needed. */
        }

        /* Header Styles */
        .header {
            background: linear-gradient(to right, #2563eb, #4f46e5); /* from-blue-600 to-indigo-700 */
            padding: 4rem 1rem; /* py-16 px-4 */
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-lg */
            border-bottom-left-radius: 0.75rem; /* rounded-b-xl */
            border-bottom-right-radius: 0.75rem; /* rounded-b-xl */
            color: #fff; /* text-white */
            text-align: center;
            position: relative; /* Needed for absolute positioning of the image */
            padding-bottom: 6rem; /* Increase padding to make space for the image */
        }

        .header-content {
            max-width: 64rem; /* max-w-4xl */
            margin: 0 auto; /* mx-auto */
        }

        .header h1 {
            font-size: 3rem; /* text-4xl */
            font-weight: 800; /* font-extrabold */
            margin-bottom: 1rem; /* mb-4 */
            animation: fadeInDown 0.8s ease-out forwards;
        }

        .header p {
            font-size: 1.25rem; /* text-xl */
            font-weight: 300; /* font-light */
            opacity: 0.9;
            animation: fadeInUp 0.8s ease-out forwards;
            animation-delay: 0.2s;
        }

        /* Profile Image Styles */
        .profile-image-container {
            position: absolute;
            bottom: -50px; /* Adjust this value to position the image correctly */
            left: 50%;
            transform: translateX(-50%);
            z-index: 20; /* Higher than section-container's z-index */
            width: 150px; /* Adjust size as needed */
            height: 150px; /* Adjust size as needed */
            border-radius: 50%;
            overflow: hidden;
            box-shadow: 0 0 0 5px #fff, 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* White border and shadow */
        }

        .profile-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }


        /* Section Base Styles */
        .section-container {
            padding: 4rem 1rem; /* py-16 px-4 */
            background-color: #fff; /* bg-white */
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); /* shadow-md */
            border-radius: 0.75rem; /* rounded-xl */
            margin: 0 1rem; /* mx-4 */
            max-width: 80rem; /* Adjusted to fill more space */
            margin-left: auto;
            margin-right: auto;
            position: relative;
            z-index: 10;
            margin-bottom: 3rem; /* mb-12 */
        }

        .section-container.top-offset {
            margin-top: -2rem; /* -mt-8 */
        }
        /* Further adjust top-offset for the first section to account for image */
        #about.section-container.top-offset {
            margin-top: 5rem; /* Pushes content down to clear the image */
        }


        .section-title-wrapper {
            text-align: center;
            margin-bottom: 2.5rem; /* mb-10 */
        }

        .section-title {
            font-size: 2.25rem; /* text-3xl */
            font-weight: 700; /* font-bold */
            color: #1f2937; /* text-gray-800 */
            margin-bottom: 1rem; /* mb-4 */
        }

        .title-underline {
            height: 0.375rem; /* h-1.5 */
            background-color: #3b82f6; /* bg-blue-500 */
            margin: 0 auto;
            border-radius: 9999px; /* rounded-full */
        }
        /* Specific widths for title underlines */
        .about-underline { width: 6rem; /* w-24 */ }
        .education-underline { width: 7rem; /* slightly wider than 24 for "Education" */ }
        .certification-underline { width: 8rem; } /* Adjusted width for Certification title */
        .projects-underline { width: 6rem; } /* New underline for Projects */
        .experience-underline { width: 7rem; }
        .skills-underline { width: 5rem; /* w-20 */ }
        .contact-underline { width: 5rem; /* w-20 */ margin-bottom: 2rem; /* mb-8 */ }


        /* About Me Section Specific */
        .about-text {
            font-size: 1.125rem; /* text-lg */
            line-height: 1.625; /* leading-relaxed */
            color: #4b5563; /* text-gray-700 */
            text-align: center;
        }

        /* Experience & Education & Projects Section Specific (Timeline) */
        .timeline-section {
            background-color: #f9fafb; /* bg-gray-50 */
        }


        .timeline-wrapper {
            position: relative;
            border-left: 4px solid #bfdbfe; /* border-l-4 border-blue-200 */
            padding-left: 2rem; /* pl-8 */
        }
        @media (min-width: 768px) { /* md:pl-16 */
            .timeline-wrapper {
                padding-left: 4rem;
            }
        }

        .timeline-item {
            margin-bottom: 3rem; /* mb-12 */
            position: relative;
        }

        .timeline-dot {
            position: absolute;
            left: -0.75rem; /* -left-3 */
            top: 0.375rem; /* top-1.5 */
            width: 1.5rem; /* w-6 */
            height: 1.5rem; /* h-6 */
            background-color: #3b82f6; /* bg-blue-500 */
            border-radius: 9999px; /* rounded-full */
            border: 4px solid #fff; /* border-4 border-white */
            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); /* shadow-md */
        }
        @media (min-width: 768px) { /* md:-left-5 */
            .timeline-dot {
                left: -1.25rem;
            }
        }

        .card {
            background-color: #fff;
            padding: 1.5rem; /* p-6 */
            border-radius: 0.75rem; /* rounded-xl */
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* shadow-lg */
            transition: all 0.3s ease-in-out; /* transition-shadow duration-300 transform */
        }

        .card:hover {
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04); /* hover:shadow-xl */
            transform: translateY(-0.25rem); /* hover:-translate-y-1 */
        }

        .card h3 {
            font-size: 1.5rem; /* text-2xl */
            font-weight: 600; /* font-semibold */
            color: #2563eb; /* text-blue-600 */
            display: flex;
            align-items: center;
            margin-bottom: 0.5rem; /* mb-2 */
        }

        .card h3 svg {
            margin-right: 0.75rem; /* mr-3 */
        }

        /* Icon colors */
        .icon-blue { color: #3b82f6; /* text-blue-500 */ }
        .icon-gray { color: #9ca3af; /* text-gray-400 */ }
        .icon-gold { color: #d97706; } /* For certifications */
        .icon-purple { color: #8b5cf6; } /* For projects */


        .card p.meta-info {
            font-size: 1rem; /* text-md */
            color: #6b7280; /* text-gray-500 */
            display: flex;
            align-items: center;
            margin-bottom: 0.25rem; /* mb-1 */
        }
        .card p.meta-info.last {
            margin-bottom: 1rem; /* mb-4 */
        }

        .card p.meta-info svg {
            margin-right: 0.5rem; /* mr-2 */
        }

        .card .description {
            font-size: 1rem; /* text-md */
            color: #4b5563; /* text-gray-700 */
            line-height: 1.625; /* leading-relaxed */
            margin-bottom: 1rem; /* mb-4 */
        }

        .skill-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem; /* gap-2 */
        }

        .skill-tag {
            background-color: #dbeafe; /* bg-blue-100 */
            color: #1d4ed8; /* text-blue-700 */
            font-size: 0.875rem; /* text-sm */
            padding: 0.25rem 0.75rem; /* px-3 py-1 */
            border-radius: 9999px; /* rounded-full */
            font-weight: 500; /* font-medium */
        }

        /* Education Specific */
        .education-activities {
            font-size: 1rem; /* text-md */
            font-weight: 600; /* font-semibold */
            color: #4b5563; /* text-gray-700 */
            margin-bottom: 0.5rem; /* mb-2 */
        }

        .activity-tag {
            background-color: #ede9fe; /* bg-purple-100 */
            color: #6d28d9; /* text-purple-700 */
            font-size: 0.875rem; /* text-sm */
            padding: 0.25rem 0.75rem; /* px-3 py-1 */
            border-radius: 9999px; /* rounded-full */
            font-weight: 500; /* font-medium */
        }

        /* Skills Section */
        .skills-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.75rem; /* gap-3 */
        }

        .skill-category-title {
            font-size: 1.25rem; /* text-xl */
            font-weight: 600; /* font-semibold */
            color: #1f2937; /* text-gray-800 */
            margin-top: 1.5rem; /* mt-6 */
            margin-bottom: 0.75rem; /* mb-3 */
            width: 100%; /* Ensure it takes full width to center */
            text-align: center;
        }

        .skill-item {
            display: flex;
            align-items: center;
            background-color: #e5e7eb; /* bg-gray-200 */
            color: #1f2937; /* text-gray-800 */
            padding: 0.5rem 1rem; /* px-4 py-2 */
            border-radius: 9999px; /* rounded-full */
            font-weight: 500; /* font-medium */
            font-size: 1.125rem; /* text-lg */
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); /* shadow-sm */
            transition: box-shadow 0.2s ease-in-out; /* transition-shadow duration-200 */
        }

        .skill-item:hover {
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* hover:shadow-md */
        }

        .skill-item svg {
            margin-right: 0.5rem; /* mr-2 */
            color: #4b5563; /* text-gray-600 */
        }

        /* Contact Section */
        .contact-section {
            background-color: #f9fafb; /* bg-gray-50 */
            border-top-left-radius: 0.75rem; /* rounded-t-xl */
            border-top-right-radius: 0.75rem; /* rounded-t-xl */
            box-shadow: 0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-lg */
            margin-top: 3rem; /* mt-12 */
            text-align: center;
        }

        .contact-text {
            font-size: 1.125rem; /* text-lg */
            line-height: 1.625; /* leading-relaxed */
            color: #4b5563; /* text-gray-700 */
            margin-bottom: 2rem; /* mb-8 */
        }

        .contact-links {
            display: flex;
            flex-direction: column; /* flex-col */
            justify-content: center;
            align-items: center;
            gap: 1.5rem; /* gap-6 */
        }
        @media (min-width: 640px) { /* sm:flex-row */
            .contact-links {
                flex-direction: row;
            }
        }

        .contact-button {
            display: flex;
            align-items: center;
            padding: 0.75rem 1.5rem; /* px-6 py-3 */
            border-radius: 9999px; /* rounded-full */
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
            transition: background-color 0.3s ease-in-out; /* transition-colors duration-300 */
            font-size: 1.125rem; /* text-lg */
            font-weight: 500; /* font-medium */
            text-decoration: none; /* Remove underline from links */
            color: #fff; /* text-white */
        }

        .contact-button svg {
            margin-right: 0.5rem; /* mr-2 */
        }

        .contact-button.email-button {
            background-color: #2563eb; /* bg-blue-600 */
        }
        .contact-button.email-button:hover {
            background-color: #1d4ed8; /* hover:bg-blue-700 */
        }

        .contact-button.call-button {
            background-color: #16a34a; /* bg-green-600 */
        }
        .contact-button.call-button:hover {
            background-color: #15803d; /* hover:bg-green-700 */
        }

        .contact-button.linkedin-button {
            background-color: #374151; /* bg-gray-700 */
            color: #fff; /* text-white */
        }
        .contact-button.linkedin-button:hover {
            background-color: #1f2937; /* hover:bg-gray-800 */
        }

        /* Footer Styles */
        .footer {
            background-color: #1f2937; /* bg-gray-800 */
            color: #fff; /* text-white */
            padding: 2rem 1rem; /* py-8 px-4 */
            margin-top: 3rem; /* mt-12 */
            text-align: center;
        }

        .footer-text {
            max-width: 64rem; /* max-w-4xl */
            margin: 0 auto;
            font-size: 0.875rem; /* text-sm */
            opacity: 0.8;
        }

        /* Animations */
        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .animate-fade-in-down {
            animation: fadeInDown 0.8s ease-out forwards;
        }

        .animate-fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
            animation-delay: 0.2s; /* Delay slightly for sequential effect */
        }

        /* Responsive Adjustments for Smaller Screens (mimicking Tailwind's sm:*, lg:*) */
        @media (min-width: 640px) { /* Small screens and up (sm) */
            .header {
                padding: 4rem 1.5rem; /* sm:px-6 */
            }
            .header h1 {
                font-size: 3.75rem; /* sm:text-5xl */
            }
            .header p {
                font-size: 1.5rem; /* sm:text-2xl */
            }
            .section-container {
                margin: 0 auto; /* sm:mx-auto */
                padding: 4rem 1.5rem; /* sm:px-6 */
            }
            .section-title {
                font-size: 2.25rem; /* sm:text-4xl */
            }
            .contact-section {
                padding: 4rem 1.5rem; /* sm:px-6 */
            }
            .footer {
                padding: 2rem 1.5rem; /* sm:px-6 */
            }
        }

        @media (min-width: 1024px) { /* Large screens and up (lg) */
            .header {
                padding: 4rem 2rem; /* lg:px-8 */
            }
            .header h1 {
                font-size: 4.5rem; /* lg:text-6xl */
            }
            .section-container {
                padding: 4rem 2rem; /* lg:px-8 */
            }
            .contact-section {
                padding: 4rem 2rem; /* lg:px-8 */
            }
            .footer {
                padding: 2rem 2rem; /* lg:px-8 */
            }
        }
        `}
      </style>

      <div className="portfolio-container">
        {/* Header Section */}
        <header className="header">
          <div className="header-content">
            <h1 className="animate-fade-in-down">
              Delphine's Portfolio
            </h1>
            <p className="animate-fade-in-up">
              CEO | IT Support | Customer Service Professional
            </p>
          </div>
          {/* Profile Image */}
          <div className="profile-image-container">
            <img
              src="/m.jpg"
              alt="Delphine's Profile"
              className="profile-image"
              onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/150x150/cccccc/333333?text=Profile'; }}
              />
          </div>
        </header>

        {/* About Me Section */}
        <section id="about" className="section-container top-offset">
          <div className="section-title-wrapper">
            <h2 className="section-title">About Me</h2>
            <div className="title-underline about-underline"></div>
          </div>
          <p className="about-text">
            A dynamic and results-oriented professional with a diverse background spanning leadership, information technology, and customer relations. With experience as a Chief Executive Officer, I possess strong strategic planning and team leadership skills focused on empowering youth. My tenure as an IT Support Officer equipped me with robust technical troubleshooting abilities and a commitment to maintaining seamless operations. Furthermore, my extensive time as a Customer Service Representative cultivated exceptional communication, problem-solving, and client-focused approaches. I am passionate about driving innovation, fostering positive environments, and delivering impactful results across various sectors.
          </p>
        </section>

        {/* Education Section */}
        <section id="education" className="section-container timeline-section">
          <div className="section-title-wrapper">
            <h2 className="section-title">Education</h2>
            <div className="title-underline education-underline"></div>
          </div>

          <div className="timeline-wrapper">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="card">
                <h3>
                  <GraduationCap className="icon-blue" size={24} /> {education.degree}
                </h3>
                <p className="meta-info">{education.university}</p>
                <p className="meta-info"><Calendar className="icon-gray" size={18} /> {education.duration}</p>
                <p className="meta-info last">Grade: {education.grade}</p>
                {education.activities.length > 0 && (
                  <div>
                    <p className="education-activities">Key Activities & Societies:</p>
                    <div className="skill-tags">
                      {education.activities.map((activity, idx) => (
                        <span key={idx} className="activity-tag">
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="section-container timeline-section">
          <div className="section-title-wrapper">
            <h2 className="section-title">Certifications</h2>
            <div className="title-underline certification-underline"></div>
          </div>

          <div className="timeline-wrapper">
            {certifications.map((cert, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="card">
                  <h3>
                    <Award className="icon-gold" size={24} /> {cert.name}
                  </h3>
                  <p className="meta-info">{cert.organization}</p>
                  <p className="meta-info last"><Calendar className="icon-gray" size={18} /> {cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section-container timeline-section">
          <div className="section-title-wrapper">
            <h2 className="section-title">Projects</h2>
            <div className="title-underline projects-underline"></div>
          </div>

          <div className="timeline-wrapper">
            {projects.map((project, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="card">
                  <h3>
                    <Lightbulb className="icon-purple" size={24} /> {project.title}
                  </h3>
                  <p className="meta-info last">Status: {project.status}</p>
                  <p className="description">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section-container timeline-section">
          <div className="section-title-wrapper">
            <h2 className="section-title">Experience</h2>
            <div className="title-underline experience-underline"></div>
          </div>

          <div className="timeline-wrapper">
            {experiences.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="card">
                  <h3>
                    <Briefcase className="icon-blue" size={24} /> {exp.title}
                  </h3>
                  <p className="meta-info">{exp.company}</p>
                  <p className="meta-info"><Calendar className="icon-gray" size={18} /> {exp.duration}</p>
                  <p className="meta-info last"><MapPin className="icon-gray" size={18} /> {exp.location}</p>
                  <p className="description">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section-container">
          <div className="section-title-wrapper">
            <h2 className="section-title">Skills</h2>
            <div className="title-underline skills-underline"></div>
          </div>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, skillList]) => (
              <React.Fragment key={category}>
                {skillList.length > 0 && (
                  <h4 className="skill-category-title">
                    {category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')} Skills
                  </h4>
                )}
                {skillList.map((skill, index) => (
                  <span key={index} className="skill-item">
                    {skill}
                  </span>
                ))}
              </React.Fragment>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-container contact-section">
          <div className="section-title-wrapper">
            <h2 className="section-title">Get in Touch</h2>
            <div className="title-underline contact-underline"></div>
          </div>
          <p className="contact-text">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="contact-links">
            <a
              href="mailto:irdukundadelphine8@gmail.com"
              className="contact-button email-button"
            >
              <Mail size={20} /> Email Me
            </a>
            <a
              href="tel:+250791375079"
              className="contact-button call-button"
            >
              <Phone size={20} /> Call Me
            </a>
            <a
              href="https://www.linkedin.com/in/delphineiradukunda/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-button linkedin-button"
            >
              <Linkedin size={20} /> LinkedIn
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-text">
            &copy; {new Date().getFullYear()} Delphine's Portfolio. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;