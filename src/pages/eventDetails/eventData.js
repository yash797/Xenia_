// eventData.js
export const staticEventData = [
  {
    _id: "1",
    name: "CodeStrike",
    logo: "/assets/codestrike.png",
    details:
      "CodeStrike is a competitive programming contest that challenges your coding skills across difficulty levels, featuring algorithmic puzzles designed for both novices and experts.",
    fees: 40,
    teamSize: 1,
    isLive: false,
    prizes: [
      { position: "1st", prize: 8000, label: "Senior" },
      { position: "2nd", prize: 4000, label: "Senior" },
      { position: "1st", prize: 4000, label: "Junior" },
      { position: "2nd", prize: 2000, label: "Junior" },
    ],
    schedule: [
      { round: 1, datetime: "25th Aug" },
      { round: 2, datetime: "28th Aug" },
    ],
    platform: [
      { round: 1, name: "PCSB Online Platform", link: "" },
      { round: 2, name: "Offline - Campus Lab", link: "" },
    ],
    rules: [
      {
        roundName: "Round 1 - Online",
        roundRules: [
          "Solve 5-6 problems in 120 minutes.",
          "Difficulty ranges from Easy to Medium.",
          "Top 20% in each category qualify for Round 2.",
          "Allowed languages: C, C++, Python, Java.",
        ],
      },
      {
        roundName: "Round 2 - Offline",
        roundRules: [
          "Solve 5-6 problems in 120 minutes.",
          "Difficulty ranges from Medium to Hard.",
          "ACM style scoring with 5-minute penalty for wrong submissions.",
          "No internet or external help allowed.",
        ],
      },
      {
        roundName: "General Rules",
        roundRules: [
          "Individual participation only.",
          "Plagiarism leads to immediate disqualification.",
          "Judges’ decisions are final.",
        ],
      },
    ],
    contact: ["Ankit Sharma : +91 9876543210", "Ritika Joshi : +91 9123456789"],
  },

  {
    _id: "2",
    name: "Ninja Coding",
    logo: "/assets/ninjacoding.png",
    details:
      "Ninja Coding tests your competitive programming skills through a mix of debugging, reverse coding challenges, and MCQs in a multi-round format.",
    fees: 50,
    teamSize: 1,
    isLive: false,
    prizes: [
      { position: "1st", prize: 10000, label: "Open" },
      { position: "2nd", prize: 6000, label: "Open" },
      { position: "3rd", prize: 3000, label: "Open" },
    ],
    schedule: [
      { round: 1, datetime: "27th Aug" },
      { round: 2, datetime: "28th Aug" },
    ],
    platform: [
      { round: 1, name: "Online - Ninja Platform", link: "" },
      { round: 2, name: "Offline - Campus Lab", link: "" },
    ],
    rules: [
      {
        roundName: "Round 1 - Online MCQs & Debugging",
        roundRules: [
          "Timed MCQs on algorithms, logic, and programming concepts.",
          "Debugging small code snippets under time constraints.",
          "Top 30% qualify for Round 2.",
        ],
      },
      {
        roundName: "Round 2 - Offline Coding Challenge",
        roundRules: [
          "Solve 3-4 coding problems including reverse engineering tasks.",
          "Duration: 90 minutes.",
          "Prohibited: Internet access, external aids.",
        ],
      },
      {
        roundName: "General Rules",
        roundRules: [
          "Individual participation.",
          "Use of allowed languages only.",
          "Disqualification for plagiarism or cheating.",
        ],
      },
    ],
    contact: [
      "Siddharth Mehta : +91 9988776655",
      "Pooja Verma : +91 9876541230",
    ],
  },

  {
    _id: "3",
    name: "Xenathon",
    logo: "/assets/xenathon.png",
    details:
      "Xenathon is an Ideathon where participants pitch innovative and impactful ideas before a panel of judges through two competitive rounds.",
    fees: 80,
    teamSize: 3,
    isLive: false,
    prizes: [
      { position: "1st", prize: 25000, label: "Open" },
      { position: "2nd", prize: 15000, label: "Open" },
      { position: "3rd", prize: 7000, label: "Open" },
    ],
    schedule: [
      { round: 1, datetime: "25th Aug" },
      { round: 2, datetime: "26th Aug" },
    ],
    platform: [
      { round: 1, name: "Online Submission & Screening", link: "" },
      { round: 2, name: "Offline Pitching & Q/A", link: "" },
    ],
    rules: [
      {
        roundName: "Round 1 - Idea Submission",
        roundRules: [
          "Submit a detailed proposal with problem statement, solution, and impact.",
          "Top 10 teams shortlisted for final round.",
          "Proposals must be original and feasible.",
        ],
      },
      {
        roundName: "Round 2 - Presentation & Q/A",
        roundRules: [
          "Teams pitch their ideas to judges in 10 minutes.",
          "Followed by 10 minutes Q&A session.",
          "Judgment based on innovation, feasibility, and impact.",
        ],
      },
      {
        roundName: "General Rules",
        roundRules: [
          "Teams of 2-3 members.",
          "Plagiarism leads to immediate disqualification.",
          "Judges’ decision is final and binding.",
        ],
      },
    ],
    contact: ["Karan Singh : +91 9123456780", "Neha Gupta : +91 9876543211"],
  },

  {
    _id: "4",
    name: "Hacker House",
    logo: "/assets/hackerhouse.png",
    details:
      "Hacker House introduces participants to blockchain technology through expert sessions, culminating in a smart contract hackathon to develop real-world decentralized applications.",
    fees: 100,
    teamSize: 4,
    isLive: false,
    prizes: [
      { position: "1st", prize: 60000, label: "Open" },
      { position: "2nd", prize: 30000, label: "Open" },
      { position: "3rd", prize: 15000, label: "Open" },
    ],
    schedule: [
      { round: 1, datetime: "24th Aug - 25th Aug" },
      { round: 2, datetime: "26th Aug - 28th Aug" },
    ],
    platform: [
      { round: 1, name: "Online Sessions & Workshops", link: "" },
      { round: 2, name: "Onsite Hackathon - Campus Lab", link: "" },
    ],
    rules: [
      {
        roundName: "Workshop Phase",
        roundRules: [
          "Mandatory attendance for blockchain fundamentals workshops.",
          "Introduction to Solidity and smart contracts.",
          "Q&A session at the end of each day.",
        ],
      },
      {
        roundName: "Hackathon Phase",
        roundRules: [
          "Teams develop a functional smart contract DApp.",
          "48 hours coding duration.",
          "Code originality and usability heavily weighted in judging.",
          "Open source code submission required.",
        ],
      },
      {
        roundName: "General Rules",
        roundRules: [
          "Teams of 3-4 members.",
          "No plagiarism or use of third-party proprietary code.",
          "Judges’ decisions are final.",
        ],
      },
    ],
    contact: ["Deepak Joshi : +91 9988112233", "Sanya Mehta : +91 9876654321"],
  },

  {
    _id: "5",
    name: "Data Cup",
    logo: "/assets/datacup.png",
    details:
      "A data science competition where participants demonstrate machine learning skills by submitting models on Kaggle, with leaderboard rankings determining winners.",
    fees: 60,
    teamSize: 2,
    isLive: false,
    prizes: [
      { position: "1st", prize: 30000, label: "Open" },
      { position: "2nd", prize: 18000, label: "Open" },
      { position: "3rd", prize: 9000, label: "Open" },
    ],
    schedule: [{ round: 1, datetime: "25th Aug - 26th Aug" }],
    platform: [
      {
        round: 1,
        name: "Kaggle Submission Platform",
        link: "https://www.kaggle.com/",
      },
    ],
    rules: [
      {
        roundName: "Competition Rules",
        roundRules: [
          "Teams submit ML models based on provided datasets.",
          "Leaderboard updated in real-time.",
          "Use of external data allowed only if declared.",
          "Final submission cut-off: 26th Aug, 5 PM.",
        ],
      },
      {
        roundName: "General Rules",
        roundRules: [
          "Teams of 1-2 members.",
          "Cheating or plagiarism leads to disqualification.",
          "Judges’ decisions are final.",
        ],
      },
    ],
    contact: ["Rohit Malhotra : +91 9876001234", "Aisha Khan : +91 9988774411"],
  },

  {
    _id: "6",
    name: "Cricwars",
    logo: "/assets/cricwars.png",
    details:
      "Cricwars is a high-energy IPL-style auction and strategy game testing your cricket knowledge, team-building acumen, and tactical decision-making.",
    fees: 50,
    teamSize: 2,
    isLive: false,
    prizes: [
      { position: "1st", prize: 20000, label: "Open" },
      { position: "2nd", prize: 12000, label: "Open" },
      { position: "3rd", prize: 6000, label: "Open" },
    ],
    schedule: [
      { round: 1, datetime: "26th Aug" },
      { round: 2, datetime: "28th Aug" },
    ],
    platform: [
      { round: 1, name: "Offline - Auction Room", link: "" },
      { round: 2, name: "Offline - Match Simulation", link: "" },
    ],
    rules: [
      {
        roundName: "Auction Round",
        roundRules: [
          "Teams bid to build their IPL squad within a budget.",
          "Real-time auction dynamics and bidding wars.",
          "Bidding strategy crucial for team strength.",
        ],
      },
      {
        roundName: "Match Simulation",
        roundRules: [
          "Teams compete in simulated IPL matches.",
          "Performance based on player stats and strategies.",
          "Winners decided based on match results.",
        ],
      },
      {
        roundName: "General Rules",
        roundRules: [
          "Teams of 2 members.",
          "Fair play and honesty expected.",
          "Judges’ decisions final.",
        ],
      },
    ],
    contact: ["Manish Gupta : +91 9876544321", "Simran Kaur : +91 9123456789"],
  },

  {
    _id: "7",
    name: "Xenatus",
    logo: "/assets/xenatus.png",
    details:
      "Xenatus is a three-round individual event testing leadership, decision-making, and situational handling in mock corporate environments.",
    fees: 60,
    teamSize: 1,
    isLive: false,
    prizes: [
      { position: "1st", prize: 12000 },
      { position: "2nd", prize: 8000 },
      { position: "3rd", prize: 4000 },
    ],
    schedule: [
      { round: 1, datetime: "25th Aug" },
      { round: 2, datetime: "27th Aug" },
      { round: 3, datetime: "28th Aug" },
    ],
    platform: [
      { round: 1, name: "Online - Situational Quiz", link: "" },
      { round: 2, name: "Online - Case Study Submission", link: "" },
      { round: 3, name: "Offline - Final Presentation", link: "" },
    ],
    rules: [
      {
        roundName: "Round 1 - Online Quiz",
        roundRules: [
          "Multiple-choice questions on leadership and management scenarios",
          "Duration: 60 minutes",
          "Top 50% qualify for Round 2",
        ],
      },
      {
        roundName: "Round 2 - Case Study",
        roundRules: [
          "Teams analyze a business case and submit solutions",
          "Deadline strictly enforced",
          "Top 10 teams invited to Round 3",
        ],
      },
      {
        roundName: "Round 3 - Final Presentation",
        roundRules: [
          "Teams present their solutions to judges",
          "Q&A session included",
          "Judging based on innovation, feasibility, and presentation skills",
        ],
      },
      {
        roundName: "General Rules",
        roundRules: [
          "Individual participation only",
          "No plagiarism allowed",
          "Participants must adhere to deadlines",
        ],
      },
    ],
    contact: ["Rohit Kumar : 9876543211", "Neha Singh : 9123456782"],
  },

  {
    _id: "8",
    name: "De-Crypto Hunt",
    logo: "/assets/decrypto.png",
    details:
      "De-Crypto Hunt is a team-based treasure hunt involving cryptic puzzles, riddles, and physical challenges across the campus.",
    fees: 100,
    teamSize: 3,
    isLive: false,
    prizes: [
      { position: "1st", prize: 20000 },
      { position: "2nd", prize: 12000 },
      { position: "3rd", prize: 8000 },
    ],
    schedule: [
      { round: 1, datetime: "27th Aug" },
      { round: 2, datetime: "28th Aug" },
    ],
    platform: [
      { round: 1, name: "Onsite - Clue Hunt", link: "" },
      { round: 2, name: "Onsite - Final Puzzle", link: "" },
    ],
    rules: [
      {
        roundName: "Round 1 - Clue Hunt",
        roundRules: [
          "Teams solve cryptic clues to find hidden checkpoints",
          "Duration: 3 hours",
          "All team members must stay together",
        ],
      },
      {
        roundName: "Round 2 - Final Puzzle",
        roundRules: [
          "Top 5 teams compete in a final cryptographic puzzle",
          "Duration: 90 minutes",
          "First to solve wins",
        ],
      },
      {
        roundName: "General Rules",
        roundRules: [
          "Teams of exactly 3 members",
          "No external help allowed",
          "Use of mobile phones allowed only for clues",
          "Teams must respect campus rules and safety",
        ],
      },
    ],
    contact: ["Simran Kaur : 9876543212", "Aditya Mehta : 9123456783"],
  },

  {
    _id: "9",
    name: "C2C",
    logo: "/assets/c2c.png",
    details:
      "Campus to Corporate (C2C) simulates a real placement process with aptitude tests, coding rounds, and HR interviews.",
    fees: 75,
    teamSize: 1,
    isLive: false,
    prizes: [
      { position: "1st", prize: 15000 },
      { position: "2nd", prize: 10000 },
      { position: "3rd", prize: 6000 },
    ],
    schedule: [
      { round: 1, datetime: "26th Aug" },
      { round: 2, datetime: "27th Aug" },
      { round: 3, datetime: "28th Aug" },
    ],
    platform: [
      { round: 1, name: "Online Aptitude Test", link: "" },
      { round: 2, name: "Online Coding Round", link: "" },
      { round: 3, name: "Offline HR Interview", link: "" },
    ],
    rules: [
      {
        roundName: "Round 1 - Aptitude Test",
        roundRules: [
          "MCQs on quantitative aptitude, logical reasoning, and verbal ability",
          "Duration: 60 minutes",
          "Cutoff marks apply to qualify for next round",
        ],
      },
      {
        roundName: "Round 2 - Coding Round",
        roundRules: [
          "Solve 3-4 algorithmic problems",
          "Duration: 90 minutes",
          "Programming languages allowed: C, C++, Java, Python",
        ],
      },
      {
        roundName: "Round 3 - HR Interview",
        roundRules: [
          "Personal interview assessing communication skills and cultural fit",
          "Duration: 15 minutes per candidate",
        ],
      },
      {
        roundName: "General Rules",
        roundRules: [
          "Individual participation only",
          "No cheating or plagiarism",
          "All decisions by judges are final",
        ],
      },
    ],
    contact: ["Priya Sharma : 9876543213", "Sahil Verma : 9123456784"],
  },

  {
    _id: "10",
    name: "Fandom",
    logo: "/assets/fandom.png",
    details:
      "Fandom is a fun pop culture quiz and performance event on shows, anime, movies, and more, testing your fandom knowledge.",
    fees: 50,
    teamSize: 2,
    isLive: false,
    prizes: [
      { position: "1st", prize: 10000 },
      { position: "2nd", prize: 6000 },
      { position: "3rd", prize: 4000 },
    ],
    schedule: [
      { round: 1, datetime: "26th Aug" },
      { round: 2, datetime: "27th Aug" },
      { round: 3, datetime: "28th Aug" },
    ],
    platform: [
      { round: 1, name: "Online Quiz", link: "" },
      { round: 2, name: "Offline Performance", link: "" },
      { round: 3, name: "Final Quiz", link: "" },
    ],
    rules: [
      {
        roundName: "Round 1 - Online Quiz",
        roundRules: [
          "Multiple-choice questions on popular TV shows, anime, movies",
          "Duration: 30 minutes",
          "Top 20 teams qualify for Round 2",
        ],
      },
      {
        roundName: "Round 2 - Offline Performance",
        roundRules: [
          "Teams perform themed acts based on fandoms",
          "Judging based on creativity and execution",
          "Top 5 teams qualify for finals",
        ],
      },
      {
        roundName: "Round 3 - Final Quiz",
        roundRules: [
          "Rapid-fire quiz round",
          "Duration: 20 minutes",
          "Winning team decided by highest score",
        ],
      },
      {
        roundName: "General Rules",
        roundRules: [
          "Teams of 2 members",
          "No use of internet or external help during quizzes",
          "Judges' decisions are final",
        ],
      },
    ],
    contact: ["Tanvi Desai : 9876543214", "Aman Joshi : 9123456785"],
  },
];
