import React, { useState, useEffect } from 'react';
import {
  Menu, X, ArrowRight, MessageSquare,
  Briefcase, GraduationCap, LineChart, Cpu,
  ChevronLeft, ChevronRight, CheckCircle2,
  Send, Shield, Zap, ExternalLink, Award,
  Calendar, Clock, Sparkles, Loader2, Target, Users, Rocket
} from 'lucide-react';

/**
 * ANT-ARA DESIGN SYSTEM
 * Paleta de Colores:
 * - Teal Primary: #2F4F4F (Dark Slate Gray)
 * - Teal Light: #3a6464
 * - Green Accent: #4CAF50
 * - Orange Accent: #FF6B35 (Coral/Orange)
 * - Dark BG: #0a0a0f
 * - White: #FFFFFF
 */

const AntAraApp = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [showAnti, setShowAnti] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);

  // Estados para Anti IA
  const [antiStep, setAntiStep] = useState(0);
  const [antiMessages, setAntiMessages] = useState([
    { from: 'anti', text: '¡Hola! Soy Anti 🐜, tu asistente estratégico de Ant-Ara. ¿En qué puedo ayudarte hoy?' }
  ]);
  const [userInput, setUserInput] = useState('');

  // Logos
  const logos = {
    icon: "https://i.imgur.com/007URKU.png",        // Isotipo
    full: "https://i.imgur.com/WhmuuWF.png",        // Logo completo
    iconDark: "https://i.imgur.com/y2G8EWA.png"     // Isotipo dark mode
  };

  // Casos de Éxito REALES
  const casosExito = [
    {
      title: "TOLIVIA",
      category: "Transformación Digital",
      metric: "40% Reducción de Costos",
      description: "Ecosistema digital completo: cotizador automático en línea, asistente virtual 24/7 con IA, y sistema de autogestión para clientes. Integración WhatsApp, web y backend.",
      image: "https://i.imgur.com/RHwlADm.png",
      tags: ["#IA", "#Automatización", "#24/7"],
      link: "https://tolivia.com"
    },
    {
      title: "DKORANDO",
      category: "Aceleración Comercial",
      metric: "65% Más Leads",
      description: "Arquitectura comercial completa con KPIs digitales, funnel de conversión optimizado, y paquete de 36 publicaciones estratégicas en 3 meses.",
      image: "https://i.imgur.com/aUW3ozt.png",
      tags: ["#Marketing", "#Ventas", "#KPIs"],
      link: "https://dkorando.com"
    },
    {
      title: "COFFEE PARTIES",
      category: "Project Management",
      metric: "50% Menos Tiempo",
      description: "Sistema de gestión de proyectos para eventos corporativos. Automatización de cotizaciones, diseño de experiencias personalizadas, y tracking en tiempo real.",
      image: "https://i.imgur.com/lLFSaXf.png",
      tags: ["#Eventos", "#Gestión", "#Automatización"],
      link: "#contacto"
    }
  ];

  // Servicios
  const servicios = [
    {
      icon: Shield,
      title: "Gestión de Riesgos",
      description: "Blindamos tu patrimonio digital. Ciberresponsabilidad estratégica que protege tu activo más valioso: información y reputación.",
      color: "teal"
    },
    {
      icon: Cpu,
      title: "Optimización con IA",
      description: "Automatización e IA real para hacer más con menos fricción. Liberamos tiempo, reducimos errores, mejoramos productividad.",
      color: "green"
    },
    {
      icon: GraduationCap,
      title: "Academia: Programas IA",
      description: "Formación práctica con certificación internacional. Champion IA, Automatización, Gestión de Proyectos con IA.",
      color: "orange"
    }
  ];

  // Equipo
  const equipo = [
    {
      name: "Jorge Luis",
      role: "Estratega Comercial & Innovación",
      image: "https://i.imgur.com/TiUQN09.jpeg",
      linkedin: "https://www.linkedin.com/in/jorgegonzalezgua"
    },
    {
      name: "Alejandro Ortega",
      role: "Estratega de Marca & Transformación Digital",
      image: "https://i.imgur.com/P5TMXOz.jpeg",
      linkedin: "https://www.linkedin.com/in/innovar-con-alejadro"
    }
  ];

  // Base de Conocimiento de Anti
  const antiKnowledge = {
    servicios: {
      keywords: ["servicios", "qué hacen", "ofrecen", "ayuda"],
      response: "En Ant-Ara ofrecemos 3 servicios principales:\n\n" +
                "🛡️ **Gestión de Riesgos**: Blindamos tu patrimonio digital\n" +
                "🤖 **Optimización con IA**: Automatizamos procesos\n" +
                "🎓 **Academia IA**: Programas de certificación\n\n" +
                "¿Sobre cuál quieres saber más?"
    },
    casos: {
      keywords: ["casos", "ejemplos", "éxito", "proyectos"],
      response: "Tenemos casos de éxito comprobados:\n\n" +
                "🏆 **TOLIVIA**: 40% reducción en costos operativos\n" +
                "📈 **DKORANDO**: 65% incremento en leads\n" +
                "⚡ **Coffee Parties**: 50% menos tiempo de planificación"
    },
    champion: {
      keywords: ["champion", "curso", "ia", "aprender"],
      response: "¡El **Programa Champion IA** es perfecto!\n\n" +
                "✨ 6 semanas intensivas\n" +
                "🎓 Certificación internacional incluida\n" +
                "💪 De principiante a experto en IA\n" +
                "💵 Desde $200 USD"
    },
    costos: {
      keywords: ["cuánto", "precio", "inversión"],
      response: "💰 Diagnóstico estratégico GRATUITO\n" +
                "📊 Propuestas personalizadas\n" +
                "✅ ROI garantizado\n\n" +
                "Nuestros clientes han visto retornos de hasta 3x su inversión."
    }
  };

  const quickReplies = [
    "¿Qué servicios ofrecen?",
    "Ver casos de éxito",
    "Sobre Champion IA",
    "¿Cuánto cuesta?",
    "Quiero contactarlos"
  ];

  const handleAntiMessage = (message) => {
    setAntiMessages(prev => [...prev, { from: 'user', text: message }]);
    setUserInput('');

    setTimeout(() => {
      let response = "Interesante. Déjame ayudarte con eso. ¿Quieres saber sobre nuestros servicios, casos de éxito o Champion IA?";

      const lowerMsg = message.toLowerCase();
      for (const [key, data] of Object.entries(antiKnowledge)) {
        if (data.keywords.some(k => lowerMsg.includes(k))) {
          response = data.response;
          break;
        }
      }

      setAntiMessages(prev => [...prev, { from: 'anti', text: response }]);
    }, 800);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setProjectIndex(prev => (prev + 1) % casosExito.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Componentes
  const Nav = () => (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-teal-500/10 bg-[#0a0a0f]/95">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setActiveTab('home')}>
          <div className="relative">
            <img src={logos.icon} alt="Ant-Ara" className="h-12 w-12 transition-transform group-hover:rotate-12" />
            <div className="absolute inset-0 bg-green-400 blur-xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
          </div>
          <div className="hidden md:block">
            <div className="text-xl font-black tracking-tighter text-white uppercase font-epilogue">ANT-ARA</div>
            <div className="text-[8px] text-orange-500 font-bold uppercase tracking-widest">Estrategia con Alma</div>
          </div>
        </div>

        <div className="flex items-center gap-8">
          {['home', 'servicios', 'casos'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-[10px] font-black uppercase tracking-widest transition-all ${
                activeTab === tab ? 'text-green-400 border-b-2 border-green-400' : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab === 'home' ? 'Inicio' : tab}
            </button>
          ))}
          <a
            href="champion-ia.html"
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all shadow-lg shadow-orange-500/20"
          >
            Champion IA
          </a>
        </div>
      </div>
    </nav>
  );

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-slate-100 font-inter selection:bg-green-500 selection:text-black">
      <Nav />

      {activeTab === 'home' && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          {/* Hero */}
          <section className="relative pt-40 pb-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                    <Zap size={14} /> Consultoría Estratégica
                  </div>

                  <h1 className="text-5xl md:text-7xl font-black leading-none tracking-tighter mb-6 font-epilogue">
                    <span className="text-white">Estrategia con</span>{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-green-500 to-orange-500">
                      Alma
                    </span>
                    <br />
                    <span className="text-white">Resultados con</span>{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-green-500 to-teal-400">
                      Disciplina
                    </span>
                  </h1>

                  <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                    Transformamos PYMEs y empresas familiares guatemaltecas con consultoría estratégica que{' '}
                    <span className="text-white font-bold">protege su legado</span> mientras impulsa la{' '}
                    <span className="text-green-400 font-bold">innovación</span>.
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 mb-10">
                    <div>
                      <div className="text-3xl font-black text-orange-500">40%</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Reducción costos</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-green-500">65%</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Más leads</div>
                    </div>
                    <div>
                      <div className="text-3xl font-black text-teal-500">20+</div>
                      <div className="text-xs text-slate-500 uppercase tracking-wide">Años exp.</div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => setShowAnti(true)}
                      className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:shadow-2xl hover:shadow-orange-500/50 transition-all flex items-center justify-center gap-3"
                    >
                      <MessageSquare size={18} /> Hablar con Anti
                    </button>
                    <button
                      onClick={() => setActiveTab('casos')}
                      className="px-8 py-4 border-2 border-white/10 rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:bg-white/5 transition-all"
                    >
                      Ver Casos de Éxito
                    </button>
                  </div>
                </div>

                {/* Hero Image */}
                <div className="relative">
                  <div className="relative aspect-square rounded-[3rem] overflow-hidden border-4 border-white/5 shadow-2xl">
                    <img
                      src={logos.full}
                      alt="Ant-Ara"
                      className="w-full h-full object-contain p-12 bg-gradient-to-br from-teal-900/20 via-slate-900/40 to-orange-900/20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent"></div>
                  </div>

                  {/* Floating Card */}
                  <div className="absolute -bottom-8 -right-8 bg-slate-900 border border-white/10 rounded-2xl p-6 shadow-2xl max-w-xs">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-bold text-green-400">Sistema Activo</span>
                    </div>
                    <p className="text-sm text-slate-400">Anti 🐜 monitoreando oportunidades estratégicas 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background Effects */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal-500/10 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-orange-500/10 blur-[120px] rounded-full"></div>
          </section>

          {/* Casos de Éxito Carousel */}
          <section className="py-20 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 rounded-full bg-green-500/10 text-green-400 text-[10px] font-black uppercase tracking-widest mb-4">
                Portafolio
              </div>
              <h2 className="text-4xl md:text-5xl font-black font-epilogue mb-4">
                Transformaciones <span className="text-green-400">Reales</span>
              </h2>
              <p className="text-slate-400 text-lg">Resultados medibles, impacto comprobado</p>
            </div>

            <div className="relative group">
              <div className="bg-slate-900/50 border border-white/5 rounded-[3rem] overflow-hidden hover:border-green-500/30 transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-[500px] overflow-hidden">
                    <img
                      src={casosExito[projectIndex].image}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      alt={casosExito[projectIndex].title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                  </div>

                  <div className="p-12 flex flex-col justify-center">
                    <div className="flex gap-2 mb-4">
                      {casosExito[projectIndex].tags.map(tag => (
                        <span key={tag} className="px-3 py-1 bg-green-500/20 text-green-400 text-[10px] font-black rounded-lg uppercase tracking-wide">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="text-orange-500 font-black text-xs tracking-widest mb-2 uppercase">
                      {casosExito[projectIndex].category}
                    </div>

                    <h3 className="text-4xl font-black mb-4 font-epilogue">
                      {casosExito[projectIndex].title}
                    </h3>

                    <div className="text-2xl font-black text-green-400 mb-6">
                      {casosExito[projectIndex].metric}
                    </div>

                    <p className="text-slate-300 leading-relaxed mb-8">
                      {casosExito[projectIndex].description}
                    </p>

                    <a
                      href={casosExito[projectIndex].link}
                      className="inline-flex items-center gap-2 text-green-400 font-bold hover:gap-4 transition-all"
                    >
                      Ver proyecto completo <ArrowRight size={16} />
                    </a>
                  </div>
                </div>

                {/* Navigation */}
                <div className="absolute bottom-6 right-6 flex gap-3">
                  <button
                    onClick={() => setProjectIndex(prev => (prev > 0 ? prev - 1 : casosExito.length - 1))}
                    className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-green-500 hover:border-green-500 transition-all"
                  >
                    <ChevronLeft size={20}/>
                  </button>
                  <button
                    onClick={() => setProjectIndex(prev => (prev + 1) % casosExito.length)}
                    className="p-3 bg-white/5 border border-white/10 rounded-full hover:bg-green-500 hover:border-green-500 transition-all"
                  >
                    <ChevronRight size={20}/>
                  </button>
                </div>
              </div>

              {/* Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {casosExito.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setProjectIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      idx === projectIndex ? 'w-8 bg-green-500' : 'w-2 bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Servicios */}
          <section className="py-20 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-[10px] font-black uppercase tracking-widest mb-4">
                Soluciones
              </div>
              <h2 className="text-4xl md:text-5xl font-black font-epilogue mb-4">
                Consultoría <span className="text-orange-500">a la Medida</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {servicios.map((servicio, idx) => {
                const Icon = servicio.icon;
                const colors = {
                  teal: 'from-teal-500 to-teal-600',
                  green: 'from-green-500 to-green-600',
                  orange: 'from-orange-500 to-orange-600'
                };

                return (
                  <div key={idx} className="group p-8 bg-slate-900/50 border border-white/5 rounded-3xl hover:border-white/20 transition-all duration-500">
                    <div className={`w-16 h-16 bg-gradient-to-br ${colors[servicio.color]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                      <Icon size={28} className="text-white" />
                    </div>

                    <h3 className="text-2xl font-black mb-4 font-epilogue">
                      {servicio.title}
                    </h3>

                    <p className="text-slate-400 leading-relaxed mb-6">
                      {servicio.description}
                    </p>

                    <button className="text-sm font-bold text-green-400 flex items-center gap-2 hover:gap-4 transition-all">
                      Saber más <ArrowRight size={14} />
                    </button>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Champion IA CTA */}
          <section className="py-20 px-6 max-w-7xl mx-auto">
            <div className="relative bg-gradient-to-br from-orange-900/40 via-slate-900/60 to-teal-900/40 border-2 border-orange-500/30 rounded-[3rem] overflow-hidden p-12">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-block px-4 py-2 rounded-full bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest mb-6">
                    🏆 Nuevo Programa
                  </div>

                  <h2 className="text-4xl md:text-5xl font-black mb-6 font-epilogue">
                    <span className="text-orange-500">Champion IA:</span><br />
                    Multiplica Tu Productividad
                  </h2>

                  <p className="text-xl text-slate-300 mb-8">
                    6 semanas intensivas para convertirte en el referente de IA en tu equipo.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-green-400" size={20} />
                      <span className="text-sm font-bold">30h contenido</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-green-400" size={20} />
                      <span className="text-sm font-bold">6 módulos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-green-400" size={20} />
                      <span className="text-sm font-bold">2 certificaciones</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-green-400" size={20} />
                      <span className="text-sm font-bold">100% práctico</span>
                    </div>
                  </div>

                  <a
                    href="champion-ia.html"
                    className="inline-block px-8 py-4 bg-orange-500 text-white rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/30"
                  >
                    Conocer Champion IA
                  </a>
                </div>

                <div className="relative">
                  <img
                    src="https://i.imgur.com/RHwlADm.png"
                    alt="Champion IA"
                    className="w-full rounded-2xl shadow-2xl"
                  />
                </div>
              </div>

              <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 blur-[120px] rounded-full"></div>
            </div>
          </section>

          {/* Equipo */}
          <section className="py-20 px-6 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 rounded-full bg-teal-500/10 text-teal-400 text-[10px] font-black uppercase tracking-widest mb-4">
                Equipo
              </div>
              <h2 className="text-4xl md:text-5xl font-black font-epilogue mb-4">
                Los Estrategas de <span className="text-teal-400">Ant-Ara</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              {equipo.map((member, idx) => (
                <div key={idx} className="group text-center">
                  <div className="relative inline-block mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-48 h-48 rounded-full object-cover object-top border-4 border-white/10 group-hover:border-green-400 transition-all shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-500/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>

                  <h3 className="text-2xl font-black mb-2">{member.name}</h3>
                  <p className="text-orange-500 font-bold mb-6">{member.role}</p>

                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-green-400 hover:text-green-300"
                  >
                    LinkedIn <ExternalLink size={14} />
                  </a>
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {activeTab === 'servicios' && (
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4">
          <h1 className="text-5xl md:text-7xl font-black font-epilogue mb-12">
            Nuestros <span className="text-green-400">Servicios</span>
          </h1>

          <div className="grid grid-cols-1 gap-12">
            {servicios.map((servicio, idx) => {
              const Icon = servicio.icon;
              return (
                <div key={idx} className="p-12 bg-slate-900/50 border border-white/5 rounded-3xl">
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <Icon size={36} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl font-black mb-4 font-epilogue">{servicio.title}</h2>
                      <p className="text-xl text-slate-400 leading-relaxed">{servicio.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {activeTab === 'casos' && (
        <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4">
          <h1 className="text-5xl md:text-7xl font-black font-epilogue mb-12">
            Casos de <span className="text-orange-500">Éxito</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {casosExito.map((caso, idx) => (
              <div key={idx} className="group bg-slate-900/50 border border-white/5 rounded-3xl overflow-hidden hover:border-green-500/30 transition-all">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={caso.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    alt={caso.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                </div>

                <div className="p-6">
                  <div className="text-orange-500 font-black text-xs mb-2 uppercase tracking-wide">
                    {caso.category}
                  </div>
                  <h3 className="text-2xl font-black mb-3">{caso.title}</h3>
                  <div className="text-xl font-black text-green-400 mb-4">{caso.metric}</div>
                  <p className="text-sm text-slate-400 mb-6">{caso.description}</p>

                  <a
                    href={caso.link}
                    className="inline-flex items-center gap-2 text-sm font-bold text-green-400 hover:gap-4 transition-all"
                  >
                    Ver más <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="py-16 border-t border-white/5 bg-[#070911]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src={logos.icon} className="h-12 w-12" alt="Ant-Ara" />
                <div>
                  <div className="text-xl font-black font-epilogue">ANT-ARA</div>
                  <div className="text-[10px] text-orange-500 font-bold uppercase">Estrategia con Alma</div>
                </div>
              </div>
              <p className="text-slate-400 leading-relaxed max-w-md">
                Consultoría estratégica que protege tu legado mientras impulsa la innovación.
                Especializados en PYMEs y empresas familiares guatemaltecas.
              </p>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-6">Navegación</h4>
              <div className="space-y-3">
                <button onClick={() => setActiveTab('home')} className="block text-sm text-slate-400 hover:text-green-400">Inicio</button>
                <button onClick={() => setActiveTab('servicios')} className="block text-sm text-slate-400 hover:text-green-400">Servicios</button>
                <button onClick={() => setActiveTab('casos')} className="block text-sm text-slate-400 hover:text-green-400">Casos</button>
                <a href="champion-ia.html" className="block text-sm text-slate-400 hover:text-green-400">Champion IA</a>
              </div>
            </div>

            <div>
              <h4 className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-6">Contacto</h4>
              <div className="space-y-3">
                <a href="mailto:contacto@ant-ara.com" className="block text-sm text-green-400">contacto@ant-ara.com</a>
                <a href="mailto:alejandroortegaguerra@gmail.com" className="block text-sm text-slate-400 hover:text-green-400">alejandroortegaguerra@gmail.com</a>
                <p className="text-sm text-slate-500">Guatemala, Guatemala</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 text-center text-sm text-slate-500">
            © 2025 Ant-Ara. Diseñado con Alma y Disciplina. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* Anti Chatbot Widget */}
      <div className={`fixed bottom-8 right-8 z-[100] transition-all duration-500 ${showAnti ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        <div className="w-[400px] bg-slate-900 border-2 border-green-500/30 rounded-[32px] overflow-hidden shadow-3xl">
          {/* Header */}
          <div className="p-6 bg-gradient-to-r from-teal-600 via-green-600 to-orange-600">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/20 rounded-xl backdrop-blur-sm">
                  <MessageSquare size={20} className="text-white"/>
                </div>
                <div>
                  <div className="font-black text-white text-sm">Anti 🐜</div>
                  <div className="text-[10px] text-white/80 font-bold">Asistente Estratégico</div>
                </div>
              </div>
              <button onClick={() => setShowAnti(false)} className="text-white/60 hover:text-white p-2">
                <X size={20}/>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="h-[400px] overflow-y-auto p-6 bg-[#0a0a0f] space-y-4">
            {antiMessages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl ${
                  msg.from === 'user'
                    ? 'bg-green-500 text-white'
                    : 'bg-white/5 border border-white/10 text-slate-200'
                }`}>
                  <div className="text-sm leading-relaxed whitespace-pre-line">{msg.text}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          {antiMessages.length === 1 && (
            <div className="p-4 bg-[#0a0a0f] border-t border-white/5">
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wide mb-3">Respuestas rápidas:</div>
              <div className="grid grid-cols-2 gap-2">
                {quickReplies.map(reply => (
                  <button
                    key={reply}
                    onClick={() => handleAntiMessage(reply)}
                    className="p-3 bg-white/5 border border-white/10 rounded-xl text-xs font-bold hover:bg-green-500 hover:text-white hover:border-green-500 transition-all text-left"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 bg-[#0a0a0f] border-t border-white/5">
            <div className="flex gap-3">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && userInput.trim() && handleAntiMessage(userInput)}
                placeholder="Escribe tu pregunta..."
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-full text-sm focus:outline-none focus:border-green-500 transition-all"
              />
              <button
                onClick={() => userInput.trim() && handleAntiMessage(userInput)}
                className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center hover:bg-green-600 transition-all"
              >
                <Send size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      {!showAnti && (
        <button
          onClick={() => setShowAnti(true)}
          className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 text-white rounded-full flex items-center justify-center shadow-2xl shadow-green-500/40 hover:scale-110 active:scale-95 transition-all z-[90]"
        >
          <MessageSquare size={28}/>
        </button>
      )}

      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Epilogue:wght@900&family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        .font-epilogue { font-family: 'Epilogue', sans-serif; }
        .font-inter { font-family: 'Inter', sans-serif; }
        .shadow-3xl { box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.6); }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-in-from-bottom-4 {
          from { transform: translateY(1rem); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-in {
          animation: fade-in 0.5s ease-out, slide-in-from-bottom-4 0.5s ease-out;
        }
      `}} />
    </div>
  );
};

export default AntAraApp;
