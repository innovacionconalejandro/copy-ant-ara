import React from 'https://esm.sh/react@18.2.0';
import { createRoot } from 'https://esm.sh/react-dom@18.2.0/client';

// ============================================
// CHAMPION IA DATA CONFIGURATION
// ============================================

const PROGRAM_DATA = {
  hero: {
    title: "Champion IA",
    subtitle: "Domina la IA en 6 Semanas",
    description: "Certifícate como experto en productividad con Inteligencia Artificial y transforma tu carrera profesional.",
    cta: "Comenzar Ahora",
    image: "https://i.imgur.com/RHwlADm.png" // Hexagonal logo
  },

  stats: [
    { number: "6", label: "Semanas de Entrenamiento" },
    { number: "200+", label: "Herramientas IA" },
    { number: "95%", label: "Tasa de Satisfacción" },
    { number: "100%", label: "Online y Flexible" }
  ],

  beforeAfter: {
    before: [
      "Pasas horas en tareas repetitivas que drenan tu energía",
      "Te sientes abrumado por la cantidad de trabajo diario",
      "No sabes cómo usar IA efectivamente en tu trabajo",
      "Ves que otros avanzan mientras tú te quedas atrás",
      "Tienes miedo de que la IA reemplace tu trabajo"
    ],
    after: [
      "Automatizas tareas rutinarias y recuperas 10+ horas semanales",
      "Trabajas más inteligente, no más duro, con resultados medibles",
      "Dominas herramientas IA que multiplican tu productividad",
      "Te conviertes en el experto IA de tu equipo u organización",
      "La IA se convierte en tu ventaja competitiva, no tu amenaza"
    ]
  },

  modules: [
    {
      week: "Semana 1-2",
      title: "Fundamentos de IA",
      description: "Comprende los conceptos esenciales de IA, Machine Learning y cómo aplicarlos en tu día a día profesional.",
      topics: ["Introducción a IA", "Prompts efectivos", "Ética en IA", "Casos de uso reales"],
      icon: "🎯"
    },
    {
      week: "Semana 3-4",
      title: "Herramientas Avanzadas",
      description: "Domina las principales plataformas de IA: ChatGPT, Claude, Gemini, Midjourney, y más de 200 herramientas especializadas.",
      topics: ["GPT-4 & Claude", "IA Generativa", "Automatización", "Integración de herramientas"],
      icon: "🚀"
    },
    {
      week: "Semana 5-6",
      title: "Aplicación Práctica",
      description: "Implementa soluciones IA en tu trabajo, crea workflows automatizados y presenta tu proyecto de certificación.",
      topics: ["Proyecto final", "Workflows IA", "ROI medible", "Certificación oficial"],
      icon: "🏆"
    }
  ],

  pricing: {
    title: "Inversión en Tu Futuro",
    price: "Q1,997",
    originalPrice: "Q2,997",
    discount: "33% OFF",
    features: [
      "6 semanas de entrenamiento intensivo",
      "Acceso de por vida a materiales actualizados",
      "Certificación oficial Champion IA",
      "Comunidad privada de alumnos",
      "Sesiones de Q&A en vivo",
      "Plantillas y recursos descargables",
      "Soporte personalizado",
      "Garantía de satisfacción 7 días"
    ],
    cta: "Inscribirme Ahora",
    guarantee: "🛡️ Garantía de satisfacción de 7 días o te devolvemos tu dinero"
  },

  faqs: [
    {
      question: "¿Necesito conocimientos técnicos previos?",
      answer: "No. Champion IA está diseñado para profesionales de cualquier área. Si usas computadora y correo electrónico, estás listo para empezar."
    },
    {
      question: "¿Cuánto tiempo debo dedicar semanalmente?",
      answer: "Recomendamos 3-5 horas por semana: 2 horas de contenido + 1-3 horas de práctica. El programa es flexible para adaptarse a tu horario."
    },
    {
      question: "¿La certificación tiene validez internacional?",
      answer: "Sí. La certificación Champion IA está respaldada por Ant-Ara y es reconocida por empresas que buscan profesionales capacitados en IA."
    },
    {
      question: "¿Qué pasa si me atraso en el contenido?",
      answer: "Tienes acceso de por vida al material. Puedes ir a tu propio ritmo, aunque recomendamos seguir el programa de 6 semanas para mejores resultados."
    },
    {
      question: "¿Ofrecen soporte durante el programa?",
      answer: "Sí. Tendrás acceso a nuestra comunidad privada, sesiones de Q&A en vivo, y soporte por email para resolver todas tus dudas."
    },
    {
      question: "¿Qué incluye el proyecto final?",
      answer: "Aplicarás lo aprendido en un proyecto real de tu trabajo o emprendimiento. Recibirás retroalimentación personalizada antes de tu certificación."
    }
  ],

  testimonials: [
    {
      name: "María González",
      role: "Gerente de Marketing",
      company: "Empresa Tech",
      testimonial: "Champion IA cambió completamente mi forma de trabajar. Ahora automatizo reportes que antes me tomaban 4 horas y los genero en 15 minutos.",
      image: "https://i.pravatar.cc/150?img=5",
      rating: 5
    },
    {
      name: "Carlos Mendoza",
      role: "Consultor Independiente",
      company: "Freelancer",
      testimonial: "La inversión se pagó sola en la primera semana. Ahora puedo tomar 3x más clientes sin trabajar más horas. Increíble.",
      image: "https://i.pravatar.cc/150?img=12",
      rating: 5
    },
    {
      name: "Ana Rodríguez",
      role: "Directora de RRHH",
      company: "Corporativo GT",
      testimonial: "Capacité a todo mi equipo con Champion IA. Los resultados son medibles: 40% más productividad y empleados mucho más motivados.",
      image: "https://i.pravatar.cc/150?img=9",
      rating: 5
    }
  ]
};

// Color scheme for Champion IA (more vibrant, educational)
const COLORS = {
  primary: '#6366f1', // Indigo
  secondary: '#f59e0b', // Amber
  accent: '#10b981', // Emerald
  dark: '#0f172a',
  light: '#f1f5f9'
};

// ============================================
// ANTI CHATBOT FOR CHAMPION IA
// ============================================

const AntiChatbot = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = React.useState([
    {
      type: 'bot',
      text: '¡Hola! Soy Anti 🐜, tu asistente virtual. ¿En qué puedo ayudarte con Champion IA?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = React.useState('');
  const messagesEndRef = React.useRef(null);

  const knowledge = {
    programa: {
      keywords: ['programa', 'curso', 'qué es', 'champion', 'contenido', 'aprendo'],
      response: "Champion IA es un programa de certificación de 6 semanas donde aprenderás:\n\n🎯 Semana 1-2: Fundamentos de IA\n🚀 Semana 3-4: Herramientas Avanzadas (200+ herramientas)\n🏆 Semana 5-6: Aplicación Práctica y Certificación\n\nTodo 100% online y flexible."
    },
    precio: {
      keywords: ['precio', 'costo', 'cuanto', 'inversión', 'pago', 'cuota'],
      response: "La inversión es de Q1,997 (precio especial, antes Q2,997).\n\nIncluye:\n✅ 6 semanas de entrenamiento\n✅ Acceso de por vida\n✅ Certificación oficial\n✅ Comunidad privada\n✅ Soporte personalizado\n✅ Garantía de 7 días"
    },
    requisitos: {
      keywords: ['requisitos', 'necesito', 'conocimientos', 'previo', 'técnico'],
      response: "¡No necesitas conocimientos técnicos previos! 😊\n\nSolo necesitas:\n• Computadora con internet\n• Ganas de aprender\n• 3-5 horas por semana\n\nEl programa está diseñado para profesionales de cualquier área."
    },
    certificacion: {
      keywords: ['certificación', 'certificado', 'diploma', 'validez', 'reconocido'],
      response: "La certificación Champion IA:\n\n🏆 Es oficial y está respaldada por Ant-Ara\n🌎 Tiene validez internacional\n📄 La recibes al completar el programa y proyecto final\n💼 Es reconocida por empresas que buscan expertos en IA"
    },
    duracion: {
      keywords: ['duración', 'cuanto dura', 'tiempo', 'semanas', 'horas'],
      response: "El programa dura 6 semanas con:\n\n⏱️ 3-5 horas por semana recomendadas\n📚 2 horas de contenido semanal\n💻 1-3 horas de práctica\n🔄 Acceso de por vida al material\n\nPuedes ir a tu propio ritmo, aunque recomendamos seguir el cronograma."
    },
    soporte: {
      keywords: ['soporte', 'ayuda', 'preguntas', 'dudas', 'apoyo'],
      response: "Recibirás soporte completo:\n\n👥 Comunidad privada de alumnos\n🎥 Sesiones de Q&A en vivo\n📧 Soporte por email\n💬 Retroalimentación en proyecto final\n\n¡Nunca estarás solo en tu aprendizaje!"
    },
    iniciar: {
      keywords: ['inscribir', 'registrar', 'empezar', 'comenzar', 'unirme', 'comprar'],
      response: "¡Excelente decisión! 🎉\n\nPara inscribirte:\n1. Haz clic en 'Inscribirme Ahora'\n2. Completa el formulario\n3. Elige tu método de pago\n4. ¡Comienza de inmediato!\n\n¿Te ayudo con algo más antes de inscribirte?"
    },
    contacto: {
      keywords: ['contacto', 'hablar', 'email', 'teléfono', 'whatsapp'],
      response: "Puedes contactarnos:\n\n📧 Email: hola@ant-ara.com\n💬 WhatsApp: +502 1234-5678\n🌐 Web: www.ant-ara.com\n\n¡Responderemos en menos de 24 horas!"
    }
  };

  const quickReplies = [
    "¿Qué incluye el programa?",
    "¿Cuánto cuesta?",
    "¿Necesito experiencia técnica?",
    "¿Cómo me inscribo?"
  ];

  const findBestMatch = (userInput) => {
    const input = userInput.toLowerCase();

    for (const [key, data] of Object.entries(knowledge)) {
      if (data.keywords.some(keyword => input.includes(keyword))) {
        return data.response;
      }
    }

    return "Interesante pregunta. 🤔 Te recomiendo:\n\n• Revisar la sección de Preguntas Frecuentes\n• Contactarnos directamente: hola@ant-ara.com\n• Usar los botones de respuesta rápida\n\n¿Hay algo específico sobre el programa, precio o certificación que quieras saber?";
  };

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    const userMessage = {
      type: 'user',
      text: text,
      timestamp: new Date()
    };

    const botResponse = {
      type: 'bot',
      text: findBestMatch(text),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInputValue('');
  };

  const handleQuickReply = (reply) => {
    handleSendMessage(reply);
  };

  React.useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
          border: 'none',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(99, 102, 241, 0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '28px',
          zIndex: 1000,
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          transform: isOpen ? 'scale(0.9)' : 'scale(1)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(99, 102, 241, 0.6)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = isOpen ? 'scale(0.9)' : 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(99, 102, 241, 0.4)';
        }}
      >
        {isOpen ? '✕' : '🐜'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '100px',
          right: '24px',
          width: '380px',
          height: '600px',
          background: 'rgba(15, 23, 42, 0.98)',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
          border: '1px solid rgba(99, 102, 241, 0.2)',
          zIndex: 999,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          animation: 'slideUp 0.3s ease'
        }}>
          {/* Header */}
          <div style={{
            padding: '20px',
            background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
            color: 'white',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ fontSize: '32px' }}>🐜</div>
              <div>
                <div style={{ fontWeight: '600', fontSize: '16px' }}>Anti</div>
                <div style={{ fontSize: '12px', opacity: 0.9 }}>Asistente Champion IA</div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  justifyContent: msg.type === 'user' ? 'flex-end' : 'flex-start'
                }}
              >
                <div style={{
                  maxWidth: '75%',
                  padding: '12px 16px',
                  borderRadius: '16px',
                  background: msg.type === 'user'
                    ? `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`
                    : 'rgba(99, 102, 241, 0.1)',
                  color: 'white',
                  fontSize: '14px',
                  lineHeight: '1.5',
                  whiteSpace: 'pre-wrap',
                  border: msg.type === 'bot' ? '1px solid rgba(99, 102, 241, 0.2)' : 'none'
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length <= 2 && (
            <div style={{
              padding: '0 20px 12px',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px'
            }}>
              {quickReplies.map((reply, idx) => (
                <button
                  key={idx}
                  onClick={() => handleQuickReply(reply)}
                  style={{
                    padding: '8px 12px',
                    background: 'rgba(99, 102, 241, 0.1)',
                    border: '1px solid rgba(99, 102, 241, 0.3)',
                    borderRadius: '12px',
                    color: COLORS.primary,
                    fontSize: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(99, 102, 241, 0.2)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {reply}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div style={{
            padding: '16px 20px',
            borderTop: '1px solid rgba(99, 102, 241, 0.2)',
            background: 'rgba(15, 23, 42, 0.8)',
            display: 'flex',
            gap: '12px'
          }}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputValue)}
              placeholder="Escribe tu pregunta..."
              style={{
                flex: 1,
                padding: '12px 16px',
                background: 'rgba(99, 102, 241, 0.1)',
                border: '1px solid rgba(99, 102, 241, 0.2)',
                borderRadius: '12px',
                color: 'white',
                fontSize: '14px',
                outline: 'none'
              }}
            />
            <button
              onClick={() => handleSendMessage(inputValue)}
              style={{
                padding: '12px 20px',
                background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
                border: 'none',
                borderRadius: '12px',
                color: 'white',
                cursor: 'pointer',
                fontWeight: '600',
                fontSize: '14px'
              }}
            >
              Enviar
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

// ============================================
// MAIN APP COMPONENT
// ============================================

const ChampionIAApp = () => {
  const [activeTab, setActiveTab] = React.useState('inicio');
  const [activeFaq, setActiveFaq] = React.useState(null);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div style={{
      background: COLORS.dark,
      minHeight: '100vh',
      color: 'white',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: 'rgba(15, 23, 42, 0.9)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(99, 102, 241, 0.1)',
        padding: '16px 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img src={PROGRAM_DATA.hero.image} alt="Champion IA" style={{ height: '40px' }} />
            <span style={{ fontSize: '20px', fontWeight: '700', background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Champion IA
            </span>
          </div>

          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            {['inicio', 'programa', 'inversión'].map(tab => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  scrollToSection(tab);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: activeTab === tab ? COLORS.primary : 'rgba(255, 255, 255, 0.7)',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  textTransform: 'capitalize'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(99, 102, 241, 0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'none'}
              >
                {tab}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('inscripcion')}
              style={{
                padding: '10px 24px',
                background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
                border: 'none',
                borderRadius: '12px',
                color: 'white',
                fontWeight: '600',
                fontSize: '14px',
                cursor: 'pointer',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Inscribirme
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" style={{
        marginTop: '80px',
        padding: '80px 24px',
        background: `radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.15), transparent 50%), radial-gradient(circle at 80% 80%, rgba(245, 158, 11, 0.15), transparent 50%)`,
        position: 'relative'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 20px',
            background: 'rgba(99, 102, 241, 0.1)',
            border: `1px solid ${COLORS.primary}`,
            borderRadius: '24px',
            fontSize: '12px',
            fontWeight: '600',
            color: COLORS.primary,
            marginBottom: '24px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Certificación Oficial
          </div>

          <h1 style={{
            fontSize: '64px',
            fontWeight: '800',
            marginBottom: '24px',
            background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: '1.1'
          }}>
            {PROGRAM_DATA.hero.title}
          </h1>

          <p style={{
            fontSize: '28px',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '16px',
            fontWeight: '600'
          }}>
            {PROGRAM_DATA.hero.subtitle}
          </p>

          <p style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.6)',
            marginBottom: '48px',
            maxWidth: '700px',
            margin: '0 auto 48px'
          }}>
            {PROGRAM_DATA.hero.description}
          </p>

          <button
            onClick={() => scrollToSection('inscripcion')}
            style={{
              padding: '18px 48px',
              background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
              border: 'none',
              borderRadius: '16px',
              color: 'white',
              fontSize: '18px',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0 8px 24px rgba(99, 102, 241, 0.4)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(99, 102, 241, 0.6)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(99, 102, 241, 0.4)';
            }}
          >
            {PROGRAM_DATA.hero.cta} →
          </button>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            marginTop: '80px'
          }}>
            {PROGRAM_DATA.stats.map((stat, idx) => (
              <div key={idx} style={{
                padding: '32px',
                background: 'rgba(99, 102, 241, 0.05)',
                border: '1px solid rgba(99, 102, 241, 0.2)',
                borderRadius: '20px',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{
                  fontSize: '36px',
                  fontWeight: '800',
                  color: COLORS.primary,
                  marginBottom: '8px'
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: '14px',
                  color: 'rgba(255, 255, 255, 0.7)'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section style={{
        padding: '80px 24px',
        background: 'rgba(15, 23, 42, 0.5)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: '16px'
          }}>
            Tu Transformación en 6 Semanas
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.6)',
            textAlign: 'center',
            marginBottom: '64px'
          }}>
            Así cambiará tu vida profesional con Champion IA
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
            gap: '32px'
          }}>
            {/* Before */}
            <div style={{
              padding: '40px',
              background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(220, 38, 38, 0.05))',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              borderRadius: '24px'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>😫</div>
              <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px' }}>
                Antes de Champion IA
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {PROGRAM_DATA.beforeAfter.before.map((item, idx) => (
                  <li key={idx} style={{
                    padding: '12px 0',
                    borderBottom: '1px solid rgba(239, 68, 68, 0.1)',
                    color: 'rgba(255, 255, 255, 0.7)',
                    fontSize: '16px',
                    lineHeight: '1.6'
                  }}>
                    ❌ {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div style={{
              padding: '40px',
              background: `linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(245, 158, 11, 0.05))`,
              border: `1px solid ${COLORS.primary}`,
              borderRadius: '24px'
            }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>🏆</div>
              <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px' }}>
                Después de Champion IA
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {PROGRAM_DATA.beforeAfter.after.map((item, idx) => (
                  <li key={idx} style={{
                    padding: '12px 0',
                    borderBottom: `1px solid rgba(99, 102, 241, 0.1)`,
                    color: 'rgba(255, 255, 255, 0.9)',
                    fontSize: '16px',
                    lineHeight: '1.6'
                  }}>
                    ✅ {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Program Modules */}
      <section id="programa" style={{
        padding: '80px 24px',
        background: `radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.1), transparent 70%)`
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: '16px'
          }}>
            Programa de 6 Semanas
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.6)',
            textAlign: 'center',
            marginBottom: '64px'
          }}>
            De principiante a experto certificado en IA
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '32px'
          }}>
            {PROGRAM_DATA.modules.map((module, idx) => (
              <div key={idx} style={{
                padding: '40px',
                background: 'rgba(99, 102, 241, 0.05)',
                border: '1px solid rgba(99, 102, 241, 0.2)',
                borderRadius: '24px',
                backdropFilter: 'blur(10px)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(99, 102, 241, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <div style={{ fontSize: '48px', marginBottom: '16px' }}>{module.icon}</div>
                <div style={{
                  fontSize: '12px',
                  color: COLORS.secondary,
                  fontWeight: '600',
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px'
                }}>
                  {module.week}
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>
                  {module.title}
                </h3>
                <p style={{
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 0.7)',
                  marginBottom: '24px',
                  lineHeight: '1.6'
                }}>
                  {module.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {module.topics.map((topic, topicIdx) => (
                    <span key={topicIdx} style={{
                      padding: '6px 12px',
                      background: 'rgba(99, 102, 241, 0.1)',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                      borderRadius: '8px',
                      fontSize: '12px',
                      color: COLORS.primary
                    }}>
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="inversión" style={{
        padding: '80px 24px',
        background: 'rgba(15, 23, 42, 0.5)'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '800',
            marginBottom: '16px'
          }}>
            {PROGRAM_DATA.pricing.title}
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.6)',
            marginBottom: '48px'
          }}>
            Una inversión que se paga sola en semanas
          </p>

          <div style={{
            padding: '48px',
            background: `linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(245, 158, 11, 0.05))`,
            border: `2px solid ${COLORS.primary}`,
            borderRadius: '32px',
            position: 'relative'
          }}>
            {/* Discount Badge */}
            <div style={{
              position: 'absolute',
              top: '-16px',
              right: '32px',
              padding: '8px 20px',
              background: COLORS.secondary,
              borderRadius: '24px',
              fontSize: '14px',
              fontWeight: '700',
              color: 'white'
            }}>
              {PROGRAM_DATA.pricing.discount}
            </div>

            <div style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.5)',
              textDecoration: 'line-through',
              marginBottom: '8px'
            }}>
              {PROGRAM_DATA.pricing.originalPrice}
            </div>

            <div style={{
              fontSize: '64px',
              fontWeight: '800',
              background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '32px'
            }}>
              {PROGRAM_DATA.pricing.price}
            </div>

            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: '0 0 40px 0',
              textAlign: 'left'
            }}>
              {PROGRAM_DATA.pricing.features.map((feature, idx) => (
                <li key={idx} style={{
                  padding: '12px 0',
                  borderBottom: '1px solid rgba(99, 102, 241, 0.1)',
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 0.9)'
                }}>
                  ✅ {feature}
                </li>
              ))}
            </ul>

            <button
              id="inscripcion"
              onClick={() => window.location.href = 'mailto:hola@ant-ara.com?subject=Inscripción Champion IA'}
              style={{
                width: '100%',
                padding: '20px',
                background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
                border: 'none',
                borderRadius: '16px',
                color: 'white',
                fontSize: '18px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                boxShadow: '0 8px 24px rgba(99, 102, 241, 0.4)',
                marginBottom: '24px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(99, 102, 241, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(99, 102, 241, 0.4)';
              }}
            >
              {PROGRAM_DATA.pricing.cta} 🚀
            </button>

            <p style={{
              fontSize: '14px',
              color: 'rgba(255, 255, 255, 0.6)',
              margin: 0
            }}>
              {PROGRAM_DATA.pricing.guarantee}
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{
        padding: '80px 24px',
        background: `radial-gradient(circle at 30% 50%, rgba(99, 102, 241, 0.1), transparent 60%)`
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: '64px'
          }}>
            Lo Que Dicen Nuestros Champions
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '32px'
          }}>
            {PROGRAM_DATA.testimonials.map((testimonial, idx) => (
              <div key={idx} style={{
                padding: '32px',
                background: 'rgba(99, 102, 241, 0.05)',
                border: '1px solid rgba(99, 102, 241, 0.2)',
                borderRadius: '24px',
                backdropFilter: 'blur(10px)'
              }}>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '20px' }}>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '50%',
                      border: `2px solid ${COLORS.primary}`
                    }}
                  />
                  <div>
                    <div style={{ fontWeight: '700', fontSize: '16px', marginBottom: '4px' }}>
                      {testimonial.name}
                    </div>
                    <div style={{ fontSize: '14px', color: 'rgba(255, 255, 255, 0.6)' }}>
                      {testimonial.role}
                    </div>
                    <div style={{ fontSize: '12px', color: COLORS.primary }}>
                      {testimonial.company}
                    </div>
                  </div>
                </div>
                <p style={{
                  fontSize: '16px',
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6',
                  marginBottom: '16px',
                  fontStyle: 'italic'
                }}>
                  "{testimonial.testimonial}"
                </p>
                <div style={{ color: COLORS.secondary }}>
                  {'⭐'.repeat(testimonial.rating)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section style={{
        padding: '80px 24px',
        background: 'rgba(15, 23, 42, 0.5)'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '800',
            textAlign: 'center',
            marginBottom: '16px'
          }}>
            Preguntas Frecuentes
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.6)',
            textAlign: 'center',
            marginBottom: '64px'
          }}>
            Todo lo que necesitas saber sobre Champion IA
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {PROGRAM_DATA.faqs.map((faq, idx) => (
              <div key={idx} style={{
                background: 'rgba(99, 102, 241, 0.05)',
                border: '1px solid rgba(99, 102, 241, 0.2)',
                borderRadius: '16px',
                overflow: 'hidden'
              }}>
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '24px',
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    fontSize: '18px',
                    fontWeight: '600',
                    textAlign: 'left',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  {faq.question}
                  <span style={{
                    fontSize: '24px',
                    color: COLORS.primary,
                    transition: 'transform 0.3s ease',
                    transform: activeFaq === idx ? 'rotate(180deg)' : 'rotate(0)'
                  }}>
                    ↓
                  </span>
                </button>
                {activeFaq === idx && (
                  <div style={{
                    padding: '0 24px 24px',
                    fontSize: '16px',
                    color: 'rgba(255, 255, 255, 0.7)',
                    lineHeight: '1.6'
                  }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{
        padding: '80px 24px',
        background: `radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.2), transparent 70%)`,
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '48px',
            fontWeight: '800',
            marginBottom: '24px',
            lineHeight: '1.2'
          }}>
            ¿Listo Para Convertirte en un Champion de IA?
          </h2>
          <p style={{
            fontSize: '20px',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '48px'
          }}>
            Únete a cientos de profesionales que ya están transformando su carrera con IA
          </p>
          <button
            onClick={() => window.location.href = 'mailto:hola@ant-ara.com?subject=Inscripción Champion IA'}
            style={{
              padding: '20px 64px',
              background: `linear-gradient(135deg, ${COLORS.primary}, ${COLORS.secondary})`,
              border: 'none',
              borderRadius: '16px',
              color: 'white',
              fontSize: '20px',
              fontWeight: '700',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              boxShadow: '0 12px 32px rgba(99, 102, 241, 0.5)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 16px 48px rgba(99, 102, 241, 0.7)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(99, 102, 241, 0.5)';
            }}
          >
            Inscribirme Ahora 🚀
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '48px 24px',
        borderTop: '1px solid rgba(99, 102, 241, 0.2)',
        textAlign: 'center',
        background: 'rgba(15, 23, 42, 0.8)'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '32px',
            marginBottom: '24px',
            flexWrap: 'wrap'
          }}>
            <a href="https://ant-ara.com" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>
              Ant-Ara.com
            </a>
            <a href="mailto:hola@ant-ara.com" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>
              hola@ant-ara.com
            </a>
            <a href="https://linkedin.com/company/ant-ara" style={{ color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none' }}>
              LinkedIn
            </a>
          </div>
          <p style={{
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.5)',
            margin: 0
          }}>
            © 2026 Ant-Ara. Todos los derechos reservados. | Hecho con 🐜 en Guatemala
          </p>
        </div>
      </footer>

      {/* Anti Chatbot */}
      <AntiChatbot />

      {/* Global Styles */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          overflow-x: hidden;
        }

        button {
          font-family: inherit;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

// Mount the app
const root = createRoot(document.getElementById('root'));
root.render(<ChampionIAApp />);
