import React, { useState } from 'react';
import { soundEngine } from '../../utils/sound';
import { 
  Radar, 
  Terminal, 
  ShieldAlert, 
  Search, 
  Activity, 
  Radio, 
  Flame, 
  Sparkles,
  Zap,
  CheckCircle2
} from 'lucide-react';

interface HakiProfile {
  id: string;
  name: string;
  category: string;
  metaphor: string;
  hakiType: string;
  description: string;
  icon: React.ReactNode;
  visualPulseColor: string;
}

export const HakiVisualizer: React.FC = () => {
  const hakiNodes: HakiProfile[] = [
    {
      id: "forensics",
      name: "Digital Forensics",
      category: "EVIDENCE RECONSTRUCTION",
      metaphor: "Forensic Scan Resonance",
      hakiType: "Flow / Deep Analysis",
      description: "Carving through raw sectors, verifying MD5/SHA256 hashes, and extracting MACB timeline evidence without contamination.",
      icon: <Search className="w-5 h-5" />,
      visualPulseColor: "border-red-600 bg-red-600/10 text-red-600"
    },
    {
      id: "incident-response",
      name: "Incident Response",
      category: "THREAT MITIGATION",
      metaphor: "Alert Sentinel Pulse",
      hakiType: "Armament / Containment",
      description: "Executing initial triage, rapid containment of compromised hosts, root-cause investigation, and post-incident hardening.",
      icon: <ShieldAlert className="w-5 h-5" />,
      visualPulseColor: "border-amber-500 bg-amber-500/10 text-amber-600"
    },
    {
      id: "network-security",
      name: "Network Defense",
      category: "PACKET INSPECTION",
      metaphor: "Packet Stream Dissection",
      hakiType: "Observation / Spatial Radar",
      description: "Real-time analysis of OSI traffic layers, detecting ARP poisoning, rogue beaconing, and evaluating firewall filter rules.",
      icon: <Radio className="w-5 h-5" />,
      visualPulseColor: "border-blue-500 bg-blue-500/10 text-blue-600"
    },
    {
      id: "autopsy",
      name: "Autopsy Forensics",
      category: "DISK FORENSICS",
      metaphor: "Forensic Investigation Scan",
      hakiType: "Observation / Artifact Ingest",
      description: "Deep examination of unallocated storage, keyword searching, web browser history analysis, and deleted file discovery.",
      icon: <Radar className="w-5 h-5" />,
      visualPulseColor: "border-purple-500 bg-purple-500/10 text-purple-600"
    },
    {
      id: "wireshark",
      name: "Wireshark Analysis",
      category: "PROTOCOL DISSECTION",
      metaphor: "Packet Wave Visualization",
      hakiType: "Observation / Flow Detection",
      description: "Deep packet inspection, stream reassembly, isolating DNS tunneling, and auditing cleartext credential exposures.",
      icon: <Activity className="w-5 h-5" />,
      visualPulseColor: "border-cyan-500 bg-cyan-500/10 text-cyan-600"
    },
    {
      id: "python",
      name: "Python Automation",
      category: "SCRIPTING ENGINE",
      metaphor: "Terminal Code Execution",
      hakiType: "Flow / Tool Synthesis",
      description: "Developing custom CLI scripts to automate evidence triage, parse regex patterns across millions of log lines, and calculate integrity hashes.",
      icon: <Terminal className="w-5 h-5" />,
      visualPulseColor: "border-emerald-500 bg-emerald-500/10 text-emerald-600"
    },
    {
      id: "splunk",
      name: "Splunk SIEM",
      category: "SECURITY TELEMETRY",
      metaphor: "SIEM Log Stream Synthesis",
      hakiType: "Observation / Log Correlation",
      description: "Correlating multi-source syslog and Windows event logs, authoring SPL queries, and visualizing suspicious authentication thresholds.",
      icon: <Flame className="w-5 h-5" />,
      visualPulseColor: "border-orange-500 bg-orange-500/10 text-orange-600"
    },
    {
      id: "nmap",
      name: "Nmap Discovery",
      category: "SURFACE RECONNAISSANCE",
      metaphor: "Network Discovery Pulse",
      hakiType: "Observation / Perimeter Scan",
      description: "Host discovery, TCP SYN scanning, service fingerprinting, and discovering exposed attack surfaces on target perimeters.",
      icon: <Zap className="w-5 h-5" />,
      visualPulseColor: "border-indigo-500 bg-indigo-500/10 text-indigo-600"
    }
  ];

  const [selectedNode, setSelectedNode] = useState<HakiProfile>(hakiNodes[0]);

  return (
    <div className="mt-16 rounded-3xl p-6 sm:p-8 bg-neutral-900 text-white border-2 border-red-600 shadow-2xl relative overflow-hidden">
      {/* Background visual energy effects */}
      <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-red-600/10 blur-3xl pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-red-500 font-bold tracking-widest uppercase">
              <Sparkles className="w-4 h-4 animate-spin text-red-500" />
              <span>HAKI POWER SYSTEM × CYBERSECURITY METAPHOR</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-black mt-1 text-white">
              INVESTIGATIVE HAKI RADAR
            </h3>
          </div>
          <span className="text-xs font-mono px-3 py-1.5 rounded-full bg-neutral-800 border border-neutral-700 text-neutral-300">
            Interactive Node Inspector
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
          {/* Node Grid Selector */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {hakiNodes.map((node) => {
              const isSelected = selectedNode.id === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => {
                    soundEngine.playWhoosh();
                    setSelectedNode(node);
                  }}
                  className={`p-4 rounded-2xl border text-left transition-all duration-200 flex flex-col justify-between group relative overflow-hidden ${
                    isSelected
                      ? 'border-red-500 bg-red-950/40 shadow-lg shadow-red-950/50 scale-102'
                      : 'border-neutral-800 bg-neutral-800/60 hover:border-neutral-600 hover:bg-neutral-800'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl w-fit mb-3 ${node.visualPulseColor} border`}>
                    {node.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-neutral-400 block tracking-wider uppercase">
                      {node.category.split(' ')[0]}
                    </span>
                    <h4 className="font-heading font-bold text-sm text-white leading-tight mt-0.5">
                      {node.name}
                    </h4>
                  </div>
                  {isSelected && (
                    <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 animate-ping" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Node Deep Telemetry Display */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800 flex flex-col justify-between relative">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-mono font-bold text-red-500 tracking-wider">
                  ✦ {selectedNode.metaphor.toUpperCase()}
                </span>
                <span className="px-2.5 py-1 rounded-md bg-neutral-800 text-[11px] font-mono text-neutral-300">
                  {selectedNode.hakiType}
                </span>
              </div>

              <h4 className="text-2xl font-heading font-black text-white mb-2">
                {selectedNode.name}
              </h4>

              <div className="inline-block px-3 py-1 rounded-full bg-red-600/20 border border-red-500/40 text-red-400 text-xs font-mono font-semibold mb-4">
                {selectedNode.category}
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                {selectedNode.description}
              </p>
            </div>

            {/* Interactive Pulse Animation Visual */}
            <div className="mt-6 pt-4 border-t border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                <span className="text-xs font-mono text-neutral-400">
                  Resonance: <strong className="text-white">AWAKENED FOCUS</strong>
                </span>
              </div>
              <div className="flex items-center gap-1 text-xs text-red-400 font-mono">
                <CheckCircle2 className="w-4 h-4" />
                <span>Active Telemetry</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
