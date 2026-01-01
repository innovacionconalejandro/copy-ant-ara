// Anti - Asistente Virtual de Ant-Ara 🐜
// Chatbot simple e inteligente para tu sitio web

const AntiChatbot = {
  // Configuración
  config: {
    name: "Anti",
    greeting: "¡Hola! Soy Anti 🐜, tu asistente virtual de Ant-Ara.",
    subgreeting: "¿En qué puedo ayudarte hoy?",
    colors: {
      primary: "#2F4F4F",
      accent: "#FF6B35",
      white: "#FFFFFF",
      gray: "#f8f9fa"
    }
  },

  // Base de conocimiento
  knowledge: {
    servicios: {
      keywords: ["servicios", "qué hacen", "ofrecen", "ayuda", "consultoría"],
      response: "En Ant-Ara ofrecemos 3 servicios principales:\n\n" +
                "🛡️ **Gestión de Riesgos**: Blindamos tu patrimonio digital\n" +
                "🤖 **Optimización con IA**: Automatizamos procesos\n" +
                "🎓 **Academia IA**: Programas de certificación\n\n" +
                "¿Sobre cuál quieres saber más?",
      links: [
        { text: "Ver todos los servicios", url: "#servicios" }
      ]
    },

    casos: {
      keywords: ["casos", "ejemplos", "éxito", "proyectos", "resultados"],
      response: "Tenemos casos de éxito comprobados:\n\n" +
                "🏆 **TOLIVIA**: 40% reducción en costos operativos\n" +
                "📈 **DKORANDO**: 65% incremento en leads\n" +
                "⚡ **Coffee Parties**: 50% menos tiempo de planificación\n\n" +
                "¿Quieres ver los detalles?",
      links: [
        { text: "Ver casos completos", url: "#casos" }
      ]
    },

    costos: {
      keywords: ["costos", "caro", "precios", "cuánto", "inversión", "precio"],
      response: "Entiendo que te preocupan los costos. En Ant-Ara trabajamos con:\n\n" +
                "💰 Diagnóstico estratégico GRATUITO\n" +
                "📊 Propuestas personalizadas según tu presupuesto\n" +
                "✅ ROI garantizado en nuestros proyectos\n\n" +
                "Nuestros clientes han visto retornos de hasta 3x su inversión.",
      links: [
        { text: "Agendar diagnóstico gratis", url: "#contacto" }
      ]
    },

    tiempo: {
      keywords: ["cuánto tiempo", "duración", "rápido", "pronto", "demora"],
      response: "Los tiempos dependen del proyecto:\n\n" +
                "⚡ Diagnóstico: 1-2 semanas\n" +
                "🚀 Implementación IA: 4-8 semanas\n" +
                "🏗️ Transformación completa: 3-6 meses\n\n" +
                "Te damos un cronograma claro desde el inicio.",
      links: [
        { text: "Agenda una llamada", url: "#contacto" }
      ]
    },

    champion: {
      keywords: ["champion", "curso", "ia", "aprender", "certificación", "capacitación"],
      response: "¡El **Programa Champion IA** es perfecto para ti!\n\n" +
                "✨ 6 semanas intensivas\n" +
                "🎓 Certificación internacional incluida\n" +
                "💪 De principiante a experto en IA\n" +
                "💵 Desde $200 USD\n\n" +
                "Más de 30 profesionales ya se certificaron.",
      links: [
        { text: "Ver programa completo", url: "champion-ia.html" }
      ]
    },

    problema_empresa: {
      keywords: ["problema", "ayuda con", "necesito", "tengo un", "mi empresa"],
      response: "Cuéntame más sobre tu situación:\n\n" +
                "¿Tu problema está relacionado con:\n" +
                "• Costos operativos altos?\n" +
                "• Procesos lentos?\n" +
                "• Falta de leads?\n" +
                "• Riesgos de seguridad?\n\n" +
                "Basado en tu respuesta, te puedo recomendar la mejor solución.",
      links: [
        { text: "Hablar con un experto", url: "#contacto" }
      ]
    },

    contacto: {
      keywords: ["contacto", "hablar", "llamar", "email", "whatsapp", "agendar"],
      response: "¡Perfecto! Puedes contactarnos por:\n\n" +
                "📧 **Email**: contacto@ant-ara.com\n" +
                "📧 alejandroortegaguerra@gmail.com\n" +
                "💬 **Telegram**: @productividadconia\n\n" +
                "O agenda tu diagnóstico estratégico GRATUITO:",
      links: [
        { text: "Ir a contacto", url: "#contacto" }
      ]
    },

    default: {
      response: "Interesante pregunta. Déjame ayudarte:\n\n" +
                "Puedo contarte sobre:\n" +
                "• Nuestros servicios de consultoría\n" +
                "• Casos de éxito comprobados\n" +
                "• El programa Champion IA\n" +
                "• Cómo podemos ayudar a tu empresa\n\n" +
                "¿Qué te interesa más?",
      links: [
        { text: "Ver todos los servicios", url: "#servicios" },
        { text: "Hablar con un humano", url: "#contacto" }
      ]
    }
  },

  // Respuestas rápidas (botones)
  quickReplies: [
    { text: "¿Qué servicios ofrecen?", trigger: "servicios" },
    { text: "Ver casos de éxito", trigger: "casos" },
    { text: "Sobre Champion IA", trigger: "champion" },
    { text: "Tengo un problema en mi empresa", trigger: "problema_empresa" },
    { text: "¿Cuánto cuesta?", trigger: "costos" },
    { text: "Quiero contactarlos", trigger: "contacto" }
  ],

  // Lógica de matching
  findBestMatch(userInput) {
    const input = userInput.toLowerCase().trim();

    // Buscar en cada categoría
    for (const [key, data] of Object.entries(this.knowledge)) {
      if (key === 'default') continue;

      // Verificar si alguna keyword hace match
      const hasMatch = data.keywords.some(keyword =>
        input.includes(keyword.toLowerCase())
      );

      if (hasMatch) {
        return data;
      }
    }

    // Si no hay match, retornar default
    return this.knowledge.default;
  },

  // Procesar mensaje
  processMessage(message) {
    // Si es un trigger de quick reply
    if (this.knowledge[message]) {
      return this.knowledge[message];
    }

    // Si es texto libre, buscar mejor match
    return this.findBestMatch(message);
  },

  // Inicializar
  init() {
    this.render();
    this.attachEventListeners();
  },

  // Renderizar UI
  render() {
    const chatHTML = `
      <div id="anti-chatbot-container" style="position: fixed; bottom: 20px; right: 20px; z-index: 9999; font-family: 'Inter', sans-serif;">
        <!-- Botón flotante -->
        <button id="anti-chat-toggle" style="
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, ${this.config.colors.primary} 0%, ${this.config.colors.accent} 100%);
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          position: relative;
        ">
          <span style="font-size: 28px;">🐜</span>
          <span id="anti-notification-badge" style="
            position: absolute;
            top: -5px;
            right: -5px;
            width: 20px;
            height: 20px;
            background: ${this.config.colors.accent};
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            font-weight: bold;
            color: white;
            display: none;
          ">1</span>
        </button>

        <!-- Ventana de chat -->
        <div id="anti-chat-window" style="
          position: absolute;
          bottom: 80px;
          right: 0;
          width: 380px;
          max-width: calc(100vw - 40px);
          height: 600px;
          max-height: calc(100vh - 120px);
          background: white;
          border-radius: 20px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.12);
          display: none;
          flex-direction: column;
          overflow: hidden;
        ">
          <!-- Header -->
          <div style="
            background: linear-gradient(135deg, ${this.config.colors.primary} 0%, ${this.config.colors.accent} 100%);
            color: white;
            padding: 20px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          ">
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="
                width: 45px;
                height: 45px;
                background: rgba(255,255,255,0.2);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 24px;
              ">🐜</div>
              <div>
                <div style="font-weight: 700; font-size: 16px;">${this.config.name}</div>
                <div style="font-size: 12px; opacity: 0.9;">Asistente Virtual</div>
              </div>
            </div>
            <button id="anti-chat-close" style="
              background: none;
              border: none;
              color: white;
              font-size: 24px;
              cursor: pointer;
              padding: 0;
              width: 30px;
              height: 30px;
              display: flex;
              align-items: center;
              justify-content: center;
            ">×</button>
          </div>

          <!-- Messages area -->
          <div id="anti-messages" style="
            flex: 1;
            overflow-y: auto;
            padding: 20px;
            background: ${this.config.colors.gray};
          ">
            <!-- Mensaje inicial -->
            <div class="anti-message anti-bot" style="margin-bottom: 15px;">
              <div style="
                background: white;
                padding: 12px 16px;
                border-radius: 12px;
                max-width: 80%;
                box-shadow: 0 2px 8px rgba(0,0,0,0.08);
              ">
                <div style="font-weight: 600; margin-bottom: 5px;">${this.config.greeting}</div>
                <div style="font-size: 14px; color: #666;">${this.config.subgreeting}</div>
              </div>
            </div>

            <!-- Quick replies iniciales -->
            <div id="anti-quick-replies" style="
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 8px;
              margin-top: 12px;
            ">
              ${this.quickReplies.map(reply => `
                <button class="anti-quick-reply" data-trigger="${reply.trigger}" style="
                  background: white;
                  border: 2px solid ${this.config.colors.primary};
                  color: ${this.config.colors.primary};
                  padding: 10px 12px;
                  border-radius: 10px;
                  font-size: 13px;
                  font-weight: 600;
                  cursor: pointer;
                  transition: all 0.3s ease;
                  text-align: left;
                ">
                  ${reply.text}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Input area -->
          <div style="
            padding: 15px;
            background: white;
            border-top: 1px solid #e0e0e0;
          ">
            <div style="display: flex; gap: 10px;">
              <input
                type="text"
                id="anti-user-input"
                placeholder="Escribe tu pregunta..."
                style="
                  flex: 1;
                  padding: 12px 16px;
                  border: 2px solid #e0e0e0;
                  border-radius: 25px;
                  font-size: 14px;
                  outline: none;
                  transition: border-color 0.3s ease;
                "
              />
              <button id="anti-send-btn" style="
                width: 45px;
                height: 45px;
                border-radius: 50%;
                background: ${this.config.colors.accent};
                border: none;
                color: white;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
                transition: all 0.3s ease;
              ">
                ➤
              </button>
            </div>
          </div>
        </div>
      </div>
    `;

    // Insertar en el DOM
    document.body.insertAdjacentHTML('beforeend', chatHTML);

    // Agregar estilos hover
    const style = document.createElement('style');
    style.textContent = `
      #anti-chat-toggle:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 20px rgba(0,0,0,0.2);
      }

      #anti-user-input:focus {
        border-color: ${this.config.colors.accent};
      }

      #anti-send-btn:hover {
        background: ${this.config.colors.primary};
        transform: scale(1.05);
      }

      .anti-quick-reply:hover {
        background: ${this.config.colors.primary};
        color: white;
        transform: translateY(-2px);
      }

      #anti-messages::-webkit-scrollbar {
        width: 6px;
      }

      #anti-messages::-webkit-scrollbar-track {
        background: transparent;
      }

      #anti-messages::-webkit-scrollbar-thumb {
        background: ${this.config.colors.primary};
        border-radius: 3px;
      }

      @media (max-width: 480px) {
        #anti-chat-window {
          width: calc(100vw - 20px);
          right: 10px;
          bottom: 70px;
        }

        #anti-quick-replies {
          grid-template-columns: 1fr !important;
        }
      }
    `;
    document.head.appendChild(style);
  },

  // Event listeners
  attachEventListeners() {
    const toggle = document.getElementById('anti-chat-toggle');
    const close = document.getElementById('anti-chat-close');
    const chatWindow = document.getElementById('anti-chat-window');
    const sendBtn = document.getElementById('anti-send-btn');
    const input = document.getElementById('anti-user-input');

    // Toggle chat
    toggle.addEventListener('click', () => {
      const isVisible = chatWindow.style.display === 'flex';
      chatWindow.style.display = isVisible ? 'none' : 'flex';

      if (!isVisible) {
        input.focus();
        // Ocultar badge de notificación
        document.getElementById('anti-notification-badge').style.display = 'none';
      }
    });

    // Close chat
    close.addEventListener('click', () => {
      chatWindow.style.display = 'none';
    });

    // Send message
    const sendMessage = () => {
      const message = input.value.trim();
      if (!message) return;

      this.addUserMessage(message);
      input.value = '';

      // Simular typing
      setTimeout(() => {
        const response = this.processMessage(message);
        this.addBotMessage(response);
      }, 500);
    };

    sendBtn.addEventListener('click', sendMessage);
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') sendMessage();
    });

    // Quick replies
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('anti-quick-reply')) {
        const trigger = e.target.dataset.trigger;
        const text = e.target.textContent;

        this.addUserMessage(text);

        setTimeout(() => {
          const response = this.processMessage(trigger);
          this.addBotMessage(response);
        }, 500);
      }
    });
  },

  // Agregar mensaje de usuario
  addUserMessage(message) {
    const messagesContainer = document.getElementById('anti-messages');

    const messageHTML = `
      <div class="anti-message anti-user" style="
        display: flex;
        justify-content: flex-end;
        margin-bottom: 15px;
      ">
        <div style="
          background: ${this.config.colors.accent};
          color: white;
          padding: 12px 16px;
          border-radius: 12px;
          max-width: 80%;
          font-size: 14px;
        ">
          ${message}
        </div>
      </div>
    `;

    messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  },

  // Agregar mensaje del bot
  addBotMessage(responseData) {
    const messagesContainer = document.getElementById('anti-messages');

    let linksHTML = '';
    if (responseData.links && responseData.links.length > 0) {
      linksHTML = responseData.links.map(link => `
        <a href="${link.url}" style="
          display: inline-block;
          background: ${this.config.colors.primary};
          color: white;
          padding: 8px 16px;
          border-radius: 8px;
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          margin-top: 8px;
          margin-right: 8px;
          transition: all 0.3s ease;
        ">${link.text}</a>
      `).join('');
    }

    const messageHTML = `
      <div class="anti-message anti-bot" style="margin-bottom: 15px;">
        <div style="
          background: white;
          padding: 12px 16px;
          border-radius: 12px;
          max-width: 80%;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        ">
          <div style="font-size: 14px; line-height: 1.6; white-space: pre-line;">
            ${responseData.response}
          </div>
          ${linksHTML ? `<div style="margin-top: 12px;">${linksHTML}</div>` : ''}
        </div>
      </div>
    `;

    messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }
};

// Auto-inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => AntiChatbot.init());
} else {
  AntiChatbot.init();
}
