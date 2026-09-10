import { SkillItem, SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  'DIGITAL FORENSICS',
  'INCIDENT RESPONSE',
  'NETWORK SECURITY',
  'SECURITY TOOLS',
  'PROGRAMMING & TECHNOLOGY',
  'SYSTEMS',
  'SOFT SKILLS'
];

export const skillsData: SkillItem[] = [
  // DIGITAL FORENSICS
  {
    name: "Digital Forensics",
    category: "DIGITAL FORENSICS",
    status: "ACTIVE FOCUS",
    hakiType: "Flow/Analysis",
    description: "Systematic acquisition, preservation, analysis, and reporting of digital evidence from varied storage media.",
    visualMetaphor: "Forensic Scan"
  },
  {
    name: "Evidence Analysis",
    category: "DIGITAL FORENSICS",
    status: "ACTIVE FOCUS",
    hakiType: "Observation/Detection",
    description: "Validating integrity, chain of custody, and scrutinizing artifacts for indicators of malicious activity.",
    visualMetaphor: "Evidence Scrutiny Pulse"
  },
  {
    name: "Disk & File Analysis",
    category: "DIGITAL FORENSICS",
    status: "COMFORTABLE",
    hakiType: "Flow/Analysis",
    description: "File system analysis (NTFS, FAT32, EXT4), unallocated space carving, and metadata extraction.",
    visualMetaphor: "Hexadecimal Sector Inspection"
  },
  {
    name: "Log Investigation",
    category: "DIGITAL FORENSICS",
    status: "ACTIVE FOCUS",
    hakiType: "Observation/Detection",
    description: "Aggregating and correlating Windows Event Logs, Syslog, firewall dumps, and authentication events.",
    visualMetaphor: "Chronological Trace"
  },
  {
    name: "Timeline Reconstruction",
    category: "DIGITAL FORENSICS",
    status: "PRACTICING",
    hakiType: "Flow/Analysis",
    description: "Reconstructing MACB (Modified, Accessed, Changed, Born) temporal events to map attacker progression.",
    visualMetaphor: "Temporal Alignment Grid"
  },
  {
    name: "Windows Forensics",
    category: "DIGITAL FORENSICS",
    status: "COMFORTABLE",
    hakiType: "Flow/Analysis",
    description: "Registry analysis, prefetch files, shimcache, amcache, shellbags, and volume shadow copies.",
    visualMetaphor: "Registry Deep Sweep"
  },
  {
    name: "Linux Forensics",
    category: "DIGITAL FORENSICS",
    status: "PRACTICING",
    hakiType: "Flow/Analysis",
    description: "Inspecting /var/log, auditd trails, bash history, cron artifacts, and memory dumps.",
    visualMetaphor: "Kernel Trace"
  },
  {
    name: "UFDR Analysis",
    category: "DIGITAL FORENSICS",
    status: "ACTIVE FOCUS",
    hakiType: "Observation/Detection",
    description: "Universal Forensic Data Report parsing, mobile extraction parsing, and chat/call artifact examination.",
    visualMetaphor: "Mobile Extraction Deconstruct"
  },
  {
    name: "Autopsy",
    category: "DIGITAL FORENSICS",
    status: "COMFORTABLE",
    hakiType: "Flow/Analysis",
    description: "Open-source digital forensics platform for disk image analysis, keyword searching, and hash lookup.",
    visualMetaphor: "Forensic Investigation Scan"
  },
  {
    name: "VeraCrypt",
    category: "DIGITAL FORENSICS",
    status: "COMFORTABLE",
    hakiType: "Armament/Hardening",
    description: "Disk encryption exploration, volume mounting, and cryptographic container forensics.",
    visualMetaphor: "Cryptographic Container Analysis"
  },

  // INCIDENT RESPONSE
  {
    name: "Incident Response",
    category: "INCIDENT RESPONSE",
    status: "ACTIVE FOCUS",
    hakiType: "Armament/Hardening",
    description: "Executing containment strategies, root cause discovery, eradication, and recovery workflows.",
    visualMetaphor: "Alert Pulse & Triage"
  },
  {
    name: "Initial Triage",
    category: "INCIDENT RESPONSE",
    status: "ACTIVE FOCUS",
    hakiType: "Observation/Detection",
    description: "Rapid classification of security anomalies, severity rating, and threat prioritization.",
    visualMetaphor: "Threat Sentinel Ring"
  },
  {
    name: "Threat Investigation",
    category: "INCIDENT RESPONSE",
    status: "ACTIVE FOCUS",
    hakiType: "Observation/Detection",
    description: "Tracing initial access vectors, lateral movement, persistence hooks, and credential dumping.",
    visualMetaphor: "Vector Dissection"
  },
  {
    name: "Threat Identification",
    category: "INCIDENT RESPONSE",
    status: "COMFORTABLE",
    hakiType: "Observation/Detection",
    description: "Matching adversary TTPs (Tactics, Techniques, and Procedures) against the MITRE ATT&CK framework.",
    visualMetaphor: "ATT&CK Matrix Match"
  },
  {
    name: "Containment & Mitigation",
    category: "INCIDENT RESPONSE",
    status: "PRACTICING",
    hakiType: "Armament/Hardening",
    description: "Host isolation, firewall rule deployment, token revocation, and credential reset protocols.",
    visualMetaphor: "Haki Defense Shield"
  },
  {
    name: "Security Alerts",
    category: "INCIDENT RESPONSE",
    status: "COMFORTABLE",
    hakiType: "Observation/Detection",
    description: "Filtering true positives from noisy telemetry across EDR, SIEM, and perimeter gateways.",
    visualMetaphor: "Signal Wave Filtering"
  },
  {
    name: "Post-Incident Reporting",
    category: "INCIDENT RESPONSE",
    status: "COMFORTABLE",
    hakiType: "Flow/Analysis",
    description: "Authoring comprehensive technical summaries, lessons learned, and defensive remediation roadmaps.",
    visualMetaphor: "Forensic Ledger Generation"
  },
  {
    name: "Basic Threat Hunting",
    category: "INCIDENT RESPONSE",
    status: "PRACTICING",
    hakiType: "Observation/Detection",
    description: "Proactive hypothesis-driven hunting for stealthy anomalies and unauthorized persistence mechanisms.",
    visualMetaphor: "Observation Sweep"
  },
  {
    name: "SIEM",
    category: "INCIDENT RESPONSE",
    status: "PRACTICING",
    hakiType: "Observation/Detection",
    description: "Security Information and Event Management pipeline telemetry, ingestion queries, and correlation rules.",
    visualMetaphor: "SIEM Telemetry Core"
  },

  // NETWORK SECURITY
  {
    name: "Network Analysis",
    category: "NETWORK SECURITY",
    status: "COMFORTABLE",
    hakiType: "Observation/Detection",
    description: "Dissecting OSI layers, TCP three-way handshakes, routing anomalies, and payload headers.",
    visualMetaphor: "Packet Stream Dissection"
  },
  {
    name: "Network Defense",
    category: "NETWORK SECURITY",
    status: "ACTIVE FOCUS",
    hakiType: "Armament/Hardening",
    description: "Hardening perimeter ingress/egress, establishing segmentation, and configuring ACLs.",
    visualMetaphor: "Perimeter Barrier Grid"
  },
  {
    name: "Firewalls",
    category: "NETWORK SECURITY",
    status: "COMFORTABLE",
    hakiType: "Armament/Hardening",
    description: "Configuring stateful packet inspection, IP/port filtering, and NAT access policies.",
    visualMetaphor: "Stateful Packet Wall"
  },
  {
    name: "Cloud Security",
    category: "NETWORK SECURITY",
    status: "LEARNING",
    hakiType: "Armament/Hardening",
    description: "Security groups, identity and access management policies, and cloud network topology auditing.",
    visualMetaphor: "Cloud Enclave Inspection"
  },
  {
    name: "ARP Spoofing Detection",
    category: "NETWORK SECURITY",
    status: "COMFORTABLE",
    hakiType: "Observation/Detection",
    description: "Detecting MITM layer-2 attacks, gratuitous ARP poisoning, and MAC-IP table discrepancies.",
    visualMetaphor: "L2 Integrity Verification"
  },
  {
    name: "Traffic Analysis",
    category: "NETWORK SECURITY",
    status: "COMFORTABLE",
    hakiType: "Flow/Analysis",
    description: "Identifying bandwidth anomalies, DNS tunneling, beaconing patterns, and unencrypted credentials.",
    visualMetaphor: "Traffic Flow Resonance"
  },
  {
    name: "Packet Inspection",
    category: "NETWORK SECURITY",
    status: "COMFORTABLE",
    hakiType: "Observation/Detection",
    description: "Deep packet inspection (DPI) evaluating protocol conformity, flags, and payload contents.",
    visualMetaphor: "Payload X-Ray"
  },
  {
    name: "Vulnerability Assessment",
    category: "NETWORK SECURITY",
    status: "PRACTICING",
    hakiType: "Observation/Detection",
    description: "Identifying unpatched services, configuration drift, and known CVE vulnerabilities.",
    visualMetaphor: "CVE Surface Mapper"
  },
  {
    name: "Risk Management",
    category: "NETWORK SECURITY",
    status: "LEARNING",
    hakiType: "Flow/Analysis",
    description: "Evaluating asset criticality, impact likelihood, and mitigation prioritization frameworks.",
    visualMetaphor: "Impact Matrix Calc"
  },

  // SECURITY TOOLS
  {
    name: "Autopsy",
    category: "SECURITY TOOLS",
    status: "ACTIVE FOCUS",
    hakiType: "Observation/Detection",
    description: "Forensic browser, data source ingest modules, timeline viewer, and keyword search.",
    visualMetaphor: "Forensic Investigation Scan"
  },
  {
    name: "Wireshark",
    category: "SECURITY TOOLS",
    status: "COMFORTABLE",
    hakiType: "Observation/Detection",
    description: "Network packet analyzer, stream reassembly, display filters, and protocol dissection.",
    visualMetaphor: "Packet Wave Visualization"
  },
  {
    name: "Nmap & Zenmap",
    category: "SECURITY TOOLS",
    status: "COMFORTABLE",
    hakiType: "Observation/Detection",
    description: "Network discovery, port scanning, OS fingerprinting, and NSE vulnerability scripting.",
    visualMetaphor: "Network Discovery Pulse"
  },
  {
    name: "Metasploit",
    category: "SECURITY TOOLS",
    status: "PRACTICING",
    hakiType: "Armament/Hardening",
    description: "Controlled security validation, payload generation, and auxiliary reconnaissance modules.",
    visualMetaphor: "Controlled Security-Testing Visual"
  },
  {
    name: "Burp Suite",
    category: "SECURITY TOOLS",
    status: "PRACTICING",
    hakiType: "Observation/Detection",
    description: "Web application security testing, HTTP proxy intercept, repeater, and target mapping.",
    visualMetaphor: "Web Security Scan"
  },
  {
    name: "Splunk",
    category: "SECURITY TOOLS",
    status: "PRACTICING",
    hakiType: "Flow/Analysis",
    description: "Search Processing Language (SPL), log ingest parsing, dashboard telemetry, and alert rules.",
    visualMetaphor: "SIEM / Log Stream Visualization"
  },
  {
    name: "PE Explorer",
    category: "SECURITY TOOLS",
    status: "PRACTICING",
    hakiType: "Flow/Analysis",
    description: "Portable Executable header analysis, import/export table examination, and section inspection.",
    visualMetaphor: "Binary Header Dissector"
  },
  {
    name: "VeraCrypt",
    category: "SECURITY TOOLS",
    status: "COMFORTABLE",
    hakiType: "Armament/Hardening",
    description: "On-the-fly disk encryption, hidden container architectures, and cryptographic validation.",
    visualMetaphor: "Cipher Enclave"
  },
  {
    name: "Kali Linux",
    category: "SECURITY TOOLS",
    status: "COMFORTABLE",
    hakiType: "Armament/Hardening",
    description: "Security assessment distribution, CLI toolchains, forensic utilities, and lab operations.",
    visualMetaphor: "Offensive-Defensive Terminal"
  },
  {
    name: "Ubuntu Linux",
    category: "SECURITY TOOLS",
    status: "COMFORTABLE",
    hakiType: "Flow/Analysis",
    description: "Server administration, systemd service auditing, bash automation, and networking.",
    visualMetaphor: "POSIX Environment"
  },
  {
    name: "MongoDB Compass",
    category: "SECURITY TOOLS",
    status: "COMFORTABLE",
    hakiType: "Flow/Analysis",
    description: "NoSQL document schema inspection, query profiling, and index validation.",
    visualMetaphor: "Document Store Explorer"
  },
  {
    name: "Docker",
    category: "SECURITY TOOLS",
    status: "PRACTICING",
    hakiType: "Armament/Hardening",
    description: "Containerized testbeds, reproducible lab environments, and isolated execution nodes.",
    visualMetaphor: "Sandboxed Container Cell"
  },

  // PROGRAMMING & TECHNOLOGY
  {
    name: "Python Programming",
    category: "PROGRAMMING & TECHNOLOGY",
    status: "COMFORTABLE",
    hakiType: "Flow/Analysis",
    description: "Core Python development, data structures, socket networking, and forensic tool building.",
    visualMetaphor: "Python Execution Engine"
  },
  {
    name: "Python Scripting",
    category: "PROGRAMMING & TECHNOLOGY",
    status: "ACTIVE FOCUS",
    hakiType: "Flow/Analysis",
    description: "Automating log triage, regex artifact parsing, hash computation, and report generation.",
    visualMetaphor: "Terminal Automation Flow"
  },
  {
    name: "SQL",
    category: "PROGRAMMING & TECHNOLOGY",
    status: "COMFORTABLE",
    hakiType: "Flow/Analysis",
    description: "Relational database querying, structured event extraction, and SQLite forensic database inspection.",
    visualMetaphor: "Relational Schema Query"
  },
  {
    name: "TensorFlow / Neural Networks",
    category: "PROGRAMMING & TECHNOLOGY",
    status: "LEARNING",
    hakiType: "Flow/Analysis",
    description: "Foundational deep learning models for classification, anomaly detection, and research applications.",
    visualMetaphor: "Neural Weight Activation"
  },
  {
    name: "Cisco Packet Tracer",
    category: "PROGRAMMING & TECHNOLOGY",
    status: "COMFORTABLE",
    hakiType: "Observation/Detection",
    description: "Simulating enterprise network topologies, VLANs, routing protocols, and firewall rules.",
    visualMetaphor: "Network Topology Simulator"
  },
  {
    name: "Visual Studio Code",
    category: "PROGRAMMING & TECHNOLOGY",
    status: "COMFORTABLE",
    hakiType: "Flow/Analysis",
    description: "Integrated development, debugging, remote SSH terminal workflows, and Git integration.",
    visualMetaphor: "Developer IDE Workspace"
  },

  // SYSTEMS
  {
    name: "Windows",
    category: "SYSTEMS",
    status: "COMFORTABLE",
    hakiType: "Flow/Analysis",
    description: "Internal architecture, NTFS, security descriptors, Event Viewer, and PowerShell management.",
    visualMetaphor: "OS Kernel Layer"
  },
  {
    name: "Linux",
    category: "SYSTEMS",
    status: "COMFORTABLE",
    hakiType: "Flow/Analysis",
    description: "POSIX permissions, process namespaces, file hierarchies, and shell scripting.",
    visualMetaphor: "Shell Interface"
  },
  {
    name: "Mobile Operating Systems",
    category: "SYSTEMS",
    status: "PRACTICING",
    hakiType: "Observation/Detection",
    description: "Android application sandbox, APK manifest permissions, and mobile security paradigms.",
    visualMetaphor: "Mobile Sandboxing"
  },
  {
    name: "Device Connectivity",
    category: "SYSTEMS",
    status: "PRACTICING",
    hakiType: "Observation/Detection",
    description: "USB protocol behavior, peripheral communication, serial interfaces, and IoT bus connections.",
    visualMetaphor: "Hardware Bus Signal"
  },
  {
    name: "Operating System Security",
    category: "SYSTEMS",
    status: "ACTIVE FOCUS",
    hakiType: "Armament/Hardening",
    description: "Principle of least privilege, access control lists, system hardening, and patch hygiene.",
    visualMetaphor: "Core OS Hardening"
  },
  {
    name: "Endpoint Security",
    category: "SYSTEMS",
    status: "ACTIVE FOCUS",
    hakiType: "Armament/Hardening",
    description: "Host-based intrusion detection, endpoint telemetry monitoring, and malicious process termination.",
    visualMetaphor: "Endpoint Guardian"
  },

  // SOFT SKILLS
  {
    name: "Leadership",
    category: "SOFT SKILLS",
    status: "COMFORTABLE",
    hakiType: "Conqueror/Awakening",
    description: "Guiding hackathon squads, orchestrating project priorities, and fostering collective focus.",
    visualMetaphor: "Command Presence"
  },
  {
    name: "Teamwork",
    category: "SOFT SKILLS",
    status: "COMFORTABLE",
    hakiType: "Flow/Analysis",
    description: "Collaborating across multidisciplinary teams in hackathons, research papers, and labs.",
    visualMetaphor: "Crew Synergy"
  },
  {
    name: "Critical Thinking",
    category: "SOFT SKILLS",
    status: "ACTIVE FOCUS",
    hakiType: "Observation/Detection",
    description: "Evaluating complex security situations without bias, validating evidence systematically.",
    visualMetaphor: "Analytical Vision"
  },
  {
    name: "Networking with People",
    category: "SOFT SKILLS",
    status: "COMFORTABLE",
    hakiType: "Flow/Analysis",
    description: "Active engagement at tech meetups, CTF events, conferences, and student communities.",
    visualMetaphor: "Community Nexus"
  },
  {
    name: "Resource Specialist",
    category: "SOFT SKILLS",
    status: "COMFORTABLE",
    hakiType: "Flow/Analysis",
    description: "Locating essential tooling, documentation, research papers, and lab environments efficiently.",
    visualMetaphor: "Knowledge Cataloger"
  }
];
