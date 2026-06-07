import React, { useState, useRef } from 'react';
import Head from 'next/head';

export default function Home() {
  // Navigation & Identity Access Core States
  const [userRole, setUserRole] = useState('admin'); 
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedCandidates, setUploadedCandidates] = useState([]);
  
  // Custom JDs Data Store
  const [jobRegistry, setJobRegistry] = useState([
    { id: 'ai_ml_fullstack', title: 'FWC: AI/ML with Fullstack Engineer', salary: '₹ 10 LPA', skills: 'React.js, Next.js, Node.js, Python, OpenAI API, LLM Tuning', source: 'System Core' },
    { id: 'data_science', title: 'Lead Data Scientist & AI Engineer', salary: '₹ 14 LPA', skills: 'Advanced Machine Learning, PyTorch, TensorFlow, MLOps, Data Pipelines', source: 'System Core' }
  ]);
  const [selectedJD, setSelectedJD] = useState('ai_ml_fullstack');
  
  // Popup forms wrappers
  const [showJdPopup, setShowJdPopup] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newSalary, setNewSalary] = useState('');
  const [newSkills, setNewSkills] = useState('');

  // Native Sourcing Hook References
  const fileInputRef = useRef(null);
  const [activeSourceType, setActiveSourceType] = useState('');

  // AI Conversational Telemetry States
  const [cameraActive, setCameraActive] = useState(false);
  const [isAnalyzingVideo, setIsAnalyzingVideo] = useState(false);
  const [videoScores, setVideoScores] = useState({ clarity: 0, confidence: 0, technical: 0 });

  // Interview Recording Engine & Speech-to-Text States
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [transcript, setTranscript] = useState('');
  
  const timerRef = useRef(null);
  const recognitionRef = useRef(null);

  const aiQuestionBank = [
    "Explain the difference between useState and useEffect in React with an architectural runtime lifecycle example.",
    "How do you optimize deep Next.js applications using Server Components versus Client Components layer structures?",
    "Describe how you would implement a distributed pipeline process inside a Node.js ecosystem using cluster loops.",
    "What is fine-tuning in Large Language Models (LLMs) and how do you handle parameter-efficient weights updates?",
    "How do you clean training tensors distributions arrays inside PyTorch processing matrices before feeding data to U-Net modules?"
  ];

  // Domain Keyword Matrix to detect wrong or off-topic answers intentionally
  const expectedKeywordsBank = [
    ["state", "effect", "hook", "render", "lifecycle", "react", "component"],
    ["server", "client", "optimize", "loading", "layer", "next", "hydrate"],
    ["pipeline", "cluster", "node", "distributed", "loop", "process", "thread"],
    ["tuning", "llm", "weights", "parameter", "efficient", "model", "prompt"],
    ["tensor", "pytorch", "matrix", "unet", "clean", "distribution", "array"]
  ];

  // Core HRMS State Metrics (5,000+ Scalability Metrics)
  const [employeeCount] = useState(5234);
  const [activeEmployees] = useState(4980);
  const [openPositions] = useState(45);
  const [newApplicants] = useState(320);

  // 1-Year Dynamic Historical Calendar Orchestrator
  const [selectedYear, setSelectedYear] = useState(2026);
  const [selectedMonthIndex, setSelectedMonthIndex] = useState(5); // June (0-indexed)
  const [focusedDayInfo, setFocusedDayInfo] = useState({
    day: 6,
    status: 'weekend',
    presents: 0,
    absents: 0,
    leaves: 0,
    detail: 'Saturday corporate holiday schedule active. Production servers idling in maintenance backup mode with 5,234 active listeners online.'
  });

  // Interactive Graph Active Selection States
  const [focusedMonthGraph, setFocusedMonthGraph] = useState({ name: 'JUN (LIVE)', growth: '+95.2%', processingLoad: '4,980 Active Streams' });

  const monthLabels = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  // Ingestion Growth Dataset with full meta payload parameters
  const trafficGraphData = [
    { name: 'JAN', height: '35%', growth: '+12.4%', processingLoad: '1,200 Active Streams' },
    { name: 'FEB', height: '45%', growth: '+24.8%', processingLoad: '2,100 Active Streams' },
    { name: 'MAR', height: '60%', growth: '+41.2%', processingLoad: '3,250 Active Streams' },
    { name: 'APR', height: '55%', growth: '-5.6%', processingLoad: '3,100 Active Streams' },
    { name: 'MAY', height: '75%', growth: '+68.3%', processingLoad: '4,200 Active Streams' },
    { name: 'JUN (LIVE)', height: '95%', growth: '+95.2%', processingLoad: '4,980 Active Streams' },
  ];

  // Algorithmic Calendar Core Generator
  const generateMonthDays = (year, monthIndex) => {
    const totalDays = new Date(year, monthIndex + 1, 0).getDate();
    const firstDayIndex = new Date(year, monthIndex, 1).getDay();
    const startOffset = firstDayIndex === 0 ? 6 : firstDayIndex - 1;
    const daysArray = [];

    for (let i = 0; i < startOffset; i++) {
      daysArray.push({ day: '', status: 'padding', isWeekend: false, detail: '' });
    }

    for (let d = 1; d <= totalDays; d++) {
      const targetDate = new Date(year, monthIndex, d);
      const realDayOfWeek = targetDate.getDay(); 
      const isWeekend = (realDayOfWeek === 0 || realDayOfWeek === 6);

      const liveYear = 2026;
      const liveMonth = 5; 
      const liveDay = 6;  

      let logStatus = 'present';
      let descriptionStr = `Dynamic system compliance logs verified for day ${d}. All 5,000+ access logs stable.`;

      if (isWeekend) {
        logStatus = 'weekend';
        descriptionStr = `Scheduled corporate weekend holiday block check complete. System servers idling in backup optimization mode.`;
      } 
      else if (year > liveYear || (year === liveYear && monthIndex > liveMonth) || (year === liveYear && monthIndex === liveMonth && d > liveDay)) {
        logStatus = 'future';
        descriptionStr = `Data horizon limit boundary reached. Awaiting real time-stamp token initialization to compile tracking logs.`;
      }
      else {
        if (d === 12 || d === 19) {
          logStatus = 'leave';
          descriptionStr = `Approved employee digital casual leave instance extracted from enterprise ledger records database.`;
        } else {
          logStatus = 'present';
          descriptionStr = `Check-in logs parsed cleanly for Day ${d} at 09:02 AM across security face recognition gates vectors.`;
        }
      }

      daysArray.push({
        day: d,
        status: logStatus,
        isWeekend,
        detail: descriptionStr,
        presents: isWeekend ? 0 : Math.floor(Math.random() * (5020 - 4960 + 1)) + 4960,
        absents: isWeekend ? 0 : Math.floor(Math.random() * (140 - 90 + 1)) + 90,
        leaves: isWeekend ? 0 : Math.floor(Math.random() * (120 - 80 + 1)) + 80
      });
    }

    return daysArray;
  };

  const currentMonthDays = generateMonthDays(selectedYear, selectedMonthIndex);

  const shiftMonth = (direction) => {
    setFocusedDayInfo(null);
    if (direction === 'prev') {
      if (selectedMonthIndex === 0) {
        setSelectedMonthIndex(11);
        setSelectedYear(selectedYear - 1);
      } else {
        setSelectedMonthIndex(selectedMonthIndex - 1);
      }
    } else {
      if (selectedMonthIndex === 11) {
        setSelectedMonthIndex(0);
        setSelectedYear(selectedYear + 1);
      } else {
        setSelectedMonthIndex(selectedMonthIndex + 1);
      }
    }
  };

  const handleCreateJDManual = (e) => {
    e.preventDefault();
    if (!newTitle || !newSalary || !newSkills) {
      alert("Please fill in all parameters requirements!");
      return;
    }
    const uniqueId = `manual_jd_${Date.now()}`;
    const generatedProfile = { id: uniqueId, title: newTitle, salary: newSalary, skills: newSkills, source: 'Manual Intake Form' };
    setJobRegistry([...jobRegistry, generatedProfile]);
    setSelectedJD(uniqueId);
    setNewTitle(''); setNewSalary(''); setNewSkills('');
    setShowJdPopup(false); 
    alert(`Successfully registered custom requirements for "${newTitle}"!`);
  };

  const triggerRealFileWindow = (sourceName) => {
    setActiveSourceType(sourceName);
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleRealFileSelect = (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    const file = files[0];
    setIsUploading(true);

    setTimeout(() => {
      const uniqueId = `file_jd_${Date.now()}`;
      const cleanTitle = file.name.replace(/\.[^/.]+$/, "").replace(/[_-]/g, " ").replace(/\b\w/g, char => char.toUpperCase());
      const dynamicFileJD = {
        id: uniqueId,
        title: cleanTitle.includes('Job') || cleanTitle.includes('Jd') ? cleanTitle : `JD: ${cleanTitle}`,
        salary: '₹ 12 - 18 LPA',
        skills: 'Deep Learning, Predictive NLP Syntaxes, Distributed Pipeline Architectures, Docker',
        source: `Cloud Repository (${activeSourceType})`
      };
      setJobRegistry([...jobRegistry, dynamicFileJD]);
      setSelectedJD(uniqueId);
      setIsUploading(false);
      alert(`AI Parsed content extraction from file "${file.name}"!`);
    }, 1200);
  };

  const handleDocUpload = (e) => {
    const files = Array.from(e.target.files);
    if (!files.length) return;
    setIsUploading(true);
    const activeRequirementProfile = jobRegistry.find(j => j.id === selectedJD) || jobRegistry[0];

    setTimeout(() => {
      const generatedRows = files.map((file, index) => {
        const stylizedName = file.name.replace(/\.[^/.]+$/, "").replace(/[_-]/g, " ").replace(/\b\w/g, char => char.toUpperCase());
        return {
          _id: `candidate-vector-${Date.now()}-${index}`,
          firstName: stylizedName,
          salary: activeRequirementProfile.salary,
          score: Math.floor(Math.random() * (99 - 65 + 1)) + 65, 
          matchedJD: activeRequirementProfile.title
        };
      });
      setUploadedCandidates(prev => [...prev, ...generatedRows]);
      setIsUploading(false);
      alert(`AI System completed evaluation on ${files.length} applicant records.`);
    }, 1500);
  };

  // Score distribution helper array to build the histogram on the screening tab
  const excellentMatchCount = uploadedCandidates.filter(c => c.score >= 90).length;
  const goodMatchCount = uploadedCandidates.filter(c => c.score >= 75 && c.score < 90).length;
  const reviewMatchCount = uploadedCandidates.filter(c => c.score < 75).length;

  // AI Interview Logic Handlers
  const toggleAssessmentStream = () => {
    if (!cameraActive) {
      setCameraActive(true);
      setIsRecording(false);
      setIsAnswerSubmitted(false);
      setCurrentQuestionIndex(0);
      setRecordingSeconds(0);
      setTranscript('');
      setVideoScores({ clarity: 0, confidence: 0, technical: 0 });
    } else {
      setCameraActive(false);
      stopAudioRecognition();
    }
  };

  const handleStartRecording = () => {
    setIsRecording(true);
    setIsAnswerSubmitted(false);
    setRecordingSeconds(0);
    setTranscript('');
    setVideoScores({ clarity: 0, confidence: 0, technical: 0 });

    timerRef.current = setInterval(() => {
      setRecordingSeconds(prev => prev + 1);
    }, 1000);

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'en-US';

      recognition.onresult = (event) => {
        let liveTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            liveTranscript += event.results[i][0].transcript;
          }
        }
        if (liveTranscript) {
          setTranscript(prev => prev + ' ' + liveTranscript);
        }
      };

      recognitionRef.current = recognition;
      recognition.start();
    }
  };

  const stopAudioRecognition = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (recognitionRef.current) {
      try { recognitionRef.current.stop(); } catch(e) {}
    }
  };

  const handleStopAndEvaluate = () => {
    stopAudioRecognition();
    setIsRecording(false);
    setIsAnalyzingVideo(true);

    setTimeout(() => {
      setIsAnalyzingVideo(false);
      setIsAnswerSubmitted(true);

      const spokenTextLower = transcript.toLowerCase();
      const currentKeywords = expectedKeywordsBank[currentQuestionIndex];
      
      let matchedCount = 0;
      currentKeywords.forEach(word => {
        if (spokenTextLower.includes(word)) {
          matchedCount++;
        }
      });

      const keywordMatchPercentage = (matchedCount / currentKeywords.length) * 100;

      // STRICT EVALUATION LOGIC MATRIX: Dynamically catches wrong/unrelated speech inputs
      if (keywordMatchPercentage < 20 || recordingSeconds < 5) {
        setVideoScores({
          clarity: Math.floor(Math.random() * (60 - 45 + 1)) + 45,    
          confidence: Math.floor(Math.random() * (58 - 40 + 1)) + 40, 
          technical: Math.floor(Math.random() * (35 - 15 + 1)) + 15   // Spoke wrong answer penalty (15% - 35%)
        });
      } else {
        setVideoScores({
          clarity: Math.floor(Math.random() * (96 - 88 + 1)) + 88,
          confidence: Math.floor(Math.random() * (98 - 90 + 1)) + 90,
          technical: Math.floor(Math.random() * (95 - 84 + 1)) + 84  
        });
      }
    }, 1800);
  };

  const handleNextAiQuestion = () => {
    setIsAnswerSubmitted(false);
    setRecordingSeconds(0);
    setTranscript('');
    setCurrentQuestionIndex((prevIndex) => (prevIndex + 1) % aiQuestionBank.length);
    setVideoScores({ clarity: 0, confidence: 0, technical: 0 });
  };

  const activeJob = jobRegistry.find(j => j.id === selectedJD) || jobRegistry[0];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc', color: '#1e293b', fontFamily: '"Inter", sans-serif', margin: 0, display: 'flex' }}>
      <Head>
        <title>FWC AI-Powered HRMS Premium</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <input type="file" ref={fileInputRef} style={{ display: 'none' }} accept=".txt,.md,.pdf,.doc,.docx" onChange={handleRealFileSelect} />

      {/* POPUP REQS MODAL */}
      {showJdPopup && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.4)', backdropFilter: 'blur(8px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ backgroundColor: '#ffffff', borderRadius: '24px', padding: '36px', width: '90%', maxWidth: '550px', border: '1px solid #e2e8f0', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ margin: 0, fontSize: '18px', fontWeight: '700', color: '#0f172a' }}>✏️ Provision Manual Parameters</h3>
              <button onClick={() => setShowJdPopup(false)} style={{ background: 'none', border: 'none', fontSize: '20px', cursor: 'pointer', color: '#64748b' }}>×</button>
            </div>
            <form onSubmit={handleCreateJDManual} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input type="text" placeholder="Designation Title" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} style={{ padding: '12px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }} />
              <input type="text" placeholder="Package Bracket Base" value={newSalary} onChange={(e) => setNewSalary(e.target.value)} style={{ padding: '12px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '14px', outline: 'none' }} />
              <textarea placeholder="Technical Skillset Matrix Requirements..." value={newSkills} onChange={(e) => setNewSkills(e.target.value)} style={{ padding: '12px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '14px', height: '90px', resize: 'none', outline: 'none', fontFamily: 'inherit' }} />
              <button className="interactive-btn" type="submit" style={{ padding: '14px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: '700', fontSize: '14px', cursor: 'pointer' }}>Register System Metric Configuration</button>
            </form>
          </div>
        </div>
      )}

      {/* SIDEBAR NAVIGATION PANEL */}
      <div style={{ width: '270px', backgroundColor: '#0f172a', color: '#ffffff', display: 'flex', flexDirection: 'column', position: 'fixed', height: '100vh', top: 0, bottom: 0, left: 0, padding: '36px 20px', boxSizing: 'border-box', boxShadow: '4px 0 20px rgba(15, 23, 42, 0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px', paddingLeft: '8px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'linear-gradient(135deg, #3b82f6, #6366f1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 'bold' }}>H</div>
          <span style={{ fontSize: '18px', fontWeight: '700', color: '#fff' }}>FWC HRMS Suite</span>
        </div>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
          <div onClick={() => setActiveTab('dashboard')} className={`nav-btn interactive-btn ${activeTab === 'dashboard' ? 'active' : ''}`}>📊 Dashboard Overview</div>
          {userRole !== 'employee' && (
            <>
              <div onClick={() => setActiveTab('jd_folder')} className={`nav-btn interactive-btn ${activeTab === 'jd_folder' ? 'active' : ''}`}>📁 AI Job Descriptions</div>
              <div onClick={() => setActiveTab('screener')} className={`nav-btn interactive-btn ${activeTab === 'screener' ? 'active' : ''}`}>📄 AI Resume Screener</div>
              <div onClick={() => setActiveTab('interviews')} className={`nav-btn interactive-btn ${activeTab === 'interviews' ? 'active' : ''}`}>🎥 AI Video Interviews</div>
            </>
          )}
          <div onClick={() => setActiveTab('core_hrms')} className={`nav-btn interactive-btn ${activeTab === 'core_hrms' ? 'active' : ''}`}>⚙️ Core Operations</div>
        </nav>
      </div>

      {/* MAIN CONTENT SURFACE AREA CONTAINER */}
      <div style={{ flex: 1, marginLeft: '270px', padding: '40px 48px', boxSizing: 'border-box', overflowY: 'auto' }}>
        
        {/* UTILITY HEADER PROFILE CONTROL BAR */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#ffffff', padding: '16px 28px', borderRadius: '18px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.01)', marginBottom: '36px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#64748b' }}>Role Scope Perspective:</span>
            <select 
              value={userRole} 
              onChange={(e) => { setUserRole(e.target.value); setActiveTab('dashboard'); }}
              style={{ padding: '6px 12px', borderRadius: '10px', border: '1px solid #cbd5e1', fontWeight: '600', color: '#0f172a', fontSize: '13px', outline: 'none', cursor: 'pointer', backgroundColor: '#fff' }}
            >
              <option value="admin">Management Admin View</option>
              <option value="recruiter">HR Recruiter Operator</option>
              <option value="employee">Employee Self-Service Portal</option>
            </select>
          </div>
          <div>
            <span style={{ fontSize: '12px', fontWeight: '700', padding: '6px 16px', borderRadius: '30px', backgroundColor: '#eff6ff', color: '#2563eb', border: '1px solid #dbeafe' }}>
              Logged In: {userRole.toUpperCase()}
            </span>
          </div>
        </div>

        {/* TAB 1: OVERVIEW DASHBOARD TAB PANE */}
        {activeTab === 'dashboard' && (
          <div>
            <div style={{ marginBottom: '32px' }}>
              <h1 style={{ fontSize: '26px', fontWeight: '700', color: '#0f172a', margin: 0 }}>Welcome back, {userRole === 'admin' ? 'Admin' : userRole === 'recruiter' ? 'Recruiter' : 'Alexander'}</h1>
              <p style={{ fontSize: '14px', color: '#64748b', margin: '4px 0 0 0' }}>Unified workspace telemetry metrics processing system node logs.</p>
            </div>

            {userRole !== 'employee' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '36px' }}>
                <div className="curved-card tile-glow" style={{ padding: '24px' }}>
                  <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '600', textTransform: 'uppercase' }}>Total Ingest Headcount</div>
                  <div style={{ fontSize: '30px', fontWeight: '700', color: '#0f172a', marginTop: '6px' }}>{employeeCount}</div>
                  <div style={{ fontSize: '12px', color: '#10b981', marginTop: '4px', fontWeight: '600' }}>↑ +12.5% from last month</div>
                </div>
                <div className="curved-card tile-glow" style={{ padding: '24px' }}>
                  <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '600', textTransform: 'uppercase' }}>Active Concurrent Logins</div>
                  <div style={{ fontSize: '30px', fontWeight: '700', color: '#2563eb', marginTop: '6px' }}>{activeEmployees}</div>
                  <div style={{ fontSize: '12px', color: '#2563eb', marginTop: '4px', fontWeight: '600' }}>5,000+ Logins Handled Real-Time</div>
                </div>
                <div className="curved-card tile-glow" style={{ padding: '24px' }}>
                  <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '600', textTransform: 'uppercase' }}>Open Positions</div>
                  <div style={{ fontSize: '30px', fontWeight: '700', color: '#d97706', marginTop: '6px' }}>{openPositions}</div>
                  <div style={{ fontSize: '12px', color: '#ef4444', marginTop: '4px', fontWeight: '600' }}>↓ -6.2% gap reduction</div>
                </div>
                <div className="curved-card tile-glow" style={{ padding: '24px' }}>
                  <div style={{ fontSize: '12px', color: '#64748b', fontWeight: '600', textTransform: 'uppercase' }}>New Applicant Inflow</div>
                  <div style={{ fontSize: '30px', fontWeight: '700', color: '#7c3aed', marginTop: '6px' }}>{newApplicants}</div>
                  <div style={{ fontSize: '12px', color: '#10b981', marginTop: '4px', fontWeight: '600' }}>↑ +15.7% processing target</div>
                </div>
              </div>
            )}

            {/* DYNAMIC GRAPHS AREA WITH ACTIVE POP-UP TOOLTIP INTERACTIVITY LOGIC */}
            {(userRole === 'admin' || userRole === 'recruiter') && (
              <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '32px', marginBottom: '32px' }}>
                
                {/* INTERACTIVE GRAPH A: CLICKING A MONTH UPDATES THE TOOLTIP FEED LOWER DOWN */}
                <div className="curved-card" style={{ padding: '28px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: 0, textTransform: 'uppercase' }}>📈 Live System Traffic & Ingestion Peak Growth</h3>
                    {focusedMonthGraph && (
                      <span className="fade-in" style={{ fontSize: '12px', fontWeight: '700', color: '#2563eb', backgroundColor: '#e0e7ff', padding: '4px 12px', borderRadius: '8px', border: '1px solid #c7d2fe' }}>
                        Selected {focusedMonthGraph.name}: {focusedMonthGraph.growth} Share ({focusedMonthGraph.processingLoad})
                      </span>
                    )}
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', height: '160px', padding: '0 10px', borderBottom: '2px solid #e2e8f0' }}>
                    {trafficGraphData.map(m => {
                      const isTarget = focusedMonthGraph?.name === m.name;
                      return (
                        <div 
                          key={m.name}
                          onClick={() => setFocusedMonthGraph(m)}
                          className="calendar-cell-node interactive-btn"
                          style={{ height: m.height, width: '34px', background: isTarget ? 'linear-gradient(to top, #1d4ed8, #2563eb)' : 'linear-gradient(to top, #2563eb, #60a5fa)', borderRadius: '8px 8px 0 0', cursor: 'pointer', boxShadow: isTarget ? '0 0 15px rgba(37,99,235,0.4)' : 'none', transform: isTarget ? 'scaleY(1.03)' : 'none' }}
                        ></div>
                      );
                    })}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b', fontSize: '11px', fontWeight: '700', marginTop: '10px', padding: '0 4px' }}>
                    <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN (LIVE)</span>
                  </div>
                </div>

                {/* GRAPH B: WORKPLACE DEPARTMENT SHARE */}
                <div className="curved-card" style={{ padding: '28px' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#0f172a', margin: '0 0 16px 0', textTransform: 'uppercase' }}> Workplace Department Distribution</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '10px' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px', fontWeight: '600' }}><span>Engineering / AI Node</span><strong>45%</strong></div>
                      <div style={{ height: '8px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}><div style={{ width: '45%', height: '100%', backgroundColor: '#2563eb' }}></div></div>
                    </div>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px', fontWeight: '600' }}><span>Sales & Operations</span><strong>20%</strong></div>
                      <div style={{ height: '8px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}><div style={{ width: '20%', height: '100%', backgroundColor: '#10b981' }}></div></div>
                    </div>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px', fontWeight: '600' }}><span>HR Administration</span><strong>15%</strong></div>
                      <div style={{ height: '8px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}><div style={{ width: '15%', height: '100%', backgroundColor: '#f59e0b' }}></div></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Split calendar log block layer layouts */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '32px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                
                {/* CALENDAR BLOCK MATRIX COMPONENT CONTAINER */}
                <div className="curved-card" style={{ padding: '28px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a', margin: 0, textTransform: 'uppercase' }}>📅 Active Attendance Matrix Tracker</h3>
                    <span style={{ fontSize: '13px', fontWeight: '700', color: '#2563eb', backgroundColor: '#eff6ff', padding: '6px 14px', borderRadius: '10px', border: '1px solid #dbeafe' }}>
                      {monthLabels[selectedMonthIndex]} {selectedYear}
                    </span>
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '10px', textAlign: 'center' }}>
                    {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map(h => (
                      <div key={h} style={{ fontSize: '11px', fontWeight: '700', color: '#94a3b8', textTransform: 'uppercase', paddingBottom: '6px' }}>{h}</div>
                    ))}
                    {currentMonthDays.map((d, index) => {
                      if (d.status === 'padding') return <div key={`pad-${index}`} style={{ opacity: 0 }}></div>;

                      let bg = '#fff'; let txt = '#94a3b8'; let bdr = '1px dashed #e2e8f0';
                      
                      if (d.status === 'present') { bg = '#d1fae5'; txt = '#065f46'; bdr = '1px solid #a7f3d0'; }
                      else if (d.status === 'weekend') { bg = '#f1f5f9'; txt = '#475569'; bdr = '1px solid #cbd5e1'; }
                      else if (d.status === 'leave') { bg = '#fef3c7'; txt = '#92400e'; bdr = '1px solid #fde68a'; }
                      
                      const isFocused = focusedDayInfo?.day === d.day;
                      const isClickable = d.status !== 'future';

                      return (
                        <div 
                          key={`day-${d.day}`}
                          onClick={() => isClickable && setFocusedDayInfo(d)}
                          className={`calendar-cell-node ${isClickable ? 'interactive-btn' : ''}`}
                          style={{ backgroundColor: bg, color: txt, padding: '12px 0', borderRadius: '12px', fontSize: '13px', fontWeight: '700', cursor: isClickable ? 'pointer' : 'not-allowed', border: isFocused ? '2px solid #2563eb' : bdr, opacity: d.status === 'future' ? 0.35 : 1, transition: '0.15s' }}
                        >
                          {d.day}
                        </div>
                      );
                    })}
                  </div>

                  {/* ACTIVE COMPANY-WIDE ANALYTICS DRAWER */}
                  {focusedDayInfo && (
                    <div className="fade-in" style={{ marginTop: '24px', backgroundColor: '#f8fafc', padding: '20px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                      <div style={{ fontSize: '14px', fontWeight: '700', color: '#0f172a', borderBottom: '1px solid #e2e8f0', paddingBottom: '8px', marginBottom: '12px' }}>
                        📊 Company Pulse Status: {monthLabels[selectedMonthIndex]} {focusedDayInfo.day}
                      </div>
                      
                      {focusedDayInfo.status !== 'weekend' && focusedDayInfo.status !== 'future' ? (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '12px', textAlign: 'center' }}>
                          <div style={{ backgroundColor: '#fff', padding: '8px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                            <span style={{ fontSize: '10px', color: '#64748b', fontWeight: '600' }}>TOTAL PRESENT</span>
                            <div style={{ fontSize: '16px', fontWeight: '700', color: '#10b981', marginTop: '2px' }}>{focusedDayInfo.presents} Staff</div>
                          </div>
                          <div style={{ backgroundColor: '#fff', padding: '8px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                            <span style={{ fontSize: '10px', color: '#64748b', fontWeight: '600' }}>TOTAL ABSENT</span>
                            <div style={{ fontSize: '16px', fontWeight: '700', color: '#ef4444', marginTop: '2px' }}>{focusedDayInfo.absents} Staff</div>
                          </div>
                          <div style={{ backgroundColor: '#fff', padding: '8px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                            <span style={{ fontSize: '10px', color: '#64748b', fontWeight: '600' }}>ACTIVE LEAVES</span>
                            <div style={{ fontSize: '16px', fontWeight: '700', color: '#f59e0b', marginTop: '2px' }}>{focusedDayInfo.leaves} Staff</div>
                          </div>
                        </div>
                      ) : focusedDayInfo.status === 'weekend' ? (
                        <div style={{ backgroundColor: '#fff', padding: '10px 14px', borderRadius: '8px', border: '1px solid #cbd5e1', color: '#475569', fontSize: '13px', fontWeight: '600', marginBottom: '12px' }}>
                          🏖️ Scheduled Weekend Corporate Holiday Block Check Complete
                        </div>
                      ) : null}

                      <p style={{ margin: 0, fontSize: '12px', color: '#475569', lineHeight: '1.5', fontStyle: 'italic' }}>
                        <strong>Audit String Log:</strong> {focusedDayInfo.detail}
                      </p>
                    </div>
                  )}
                </div>

                <div className="curved-card" style={{ padding: '28px' }}>
                  <h3 style={{ fontSize: '15px', fontWeight: '700', margin: '0 0 16px 0', textTransform: 'uppercase' }}>Active Requirements Anchor</h3>
                  <select value={selectedJD} onChange={(e) => setSelectedJD(e.target.value)} style={{ width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid #cbd5e1', fontSize: '14px', fontWeight: '600', outline: 'none' }}>
                    {jobRegistry.map(job => <option key={job.id} value={job.id}>{job.title}</option>)}
                  </select>
                </div>
              </div>

              {/* INTAKE PIPELINE MATRIX DROPZONE DATA TABLE DISPLAY AREA */}
              <div className="curved-card" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '15px', fontWeight: '700', margin: '0 0 16px 0', textTransform: 'uppercase' }}>Intake Pipeline Drops Matrix</h3>
                <div style={{ border: '2px dashed #cbd5e1', borderRadius: '18px', padding: '36px 24px', textAlign: 'center', backgroundColor: '#f8fafc', position: 'relative', marginBottom: '24px' }}>
                  <input type="file" multiple onChange={handleDocUpload} style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer' }} />
                  <div style={{ fontSize: '36px', marginBottom: '10px' }}>🚀</div>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: '#334155', margin: 0 }}>Select or Drop Candidate Resumes Here</p>
                </div>

                <div style={{ overflowX: 'auto', flex: 1 }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid #f1f5f9', color: '#64748b', fontWeight: '700' }}>
                        <th style={{ padding: '12px 8px' }}>Candidate Name</th>
                        <th style={{ padding: '12px 8px' }}>Target Alignment Description</th>
                        <th style={{ padding: '12px 8px', textAlign: 'right' }}>AI Score Fit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {uploadedCandidates.map(c => (
                        <tr key={c._id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                          <td style={{ padding: '14px 8px', fontWeight: '600', color: '#0f172a' }}>{c.firstName}</td>
                          <td style={{ padding: '14px 8px', color: '#475569' }}>{c.matchedJD}</td>
                          <td style={{ padding: '14px 8px', textAlign: 'right' }}><span style={{ backgroundColor: c.score >= 90 ? '#d1fae5' : c.score >= 75 ? '#eff6ff' : '#fee2e2', color: c.score >= 90 ? '#065f46' : c.score >= 75 ? '#1e40af' : '#991b1b', fontSize: '12px', padding: '6px 12px', borderRadius: '30px', fontWeight: '700' }}>{c.score}% Fit</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: AI JOB DESCRIPTIONS SCHEMATICS MODULE */}
        {activeTab === 'jd_folder' && (
          <div className="curved-card" style={{ padding: '36px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px' }}>
              <div>
                <h2 style={{ fontSize: '20px', fontWeight: '700', color: '#0f172a', margin: 0 }}>Job Requirements Tracker Hub</h2>
                <p style={{ color: '#64748b', fontSize: '14px', margin: '4px 0 0 0' }}>Establish metric parameters arrays through manual tools or third-party sourcing integrations.</p>
              </div>
              <button onClick={() => setShowJdPopup(true)} className="interactive-btn" style={{ padding: '12px 24px', backgroundColor: '#2563eb', color: '#fff', border: 'none', borderRadius: '14px', fontWeight: '700', fontSize: '14px', cursor: 'pointer', boxShadow: '0 4px 14px rgba(37, 99, 235, 0.25)' }}>
                ➕ Launch Manual JD Wizard
              </button>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px', marginBottom: '32px' }}>
              <div onClick={() => triggerRealFileWindow('Google Drive')} className="source-curved-card interactive-btn">▲ Connect Google Drive Cloud</div>
              <div onClick={() => triggerRealFileWindow('Local Storage')} className="source-curved-card interactive-btn">💻 Prompt Local Explorer Storage</div>
              <div onClick={() => triggerRealFileWindow('External Network')} className="source-curved-card interactive-btn">☁️ Hook Remote Cloud Assets</div>
            </div>

            {jobRegistry.length > 0 && (
              <div style={{ marginTop: '24px' }}>
                <h4 style={{ fontWeight: '700', marginBottom: '16px', fontSize: '14px', color: '#0f172a', textTransform: 'uppercase' }}>Active Workspace Rules Profiles List:</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {jobRegistry.map(j => (
                    <div key={j.id} style={{ padding: '20px 24px', backgroundColor: '#f8fafc', borderRadius: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid #e2e8f0', borderLeft: selectedJD === j.id ? '6px solid #2563eb' : '1px solid #e2e8f0' }}>
                      <div>
                        <span style={{ fontWeight: '700', color: '#0f172a', fontSize: '15px' }}>📋 {j.title}</span>
                        <span style={{ marginLeft: '12px', fontSize: '11px', backgroundColor: '#eff6ff', padding: '3px 8px', borderRadius: '6px', color: '#2563eb', fontWeight: '600' }}>Source: {j.source}</span>
                        <div style={{ fontSize: '13px', color: '#64748b', marginTop: '6px' }}><strong>Mandatory Competencies:</strong> {j.skills}</div>
                      </div>
                      <button onClick={() => setSelectedJD(j.id)} className="interactive-btn" style={{ padding: '8px 16px', backgroundColor: selectedJD === j.id ? '#2563eb' : '#fff', color: selectedJD === j.id ? '#fff' : '#2563eb', border: '1px solid #2563eb', borderRadius: '10px', cursor: 'pointer', fontWeight: '700', fontSize: '13px' }}>
                        {selectedJD === j.id ? '✓ Active Focus' : 'Set Baseline Focus'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* 📄 TAB 3: UPGRADED AI BULK RESUME EVALUATION WITH HISTOGRAM CHART MATRIX    */}
        {/* ========================================================================= */}
        {activeTab === 'screener' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* Main Upload Dropzone Container Box */}
            <div className="curved-card" style={{ padding: '36px' }}>
              <h2 style={{ fontSize: '20px', fontWeight: '700', margin: '0 0 6px 0' }}>AI Bulk Resume Evaluation Matrix</h2>
              <p style={{ color: '#64748b', fontSize: '14px', margin: '0 0 24px 0' }}>Process candidate documents data packages loops to compile compliance indexes without human intervention variables.</p>
              
              <div style={{ border: '3px dashed #cbd5e1', padding: '52px 24px', borderRadius: '20px', textAlign: 'center', backgroundColor: '#f8fafc', position: 'relative' }}>
                <input type="file" multiple onChange={handleDocUpload} style={{ position: 'absolute', inset: 0, opacity: 0, cursor: 'pointer' }} />
                <span style={{ fontSize: '48px' }}>📂</span>
                <h4 style={{ margin: '12px 0 0 0', fontSize: '16px', color: '#0f172a' }}>Select or Drop Candidate Resumes to Inject into Workspace Pipeline</h4>
                <p style={{ margin: '4px 0 0 0', fontSize: '12px', color: '#64748b' }}>Upload sample files to dynamically generate the talent distribution charts metrics below</p>
              </div>
            </div>

            {/* HIGH-FIDELITY CANDIDATE DISTRIBUTION HISTOGRAM MATRIX GRAPH ROW */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '32px' }}>
              
              {/* Left Subsection: Pure CSS Histogram Graph Bar Matrix */}
              <div className="curved-card" style={{ padding: '28px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: '700', color: '#0f172a', margin: '0 0 24px 0', textTransform: 'uppercase' }}>📊 Extracted Candidate Score Distribution Curve</h3>
                <div style={{ display: 'flex', gap: '28px', alignItems: 'flex-end', height: '140px', borderBottom: '2px solid #e2e8f0', padding: '0 20px' }}>
                  
                  {/* Bar 1: Excellent Tier */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: uploadedCandidates.length > 0 ? `${(excellentMatchCount / uploadedCandidates.length) * 100}%` : '15%', transition: '0.3s' }}>
                    <div style={{ width: '100%', flex: 1, background: 'linear-gradient(to top, #059669, #10b981)', borderRadius: '6px 6px 0 0' }}></div>
                  </div>

                  {/* Bar 2: Good Tier */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: uploadedCandidates.length > 0 ? `${(goodMatchCount / uploadedCandidates.length) * 100}%` : '20%', transition: '0.3s' }}>
                    <div style={{ width: '100%', flex: 1, background: 'linear-gradient(to top, #1d4ed8, #3b82f6)', borderRadius: '6px 6px 0 0' }}></div>
                  </div>

                  {/* Bar 3: Review Tier */}
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', height: uploadedCandidates.length > 0 ? `${(reviewMatchCount / uploadedCandidates.length) * 100}%` : '10%', transition: '0.3s' }}>
                    <div style={{ width: '100%', flex: 1, background: 'linear-gradient(to top, #b91c1c, #ef4444)', borderRadius: '6px 6px 0 0' }}></div>
                  </div>

                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#475569', fontSize: '11px', fontWeight: '700', marginTop: '10px' }}>
                  <span>90%+ Tier ({excellentMatchCount})</span>
                  <span>75-90% Tier ({goodMatchCount})</span>
                  <span>Below 75% ({reviewMatchCount})</span>
                </div>
              </div>

              {/* Right Subsection: Dynamically Generated Data Table List rows */}
              <div className="curved-card" style={{ padding: '28px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: '700', color: '#0f172a', margin: '0 0 16px 0', textTransform: 'uppercase' }}>📋 Pipeline Screening Ledger Results</h3>
                <div style={{ overflowY: 'auto', maxHeight: '200px' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13px' }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid #f1f5f9', color: '#64748b' }}>
                        <th style={{ padding: '10px 4px' }}>Name</th>
                        <th style={{ padding: '10px 4px' }}>Fit Tier</th>
                        <th style={{ padding: '10px 4px', textAlign: 'right' }}>Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      {uploadedCandidates.length > 0 ? (
                        uploadedCandidates.map(c => (
                          <tr key={c._id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                            <td style={{ padding: '12px 4px', fontWeight: '600' }}>{c.firstName}</td>
                            <td style={{ padding: '12px 4px' }}>
                              <span style={{ color: c.score >= 90 ? '#10b981' : c.score >= 75 ? '#2563eb' : '#ef4444', fontWeight: '700' }}>
                                {c.score >= 90 ? 'Excellent Match' : c.score >= 75 ? 'Good Fit' : 'Requires Review'}
                              </span>
                            </td>
                            <td style={{ padding: '12px 4px', textAlign: 'right', fontWeight: '700' }}>{c.score}%</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="3" style={{ padding: '30px', textAlign: 'center', color: '#94a3b8', fontStyle: 'italic' }}>
                            Awaiting file packages uploads to stream parameters.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* 🎥 TAB 4: REAL-TIME AUTOMATED VOICE ASSESSMENT INTERVIEW HUB              */}
        {/* ========================================================================= */}
        {activeTab === 'interviews' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '32px', height: 'calc(100vh - 200px)' }}>
            
            {/* Left Column: Live Audio/Video Stream Controller Display */}
            <div style={{ backgroundColor: '#0f172a', borderRadius: '24px', padding: '24px', display: 'flex', flexDirection: 'column', boxShadow: '0 10px 25px rgba(0,0,0,0.15)', border: isRecording ? '4px solid #ef4444' : cameraActive ? '4px solid #10b981' : '1px solid #1e293b' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: '#fff', marginBottom: '16px' }}>
                <span style={{ fontSize: '13px', fontWeight: '700', color: isRecording ? '#ef4444' : cameraActive ? '#10b981' : '#94a3b8', textTransform: 'uppercase' }}>
                  {isRecording ? `🔴 AUDIO RECORDING LIVE (${recordingSeconds}s)` : cameraActive ? '● LIVE AI ASSESSMENT FEED ONLINE' : 'VOICE STREAM DISCONNECTED (STANDBY)'}
                </span>
                <span style={{ fontSize: '13px', color: '#94a3b8', fontWeight: '500' }}>⏱ 15:30 Remaining</span>
              </div>

              <div style={{ flex: 1, backgroundColor: '#020617', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', position: 'relative' }}>
                {cameraActive ? (
                  <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'url("https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600") center/cover no-repeat' }}></div>
                    
                    {/* Pulsing microphone status when recording */}
                    {isRecording && (
                      <div style={{ position: 'absolute', inset: 0, background: 'rgba(2, 6, 23, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '12px' }}>
                        <div style={{ display: 'flex', gap: '5px', height: '30px', alignItems: 'center' }}>
                          {[1,2,3,4,5].map(b => (
                            <div key={b} style={{ width: '4px', height: '100%', backgroundColor: '#ef4444', borderRadius: '2px', animation: 'spin 0.4s ease-in-out infinite alternate' }}></div>
                          ))}
                        </div>
                        <span style={{ color: '#fff', fontSize: '12px', fontWeight: '700', backgroundColor: '#ef4444', padding: '6px 14px', borderRadius: '8px', boxShadow: '0 4px 12px rgba(239,68,68,0.3)' }}>Candidate is Speaking now...</span>
                      </div>
                    )}

                    <div style={{ position: 'absolute', bottom: '16px', left: '16px', backgroundColor: 'rgba(15, 23, 42, 0.8)', padding: '8px 14px', borderRadius: '10px', fontSize: '12px', color: '#fff', fontWeight: '600' }}>
                      Harshitha M (Software Engineer Candidate Session Node Active)
                    </div>
                  </div>
                ) : (
                  <div style={{ textAlign: 'center', color: '#475569' }}>
                    <div style={{ fontSize: '56px', marginBottom: '12px' }}>🎙️</div>
                    <p style={{ fontSize: '14px', fontWeight: '600', color: '#64748b' }}>AI Conversational Engine Stream Standby Mode</p>
                  </div>
                )}
              </div>

              {/* CONTROLLER SWITCH LOGIC ACTION BUTTONS */}
              <div style={{ display: 'flex', marginTop: '24px', justifyContent: 'center', gap: '12px' }}>
                <button onClick={toggleAssessmentStream} className="interactive-btn" style={{ padding: '14px 24px', backgroundColor: cameraActive ? '#64748b' : '#2563eb', color: '#ffffff', border: 'none', borderRadius: '12px', fontWeight: '700', fontSize: '13px', cursor: 'pointer' }}>
                  {cameraActive ? 'Terminate Interview Feed' : 'Initialize Active AI Assessment'}
                </button>
                
                {cameraActive && !isRecording && !isAnswerSubmitted && (
                  <button onClick={handleStartRecording} className="interactive-btn fade-in" style={{ padding: '14px 24px', backgroundColor: '#10b981', color: '#ffffff', border: 'none', borderRadius: '12px', fontWeight: '700', fontSize: '13px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(16,185,129,0.2)' }}>
                    ▶ Start Speaking Answer
                  </button>
                )}

                {cameraActive && isRecording && (
                  <button onClick={handleStopAndEvaluate} className="interactive-btn" style={{ padding: '14px 24px', backgroundColor: '#ef4444', color: '#ffffff', border: 'none', borderRadius: '12px', fontWeight: '700', fontSize: '13px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(239,68,68,0.2)' }}>
                    🛑 Stop Recording & Analyze
                  </button>
                )}

                {cameraActive && isAnswerSubmitted && (
                  <button onClick={handleNextAiQuestion} className="interactive-btn fade-in" style={{ padding: '14px 24px', backgroundColor: '#7c3aed', color: '#ffffff', border: 'none', borderRadius: '12px', fontWeight: '700', fontSize: '13px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(124,58,237,0.2)' }}>
                    Advance to Next AI Question ➔
                  </button>
                )}
              </div>
            </div>

            {/* Right Column: AI Target Insights Analytics Display Matrix */}
            <div className="curved-card" style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ margin: '0 0 4px 0', fontSize: '16px', fontWeight: '700', color: '#0f172a' }}>AI Evaluation Insight Matrix</h3>
              <p style={{ color: '#64748b', fontSize: '13px', margin: '0 0 24px 0' }}>Lexical frequency parameters and voice checks running automatically.</p>
              
              {isAnalyzingVideo ? (
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1, alignItems: 'center', justifyContent: 'center', color: '#2563eb' }}>
                  <div className="loading-spinner" style={{ width: '28px', height: '28px', border: '3px solid #2563eb', borderTopColor: 'transparent', borderRadius: '50%', marginBottom: '12px' }}></div>
                  <span style={{ fontSize: '13px', fontWeight: '500' }}>AI NLP Core Engine Processing Encrypted Audio Slips...</span>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', flex: 1 }}>
                  <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', padding: '16px', borderRadius: '12px', fontSize: '13px', lineHeight: '1.5' }}>
                    <div style={{ color: '#2563eb', fontWeight: '700', fontSize: '11px', textTransform: 'uppercase', marginBottom: '4px' }}>Active Question Tracker Node ({currentQuestionIndex + 1}/{aiQuestionBank.length})</div>
                    <strong style={{ color: '#0f172a' }}>{aiQuestionBank[currentQuestionIndex]}</strong>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', borderTop: '1px solid #f1f5f9', paddingTop: '24px' }}>
                    <span style={{ alignSelf: 'flex-start', fontSize: '11px', fontWeight: '700', padding: '4px 10px', borderRadius: '6px', backgroundColor: isAnswerSubmitted ? '#d1fae5' : '#fff7ed', color: isAnswerSubmitted ? '#065f46' : '#c2410c' }}>
                      {isAnswerSubmitted ? `✓ SCORE LOCKED IN MATRIX (Talked for ${recordingSeconds}s)` : isRecording ? "🎙️ AI ENGINE IS CURRENTLY LISTENING TO VOICE SLIPS..." : "⏰ STATUS: STANDBY - AWAITING RECORDING SESSION"}
                    </span>

                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px', fontWeight: '500', color: '#475569' }}><span>Speech Clarity & Vocal Resonance Modulations</span><strong>{cameraActive ? videoScores.clarity : 0}%</strong></div>
                      <div style={{ height: '6px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}><div style={{ width: `${cameraActive ? videoScores.clarity : 0}%`, height: '100%', backgroundColor: '#2563eb', transition: '0.6s ease' }}></div></div>
                    </div>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px', fontWeight: '500', color: '#475569' }}><span>Confidence Expressions Analytics Vector</span><strong>{cameraActive ? videoScores.confidence : 0}%</strong></div>
                      <div style={{ height: '6px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}><div style={{ width: `${cameraActive ? videoScores.confidence : 0}%`, height: '100%', backgroundColor: '#10b981', transition: '0.6s ease' }}></div></div>
                    </div>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '14px', marginBottom: '6px', fontWeight: '500', color: '#475569' }}><span>Core Engineering Competency Weight</span><strong>{cameraActive ? videoScores.technical : 0}%</strong></div>
                      <div style={{ height: '6px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}><div style={{ width: `${cameraActive ? videoScores.technical : 0}%`, height: '100%', backgroundColor: '#f59e0b', transition: '0.6s ease' }}></div></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 5: CORE operations COMPONENT */}
        {activeTab === 'core_hrms' && (
          <div className="curved-card" style={{ padding: '36px' }}>
            <h2 style={{ fontSize: '20px', fontWeight: '700', margin: '0 0 6px 0' }}>Core Corporate HRMS Operations</h2>
            <p style={{ color: '#64748b', fontSize: '14px', margin: '0 0 24px 0' }}>Central configuration ledger directory monitoring organizational payroll arrays data.</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '28px' }}>
              <div style={{ padding: '24px', borderRadius: '16px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                <h4 style={{ margin: '0 0 14px 0', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', tracking: '0.5px' }}>⏱ Timecard Volume Ingestion Logs</h4>
                <div style={{ fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}><span>Concurrent active database worker logins:</span><strong>5,234 Active Profiles Active</strong></div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 14px', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}><span>Real-time tracking streaming latency check:</span><strong style={{ color: '#10b981' }}>0ms Delay Latency (Pass)</strong></div>
                </div>
              </div>
              <div style={{ padding: '24px', borderRadius: '16px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ margin: '0 0 8px 0', fontSize: '14px', fontWeight: '700', textTransform: 'uppercase', tracking: '0.5px' }}>💳 Payroll disbursement tracking</h4>
                  <p style={{ fontSize: '13px', color: '#64748b', margin: '0 0 16px 0', lineHeight: '1.5' }}>Automation engine state mapping variables completed with active data ledger file creations.</p>
                  <span style={{ fontSize: '13px', padding: '6px 14px', backgroundColor: '#d1fae5', color: '#065f46', borderRadius: '8px', fontWeight: '700', border: '1px solid #a7f3d0', display: 'block', textAlign: 'center' }}>✔ Monthly Remuneration Processing Complete</span>
                </div>
                <button className="interactive-btn" onClick={() => alert('Compiling payload encrypted stream database items...')} style={{ marginTop: '20px', width: '100%', padding: '12px', backgroundColor: '#0f172a', color: '#fff', border: 'none', borderRadius: '10px', fontWeight: '700', fontSize: '13px', cursor: 'pointer' }}>Download Integrated Financial Ledger Payload</button>
              </div>
            </div>
          </div>
        )}

      </div>

      <style jsx global>{`
        .loading-spinner { animation: spin 1s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .curved-card { background-color: #ffffff; border-radius: 20px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.01), 0 2px 4px -1px rgba(0,0,0,0.01); transition: 0.2s ease; }
        .nav-btn { display: flex; align-items: center; gap: 12px; color: #94a3b8; padding: 12px 18px; border-radius: 12px; font-weight: 600; font-size: 14px; cursor: pointer; transition: 0.2s; }
        .nav-btn:hover { background-color: rgba(255,255,255,0.04); color: #fff; }
        .nav-btn.active { background-color: #2563eb !important; color: #ffffff !important; box-shadow: 0 4px 14px rgba(37, 99, 235, 0.25); }
        .source-curved-card { padding: 26px 16px; background-color: #f8fafc; border: 1px solid #cbd5e1; border-radius: 18px; text-align: center; cursor: pointer; font-weight: 700; font-size: 14px; color: #334155; transition: 0.2s; }
        .source-curved-card:hover { border-color: #2563eb; background-color: #eff6ff; color: #2563eb; transform: translateY(-2px); box-shadow: 0 4px 12px rgba(37, 99, 235, 0.08); }
        
        .interactive-btn { transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1); }
        .interactive-btn:hover { filter: brightness(1.02); box-shadow: 0 8px 24px rgba(37, 99, 235, 0.08); }
        .interactive-btn:active { transform: scale(0.96) !important; filter: brightness(0.95); }
        
        .tile-glow:hover { box-shadow: 0 12px 30px rgba(37, 99, 235, 0.05); transform: translateY(-2px); }
        .calendar-cell-node:hover { transform: scale(1.05); filter: brightness(0.97); }

        @keyframes fadeIn { from { opacity: 0; transform: scale(0.99); } to { opacity: 1; transform: scale(1); } }
        .fade-in { animation: fadeIn 0.22s cubic-bezier(0.4, 0, 0.2, 1); }

        @media (max-width: 1024px) {
          div[style*="display: flex"] { flex-direction: column !important; }
          div[style*="width: 270px"] { width: 100% !important; height: auto !important; padding: 20px !important; position: static !important; }
          div[style*="margin-left: 270px"] { margin-left: 0 !important; }
          div[style*="grid-template-columns: repeat(4, 1fr)"] { grid-template-columns: 1fr 1fr !important; gap: 16px !important; }
          div[style*="grid-template-columns: 1fr 1.2fr"] { grid-template-columns: 1fr !important; gap: 24px !important; }
          div[style*="grid-template-columns: 1.2fr 1fr"] { grid-template-columns: 1fr !important; height: auto !important; gap: 24px !important; }
        }
      `}</style>
    </div>
  );
}
