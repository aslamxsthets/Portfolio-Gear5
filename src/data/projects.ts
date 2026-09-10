import { ProjectItem } from '../types';

export const projectsData: ProjectItem[] = [
  {
    id: "owasp-juice-shop",
    title: "OWASP JUICE SHOP",
    category: "Web Security / Ethical Hacking",
    focus: "Top 10 Security Vulnerabilities",
    description: "Hands-on security testing and vulnerability identification on OWASP Juice Shop, an intentionally insecure web application used for practicing identification and remediation of the OWASP Top 10 web vulnerabilities.",
    technologies: ["Burp Suite", "OWASP Top 10", "Web Proxies", "Browser DevTools"],
    status: "Completed",
    features: [
      "Systematic testing across OWASP Top 10 security risks",
      "Analysis of injection flaws, broken access control, and authentication bypasses",
      "Interception and inspection of HTTP request/response payloads using proxy tools",
      "Documentation of remediation methodologies and defensive countermeasures"
    ],
    githubUrl: "https://github.com/aslamxsthets",
    editableNotes: "Lab notes and vulnerability walkthroughs available upon request."
  },
  {
    id: "secure-file-sharing",
    title: "END-TO-END SECURE FILE SHARING SYSTEM",
    category: "Cybersecurity / Secure File Sharing",
    focus: "Cryptographic Protection & Integrity",
    description: "A secure architecture designed to protect file confidentiality and integrity during transit and storage, mitigating unauthorized tampering and eavesdropping.",
    technologies: ["Python", "Cryptography", "Hashing Algorithms", "Secure Sockets"],
    status: "Completed",
    features: [
      "File encryption before transmission to preserve data confidentiality",
      "Cryptographic hash generation (SHA-256) for verifying file integrity on receipt",
      "Access control mechanisms to limit file viewing to intended recipients",
      "Clean CLI/web-friendly interface for sending and receiving protected payloads"
    ],
    githubUrl: "https://github.com/aslamxsthets"
  },
  {
    id: "splunk-soc-logs",
    title: "SOC LOG ANALYSIS USING SPLUNK",
    category: "SOC / SIEM / Security Monitoring",
    focus: "Log Correlation & Threat Detection",
    description: "Ingesting and analyzing diverse enterprise security log feeds inside Splunk to identify suspicious login attempts, policy violations, and potential indicators of compromise (IoCs).",
    technologies: ["Splunk", "SPL (Search Processing Language)", "Syslog", "Windows Event Logs"],
    status: "Completed",
    features: [
      "Parsing and indexing multi-source authentication and network event logs",
      "Custom SPL queries to identify brute force patterns and abnormal administrative logins",
      "Building visual telemetry dashboards for rapid security operations triage",
      "Generating alert rules based on anomalous threshold behaviors"
    ],
    githubUrl: "https://github.com/aslamxsthets"
  },
  {
    id: "network-port-discovery",
    title: "NETWORK PORT DISCOVERY & DIRECTORY ENUMERATION",
    category: "Network Security",
    focus: "Reconnaissance & Surface Mapping",
    description: "Network reconnaissance workflows to identify active hosts, discover open ports, fingerprint running service versions, and systematically enumerate hidden directories on authorized target hosts.",
    technologies: ["Nmap", "Zenmap", "Directory Enumeration Tools", "Linux CLI"],
    status: "Completed",
    features: [
      "TCP SYN scans, UDP scans, and service version fingerprinting using Nmap",
      "Directory discovery on web endpoints to map exposed admin portals and configuration files",
      "Structured output generation for security posture documentation",
      "Baseline comparison between expected open ports and actual listening daemons"
    ],
    githubUrl: "https://github.com/aslamxsthets"
  },
  {
    id: "website-brute-force",
    title: "WEBSITE BRUTE-FORCE TESTING",
    category: "Ethical Hacking",
    focus: "Authentication Resilience & Rate Limiting",
    description: "Simulated credential-stuffing and brute-force testing executed strictly within an isolated laboratory environment to evaluate login endpoint resilience and rate-limiting protections.",
    technologies: ["Python Scripting", "Burp Suite Intruder", "Isolated Lab VMs", "HTTP Auth Headers"],
    status: "Lab Environment",
    isLabEnvironment: true,
    features: [
      "Conducted exclusively inside an isolated, authorized laboratory testbed",
      "Evaluation of account lockout policies, CAPTCHA efficacy, and rate-limiting mechanisms",
      "Observation of server response latency and error message consistency",
      "Defensive recommendations authored to mitigate automated credential attacks"
    ],
    githubUrl: "https://github.com/aslamxsthets",
    editableNotes: "Strictly executed in controlled sandbox environment for educational defense analysis."
  },
  {
    id: "wireshark-traffic-analysis",
    title: "NETWORK TRAFFIC ANALYSIS USING WIRESHARK",
    category: "Network Security / Traffic Analysis",
    focus: "Packet Inspection & Protocol Forensics",
    description: "Capturing and dissecting network packet streams using Wireshark to investigate protocol anomalies, detect plain-text credential leaks, and follow suspicious TCP sessions.",
    technologies: ["Wireshark", "TCP/IP Suite", "PCAP Analysis", "Display Filters"],
    status: "Completed",
    features: [
      "PCAP file capture, filtering, and deep protocol dissection across TCP, UDP, DNS, and HTTP",
      "TCP stream reassembly to reconstruct captured communication dialogues",
      "Detection of ARP spoofing and beaconing behavior in network dumps",
      "Extracting transmitted artifacts and investigating protocol handshakes"
    ],
    githubUrl: "https://github.com/aslamxsthets"
  },
  {
    id: "veracrypt-forensics",
    title: "VERACRYPT DISK PASSWORD RECOVERY & DECRYPTION",
    category: "Digital Forensics",
    focus: "Forensic Decryption & Container Analysis",
    description: "Investigating encrypted volume structures created with VeraCrypt, focusing on forensic extraction methodologies, backup header analysis, and password verification within forensic workflows.",
    technologies: ["VeraCrypt", "Forensic Tools", "Hash Extraction", "Disk Image Containers"],
    status: "Completed",
    features: [
      "Forensic mounting and examination of VeraCrypt volume containers",
      "Extraction of container metadata and header preservation during examination",
      "Demonstration of dictionary-based verification workflows against known passphrases in lab scenarios",
      "Documentation of full-disk encryption challenges in digital forensic investigations"
    ],
    githubUrl: "https://github.com/aslamxsthets"
  },
  {
    id: "metasploit-reverse-shell",
    title: "METASPLOIT REVERSE SHELL IMPLEMENTATION",
    category: "Cybersecurity / Security Testing",
    focus: "Payload Behavior & Endpoint Detection",
    description: "Controlled deployment and analysis of reverse TCP payloads using the Metasploit Framework inside a sandboxed network to understand socket initiation, listener configuration, and endpoint telemetry.",
    technologies: ["Metasploit Framework", "msfconsole", "Kali Linux", "Host-based Telemetry"],
    status: "Completed",
    features: [
      "Configuration of multi/handler listeners and staged payload generation",
      "Observation of outbound connection patterns and firewall traversal characteristics",
      "Analysis of endpoint process creation and parent-child process tree anomalies",
      "Drafting defensive IOCs (Indicators of Compromise) for blue team detection"
    ],
    githubUrl: "https://github.com/aslamxsthets"
  },
  {
    id: "shoulder-surfing-protection-apk",
    title: "SHOULDER SURFING PROTECTION APK",
    category: "Mobile Security / Privacy Protection",
    focus: "Visual Privacy & Screen Protection",
    description: "A mobile security application designed to address shoulder-surfing risks and improve privacy during device usage in public or shared environments.",
    technologies: ["Android APK", "Java / Kotlin", "Android SDK", "UI Privacy Overlay"],
    status: "Completed",
    securityMechanism: "User-configurable dynamic privacy masking and screen obscuration controls",
    features: [
      "Designed specifically to counter shoulder-surfing observation in crowded public areas",
      "Adjustable privacy viewport allowing only the active reading zone to stay clearly visible",
      "Quick-toggle privacy overlay for rapid activation in vulnerable environments",
      "Lightweight resource footprint built with native Android application architecture"
    ],
    githubUrl: "https://github.com/aslamxsthets",
    apkDownload: "#",
    editableNotes: "Personal project built by Aslam Javeed M. Editable fields available for additional screenshots and repository links."
  },
  {
    id: "ai-forensic-chatbot-ufdr",
    title: "AI-POWERED FORENSIC CHATBOT FOR SECURE UFDR ANALYSIS",
    category: "AI + Digital Forensics",
    eventOrContext: "Smart India Hackathon (SIH)",
    focus: "Natural Language Evidence Retrieval",
    description: "An intelligent query interface developed for the Smart India Hackathon to assist forensic investigators in parsing, querying, and extracting insights from complex Universal Forensic Data Reports (UFDR).",
    technologies: ["Python", "Natural Language Processing", "UFDR Parsing", "Forensic Data Structuring"],
    status: "Research Prototype",
    features: [
      "Designed to reduce investigator cognitive load when querying massive UFDR extraction dumps",
      "Context-aware query handling for call logs, chat histories, geo-location data, and timestamps",
      "Strict data isolation ensuring forensic evidence integrity remains uncompromised",
      "Rapid anomaly highlighting across communication timelines"
    ],
    githubUrl: "https://github.com/aslamxsthets"
  },
  {
    id: "spectre",
    title: "SPECTRE",
    category: "Cybersecurity",
    eventOrContext: "MSME Context",
    focus: "Deception & Reconnaissance Analysis",
    description: "STEALTH PASSIVE ENGAGEMENT & CYBER TRAP RECONNAISSANCE ENGINE. A defensive cybersecurity concept explored in an MSME context, focused on passive engagement, deceptive breadcrumbs, and cyber trap telemetry.",
    technologies: ["Python", "Deception Architecture", "Network Telemetry", "Log Capture"],
    status: "Research Prototype",
    features: [
      "Passive trap engagement strategy to misdirect unauthorized internal network probes",
      "High-fidelity telemetry collection upon adversary trap interaction",
      "Minimization of operational false positives for small-to-medium enterprise setups",
      "Architectural design optimized for low-overhead deployment"
    ],
    githubUrl: "https://github.com/aslamxsthets"
  },
  {
    id: "lumen",
    title: "LUMEN",
    category: "AI/ML + IoT + Anomaly Detection",
    focus: "Sensor Stream Anomaly Detection",
    description: "An integrated project exploring machine learning applied to IoT sensor data streams for real-time anomaly detection and telemetry health monitoring.",
    technologies: ["Python", "Machine Learning", "IoT Sensors", "Stream Processing"],
    status: "Research Prototype",
    features: [
      "Continuous ingestion of IoT telemetry metrics",
      "Statistical and machine learning anomaly classification models",
      "Early warning trigger generation for unusual sensor behavior spikes",
      "Designed for edge and resource-constrained gateway environments"
    ],
    githubUrl: "https://github.com/aslamxsthets"
  }
];
