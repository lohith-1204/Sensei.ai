document.addEventListener('DOMContentLoaded', () => {

    // --- MOCK DATA ---
    const quizQuestions = [{ question: "Which subject do you enjoy the most in school?", options: [{ text: "Physics or Biology", stream: "science" }, { text: "History or Literature", stream: "arts" }, { text: "Economics or Business Studies", stream: "commerce" }] }, { question: "What kind of activity would you prefer for a project?", options: [{ text: "Conducting a scientific experiment", stream: "science" }, { text: "Writing a creative story or a historical report", stream: "arts" }, { text: "Creating a business plan for a new product", stream: "commerce" }] }, { question: "When you read the news, what section are you most drawn to?", options: [{ text: "Technology and Environment", stream: "science" }, { text: "Culture, Society, and Politics", stream: "arts" }, { text: "Business and the Stock Market", stream: "commerce" }] }, { question: "Which career sounds most appealing to you?", options: [{ text: "Doctor, Engineer, or Researcher", stream: "science" }, { text: "Journalist, Lawyer, or Social Worker", stream: "arts" }, { text: "Chartered Accountant, Marketing Manager, or Entrepreneur", stream: "commerce" }] }, { question: "How do you prefer to solve problems?", options: [{ text: "With logic, data, and experimentation", stream: "science" }, { text: "By understanding different perspectives and human behavior", stream: "arts" }, { text: "By analyzing costs, benefits, and market trends", stream: "commerce" }] }, { question: "What kind of books do you enjoy reading in your free time?", options: [{ text: "Science fiction or books about scientific discoveries", stream: "science" }, { text: "Classic novels, poetry, or historical biographies", stream: "arts" }, { text: "Books on finance, business success, or economics", stream: "commerce" }] }, { question: "What genre of movies or TV shows do you prefer?", options: [{ text: "Nature/space documentaries or sci-fi thrillers", stream: "science" }, { text: "Thought-provoking dramas or historical epics", stream: "arts" }, { text: "Shows like Shark Tank or movies about the business world", stream: "commerce" }] }, { question: "When faced with a complex topic, you first try to...", options: [{ text: "Break it down into logical, testable parts", stream: "science" }, { text: "Understand its cultural and historical context", stream: "arts" }, { text: "Assess its practical applications and potential value", stream: "commerce" }] }, { question: "In a group project, what role do you naturally take on?", options: [{ text: "The researcher or technical expert who handles data", stream: "science" }, { text: "The writer or presenter who crafts the main story", stream: "arts" }, { text: "The project manager who organizes tasks and resources", stream: "commerce" }] }, { question: "What kind of impact do you want to make in your career?", options: [{ text: "Discover something new or build innovative technology", stream: "science" }, { text: "Inspire people through creativity or advocate for social change", stream: "arts" }, { text: "Create a successful business or manage large-scale operations", stream: "commerce" }] }, { question: "Which type of puzzle do you find more engaging?", options: [{ text: "A logical puzzle with a single correct answer, like Sudoku", stream: "science" }, { text: "An interpretive puzzle with many meanings, like analyzing art", stream: "arts" }, { text: "A strategic puzzle about managing resources, like chess", stream: "commerce" }] }, { question: "Which set of tools would you rather work with?", options: [{ text: "A microscope, a telescope, or coding software", stream: "science" }, { text: "A camera, a paintbrush, or a writer's journal", stream: "arts" }, { text: "A spreadsheet, a financial calculator, or a business plan", stream: "commerce" }] }, { question: "You learn a new skill best by...", options: [{ text: "Doing hands-on experiments and seeing the results", stream: "science" }, { text: "Reading, discussing, and debating the core ideas", stream: "arts" }, { text: "Analyzing real-world case studies and examples", stream: "commerce" }] }, { question: "Your ideal workspace would be...", options: [{ text: "A clean, organized lab or a quiet space for deep focus", stream: "science" }, { text: "A creative studio, a library, or out in the field", stream: "arts" }, { text: "A busy, collaborative office or a boardroom", stream: "commerce" }] }, { question: "Which statement best describes you?", options: [{ text: "I am curious about how things work.", stream: "science" }, { text: "I am curious about why people do the things they do.", stream: "arts" }, { text: "I am curious about how systems and organizations function.", stream: "commerce" }] }];
    const careerDataAfter10th = { science: { title: 'Science Stream (11th-12th)', icon: 'atom', color: 'blue', description: 'Ideal for students interested in scientific theory, experimentation, and technology. Opens doors to Engineering, Medicine, and Research.', options: ['Key Subjects: Physics, Chemistry, Maths (PCM)', 'Also available with Biology (PCB) for medical fields.'] }, commerce: { title: 'Commerce Stream (11th-12th)', icon: 'landmark', color: 'purple', description: 'Perfect for those interested in business, finance, and economics. Leads to careers like CA, banking, and management.', options: ['Key Subjects: Accountancy, Business Studies, Economics.'] }, arts: { title: 'Arts / Humanities (11th-12th)', icon: 'scroll-text', color: 'green', description: 'Explores human society, culture, and history. Suited for creative minds and future civil servants, lawyers, or journalists.', options: ['Key Subjects: History, Political Science, Literature.'] }, polytechnic: { title: 'Polytechnic / Diploma', icon: 'wrench', color: 'orange', description: 'Offers 3-year diploma courses in technical fields like Civil, Mechanical, or Computer Engineering for hands-on skills.', options: ['Benefit: Allows direct entry into the 2nd year of a B.Tech degree.'] }, iti: { title: 'ITI (Vocational Training)', icon: 'hammer', color: 'red', description: 'Provides short-term (1-2 years) job-oriented training in specific trades like electrician, fitter, or computer operator.', options: ['Benefit: Quick employment opportunities in skilled trades.'] }, paramedical: { title: 'Paramedical Courses', icon: 'syringe', color: 'teal', description: 'Focuses on healthcare sector roles. Courses like Diploma in Medical Laboratory Technology (DMLT) can be pursued.', options: ['Benefit: Entry into the allied healthcare services field.'] } };
    const careerDataAfter12th = {
        engineeringCse: {
            title: 'Computer Science Engineering',
            icon: 'cpu',
            color: 'blue',
            description: 'Focuses on the design, development, and maintenance of software systems, AI, cybersecurity, and data science.',
            eligibility: '10+2 with Physics, Chemistry, and Mathematics (PCM).',
            entranceExams: ['JEE Main', 'JEE Advanced', 'K-CET', 'State-level CETs', 'COMEDK', 'PESSAT', 'DSATl'],
            topCareers: ['Software Developer', 'AI/ML Engineer', 'Data Scientist', 'Cybersecurity Analyst', 'Cloud Engineer'],
            avgSalary: '₹7–20 LPA (Entry-level)',
            topColleges: ['Indian Institute of Science (IISc)', 'International Institute of Information Technology (IIIT-B)', 'R V College of Engineering (RVCE)', 'B M S College of Engineering (BMSCE)', 'M S Ramaiah Institute of Technology (MSRIT)', 'PES University', 'Dayananda Sagar College of Engineering (DSCE)'],
            higherEducation: ['M.Tech in Specializations', 'MS from foreign universities', 'MBA']
        },
        computerApplications: {
            title: "Computer Applications (BCA)",
            icon: 'laptop-2',
            color: 'violet',
            description: "A 3-year degree providing a foundational understanding of computer applications and software development, open to students from any stream.",
            eligibility: "10+2 from any stream (Maths often required), with 45–50% aggregate.",
            entranceExams: ['K-CET', 'State-level CETs', 'CUET', 'SET', 'IPU CET', 'MET', 'CUCET', 'PESSAT', 'DSAT'],
            topCareers: ['Software Developer', 'Web Developer', 'Data Analyst', 'Cybersecurity Analyst', 'System Analyst'],
            avgSalary: "₹5–12 LPA (Entry-level)",
            topColleges: ['Christ University', 'Jain University', 'Kristu Jayanti College', 'St. Josephs University', 'Mount Carmel College', 'MSRIT'],
            higherEducation: ['Master of Computer Applications (MCA)', 'MBA', 'Specialized Certifications']
        },
        engineeringAero: {
            title: "Aeronautical Engineering",
            icon: 'plane-takeoff',
            color: 'cyan',
            description: "A specialized field focused on the design, development, and testing of aircraft like airplanes, helicopters, and drones.",
            eligibility: "10+2 with Physics, Chemistry, and Mathematics (PCM).",
            entranceExams: ['JEE Main', 'JEE Advanced', 'K-CET', 'State-level CETs', 'COMEDK', 'PESSAT', 'DSAT'],
            topCareers: ['Aircraft Design Engineer', 'Propulsion Engineer', 'Avionics Engineer', 'Flight Test Engineer', 'UAV Engineer'],
            avgSalary: "₹5–7 LPA (Entry-level)",
            topColleges: ['R.V. College of Engineering (RVCE)', 'BMS College of Engineering (BMSCE)', 'Ramaiah Institute of Technology (MSRIT)', 'Dayananda Sagar College of Engineering (DSCE)'],
            higherEducation: ['M.Tech/M.E.', 'Ph.D.']
        },
        engineeringCivil: {
            title: "Civil Engineering",
            icon: 'hard-hat',
            color: 'slate',
            description: "Focuses on designing, constructing, and maintaining the infrastructure of society, such as buildings, bridges, and water systems.",
            eligibility: "10+2 with Physics, Chemistry, and Mathematics (PCM).",
            entranceExams: ['JEE Main', 'JEE Advanced', 'K-CET', 'State-level CETs', 'COMEDK', 'PESSAT', 'DSAT'],
            topCareers: ['Structural Engineer', 'Transportation Engineer', 'Environmental Engineer', 'Construction Manager', 'Urban Planner'],
            avgSalary: "₹4–9 LPA (Varies by role)",
            topColleges: ['R.V. College of Engineering (RVCE)', 'BMS College of Engineering (BMSCE)', 'Dayananda Sagar College of Engineering (DSCE)', 'Nitte Meenakshi Institute of Technology (NMIT)', 'PES College of Engineering'],
            higherEducation: ['M.Tech (Structural, Environmental)', 'MBA in Construction Management']
        },
        architecture: {
            title: "Bachelor of Architecture (B.Arch)",
            icon: 'drafting-compass',
            color: 'lime',
            description: "A five-year program focusing on the art and science of designing and constructing buildings. A license from the Council of Architecture is required to practice.",
            eligibility: "10+2 with Physics, Chemistry, and Mathematics (PCM).",
            entranceExams: ['NATA', 'JEE Main', 'JEE Advanced', 'K-CET', 'State-level CETs', 'COMEDK', 'PESSAT', 'DSAT'],
            topCareers: ['Architectural Designer', 'Project Manager', 'Landscape Architect', 'Urban Planner', 'Interior Designer'],
            avgSalary: "₹7 LPA (Architectural Designer)",
            topColleges: ['Ramaiah Institute of Technology (MSRIT)', 'PES University', 'Christ University', 'BMS College of Architecture', 'RV College of Architecture'],
            higherEducation: ['Master of Architecture (M.Arch)', 'MBA in Construction Management']
        },
        medicalMbbsBds: {
            title: 'Doctor / Dentist (MBBS/BDS)',
            icon: 'stethoscope',
            color: 'red',
            description: 'MBBS is a 5.5-year degree to become a medical doctor, while BDS is a 5-year degree to become a dental surgeon.',
            eligibility: '10+2 with Physics, Chemistry, Biology (PCB) and a minimum of 50% aggregate marks (40% for reserved).',
            entranceExams: ['NEET-UG (mandatory for all colleges)', 'State-level CETs'],
            topCareers: ['General Practitioner', 'Specialist Surgeon (after MD/MS)', 'General Dentist', 'Orthodontist (after MDS)', 'Medical Officer'],
            avgSalary: 'Varies widely based on specialization and practice.',
            topColleges: ['Bangalore Medical College and Research Institute (BMCRI)', 'Ramaiah Medical College', 'St. John’s Medical College', 'Sri Siddhartha Medical College'],
            higherEducation: ['MD/MS (after MBBS)', 'MDS (after BDS)']
        },
        law: {
            title: 'Law (B.A. LLB)',
            icon: 'scale',
            color: 'indigo',
            description: 'A five-year integrated program that combines Arts and Social Science studies with a comprehensive legal education.',
            eligibility: '10+2 from any stream with a minimum of 45-50% aggregate marks.',
            entranceExams: ['CLAT', 'LSAT-India', 'PESSAT', 'University-specific exams'],
            topCareers: ['Litigation Lawyer', 'Corporate Lawyer', 'Judge', 'Legal Advisor', 'Public Prosecutor'],
            avgSalary: '₹6–12 LPA (Corporate Lawyer)',
            topColleges: ['National Law School of India University (NLSIU), Bengaluru', 'School of Law, Christ University, Bengaluru', 'KLE Society’s Law College, Bengaluru', "Ramaiah College of Law, Bengaluru", 'Manipal Law School, Bengaluru'],
            higherEducation: ['Master of Laws (LLM)', 'MBA', 'PhD in Law']
        },
        designBdes: {
            title: "Bachelor of Design (B.Des)",
            icon: 'pencil-ruler',
            color: 'fuchsia',
            description: "A four-year program for students interested in creative problem-solving, integrating theory with hands-on skills for the creative industry.",
            eligibility: "10+2 from any stream with 45–50% aggregate.",
            entranceExams: ['UCEED', 'NIFT Entrance Exam', 'DAT'],
            topCareers: ['UI/UX Designer', 'Graphic Designer', 'Product Designer', 'Fashion Designer', 'Animator'],
            avgSalary: "₹3–8 LPA (Entry-level)",
            topColleges: ['PES University, Bangalore', ' Ramaiah University of Applied Sciences', ' NIFT Bangalore - National Institute of Fashion Technology, Bangalore', 'RV University,', 'Jain University'],
            higherEducation: ['Master of Design (M.Des)']
        },
        artsBfa: {
            title: "Bachelor of Fine Arts (BFA)",
            icon: 'palette',
            color: 'rose',
            description: "A four-year degree focusing heavily on practical, hands-on artistic training for a professional career in visual or performing arts.",
            eligibility: "10+2 from any stream with a minimum of 50% aggregate.",
            entranceExams: ['JEE', 'AIEED', 'K-CET', 'UCEED'],
            topCareers: ['Graphic Designer', 'Animator/VFX Artist', 'Illustrator', 'Art Director', 'Fine Artist'],
            avgSalary: "₹3–6 LPA (Entry-level)",
            topColleges: ['M. S. Ramaiah College of Arts and Science', 'Jain University', 'Bangalore University', 'Reva University'],
            higherEducation: ['Master of Fine Arts (MFA)', 'Master of Design (M.Des)']
        },
        journalism: {
            title: "Journalism (BJMC)",
            icon: 'newspaper',
            color: 'amber',
            description: "A three-year program training students in media, communication, and journalism for print, broadcast, and digital platforms.",
            eligibility: "10+2 from any stream with 45–50% aggregate.",
            entranceExams: ['CUET', 'JET-UG', 'University-specific exams', 'State-level CETs'],
            topCareers: ['Journalist/Reporter', 'Public Relations (PR) Specialist', 'Content Creator', 'Social Media Manager'],
            avgSalary: "₹3–6 LPA (Entry-level)",
            topColleges: ['Christ University, Bangalore', 'REVA University, Bangalore', 'Presidency University, Bangalore', 'IDAC Bangalore', 'KJC Bangalore'],
            higherEducation: ['Master of Arts (MA) in Journalism', 'MBA in Media Management']
        },
        managementHotel: {
            title: 'Hotel Management',
            icon: 'building',
            color: 'teal',
            description: 'A professional field focused on overseeing all operations within a hotel, including front office, food and beverage, and marketing.',
            eligibility: '10+2 from any stream.',
            entranceExams: ['State-level Common Entrance Exams', 'College-specific entrance exams.'],
            topCareers: ['Hotel Manager', 'Executive Chef', 'Event Manager', 'Cruise Line Manager', 'Airline Catering Manager'],
            avgSalary: '₹3.5–6 LPA (Entry-level)',
            topColleges: ['Institute of Hotel Management (IHM) Bangalore', 'Welcomgroup Graduate School of Hotel Administration (WGSHA), Manipal', 'Army Institute of Hotel Management & Catering Technology (AIHMCT), Bangalore', 'Christ University, Bangalore (Central Campus)', 'MSRUAS Bangalore (M.S. Ramaiah University of Applied Sciences)'],
            higherEducation: ['MBA in Hospitality Management', 'Master of Hotel Management (MHM)']
        }
    };
    const collegeData = [{ name: 'IISC Banglore', city: 'Banglore', courses: ['M.Tech', 'M.Sc', 'B.Sc', 'B.Tech', 'Ph.D'], facilities: ['Library', 'Hostel', 'Labs', 'Internet', 'Sports','Gym'] }, { name: 'IIIT Banglore', city: 'Banglore', courses: ['M.Tech', 'B.Tech', 'M.Sc','Ph.D'], facilities: ['Library', 'Hostel', 'Labs', 'Internet', 'Sports', 'Gym'] }, { name: 'IIM Banglore', city: 'Banglore', courses: ['B.Sc (Hons)', 'B.B.A', 'M.B.A', 'B.Sc'], facilities: ['Library', 'Hostel', 'Labs', 'Internet', 'Sports', 'Gym'] }, { name: 'R.V College', city: 'Banglore', courses: ['B.E', 'B.C.A', 'M.C.A', 'M.B.A', 'M.Tech', 'Law'], facilities: ['Library', 'Hostel', 'Labs', 'Internet', 'Sports', 'Gym'] }, { name: 'BMS College', city: 'Banglore', courses: ['B.E', 'B.C.A', 'M.C.A', 'M.B.A', 'M.Tech', 'Law'], facilities: ['Library', 'Hostel', 'Labs', 'Internet', 'Sports', 'Gym'] }, { name: 'M.S Ramaiah College', city: 'Banglore', courses: ['B.E', 'B.C.A', 'M.C.A', 'M.B.A', 'M.Tech', 'Law'], facilities: ['Library', 'Hostel', 'Labs', 'Internet', 'Sports','Gym'] }, { name: 'Dayanada Sagar Collge', city: 'Banglore', courses: ['B.E', 'B.C.A', 'M.C.A', 'M.B.A', 'M.Tech', 'Law'], facilities: ['Library', 'Hostel', 'Labs', 'Internet', 'Sports', 'Gym'] }, { name: 'Manipal University', city: 'Banglore', courses: ['M.B.A.', 'M.C.A.', 'M.A', 'M.Com', 'M.Sc', 'B.B.A', 'B.C.A', 'B.A', 'B.Sc'], facilities: ['Library', 'Hostel', 'Labs', 'Internet', 'Sports', 'Gym'] }, { name: 'Christ University', city: 'Banglore', courses: ['M.Sc', 'M.Com', 'M.C.A', 'M.B.A', 'B.Com', 'B.A LLB', 'B.E', 'B.Sc'], facilities: ['Library', 'Hostel', 'Labs', 'Internet', 'Sports', 'Gym'] }, { name: 'PES Univeristy', city: 'Banglore', courses: ['M.Tech', 'B.Tech', 'B.Arch', 'B.B.A', 'Law', 'BCA', 'B.Sc (Hons)'], facilities: ['Library', 'Hostel', 'Labs', 'Internet', 'Sports', 'Gym'] }, { name: 'Banglore Medical College (BMCRI)', city: 'Banglore', courses: ['M.B.B.S', 'B.D.S', 'B.Sc', 'MS', 'MD'], facilities: ['Library', 'Hostel', 'Labs', 'Internet', 'Sports', 'Gym'] }, { name: 'ST Johns Medical College', city: 'Banglore', courses: ['M.B.B.S', 'B.D.S', 'B.Sc', 'MS', 'MD'], facilities: ['Library', 'Hostel', 'Labs', 'Internet', 'Sports', 'Gym'] }, { name: 'Ramaiah Medical College', city: 'Banglore', courses: ['M.B.B.S', 'B.D.S', 'B.Sc', 'MS', 'MD'], facilities: ['Library', 'Hostel', 'Labs', 'Internet', 'Sports', 'Gym'] }];
    const timelineData = [{ date: '2025-09-28', title: 'NDA & NA (II) 2025 Exam Result', description: 'Results for the National Defence Academy exam held in early September are expected to be announced.' }, { date: '2025-10-15', title: 'National Scholarship Portal (NSP) Registration Opens', description: 'Registrations begin for various central government scholarships for post-matric students.' }, { date: '2025-11-05', title: 'JEE Main 2026 (Session 1) Registration Starts', description: 'The application window opens for the first session of the Joint Entrance Examination for engineering.' }, { date: '2025-12-15', title: 'CLAT 2026 Exam Date', description: 'The Common Law Admission Test for admission to National Law Universities is scheduled.' }, { date: '2025-12-31', title: 'NSP Scholarship Application Deadline', description: 'Last day to submit applications on the National Scholarship Portal for most schemes.' }, { date: '2026-01-24', title: 'JEE Main 2026 (Session 1) Exam Window', description: 'The first session of the JEE Main exam is scheduled between January 24th and February 1st.' }, { date: '2026-02-15', title: 'CBSE/State Board (Class 12th) Exams Begin', description: 'Board examinations for Class 12th are scheduled to start across the country.' }, { date: '2026-02-27', title: 'CUET-UG 2026 Application Window Opens', description: 'Registration for the Common University Entrance Test for undergraduate programs begins.' }, { date: '2026-03-01', title: 'JEE Main 2026 (Session 2) Registration Starts', description: 'The application window opens for the second session of the JEE Main exam.' }, { date: '2026-03-05', title: 'NEET-UG 2026 Registration Starts', description: 'The application process for the National Eligibility cum Entrance Test for medical courses begins.' }, { date: '2026-04-06', title: 'JEE Main 2026 (Session 2) Exam Window', description: 'The second session of the JEE Main exam is scheduled from April 6th to April 15th.' }, { date: '2026-05-05', title: 'NEET-UG 2026 Exam Date', description: 'The national entrance test for admission to MBBS, BDS, and other medical courses will be held.' }, { date: '2026-05-15', title: 'CUET-UG 2026 Exam Window', description: 'The Common University Entrance Test (CUET) exams are scheduled between May 15th and May 31st.' }, { date: '2026-06-10', title: 'JEE Advanced 2026 Exam Date', description: 'The entrance exam for admission to the Indian Institutes of Technology (IITs) will be conducted.' }, { date: '2026-06-20', title: 'NEET-UG 2026 Result Declaration', description: 'Results for the medical entrance examination are expected to be announced.' }, { date: '2026-07-01', title: 'JOSAA/Medical Counselling Begins', description: 'Joint Seat Allocation Authority (JoSAA) and medical counselling processes for admissions usually begin.' }];
    const resourcesData = {
        scholarships: {
            title: 'Scholarship Portals',
            icon: 'graduation-cap',
            color: 'blue',
            items: [
                { name: 'National Scholarship Portal (NSP)', desc: 'A one-stop solution for various scholarships by the Government of India.', link: 'https://scholarships.gov.in/' },
                { name: 'State Scholarship Portal', desc: 'Scholarship for students from Karnataka.', link: 'https://ssp.postmatric.karnataka.gov.in/post_sa/' },
            ]
        },
        ebooks: {
            title: 'Free E-Books & Study Materials',
            icon: 'book-open-check',
            color: 'green',
            items: [
                { name: 'NCERT Textbooks', desc: 'Download official NCERT textbooks for all subjects from Class I to XII.', link: 'https://www.ncert.nic.in/textbooks.php?ln=en' },
                { name: 'N-LIST (INFLIBNET)', desc: 'Access to e-resources including e-books and e-journals for college students.', link: 'https://nlist.inflibnet.ac.in/' },
                { name: 'Swayam', desc: 'Free online courses with study materials from top Indian universities.', link: 'https://swayam.gov.in/' }
            ]
        },
        boards: {
            title: 'Official Education Boards',
            icon: 'building-2',
            color: 'purple',
            items: [
                { name: 'KARNATAKA SCHOOL EXAMINATION AND ASSESSMENT BOARD(KSEAB)', desc: 'Official website for notifications, results, and curriculum.', link: 'https://kseab.karnataka.gov.in/english' },
                 { name: 'INDIAN COUNCIL OF SECONDARY EDUCATION', desc: 'Official website for ICSE-affiliated schools.', link: 'https://www.icseindia.in/' },
                { name: 'Central Board of Secondary Education (CBSE)', desc: 'Official website for CBSE-affiliated schools.', link: 'https://www.cbse.gov.in/' },
                { name: 'National Testing Agency (NTA)', desc: 'Conducts major entrance exams like JEE, NEET, CUET.', link: 'https://www.nta.ac.in/' }
            ]
        }
    };

// === Expose project data to the injected chatbot (one-line exposures) ===
window.quizQuestions = quizQuestions;
window.careerDataAfter12th = careerDataAfter12th;
window.collegeData = collegeData;
window.timelineData = timelineData;
window.resourcesData = resourcesData;

    // --- CORE APPLICATION LOGIC ---
    const views = document.querySelectorAll('.view');
    const navLinks = document.querySelectorAll('.nav-link');
    function showView(viewId) { views.forEach(view => view.classList.remove('active')); const activeView = document.getElementById(viewId); activeView.classList.add('active'); if (viewId === 'career-paths') { initCareerPaths(); } if (viewId === 'dashboard') { animateDashboardCards(); } window.scrollTo(0, 0); document.getElementById('mobile-menu').classList.add('hidden'); }
    navLinks.forEach(link => { link.addEventListener('click', (e) => { e.preventDefault(); const viewId = link.getAttribute('data-view'); showView(viewId); }); });
    document.getElementById('mobile-menu-button').addEventListener('click', () => { document.getElementById('mobile-menu').classList.toggle('hidden'); });
    let currentQuestionIndex = 0, scores = { science: 0, arts: 0, commerce: 0 };
    const quizContainer = document.getElementById('quiz-container'), quizResultContainer = document.getElementById('quiz-result');
    function startQuiz() { currentQuestionIndex = 0; scores = { science: 0, arts: 0, commerce: 0 }; quizContainer.classList.remove('hidden'); quizResultContainer.classList.add('hidden'); renderQuestion(); }
    function renderQuestion() { if (currentQuestionIndex >= quizQuestions.length) { showResult(); return; } const question = quizQuestions[currentQuestionIndex]; quizContainer.innerHTML = `<div class="quiz-question-container"><div class="text-sm text-gray-500 mb-2">Question ${currentQuestionIndex + 1} of ${quizQuestions.length}</div><h3 class="text-2xl font-semibold mb-6">${question.question}</h3><div class="space-y-4">${question.options.map((opt) => `<button class="quiz-option w-full text-left p-4 bg-gray-100 rounded-lg hover:bg-gray-200" data-stream="${opt.stream}">${opt.text}</button>`).join('')}</div></div>`; document.querySelectorAll('.quiz-option').forEach(button => button.addEventListener('click', handleAnswer)); }
    function handleAnswer(e) { scores[e.target.dataset.stream]++; currentQuestionIndex++; renderQuestion(); }
    function showResult() {
        const maxScore = Math.max(...Object.values(scores));
        const recommendedStream = Object.keys(scores).find(key => scores[key] === maxScore) || 'science';
        const keyMap = { science: 'engineeringCse', arts: 'law', commerce: 'managementHotel' };
        const recommendedKey = keyMap[recommendedStream];
        const recommendationData = careerDataAfter12th[recommendedKey];
        quizContainer.classList.add('hidden');
        quizResultContainer.classList.remove('hidden');
        const recommendationEl = document.getElementById('recommendation');
        recommendationEl.textContent = recommendationData.title;
        recommendationEl.className = `text-3xl font-bold text-${recommendationData.color}-600 my-4 p-4 bg-${recommendationData.color}-50 rounded-lg`;
        document.getElementById('explore-recommendation-btn').onclick = () => { showView('career-paths'); renderPaths('after12th'); };
    }
    function initCareerPaths() { const choiceContainer = document.getElementById('career-choice-container'), contentContainer = document.getElementById('career-path-content'); contentContainer.innerHTML = ''; choiceContainer.innerHTML = `<h3 class="text-2xl font-semibold mb-6">First, tell us your current stage:</h3><div class="flex flex-wrap justify-center gap-4"><button id="btn-after-10" class="custom-button">Completed 10th</button><button id="btn-after-12" class="custom-button bg-green-600 hover:bg-green-700">Completed 12th</button></div>`; document.getElementById('btn-after-10').addEventListener('click', () => renderPaths('after10th')); document.getElementById('btn-after-12').addEventListener('click', () => renderPaths('after12th')); }

    function renderPaths(level) {
        const choiceContainer = document.getElementById('career-choice-container');
        const contentContainer = document.getElementById('career-path-content');
        const data = (level === 'after10th') ? careerDataAfter10th : careerDataAfter12th;
        const title = (level === 'after10th') ? 'Career Options After 10th' : 'Career Paths After 12th';

        choiceContainer.innerHTML = `<div class="flex justify-between items-center mb-6"><h3 class="text-3xl font-bold">${title}</h3><button id="btn-back-to-choice" class="px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors flex items-center gap-2"><i data-lucide="arrow-left" class="w-4 h-4"></i> Back</button></div>`;
        contentContainer.innerHTML = '';

        Object.keys(data).forEach((key, index) => {
            const item = data[key];
            const card = document.createElement('div');
            card.className = `bg-white p-6 rounded-lg shadow-md border-t-4 border-${item.color}-500 flex flex-col animated-card`;
            card.style.animationDelay = `${index * 100}ms`;

            let contentHTML = `
                <div class="flex items-center space-x-3 mb-4">
                    <i data-lucide="${item.icon}" class="text-${item.color}-600"></i>
                    <h3 class="text-2xl font-bold text-gray-800">${item.title}</h3>
                </div>
                <p class="text-gray-600 mb-4 flex-grow">${item.description}</p>
                <div class="space-y-4 text-sm">`;

            if (level === 'after10th') {
                contentHTML += `<div><h4 class="font-semibold text-gray-700 mb-2">Key Info:</h4><ul class="list-disc list-inside text-gray-600 space-y-1">${item.options.map(o => `<li>${o}</li>`).join('')}</ul></div>`;
            } else {
                if (item.eligibility) contentHTML += `<div><h4 class="font-semibold text-gray-700">Eligibility:</h4><p class="text-gray-600">${item.eligibility}</p></div>`;
                if (item.entranceExams?.length) contentHTML += `<div><h4 class="font-semibold text-gray-700">Top Entrance Exams:</h4><p class="text-gray-600">${item.entranceExams.join(', ')}</p></div>`;
                if (item.topCareers?.length) contentHTML += `<div><h4 class="font-semibold text-gray-700">Top Career Paths:</h4><ul class="list-disc list-inside text-gray-600">${item.topCareers.map(c => `<li>${c}</li>`).join('')}</ul></div>`;
                if (item.avgSalary) contentHTML += `<div><h4 class="font-semibold text-gray-700">Average Salary:</h4><p class="text-gray-600">${item.avgSalary}</p></div>`;
                if (item.topColleges?.length) contentHTML += `<div><h4 class="font-semibold text-gray-700">Top Colleges :</h4><ul class="list-disc list-inside text-gray-600">${item.topColleges.map(c => `<li>${c}</li>`).join('')}</ul></div>`;
                if (item.higherEducation?.length) contentHTML += `<div><h4 class="font-semibold text-gray-700">Higher Education:</h4><p class="text-gray-600">${item.higherEducation.join(', ')}</p></div>`;
            }

            contentHTML += `</div>`;
            card.innerHTML = contentHTML;
            contentContainer.appendChild(card);
        });

        document.getElementById('btn-back-to-choice').addEventListener('click', initCareerPaths);
        lucide.createIcons();
    }

    function renderColleges(filter = '') {
        const collegeList = document.getElementById('college-list');
        collegeList.innerHTML = '';
        const filteredColleges = collegeData.filter(c => c.name.toLowerCase().includes(filter.toLowerCase()) || c.city.toLowerCase().includes(filter.toLowerCase()));
        if (filteredColleges.length === 0) { collegeList.innerHTML = `<div class="text-center text-gray-500 p-8 bg-white rounded-lg shadow-md">No colleges found. Try a different search term.</div>`; return; }

        filteredColleges.forEach((college, index) => {
            const collegeCard = document.createElement('div');
            collegeCard.className = 'bg-white p-6 rounded-lg shadow-md animated-card';
            collegeCard.style.animationDelay = `${index * 100}ms`;
            collegeCard.innerHTML = `<h3 class="text-xl font-semibold text-blue-700">${college.name}</h3><p class="text-gray-500 mb-3">${college.city}</p><div class="mb-3"><h4 class="font-medium text-gray-700">Courses Offered:</h4><p class="text-gray-600">${college.courses.join(', ')}</p></div><div><h4 class="font-medium text-gray-700">Facilities:</h4><div class="flex flex-wrap gap-2 mt-1">${college.facilities.map(f => `<span class="bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded-full">${f}</span>`).join('')}</div></div>`;
            collegeList.appendChild(collegeCard);
        });
    }

    function initTimeline() {
        const container = document.getElementById('timeline-list');
        container.innerHTML = `<div class="relative border-l-2 border-blue-200 ml-4"></div>`;
        const timelineContainer = container.querySelector('div');
        timelineData.sort((a, b) => new Date(a.date) - new Date(b.date)).forEach(item => {
            const itemEl = document.createElement('div');
            itemEl.className = 'mb-8 ml-8';
            const formattedDate = new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
            itemEl.innerHTML = `<span class="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4 ring-8 ring-white"><i data-lucide="calendar-check" class="text-blue-600 w-5 h-5"></i></span><h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900">${item.title}</h3><time class="block mb-2 text-sm font-normal leading-none text-gray-500">${formattedDate}</time><p class="text-base font-normal text-gray-600">${item.description}</p>`;
            timelineContainer.appendChild(itemEl);
        });
        lucide.createIcons();
    }

    function renderResources() {
        const container = document.getElementById('resources-content');
        container.innerHTML = '';
        Object.keys(resourcesData).forEach((key, index) => {
            const category = resourcesData[key];
            const categoryCard = document.createElement('div');
            categoryCard.className = `bg-white p-6 rounded-lg shadow-md border-l-4 border-${category.color}-500 animated-card`;
            categoryCard.style.animationDelay = `${index * 100}ms`;
            let itemsHTML = category.items.map(item => `<a href="${item.link}" target="_blank" rel="noopener noreferrer" class="block p-3 hover:bg-gray-100 rounded-md"><p class="font-semibold text-gray-800">${item.name}</p><p class="text-sm text-gray-600">${item.desc}</p></a>`).join('');
            categoryCard.innerHTML = `<div class="flex items-center space-x-3 mb-4"><i data-lucide="${category.icon}" class="text-${category.color}-600"></i><h3 class="text-2xl font-bold text-gray-800">${category.title}</h3></div><div class="space-y-2">${itemsHTML}</div>`;
            container.appendChild(categoryCard);
        });
        lucide.createIcons();
    }

    function animateDashboardCards() {
        const cards = document.querySelectorAll('#dashboard-cards > a');
        cards.forEach((card, index) => {
            card.classList.add('animated-card');
            card.style.animationDelay = `${index * 100}ms`;
        });
    }

    // --- INITIALIZATION ---
    function initApp() {
        document.querySelectorAll('.nav-link[data-view="aptitude-test"]').forEach(link => link.addEventListener('click', startQuiz));
        const collegeSearch = document.getElementById('college-search');
        collegeSearch.addEventListener('input', (e) => renderColleges(e.target.value));

        renderColleges();
        initTimeline();
        renderResources();
        animateDashboardCards();
        lucide.createIcons();
    }
    initApp();
});