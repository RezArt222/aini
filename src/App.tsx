import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Terminal, Server, Network, Wifi, Shield, Code, Cpu, HardDrive, 
  Mail, Github, Linkedin, ExternalLink, ChevronDown, Monitor, Share2, Wrench
} from 'lucide-react';

export default function App() {
  const [typedText, setTypedText] = useState('');
  const fullText = "ping nur-aini.local\n\nPinging nur-aini.local [192.168.1.1] with 32 bytes of data:\nReply from 192.168.1.1: bytes=32 time<1ms TTL=64\nReply from 192.168.1.1: bytes=32 time<1ms TTL=64\n\nPing statistics for 192.168.1.1:\n    Packets: Sent = 2, Received = 2, Lost = 0 (0% loss),\n\n> Connection established. Ready.";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30);
    return () => clearInterval(typingInterval);
  }, []);

  const smoothScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter flex items-center gap-4">
            <Terminal size={24} className="text-cyan-400" />
            <span>N_AINI.01</span>
          </div>
          <div className="hidden md:flex gap-12 text-sm uppercase tracking-widest font-medium opacity-70">
            <button onClick={() => smoothScroll('about')} className="hover:opacity-100 transition-opacity">Overview</button>
            <button onClick={() => smoothScroll('skills')} className="hover:opacity-100 transition-opacity">Skills</button>
            <button onClick={() => smoothScroll('projects')} className="hover:opacity-100 transition-opacity">Projects</button>
            <button onClick={() => smoothScroll('contact')} className="hover:opacity-100 transition-opacity">Contact</button>
          </div>
          <div className="hidden lg:block px-4 py-2 border border-white/30 rounded-full text-xs uppercase tracking-widest">
            Available for Internships
          </div>
          {/* Mobile menu button */}
          <button className="md:hidden opacity-70 hover:opacity-100 text-sm uppercase tracking-widest">
            Menu
          </button>
        </div>
      </nav>

      <div className="flex relative pt-[88px] max-w-[1600px] mx-auto min-h-screen">
        {/* Vertical Major Label */}
        <div className="hidden lg:flex w-24 border-r border-white/10 fixed left-[max(0px,calc((100vw-1600px)/2))] top-[88px] bottom-0 items-center justify-center bg-[#0A0A0A] z-40">
          <span className="rotate-[-90deg] whitespace-nowrap text-[10px] uppercase tracking-[0.8em] opacity-40">
            TEKNIK KOMPUTER & JARINGAN
          </span>
        </div>

        <main className="flex-1 lg:ml-24 relative z-10 w-full overflow-hidden">
          
          {/* Hero Section */}
          <section className="min-h-[calc(100vh-88px)] flex flex-col justify-center px-6 md:px-12 py-12 w-full">
            <div className="flex flex-col lg:flex-row gap-12 justify-between w-full h-full">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 flex flex-col justify-center"
              >
                <p className="text-cyan-400 font-mono text-sm mb-4 uppercase tracking-widest">
                  [ ROOT_ACCESS: GRANTED ]
                </p>
                <h1 className="text-7xl md:text-[140px] leading-[0.8] font-black tracking-tighter uppercase mb-12">
                  Nur<br/>
                  <span className="text-transparent stroke-text">Aini</span>
                </h1>
                
                <div className="grid lg:grid-cols-2 gap-12 items-end">
                  <div className="max-w-sm">
                    <p className="text-lg leading-relaxed text-gray-400">
                      Network Engineer and Security enthusiast specializing in infrastructure design, server management, and hardware troubleshooting.
                    </p>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <button onClick={() => smoothScroll('projects')} className="bg-white text-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
                        View Projects
                      </button>
                      <button onClick={() => smoothScroll('contact')} className="border border-white/20 px-8 py-4 text-sm font-bold uppercase tracking-widest hover:border-white transition-colors">
                        Resume
                      </button>
                    </div>
                  </div>

                  <div className="hidden xl:flex flex-col gap-4 border-l border-white/10 pl-8">
                    <div className="flex justify-between items-end border-b border-white/10 pb-2">
                      <span className="text-[10px] uppercase tracking-widest opacity-50 pr-4">Core Proficiency</span>
                      <span className="font-mono text-sm">Cisco / Mikrotik / Linux</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-white/10 pb-2">
                      <span className="text-[10px] uppercase tracking-widest opacity-50 pr-4">Current Status</span>
                      <span className="font-mono text-sm">Vocational Student (SMK)</span>
                    </div>
                    <div className="flex justify-between items-end border-b border-white/10 pb-2">
                      <span className="text-[10px] uppercase tracking-widest opacity-50 pr-4">Certification</span>
                      <span className="font-mono text-sm text-cyan-400">Basic Networking</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right visual terminal/stats */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full lg:w-[32rem] bg-[#111111] p-6 lg:p-8 flex flex-col gap-6"
              >
                <div className="bg-zinc-900 border border-white/5 p-6 rounded-lg font-mono text-[11px] leading-relaxed opacity-80 h-[280px] overflow-hidden">
                  <div className="flex gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <div className="whitespace-pre-wrap break-all">
                    <span className="text-cyan-400">$ ssh naini@localhost</span>
                    <br />&gt; {typedText}
                    <motion.span 
                      animate={{ opacity: [1, 0] }} 
                      transition={{ repeat: Infinity, duration: 0.8 }}
                      className="inline-block w-2 h-3 bg-cyan-400 align-middle ml-1"
                    ></motion.span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 flex-1">
                  <div className="bg-zinc-900/50 border border-white/5 p-4 flex flex-col justify-between">
                    <span className="text-[10px] opacity-40 uppercase">HARDWARE</span>
                    <span className="text-3xl font-black">98%</span>
                  </div>
                  <div className="bg-zinc-900/50 border border-white/5 p-4 flex flex-col justify-between">
                    <span className="text-[10px] opacity-40 uppercase">ROUTING</span>
                    <span className="text-3xl font-black">92%</span>
                  </div>
                  <div className="bg-zinc-900/50 border border-white/5 p-4 flex flex-col justify-between">
                    <span className="text-[10px] opacity-40 uppercase">SECURITY</span>
                    <span className="text-3xl font-black">85%</span>
                  </div>
                  <div className="bg-zinc-900/50 border border-white/5 p-4 flex flex-col justify-between">
                    <span className="text-[10px] opacity-40 uppercase">SERVERS</span>
                    <span className="text-3xl font-black">90%</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-24 px-6 md:px-12 mx-auto border-t border-white/10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="grid lg:grid-cols-2 gap-12"
            >
              <div>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                  Tentang Saya
                </h2>
                <div className="text-cyan-400 font-mono text-xs uppercase tracking-widest">
                  01. OVERVIEW
                </div>
              </div>
              <div className="text-gray-400 text-lg leading-relaxed flex flex-col gap-6">
                <p>
                  Saya adalah siswa SMK yang sangat tertarik dengan infrastruktur teknologi informasi. Memilih jurusan <strong className="text-white">Teknik Komputer dan Jaringan</strong> karena rasa ingin tahu yang besar tentang bagaimana komputer dapat saling berkomunikasi dan bertukar data.
                </p>
                <p>
                  Saat ini, saya sedang fokus mempelajari konfigurasi <strong className="text-white">Router MikroTik</strong>, administrasi <strong className="text-white">Linux Server</strong>, dan pemeliharaan perangkat keras komputer. Saya percaya bahwa fondasi jaringan yang kuat adalah kunci dari setiap layanan digital yang andal.
                </p>
                <p>
                  Saya selalu antusias untuk belajar teknologi baru dan menerapkan teori yang didapat di sekolah ke dalam praktik nyata melalui berbagai proyek laboratorium.
                </p>
              </div>
            </motion.div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-24 px-6 md:px-12 border-t border-white/10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
            >
              <div>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                  Kompetensi Keahlian
                </h2>
                <div className="text-cyan-400 font-mono text-xs uppercase tracking-widest">
                  02. INFRASTRUCTURE & SKILLS
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SkillCard 
                icon={<Share2 size={32} />}
                title="Networking"
                skills={['MikroTik Routing & Switching', 'Cisco Packet Tracer', 'LAN / WLAN Setup', 'Subnetting & IP Config']}
                delay={0.1}
              />
              <SkillCard 
                icon={<Server size={32} />}
                title="System Administration"
                skills={['Linux (Debian/Ubuntu)', 'Windows Server', 'Web Server (Apache)', 'DHCP, DNS & FTP Server']}
                delay={0.2}
              />
              <SkillCard 
                icon={<Cpu size={32} />}
                title="Hardware & Support"
                skills={['Perakitan PC', 'Troubleshooting Hardware', 'Instalasi OS', 'Maintenance & Repair']}
                delay={0.3}
              />
              <SkillCard 
                icon={<Shield size={32} />}
                title="Network Security"
                skills={['Firewall Configuration', 'MikroTik Security', 'VPN Setup', 'Filter Rules']}
                delay={0.4}
              />
              <SkillCard 
                icon={<Code size={32} />}
                title="Web & Tools"
                skills={['HTML & CSS Dasar', 'Wireshark', 'Putty / SSH', 'VirtualBox / VMware']}
                delay={0.5}
              />
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-24 px-6 md:px-12 border-t border-white/10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
            >
              <div>
                <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                  Projek & Praktikum
                </h2>
                <div className="text-cyan-400 font-mono text-xs uppercase tracking-widest">
                  03. DEPLOYMENTS
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <ProjectCard 
                title="Implementasi Jaringan LAN Kantor"
                description="Merancang dan mengkonfigurasi jaringan Lokal (LAN) untuk simulasi lab sekolah menggunakan router MikroTik. Meliputi setting DHCP Server, pembagian bandwidth (Simple Queue), dan hotspot login."
                tags={['MikroTik', 'LAN', 'DHCP', 'Hotspot']}
              />
              <ProjectCard 
                title="Linux Web Server Setup"
                description="Membangun web server menggunakan Debian Linux. Mengkonfigurasi Apache2, MySQL, dan PHP (LAMP Stack) untuk meng-host website sekolah sederhana."
                tags={['Debian', 'Apache', 'LAMP', 'Linux']}
              />
              <ProjectCard 
                title="Routing Antar Vlan"
                description="Konfigurasi Inter-VLAN Routing menggunakan perangkat Cisco switch dan router di Cisco Packet Tracer. Memisahkan jaringan guru dan siswa namun tetap dapat berkomunikasi jika diizinkan."
                tags={['Cisco', 'VLAN', 'Routing', 'Packet Tracer']}
              />
              <ProjectCard 
                title="VPN Server Sekolah"
                description="Membuat jalur VPN (PPTP/L2TP) pada router MikroTik agar siswa dapat mengakses server lokal perpustakaan sekolah dari rumah secara aman."
                tags={['MikroTik', 'VPN', 'Security']}
              />
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-32 px-6 md:px-12 text-center border-t border-white/10 bg-[#0r0a0a]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto flex flex-col items-center"
            >
              <div className="text-cyan-400 font-mono text-xs uppercase tracking-widest mb-6">
                04. COMMUNICATION STATUS
              </div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 bg-clip-text">Initiate<br/>Connection</h2>
              <p className="text-lg text-gray-400 mb-12">
                Terbuka untuk kesempatan magang (Prakerin) atau diskusi seputar teknologi jaringan. Jika Anda mencari siswa magang yang antusias, kotak masuk saya siap menerima pesan.
              </p>
              <a 
                href="mailto:hello@example.com" 
                className="bg-white text-black px-12 py-5 text-sm font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors inline-flex items-center gap-3"
              >
                <Mail size={18} />
                SEND EMAIL
              </a>

              <div className="mt-20 flex justify-center gap-8 text-gray-500">
                <a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2 text-sm uppercase tracking-widest font-mono">
                  <Github size={16} /> Github
                </a>
                <a href="#" className="hover:text-cyan-400 transition-colors flex items-center gap-2 text-sm uppercase tracking-widest font-mono">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </motion.div>
          </section>

          {/* Footer */}
          <footer className="border-t border-white/10 flex flex-col md:flex-row items-center px-6 md:px-12 justify-between gap-4 py-8">
            <div className="flex gap-4 md:gap-8 text-[10px] uppercase tracking-widest opacity-50 flex-wrap justify-center">
              <span>Siswa TKJ &copy; {new Date().getFullYear()}</span>
              <span>Nur Aini</span>
            </div>
            <div className="font-mono text-[10px] opacity-30 text-center uppercase tracking-widest">
              SYS.IP: 192.168.1.104 | PORT: 8080
            </div>
          </footer>

        </main>
      </div>
    </div>
  );
}

function SkillCard({ icon, title, skills, delay }: { icon: React.ReactNode, title: string, skills: string[], delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay }}
      className="bg-[#111111] border border-white/5 p-8 flex flex-col h-full group hover:bg-zinc-900 transition-colors"
    >
      <div className="flex justify-between items-start mb-12">
        <div className="text-cyan-400 opacity-80 group-hover:opacity-100 transition-opacity">
          {icon}
        </div>
        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest border border-white/10 px-2 py-1">TECH</span>
      </div>
      <h3 className="text-xl font-bold uppercase tracking-widest mb-6">{title}</h3>
      <ul className="space-y-4 font-mono text-sm mt-auto">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-400 flex items-start gap-3 border-t border-white/5 pt-4">
            <span className="text-cyan-400 text-xs mt-0.5">&gt;</span>
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ProjectCard({ title, description, tags }: { title: string, description: string, tags: string[] }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-[#111111] border border-white/5 group hover:border-white/20 transition-all duration-300"
    >
      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <h3 className="text-2xl font-bold uppercase tracking-wide group-hover:text-cyan-400 transition-colors w-4/5">{title}</h3>
          <ExternalLink size={20} className="text-gray-500 group-hover:text-white transition-colors" />
        </div>
        <p className="text-gray-400 mb-8 text-sm leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-3">
          {tags.map((tag, i) => (
            <span key={i} className="font-mono text-[10px] uppercase tracking-widest px-3 py-1 bg-white/5 text-gray-300 border border-white/10">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

