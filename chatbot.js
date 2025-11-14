/* chatbot.js — non-destructive injected assistant
   - Attempts to use global variables if present:
       window.quizQuestions
       window.careerDataAfter12th
       window.collegeData
       window.timelineData
       window.resourcesData
   - If those are not present (they are local in your script), uses an internal fallback copy
   - No changes to existing code are required.
*/
(function(){
  if (window._chatbotInjected) return;
  window._chatbotInjected = true;

  // --- Attempt to reuse existing globals, otherwise fallback to local copies ---
  // If you later choose to expose your variables to window (one-liners shown below),
  // the chatbot will automatically use them.
  const data = {
    quizQuestions: window.quizQuestions || null,
    careerDataAfter12th: window.careerDataAfter12th || null,
    collegeData: window.collegeData || null,
    timelineData: window.timelineData || null,
    resourcesData: window.resourcesData || null
  };

  // Fallback copies (mirrors your project's shapes; kept small but compatible)
  const fallback = {
    quizQuestions: [
      { question: "Which subject do you enjoy the most in school?", options: [{ text: "Physics or Biology", stream: "science" }, { text: "History or Literature", stream: "arts" }, { text: "Economics or Business Studies", stream: "commerce" }] },
      { question: "What kind of activity would you prefer for a project?", options: [{ text: "Conducting a scientific experiment", stream: "science" }, { text: "Writing a creative story", stream: "arts" }, { text: "Creating a business plan", stream: "commerce" }] }
    ],
    careerDataAfter12th: {
      engineeringCse: { title: 'Computer Science Engineering', description: 'Software, AI, Data Science and Systems.', eligibility: '10+2 with PCM', entranceExams: ['JEE Main','JEE Advanced','K-CET'], topColleges: ['IISc','IIIT-B','RVCE'] },
      medicalMbbsBds: { title: 'MBBS / BDS', description: 'Medicine & dentistry', eligibility: '10+2 with PCB', entranceExams: ['NEET-UG'], topColleges: ["St. John's Medical College","BMCRI"] },
      law: { title: 'Law (B.A. LLB)', description: '5-year integrated law degree', eligibility: '10+2 any stream', entranceExams: ['CLAT'], topColleges: ['NLSIU'] }
    },
    collegeData: [
      { name: 'IISC Banglore', city: 'Banglore', courses: ['M.Tech','M.Sc','B.Tech','Ph.D'] },
      { name: 'IIIT Banglore', city: 'Banglore', courses: ['M.Tech', 'B.Tech', 'M.Sc','Ph.D'] },
      { name: 'R.V College', city: 'Banglore', courses: ['B.E', 'B.C.A', 'M.C.A', 'M.B.A', 'M.Tech', 'Law']},
      { name: 'IIM Banglore', city: 'Banglore', courses: ['B.Sc (Hons)', 'B.B.A', 'M.B.A', 'B.Sc']},
      { name: 'BMS College', city: 'Banglore', courses: ['B.E', 'B.C.A', 'M.C.A', 'M.B.A', 'M.Tech', 'Law']},
      { name: 'M.S Ramaiah College', city: 'Banglore', courses: ['B.E', 'B.C.A', 'M.C.A', 'M.B.A', 'M.Tech', 'Law']},
      { name: 'Dayanada Sagar Collge', city: 'Banglore', courses: ['B.E', 'B.C.A', 'M.C.A', 'M.B.A', 'M.Tech', 'Law']},
      { name: 'Manipal University', city: 'Banglore', courses: ['M.B.A.', 'M.C.A.', 'M.A', 'M.Com', 'M.Sc', 'B.B.A', 'B.C.A', 'B.A', 'B.Sc']},
      { name: 'Christ University', city: 'Banglore', courses: ['M.Sc', 'M.Com', 'M.C.A', 'M.B.A', 'B.Com', 'B.A LLB', 'B.E', 'B.Sc']},
      { name: 'PES Univeristy', city: 'Banglore', courses: ['M.Tech', 'B.Tech', 'B.Arch', 'B.B.A', 'Law', 'BCA', 'B.Sc (Hons)']},
      { name: 'Banglore Medical College (BMCRI)', city: 'Banglore', courses: ['M.B.B.S', 'B.D.S', 'B.Sc', 'MS', 'MD']},
      { name: 'ST Johns Medical College', city: 'Banglore', courses: ['M.B.B.S', 'B.D.S', 'B.Sc', 'MS', 'MD']},
      { name: 'Ramaiah Medical College', city: 'Banglore', courses: ['M.B.B.S', 'B.D.S', 'B.Sc', 'MS', 'MD']},
    ],
    timelineData: [
      { date: '2025-09-28', title: 'NDA & NA (II) 2025 Exam Result', description: 'Results for the National Defence Academy exam held in early September are expected to be announced.' }, 
      { date: '2025-10-15', title: 'National Scholarship Portal (NSP) Registration Opens', description: 'Registrations begin for various central government scholarships for post-matric students.' },
      { date: '2025-11-05', title: 'JEE Main 2026 (Session 1) Registration Starts', description: 'The application window opens for the first session of the Joint Entrance Examination for engineering.' },
      { date: '2025-12-15', title: 'CLAT 2026 Exam Date', description: 'The Common Law Admission Test for admission to National Law Universities is scheduled.' },
      { date: '2025-12-31', title: 'NSP Scholarship Application Deadline', description: 'Last day to submit applications on the National Scholarship Portal for most schemes.' },
      { date: '2026-01-24', title: 'JEE Main 2026 (Session 1) Exam Window', description: 'The first session of the JEE Main exam is scheduled between January 24th and February 1st.' },
      { date: '2026-02-15', title: 'CBSE/State Board (Class 12th) Exams Begin', description: 'Board examinations for Class 12th are scheduled to start across the country.' },
      { date: '2026-02-27', title: 'CUET-UG 2026 Application Window Opens', description: 'Registration for the Common University Entrance Test for undergraduate programs begins.' },
      { date: '2026-03-01', title: 'JEE Main 2026 (Session 2) Registration Starts', description: 'The application window opens for the second session of the JEE Main exam.' },
      { date: '2026-03-05', title: 'NEET-UG 2026 Registration Starts', description: 'The application process for the National Eligibility cum Entrance Test for medical courses begins.' },
      { date: '2026-04-06', title: 'JEE Main 2026 (Session 2) Exam Window', description: 'The second session of the JEE Main exam is scheduled from April 6th to April 15th.' },
      { date: '2026-05-05', title: 'NEET-UG 2026 Exam Date', description: 'The national entrance test for admission to MBBS, BDS, and other medical courses will be held.' },
      { date: '2026-05-15', title: 'CUET-UG 2026 Exam Window', description: 'The Common University Entrance Test (CUET) exams are scheduled between May 15th and May 31st.' },
      { date: '2026-06-10', title: 'JEE Advanced 2026 Exam Date', description: 'The entrance exam for admission to the Indian Institutes of Technology (IITs) will be conducted.' },
      { date: '2026-06-20', title: 'NEET-UG 2026 Result Declaration', description: 'Results for the medical entrance examination are expected to be announced.' },
      { date: '2026-07-01', title: 'JOSAA/Medical Counselling Begins', description: 'Joint Seat Allocation Authority (JoSAA) and medical counselling processes for admissions usually begin.' },
    ],
    resourcesData: [
      { name: 'National Scholarship Portal', url: 'https://scholarships.gov.in' },
      { name: 'State Scholarship Portal', url: 'https://ssp.postmatric.karnataka.gov.in/post_sa/' }
    ],
    ebooks: [
                { name: 'NCERT Textbooks', desc: 'Download official NCERT textbooks for all subjects from Class I to XII.', link: 'https://www.ncert.nic.in/textbooks.php?ln=en' },
                { name: 'N-LIST (INFLIBNET)', desc: 'Access to e-resources including e-books and e-journals for college students.', link: 'https://nlist.inflibnet.ac.in/' },
                { name: 'Swayam', desc: 'Free online courses with study materials from top Indian universities.', link: 'https://swayam.gov.in/' }
            ],

  };

  // final used data (prefer real globals if available)
  const quizQuestions = data.quizQuestions || fallback.quizQuestions;
  const careerDataAfter12th = data.careerDataAfter12th || fallback.careerDataAfter12th;
  const collegeData = data.collegeData || fallback.collegeData;
  const timelineData = data.timelineData || fallback.timelineData;
  const resourcesData = data.resourcesData || fallback.resourcesData;

  // --- tiny DOM helpers ---
  function el(tag, props = {}, children = []) {
    const d = document.createElement(tag);
    for (const k in props) {
      if (k === 'class') d.className = props[k];
      else if (k === 'html') d.innerHTML = props[k];
      else if (k === 'text') d.textContent = props[k];
      else d.setAttribute(k, props[k]);
    }
    (Array.isArray(children) ? children : [children]).forEach(c => {
      if (!c) return;
      if (typeof c === 'string') d.appendChild(document.createTextNode(c));
      else d.appendChild(c);
    });
    return d;
  }

  // --- build UI ---
  const floatBtn = el('button', { class: 'chatbot-float-btn', title: 'Open student assistant', html: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>' });
  const panel = el('div', { class: 'chatbot-panel chatbot-hidden', role: 'dialog', 'aria-label': 'Student assistant' });
  const header = el('div', { class: 'chatbot-header' }, [
    el('div', { class: 'title', text: 'Sensei.ai' }),
    el('div', {}, [
      el('button', { title: 'Minimize', class: 'chatbot-min-btn', html: '&#8211;', style: 'margin-right:8px;background:none;border:none;color:rgba(255,255,255,0.9);font-size:18px;cursor:pointer' }),
      el('button', { title: 'Close', class: 'chatbot-close-btn', text: '✕', style: 'background:transparent;border:none;color:#fff;font-size:14px;cursor:pointer' })
    ])
  ]);
  const body = el('div', { class: 'chatbot-body' });
  const footer = el('div', { class: 'chatbot-footer' }, [
    el('input', { class: 'chatbot-input', placeholder: 'Ask about courses, colleges, dates, scholarships...' }),
    el('button', { class: 'chatbot-send-btn', type: 'button', text: 'Send' })
  ]);
  panel.appendChild(header);
  panel.appendChild(body);
  panel.appendChild(footer);
  document.body.appendChild(floatBtn);
  document.body.appendChild(panel);

  // initial welcome
  function seedWelcome() {
    body.innerHTML = '';
    body.appendChild(el('div', { class: 'chatbot-msg bot', html: '<div class="bubble"><strong>Hi! I can help with course explanations, colleges, exam dates and resources. Try: <em>career for CSE</em>, <em>find colleges in Bangalore</em>, <em>upcoming dates</em>, or <em>start quiz</em>.</strong></div>' }));
    const chips = el('div', { class: 'chatbot-suggestions' }, [
      el('button', { class: 'chatbot-chip', text: 'Find colleges in Bangalore' }),
      el('button', { class: 'chatbot-chip', text: 'Career for CSE' }),
      el('button', { class: 'chatbot-chip', text: 'Upcoming dates' }),
      el('button', { class: 'chatbot-chip', text: 'Scholarships' }),
      el('button', { class: 'chatbot-chip', text: 'Resources' }),
    ]);
    body.appendChild(chips);
    scrollBody();
  }

  seedWelcome();

  // show/hide
  let panelOpen = false;
  floatBtn.addEventListener('click', () => {
    panelOpen = !panelOpen;
    panel.classList.toggle('chatbot-hidden', !panelOpen);
    if (panelOpen) { seedWelcome(); panel.querySelector('.chatbot-input').focus(); }
  });
  panel.querySelector('.chatbot-close-btn').addEventListener('click', () => {
    panelOpen = false;
    panel.classList.add('chatbot-hidden');
  });
  panel.querySelector('.chatbot-min-btn').addEventListener('click', () => {
    panel.classList.toggle('chatbot-hidden');
  });

  // helpers
  function scrollBody() { body.scrollTop = body.scrollHeight; }
  function pushUser(text) { body.appendChild(el('div', { class: 'chatbot-msg user', html: `<div class="bubble">${escapeHtml(text)}</div>` })); scrollBody(); }
  function pushBot(html) { body.appendChild(el('div', { class: 'chatbot-msg bot', html: `<div class="bubble">${html}</div>` })); scrollBody(); }
  function escapeHtml(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }

  // interactions
  const input = panel.querySelector('.chatbot-input');
  const sendBtn = panel.querySelector('.chatbot-send-btn');

  body.addEventListener('click', (ev) => {
    const btn = ev.target.closest('.chatbot-chip');
    if (!btn) return;
    const text = btn.textContent.trim();
    input.value = text;
    handleSubmit(text);
  });
  sendBtn.addEventListener('click', () => handleSubmit(input.value.trim()));
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); handleSubmit(input.value.trim()); } });

  function handleSubmit(text) {
    if (!text) return;
    pushUser(text);
    input.value = '';
    const q = text.toLowerCase();

    // start quiz
    if (q.includes('start quiz') || q.includes('aptitude')) {
      pushBot('Starting a short aptitude quiz — pick one option per question. (Demo)');
      startMiniQuiz();
      return;
    }

    // colleges
    if (q.includes('college') || q.includes('colleges') || q.includes('university')) {
      const cityMatch = q.match(/in\s+([a-z ]{2,30})$/);
      const filter = cityMatch ? cityMatch[1].trim() : '';
      const found = (collegeData || []).filter(c => {
        if (!filter) return true;
        return c.city.toLowerCase().includes(filter) || c.name.toLowerCase().includes(filter);
      });
      if (!found || found.length === 0) {
        pushBot('No colleges found for your query. Try a city name like "Bangalore" or a college name.');
      } else {
        const html = found.map(c => `<strong>${escapeHtml(c.name)}</strong> — ${escapeHtml(c.city)}<div style="font-size:13px;margin-top:4px">Courses: ${escapeHtml((c.courses||[]).join(', '))}</div>`).join('<hr>');
        pushBot(html);
      }
      return;
    }

    // career/course explain
    if (q.includes('career') || q.includes('course') || q.includes('what is') || q.includes('explain')) {
      if (q.includes('cse') || q.includes('computer')) return respondCareerKey('engineeringCse');
      if (q.includes('mbbs') || q.includes('medical') || q.includes('neet')) return respondCareerKey('medicalMbbsBds');
      if (q.includes('law') || q.includes('clat')) return respondCareerKey('law');
      // fallback: list keys
      const list = Object.keys(careerDataAfter12th || {}).map(k => `<strong>${escapeHtml((careerDataAfter12th[k]||{}).title || k)}</strong>`).join(', ');
      pushBot('Available programs: ' + list + '<div style="margin-top:6px;font-size:13px;color:#374151">Ask "career for CSE" or "explain MBBS".</div>');
      return;
    }

    // timeline
    if (q.includes('date') || q.includes('dates') || q.includes('upcoming') || q.includes('deadline') || q.includes('timeline') || q.includes('exam')) {
      const html = (timelineData || fallback.timelineData).map(t => `<strong>${escapeHtml(t.title)}</strong><div style="font-size:13px">${escapeHtml(new Date(t.date).toDateString())}</div><div style="font-size:13px;color:#374151">${escapeHtml(t.description || t.note || '')}</div>`).join('<hr>');
      pushBot(html);
      return;
    }

    // resources
    if (q.includes('scholar') || q.includes('resource') || q.includes('ebook') || q.includes('scholarship')) {
      const html = (resourcesData || fallback.resourcesData).map(r => `<div><a href="${r.url || r.link}" target="_blank" rel="noopener noreferrer">${escapeHtml(r.name || r.title)}</a></div>`).join('');
      pushBot('<strong>Useful resources</strong><div style="margin-top:6px">'+html+'</div>');
      return;
    }

    // detect college names
    for (const c of (collegeData || fallback.collegeData)) {
      if (q.includes((c.name||'').toLowerCase()) || q.includes((c.city||'').toLowerCase())) {
        pushBot(`<strong>${escapeHtml(c.name)}</strong> — ${escapeHtml(c.city)}<div style="font-size:13px">Courses: ${escapeHtml((c.courses||[]).join(', '))}</div>`);
        return;
      }
    }

    pushBot('I did not understand fully. Try: <em>career for CSE</em>, <em>find colleges in Bangalore</em>, <em>upcoming dates</em>, or <em>start quiz</em>.');
  }

  function respondCareerKey(key) {
    const item = (careerDataAfter12th && careerDataAfter12th[key]) || fallback.careerDataAfter12th[key];
    if (!item) { pushBot('Sorry, details not found.'); return; }
    const html = `<strong>${escapeHtml(item.title)}</strong><div style="margin-top:6px">${escapeHtml(item.description || '')}</div><div style="margin-top:6px;font-size:13px"><strong>Eligibility:</strong> ${escapeHtml(item.eligibility || '')}<br><strong>Entrance:</strong> ${escapeHtml((item.entranceExams||[]).join(', '))}<br><strong>Top colleges:</strong> ${escapeHtml((item.topColleges||item.top||[]).join(', '))}</div>`;
    pushBot(html);
  }

  // tiny quiz (demo)
  function startMiniQuiz() {
    const questions = quizQuestions.length ? quizQuestions : fallback.quizQuestions;
    let idx = 0;
    const scores = {};
    const renderQ = () => {
      pushBot(`<strong>Quiz:</strong> ${escapeHtml(questions[idx].question)}`);
      const container = el('div');
      questions[idx].options.forEach(o => {
        const b = el('button', { class: 'chatbot-chip', text: o.text });
        b.addEventListener('click', () => {
          scores[o.stream] = (scores[o.stream]||0) + 1;
          idx++;
          if (idx >= questions.length) showQuizResults();
          else renderQ();
        });
        container.appendChild(b);
      });
      body.appendChild(container);
      scrollBody();
    };
    const showQuizResults = () => {
      const best = Object.keys(scores).sort((a,b)=> (scores[b]||0) - (scores[a]||0))[0] || 'science';
      const map = { science: 'engineeringCse', arts: 'law', commerce: 'managementHotel' };
      respondCareerKey(map[best] || 'engineeringCse');
    };
    renderQ();
  }

})();
