/**
 * SERRANO TRABAJA — app.js
 * SPA Vanilla JS con Hash Router, Accesibilidad WCAG AA, LocalStorage y Offline-First
 * Conforme a docs/contexto/ y wireframes de Figma
 */

'use strict';

// ============================================================================
// 1. DATOS INICIALES DEL CATÁLOGO & WIREFRAMES (Fuente: glosario.md)
// ============================================================================

const TRABAJADORES = [
  {
    id: 'carlos-heredia',
    nombre: 'Carlos Heredia',
    oficio: 'Albañil y pintor',
    categoriaOficio: 'Albañilería',
    categoriaSecundaria: 'Pintura',
    zona: 'Zona Norte',
    localidad: 'Serrano',
    estrellas: 4,
    puntuacion: '4,8',
    trabajosRealizados: 47,
    disponibleHoy: true,
    destacado: true,
    telefonoConfirmado: true,
    vecinosRecomiendan: 4,
    sobreSuTrabajo: 'Hace arreglos de albañilería y pintura. Acordá con Carlos el día, los materiales y el precio antes de empezar.',
    opiniones: [
      {
        autor: 'María L.',
        estrellas: 5,
        texto: 'Excelente prolijidad y puntualidad, muy recomendable.'
      },
      {
        autor: 'Jorge P.',
        estrellas: 4,
        texto: 'Muy buen pintor, cuidó mucho los detalles del living.'
      },
      {
        autor: 'Estela M.',
        estrellas: 5,
        texto: 'Rápido y prolijo con los arreglos de albañilería.'
      }
    ]
  },
  {
    id: 'elena-gomez',
    nombre: 'Elena Gómez',
    oficio: 'Limpieza',
    categoriaOficio: 'Limpieza',
    zona: 'Zona Sur',
    localidad: 'Serrano',
    estrellas: 5,
    puntuacion: '5,0',
    trabajosRealizados: 18,
    disponibleHoy: true,
    destacado: false,
    telefonoConfirmado: true,
    vecinosRecomiendan: 6,
    sobreSuTrabajo: 'Limpieza de casas y comercios por hora o jornada completa. Referencias de familias del pueblo a disposición.',
    opiniones: [
      {
        autor: 'Carmen R.',
        estrellas: 5,
        texto: 'Muy confiable y detallista, deja todo impecable. Súper puntual.'
      }
    ]
  },
  {
    id: 'raul-diaz',
    nombre: 'Raúl Díaz',
    oficio: 'Electricidad',
    categoriaOficio: 'Electricidad',
    zona: 'Zona Norte',
    localidad: 'Serrano',
    estrellas: 4,
    puntuacion: '4,5',
    trabajosRealizados: 23,
    disponibleHoy: true,
    destacado: false,
    telefonoConfirmado: true,
    vecinosRecomiendan: 3,
    sobreSuTrabajo: 'Instalaciones domiciliarias, térmicas, disyuntores y arreglo de cortocircuitos. Trabajo garantizado.',
    opiniones: [
      {
        autor: 'Pedro G.',
        estrellas: 4,
        texto: 'Solucionó un problema eléctrico en el negocio el mismo día. Muy prolijo.'
      }
    ]
  },
  {
    id: 'marta-benitez',
    nombre: 'Marta Benítez',
    oficio: 'Limpieza',
    categoriaOficio: 'Limpieza',
    zona: 'Zona Norte',
    localidad: 'Serrano',
    estrellas: 5,
    puntuacion: '5,0',
    trabajosRealizados: 31,
    disponibleHoy: false,
    destacado: false,
    telefonoConfirmado: true,
    vecinosRecomiendan: 9,
    sobreSuTrabajo: 'Limpieza de casas quintas, patios y viviendas. Años de trayectoria en el pueblo.',
    opiniones: [
      {
        autor: 'Silvia M.',
        estrellas: 5,
        texto: 'Excelente trabajadora, sumamente educada y responsable.'
      }
    ]
  },
  {
    id: 'luis-gomez',
    nombre: 'Luis Gómez',
    oficio: 'Electricidad',
    categoriaOficio: 'Electricidad',
    zona: 'Zona Sur',
    localidad: 'Serrano',
    estrellas: 4,
    puntuacion: '4,2',
    trabajosRealizados: 9,
    disponibleHoy: true,
    destacado: false,
    telefonoConfirmado: false,
    vecinosRecomiendan: 1,
    sobreSuTrabajo: 'Electricista con herramientas propias. Cambio de cables, colocación de apliques y tomas.',
    opiniones: [
      {
        autor: 'Roberto F.',
        estrellas: 4,
        texto: 'Buen muchacho, cobró lo justo y dejó todo en condiciones.'
      }
    ]
  },
  {
    id: 'rosa-paz',
    nombre: 'Rosa Paz',
    oficio: 'Pintura',
    categoriaOficio: 'Pintura',
    zona: 'Zona Sur',
    localidad: 'Serrano',
    estrellas: 5,
    puntuacion: '4,9',
    trabajosRealizados: 14,
    disponibleHoy: false,
    destacado: false,
    telefonoConfirmado: true,
    vecinosRecomiendan: 5,
    sobreSuTrabajo: 'Pintura látex y sintético para frentes, rejas y habitaciones. Presupuestos con o sin materiales.',
    opiniones: [
      {
        autor: 'Graciela D.',
        estrellas: 5,
        texto: 'Pintó todo el comedor en un fin de semana. Cuidó los muebles y no manchó nada.'
      }
    ]
  }
];

// Trabajos iniciales de muestra (wireframe 20-Mis-trabajos — Lo que pedí)
const TRABAJOS_MUESTRA = [
  {
    id: 'trabajo-1',
    titulo: 'Pintar el living',
    estado: 'Acordado · Sin empezar',
    estadoTipo: 'acordado',
    trabajadorNombre: 'Carlos Heredia',
    oficio: 'Pintura',
    zona: 'Zona Norte',
    fecha: 'Mañana, a las 9',
    puedeCancelar: true
  },
  {
    id: 'trabajo-2',
    titulo: 'Limpiar el patio',
    estado: 'Guardado · Falta publicar',
    estadoTipo: 'guardado',
    trabajadorNombre: 'Sin asignar',
    oficio: 'Limpieza',
    zona: 'Zona Norte',
    fecha: 'Para mañana',
    puedeCancelar: true
  },
  {
    id: 'trabajo-3',
    titulo: 'Arreglar una luz',
    estado: 'Terminado · Falta opinar',
    estadoTipo: 'terminado',
    trabajadorNombre: 'Raúl Díaz',
    oficio: 'Electricidad',
    zona: 'Zona Norte',
    fecha: 'Terminó el lunes',
    puedeOpinar: true
  }
];

// Trabajos de muestra para la pestaña "Lo que hago" (Mis trabajos — Wireframe 20)
const TRABAJOS_HAGO_MUESTRA = [
  {
    id: 'hago-1',
    titulo: 'Cortar el pasto del frente',
    estado: 'Acordado · Sin empezar',
    estadoTipo: 'acordado',
    clienteNombre: 'Doña Marta',
    oficio: 'Limpieza',
    zona: 'Zona Norte',
    fecha: 'Viernes, a las 15 hs'
  },
  {
    id: 'hago-2',
    titulo: 'Cambio de cerradura',
    estado: 'Terminado · Esperando pago',
    estadoTipo: 'terminado',
    clienteNombre: 'Esteban Gomez',
    oficio: 'Albañilería',
    zona: 'Zona Sur',
    fecha: 'Ayer'
  }
];

// Changas publicadas por vecinos (Buscar › Changas — Wireframe 10 y spec §6.7)
const CHANGAS_MUESTRA = [
  {
    id: 'changa-1',
    titulo: 'Arreglar un enchufe',
    oficio: 'Electricidad',
    zona: 'Zona Norte',
    fecha: 'Hoy',
    estadoTexto: 'Buscan a alguien · Hoy'
  },
  {
    id: 'changa-2',
    titulo: 'Limpiar un patio grande',
    oficio: 'Limpieza',
    zona: 'Zona Sur',
    fecha: 'Hoy',
    estadoTexto: 'Buscan a alguien · Hoy'
  },
  {
    id: 'changa-3',
    titulo: 'Reparar revoque en pared',
    oficio: 'Albañilería',
    zona: 'Zona Norte',
    fecha: 'Mañana',
    estadoTexto: 'Buscan a alguien · Mañana'
  },
  {
    id: 'changa-4',
    titulo: 'Cortar el pasto y juntar ramas',
    oficio: 'Limpieza',
    zona: 'Zona Norte',
    fecha: 'Esta semana',
    estadoTexto: 'Buscan a alguien · Esta semana'
  }
];

// ============================================================================
// 2. ESTADO GLOBAL DE LA APLICACIÓN
// ============================================================================

const state = {
  filtroOficio: 'Todos',
  filtroZona: 'Todas',
  tabBuscarActiva: 'trabajadores', // 'trabajadores' | 'changas'
  tabMisTrabajos: 'pedi',          // 'pedi' | 'hago'
  ultimoTriggerModal: null,
  historial: [],                   // rutas visitadas (para "Volver")
  ingreso: { modo: '', telefono: '', codigo: '', error: false },
  avisoContacto: null,             // conversación recién iniciada
  opinion: null,                   // borrador de la opinión
  acuerdo: null,                   // borrador del acuerdo de pago
  formaRechazo: null,              // forma elegida tras un pago rechazado
  edicionPerfil: null,             // borrador de Editar perfil
  borradorFormulario: {
    tipoTrabajo: '',
    oficio: '',
    descripcion: '',
    cuando: '',
    donde: '',
    referencia: ''
  }
};

// ============================================================================
// 3. PERSISTENCIA EN LOCALSTORAGE
// ============================================================================

function cargarPedidosLocalStorage() {
  try {
    const data = localStorage.getItem('serrano_pedidos');
    return data ? JSON.parse(data) : [];
  } catch (e) {
    return [];
  }
}

function guardarPedidoLocalStorage(pedido) {
  try {
    const lista = cargarPedidosLocalStorage();
    lista.unshift(pedido); // Más reciente primero
    localStorage.setItem('serrano_pedidos', JSON.stringify(lista));
  } catch (e) {
    mostrarToast('No se pudo guardar el pedido. Verificá el almacenamiento de tu celular.', 'advertencia');
  }
}

function cargarBorradorLocalStorage() {
  try {
    const data = localStorage.getItem('serrano_borrador');
    if (data) {
      state.borradorFormulario = { ...state.borradorFormulario, ...JSON.parse(data) };
    }
  } catch (e) {}
}

function guardarBorradorLocalStorage() {
  try {
    localStorage.setItem('serrano_borrador', JSON.stringify(state.borradorFormulario));
  } catch (e) {}
}

function limpiarBorradorLocalStorage() {
  try {
    localStorage.removeItem('serrano_borrador');
    state.borradorFormulario = {
      tipoTrabajo: '',
      oficio: '',
      descripcion: '',
      cuando: '',
      donde: '',
      referencia: ''
    };
  } catch (e) {}
}

// ============================================================================
// 4. GESTOR DE TEMA (CLARO / OSCURO)
// ============================================================================

function inicializarTema() {
  const guardado = localStorage.getItem('serrano_tema');
  // Por regla de accesibilidad para sol rural (ADR-015), sin valor previo abre SIEMPRE en claro
  const esOscuro = guardado === 'oscuro';

  aplicarTema(esOscuro, guardado !== null);

  const btnToggle = document.getElementById('btn-toggle-tema');
  if (btnToggle) {
    btnToggle.addEventListener('click', () => {
      const actualmenteOscuro = document.documentElement.classList.contains('dark');
      aplicarTema(!actualmenteOscuro, true);
    });
  }
}

function aplicarTema(esOscuro, persistir = true) {
  const root = document.documentElement;
  const iconSol = document.getElementById('icon-sol');
  const iconLuna = document.getElementById('icon-luna');
  const textoTema = document.getElementById('texto-tema');

  if (esOscuro) {
    root.classList.add('dark');
    if (persistir) localStorage.setItem('serrano_tema', 'oscuro');
    if (iconSol) iconSol.classList.add('hidden');
    if (iconLuna) iconLuna.classList.remove('hidden');
    if (textoTema) textoTema.textContent = 'Modo claro';
  } else {
    root.classList.remove('dark');
    if (persistir) localStorage.setItem('serrano_tema', 'claro');
    if (iconSol) iconSol.classList.remove('hidden');
    if (iconLuna) iconLuna.classList.add('hidden');
    if (textoTema) textoTema.textContent = 'Modo oscuro';
  }
}

// ============================================================================
// 5. GESTOR DE CONECTIVIDAD (OFFLINE / SIN SEÑAL)
// ============================================================================

function inicializarEventosRed() {
  const banner = document.getElementById('banner-sin-senal');
  const btnCerrar = document.getElementById('btn-cerrar-banner-red');

  function actualizarEstadoRed() {
    if (!navigator.onLine) {
      if (banner) banner.classList.remove('hidden');
    } else {
      if (banner) banner.classList.add('hidden');
    }
  }

  function sincronizarPedidosOffline() {
    const pedidos = cargarPedidosLocalStorage();
    let sincronizados = 0;
    const pedidosActualizados = pedidos.map(p => {
      if (p.estado === 'Guardado · Falta publicar' || p.sinSenal || (p.estadoTipo === 'guardado' && p.id.startsWith('pedido-'))) {
        sincronizados++;
        return {
          ...p,
          estado: 'Esperando que te escriban',
          estadoTipo: 'nuevo',
          sinSenal: false
        };
      }
      return p;
    });

    if (sincronizados > 0) {
      localStorage.setItem('serrano_pedidos', JSON.stringify(pedidosActualizados));
      mostrarToast('Tu pedido ya se publicó.', 'exito');
      if (window.location.hash === '#mis-trabajos' || window.location.hash.startsWith('#sin-senal/')) {
        enrutar();
      }
    } else {
      mostrarToast('Señal restablecida. Conexión activa.', 'exito');
    }
  }

  window.addEventListener('online', () => {
    actualizarEstadoRed();
    sincronizarPedidosOffline();
  });

  window.addEventListener('offline', () => {
    actualizarEstadoRed();
    mostrarToast('Sin señal en el celular. Se guardará de forma local.', 'advertencia');
  });

  if (btnCerrar) {
    btnCerrar.addEventListener('click', () => {
      if (banner) banner.classList.add('hidden');
    });
  }

  actualizarEstadoRed();
}

function mostrarToast(mensaje, tipo = 'info') {
  const toast = document.getElementById('toast-notificacion');
  const texto = document.getElementById('toast-texto');
  const icono = document.getElementById('toast-icono');
  if (!toast || !texto) return;

  texto.textContent = mensaje;

  if (icono) {
    if (tipo === 'exito') {
      icono.innerHTML = `
        <svg class="w-5 h-5 text-emerald-400 dark:text-emerald-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>`;
    } else if (tipo === 'advertencia' || tipo === 'alerta') {
      icono.innerHTML = `
        <svg class="w-5 h-5 text-amber-400 dark:text-amber-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
          <line x1="12" y1="9" x2="12" y2="13"></line>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>`;
    } else {
      icono.innerHTML = `
        <svg class="w-5 h-5 text-blue-400 dark:text-blue-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="16" x2="12" y2="12"></line>
          <line x1="12" y1="8" x2="12.01" y2="8"></line>
        </svg>`;
    }
  }

  toast.classList.remove('hidden');
  toast.classList.add('flex');

  setTimeout(() => {
    toast.classList.add('hidden');
    toast.classList.remove('flex');
  }, 4000);
}

// ============================================================================
// 6. MODAL ACCESIBLE UNIVERSAL (WCAG AA & FOCUS TRAP)
// ============================================================================

function abrirModal({ titulo, descripcion, tipo = 'exito', acciones = [], trigger = null }) {
  const modal = document.getElementById('modal-accesible');
  const modalTitulo = document.getElementById('modal-titulo');
  const modalDesc = document.getElementById('modal-descripcion');
  const modalIcono = document.getElementById('modal-icono');
  const modalAcciones = document.getElementById('modal-acciones');

  if (!modal || !modalTitulo || !modalDesc) return;

  state.ultimoTriggerModal = trigger || document.activeElement;

  modalTitulo.textContent = titulo;
  modalDesc.textContent = descripcion;

  // Icono del modal según tipo
  if (tipo === 'exito') {
    modalIcono.className = 'w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-400 flex items-center justify-center flex-shrink-0';
    modalIcono.innerHTML = `
      <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>`;
  } else if (tipo === 'advertencia' || tipo === 'sin-senal') {
    modalIcono.className = 'w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-400 flex items-center justify-center flex-shrink-0';
    modalIcono.innerHTML = `
      <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
        <line x1="12" y1="9" x2="12" y2="13"></line>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
      </svg>`;
  } else {
    modalIcono.className = 'w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-950/70 text-serrano-blue dark:text-blue-400 flex items-center justify-center flex-shrink-0';
    modalIcono.innerHTML = `
      <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>`;
  }

  // Generar botones de acción
  modalAcciones.innerHTML = '';
  acciones.forEach((acc, idx) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = acc.primaria ? 'btn btn-primary w-full' : 'btn btn-secondary w-full';
    btn.textContent = acc.texto;
    btn.addEventListener('click', () => {
      cerrarModal();
      if (typeof acc.callback === 'function') acc.callback();
    });
    modalAcciones.appendChild(btn);
  });

  // Mostrar modal y atrapar foco
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  // Foco al primer botón interactivo del modal
  setTimeout(() => {
    const elementosFoco = modal.querySelectorAll('button:not(:disabled)');
    if (elementosFoco.length > 0) {
      elementosFoco[0].focus();
    }
  }, 50);

  // Focus Trap
  modal.onkeydown = function(e) {
    if (e.key === 'Escape') {
      cerrarModal();
      return;
    }
    if (e.key === 'Tab') {
      const focales = Array.from(modal.querySelectorAll('button:not(:disabled)'));
      if (focales.length === 0) return;
      const primerEl = focales[0];
      const ultimoEl = focales[focales.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === primerEl) {
          e.preventDefault();
          ultimoEl.focus();
        }
      } else {
        if (document.activeElement === ultimoEl) {
          e.preventDefault();
          primerEl.focus();
        }
      }
    }
  };
}

function cerrarModal() {
  const modal = document.getElementById('modal-accesible');
  if (!modal) return;
  modal.classList.add('hidden');
  document.body.style.overflow = '';
  modal.onkeydown = null;

  // Devolver el foco al elemento que activó el modal
  if (state.ultimoTriggerModal && typeof state.ultimoTriggerModal.focus === 'function') {
    state.ultimoTriggerModal.focus();
  }
}

// Eventos de cierre del modal
document.addEventListener('DOMContentLoaded', () => {
  const btnCerrarX = document.getElementById('modal-btn-cerrar-x');
  const modal = document.getElementById('modal-accesible');

  if (btnCerrarX) {
    btnCerrarX.addEventListener('click', cerrarModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) cerrarModal();
    });
  }
});

// ============================================================================
// 7. ROUTER SPA POR HASH & GESTIÓN DE VISTAS
// ============================================================================

function actualizarNavegacionActiva(rutaActual) {
  const pestañasMovil = document.querySelectorAll('#nav-mobile a');
  const itemsDesktop = document.querySelectorAll('#nav-desktop a');

  const baseRuta = rutaActual.split('/')[0] || 'buscar';

  pestañasMovil.forEach(a => {
    const navVal = a.getAttribute('data-nav');
    if (navVal === baseRuta) {
      a.setAttribute('aria-current', 'page');
    } else {
      a.removeAttribute('aria-current');
    }
  });

  itemsDesktop.forEach(a => {
    const navVal = a.getAttribute('data-nav');
    if (navVal === baseRuta) {
      a.setAttribute('aria-current', 'page');
    } else {
      a.removeAttribute('aria-current');
    }
  });
}

// Rutas del ingreso: sin barra de navegación (wireframes 01, 02 y 03)
const RUTAS_INGRESO = ['crear-cuenta', 'entrar', 'confirmar', 'cambiar-telefono', 'que-busco'];

function mostrarNavegacion(visible) {
  const movil = document.getElementById('nav-mobile');
  const escritorio = document.getElementById('nav-desktop');
  if (movil) movil.style.display = visible ? '' : 'none';
  if (escritorio) escritorio.style.display = visible ? '' : 'none';
}

function enrutar() {
  const hash = window.location.hash.slice(1).trim();
  const contenedor = document.getElementById('vista-contenedor');
  if (!contenedor) return;

  const sesion = obtenerSesion();
  const [base, param] = [hash.split('/')[0], hash.split('/').slice(1).join('/')];

  // Sin sesión, la app empieza por el ingreso (Crear cuenta o Entrar)
  if (!sesion && !RUTAS_INGRESO.includes(base)) {
    window.location.hash = leerLS('serrano_tuvo_cuenta', false) ? '#entrar' : '#crear-cuenta';
    return;
  }
  if (!hash) {
    window.location.hash = '#buscar';
    return;
  }

  if (state.historial[state.historial.length - 1] !== hash) state.historial.push(hash);
  window.scrollTo(0, 0);
  mostrarNavegacion(!RUTAS_INGRESO.includes(base));

  const rutas = {
    'crear-cuenta': () => renderVistaTelefono(contenedor, 'crear-cuenta'),
    'entrar': () => renderVistaTelefono(contenedor, 'entrar'),
    'cambiar-telefono': () => renderVistaTelefono(contenedor, 'cambiar-telefono'),
    'confirmar': () => renderVistaConfirmar(contenedor),
    'que-busco': () => renderVistaQueBusco(contenedor),
    'buscar': () => renderVistaBuscar(contenedor),
    'trabajador': () => renderVistaTrabajador(contenedor, param),
    'changa': () => renderVistaChanga(contenedor, param),
    'pedir': () => renderVistaPedirChanga(contenedor),
    'sin-senal': () => renderVistaSinSenal(contenedor, param),
    'mis-trabajos': () => renderVistaMisTrabajos(contenedor),
    'trabajo': () => renderVistaTrabajo(contenedor, param),
    'cancelar': () => renderVistaCancelar(contenedor, param),
    'opinion': () => renderVistaOpinion(contenedor, param),
    'pagos': () => renderVistaPagos(contenedor),
    'acordar-pago': () => renderVistaAcordarPago(contenedor, param),
    'pago-rechazado': () => renderVistaPagoRechazado(contenedor, param),
    'mensajes': () => renderVistaMensajes(contenedor),
    'conversacion': () => renderVistaConversacion(contenedor, param),
    'mi-perfil': () => renderVistaMiPerfil(contenedor),
    'editar-perfil': () => renderVistaEditarPerfil(contenedor)
  };

  // Pestaña activa de la barra de navegación según la sección
  const seccion = {
    trabajador: 'buscar', changa: 'buscar', pedir: 'buscar',
    'sin-senal': 'mis-trabajos', trabajo: 'mis-trabajos', cancelar: 'mis-trabajos', opinion: 'mis-trabajos',
    'acordar-pago': 'pagos', 'pago-rechazado': 'pagos',
    conversacion: 'mensajes', 'editar-perfil': 'mi-perfil'
  };

  if (!rutas[base]) {
    window.location.hash = '#buscar';
    return;
  }
  rutas[base]();
  actualizarNavegacionActiva(seccion[base] || base);

  // Foco accesible al título H1 de la vista cargada
  setTimeout(() => {
    const h1 = contenedor.querySelector('h1');
    if (h1) {
      h1.setAttribute('tabindex', '-1');
      h1.focus({ preventScroll: true });
    }
  }, 80);
}

// ============================================================================
// 8. VISTAS DE LA SPA (CONFORME A WIREFRAMES FIGMA)
// ============================================================================

// ----------------------------------------------------------------------------
// VISTA 1: BUSCAR (#buscar — Wireframe 10-Buscar)
// ----------------------------------------------------------------------------
function renderVistaBuscar(contenedor) {
  // Filtrar trabajadores según estado
  const trabajadoresFiltrados = TRABAJADORES.filter(t => {
    const matchOficio = state.filtroOficio === 'Todos' || 
                        t.categoriaOficio === state.filtroOficio || 
                        t.categoriaSecundaria === state.filtroOficio;
    const matchZona = state.filtroZona === 'Todas' || t.zona === state.filtroZona;
    return matchOficio && matchZona;
  });

  // Filtrar changas según estado (C2)
  const changasFiltradas = CHANGAS_MUESTRA.filter(ch => {
    const matchOficio = state.filtroOficio === 'Todos' || ch.oficio === state.filtroOficio;
    const matchZona = state.filtroZona === 'Todas' || ch.zona === state.filtroZona;
    return matchOficio && matchZona;
  });

  contenedor.innerHTML = `
    <div class="space-y-8 animate-fadeIn">
      
      <!-- HERO & ENCABEZADO -->
      <section class="space-y-4">
        <div>
          <h1 class="text-[32px] font-bold text-slate-900 dark:text-white leading-tight">Buscar</h1>
          <p class="text-[18px] text-slate-600 dark:text-slate-300 font-medium">Trabajo y ayuda entre vecinos de Serrano.</p>
        </div>

        <!-- Selector Trabajadores / Changas (C2) -->
        <div class="inline-flex p-1.5 bg-slate-100 dark:bg-slate-800 rounded-2xl border-2 border-slate-300 dark:border-slate-700 w-full sm:w-auto" role="tablist" aria-label="Elegir entre trabajadores o changas">
          <button type="button" id="tab-trabajadores" role="tab" aria-selected="${state.tabBuscarActiva === 'trabajadores'}" class="flex-1 sm:flex-initial min-h-[56px] px-6 py-3 rounded-xl font-bold text-[18px] transition-all flex items-center justify-center gap-2 ${state.tabBuscarActiva === 'trabajadores' ? 'bg-white dark:bg-slate-900 text-serrano-blue dark:text-blue-400 shadow-md border border-slate-200 dark:border-slate-700' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}">
            ${state.tabBuscarActiva === 'trabajadores' ? '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>' : ''}
            <span>Trabajadores</span>
          </button>
          <button type="button" id="tab-changas" role="tab" aria-selected="${state.tabBuscarActiva === 'changas'}" class="flex-1 sm:flex-initial min-h-[56px] px-6 py-3 rounded-xl font-bold text-[18px] transition-all flex items-center justify-center gap-2 ${state.tabBuscarActiva === 'changas' ? 'bg-white dark:bg-slate-900 text-serrano-blue dark:text-blue-400 shadow-md border border-slate-200 dark:border-slate-700' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}">
            ${state.tabBuscarActiva === 'changas' ? '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>' : ''}
            <span>Changas</span>
          </button>
        </div>

        <!-- CTA PRIMARIO DESTACADO: PEDIR UNA CHANGA -->
        <div class="pt-2">
          <a href="#pedir" class="btn btn-primary force-text-white w-full sm:w-auto text-center flex items-center justify-center gap-3 shadow-lg" id="btn-cta-pedir">
            <!-- Ícono + SVG -->
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <line x1="5" y1="12" x2="19" y2="12"></line>
            </svg>
            <span>Pedir una changa</span>
          </a>
        </div>
      </section>

      <!-- OFICIOS POPULARES (CHIPS CON ÍCONOS SVG) -->
      <section class="space-y-3">
        <h2 class="text-[24px] font-bold text-slate-900 dark:text-white">Oficios populares</h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          
          <button type="button" data-oficio="Limpieza" class="chip-oficio min-h-[56px] px-5 py-3.5 rounded-xl border-2 font-bold text-[18px] text-left flex items-center gap-3.5 transition-all cursor-pointer ${state.filtroOficio === 'Limpieza' ? 'bg-serrano-blue text-white force-text-white border-serrano-blueHover shadow-inner translate-y-[2px]' : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'}" aria-pressed="${state.filtroOficio === 'Limpieza'}">
            <span class="w-9 h-9 rounded-lg bg-blue-100 dark:bg-slate-700 text-serrano-blue dark:text-blue-300 flex items-center justify-center flex-shrink-0" aria-hidden="true">
              <!-- Destello Limpieza SVG -->
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
            </span>
            <span>Limpieza</span>
          </button>

          <button type="button" data-oficio="Albañilería" class="chip-oficio min-h-[56px] px-5 py-3.5 rounded-xl border-2 font-bold text-[18px] text-left flex items-center gap-3.5 transition-all cursor-pointer ${state.filtroOficio === 'Albañilería' ? 'bg-serrano-blue text-white force-text-white border-serrano-blueHover shadow-inner translate-y-[2px]' : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'}" aria-pressed="${state.filtroOficio === 'Albañilería'}">
            <span class="w-9 h-9 rounded-lg bg-blue-100 dark:bg-slate-700 text-serrano-blue dark:text-blue-300 flex items-center justify-center flex-shrink-0" aria-hidden="true">
              <!-- Ladrillos Albañilería SVG -->
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line><line x1="12" y1="3" x2="12" y2="9"></line><line x1="8" y1="9" x2="8" y2="15"></line><line x1="16" y1="9" x2="16" y2="15"></line><line x1="12" y1="15" x2="12" y2="21"></line></svg>
            </span>
            <span>Albañilería</span>
          </button>

          <button type="button" data-oficio="Electricidad" class="chip-oficio min-h-[56px] px-5 py-3.5 rounded-xl border-2 font-bold text-[18px] text-left flex items-center gap-3.5 transition-all cursor-pointer ${state.filtroOficio === 'Electricidad' ? 'bg-serrano-blue text-white force-text-white border-serrano-blueHover shadow-inner translate-y-[2px]' : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'}" aria-pressed="${state.filtroOficio === 'Electricidad'}">
            <span class="w-9 h-9 rounded-lg bg-blue-100 dark:bg-slate-700 text-serrano-blue dark:text-blue-300 flex items-center justify-center flex-shrink-0" aria-hidden="true">
              <!-- Rayo Electricidad SVG -->
              <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
            </span>
            <span>Electricidad</span>
          </button>

        </div>
      </section>

      <!-- FILTRO POR ZONA (SCROLL HORIZONTAL SIN SCROLL GLOBAL) -->
      <section class="space-y-3">
        <div class="flex items-center justify-between">
          <h2 class="text-[24px] font-bold text-slate-900 dark:text-white">Zona</h2>
          ${state.filtroOficio !== 'Todos' || state.filtroZona !== 'Todas' ? `
            <button type="button" id="btn-limpiar-filtros" class="text-[18px] font-semibold text-serrano-blue dark:text-blue-400 hover:underline min-h-[56px] min-w-[56px] px-3 flex items-center justify-center cursor-pointer">
              Restablecer filtros
            </button>
          ` : ''}
        </div>
        
        <div class="chips-scroll-x" role="group" aria-label="Filtro por zona geográfica">
          <button type="button" data-zona="Todas" class="chip min-h-[56px] ${state.filtroZona === 'Todas' ? 'force-text-white' : ''}" aria-pressed="${state.filtroZona === 'Todas'}">
            ${state.filtroZona === 'Todas' ? '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>' : ''}
            <span>Todas</span>
          </button>
          <button type="button" data-zona="Zona Norte" class="chip min-h-[56px] ${state.filtroZona === 'Zona Norte' ? 'force-text-white' : ''}" aria-pressed="${state.filtroZona === 'Zona Norte'}">
            ${state.filtroZona === 'Zona Norte' ? '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>' : ''}
            <span>Norte</span>
          </button>
          <button type="button" data-zona="Zona Sur" class="chip min-h-[56px] ${state.filtroZona === 'Zona Sur' ? 'force-text-white' : ''}" aria-pressed="${state.filtroZona === 'Zona Sur'}">
            ${state.filtroZona === 'Zona Sur' ? '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>' : ''}
            <span>Sur</span>
          </button>
        </div>
      </section>

      ${state.tabBuscarActiva === 'trabajadores' ? `
        <!-- CATÁLOGO: TRABAJADORES DEL PUEBLO (GRID RESPONSIVE 1 / 2 / 3 COLUMNAS) -->
        <section class="space-y-4 pt-2">
          <div class="flex items-center justify-between">
            <h2 class="text-[24px] font-bold text-slate-900 dark:text-white">Trabajadores del pueblo</h2>
            <span class="text-[18px] font-semibold text-slate-600 dark:text-slate-400">
              ${trabajadoresFiltrados.length} ${trabajadoresFiltrados.length === 1 ? 'persona' : 'personas'}
            </span>
          </div>

          ${trabajadoresFiltrados.length === 0 ? `
            <div class="p-8 text-center bg-slate-50 dark:bg-slate-800/50 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 space-y-3">
              <p class="text-[24px] font-bold text-slate-800 dark:text-slate-200">No encontramos trabajadores con esos filtros.</p>
              <p class="text-[18px] text-slate-600 dark:text-slate-400">Probá seleccionando "Todas" las zonas o restablecé los filtros.</p>
              <button type="button" id="btn-reset-filtros-vacio" class="btn btn-secondary mt-2 min-h-[56px]">Ver todos los trabajadores</button>
            </div>
          ` : `
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              ${trabajadoresFiltrados.map(t => renderCardTrabajador(t)).join('')}
            </div>
          `}
        </section>

        <!-- SECCIÓN: TAMBIÉN HAY CHANGAS (WIREFRAME 10-BUSCAR) -->
        <section class="space-y-4 pt-6 border-t-2 border-slate-200 dark:border-slate-800">
          <h2 class="text-[24px] font-bold text-slate-900 dark:text-white">También hay changas</h2>
          
          <article class="card-tap p-6 space-y-4 bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 rounded-2xl shadow-sm">
            <div class="space-y-1">
              <h3 class="text-[24px] font-bold text-slate-900 dark:text-white">Arreglar un enchufe</h3>
              <p class="text-[18px] text-slate-600 dark:text-slate-400 font-medium">Electricidad · Zona Norte</p>
            </div>

            <div class="flex items-center gap-2.5 font-bold text-slate-800 dark:text-slate-200 text-[18px]">
              <!-- Círculo vacío decorativo del wireframe -->
              <span class="w-5 h-5 rounded-full border-2 border-slate-700 dark:border-slate-300 inline-block" aria-hidden="true"></span>
              <span>Buscan a alguien · Hoy</span>
            </div>

            <button type="button" id="btn-ver-changa-ejemplo" data-id="changa-1" class="btn btn-secondary w-full">
              Ver changa
            </button>
          </article>
        </section>
      ` : `
        <!-- CATÁLOGO: CHANGAS DEL PUEBLO (C2) -->
        <section class="space-y-4 pt-2">
          <!-- Banner Avisame si hay changas nuevas (spec §6.7) -->
          <div class="p-5 bg-blue-50 dark:bg-slate-800/80 border-2 border-blue-200 dark:border-blue-800 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div class="space-y-1 text-center sm:text-left">
              <p class="text-[18px] font-bold text-slate-900 dark:text-white">¿Buscás trabajo en Serrano?</p>
              <p class="text-[18px] text-slate-600 dark:text-slate-300">Te avisamos por mensaje cuando un vecino publique una nueva changa.</p>
            </div>
            <button type="button" id="btn-avisame-changas" class="btn btn-secondary min-h-[56px] text-[18px] whitespace-nowrap w-full sm:w-auto">
              Avisame si hay changas nuevas
            </button>
          </div>

          <div class="flex items-center justify-between pt-2">
            <h2 class="text-[24px] font-bold text-slate-900 dark:text-white">Changas publicadas</h2>
            <span class="text-[18px] font-semibold text-slate-600 dark:text-slate-400">
              ${changasFiltradas.length} ${changasFiltradas.length === 1 ? 'changa' : 'changas'}
            </span>
          </div>

          ${changasFiltradas.length === 0 ? `
            <div class="p-8 text-center bg-slate-50 dark:bg-slate-800/50 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 space-y-3">
              <p class="text-[24px] font-bold text-slate-800 dark:text-slate-200">No encontramos changas con esos filtros.</p>
              <p class="text-[18px] text-slate-600 dark:text-slate-400">Probá seleccionando "Todas" las zonas o restablecé los filtros.</p>
              <button type="button" id="btn-reset-filtros-vacio" class="btn btn-secondary mt-2 min-h-[56px]">Ver todas las changas</button>
            </div>
          ` : `
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              ${changasFiltradas.map(ch => `
                <article class="card-tap p-6 flex flex-col justify-between gap-4 bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 rounded-2xl shadow-sm hover:border-serrano-blue dark:hover:border-blue-500 transition-all">
                  <div class="space-y-1">
                    <h3 class="text-[24px] font-bold text-slate-900 dark:text-white leading-tight">${ch.titulo}</h3>
                    <p class="text-[18px] text-slate-600 dark:text-slate-400 font-medium">${ch.oficio} · ${ch.zona}</p>
                  </div>

                  <div class="flex items-center gap-2.5 font-bold text-slate-800 dark:text-slate-200 text-[18px]">
                    <span class="w-5 h-5 rounded-full border-2 border-slate-700 dark:border-slate-300 inline-block" aria-hidden="true"></span>
                    <span>${ch.estadoTexto}</span>
                  </div>

                  <div class="pt-2">
                    <button type="button" data-id="${ch.id}" class="btn btn-secondary w-full btn-ver-changa">
                      Ver changa
                    </button>
                  </div>
                </article>
              `).join('')}
            </div>
          `}
        </section>
      `}

    </div>
  `;

  // Asignar listeners interactivos de la vista Buscar
  bindEventosBuscar(contenedor);
}

function renderCardTrabajador(t) {
  // Generar iniciales para avatar sobrio sin fotos de stock
  const partesNombre = t.nombre.split(' ');
  const iniciales = (partesNombre[0][0] + (partesNombre[1] ? partesNombre[1][0] : '')).toUpperCase();

  return `
    <article class="card-tap p-6 flex flex-col justify-between gap-5 relative bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 rounded-2xl shadow-sm hover:border-serrano-blue dark:hover:border-blue-500 transition-all">
      
      <!-- Encabezado de la Tarjeta con Avatar con Iniciales y Nombre -->
      <div class="flex items-start gap-4">
        <!-- Avatar accesible (cuadrado con iniciales similar al recuadro Foto de wireframes) (B8) -->
        <div class="w-20 h-20 rounded-2xl bg-slate-100 dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 flex flex-col items-center justify-center flex-shrink-0 font-bold text-slate-700 dark:text-slate-200 text-[24px] shadow-inner" aria-hidden="true">
          <span>${iniciales}</span>
          <span class="text-[14px] font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Foto</span>
        </div>

        <div class="space-y-1 flex-1">
          ${t.destacado ? `
            <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[14px] font-bold bg-amber-100 dark:bg-amber-950/80 text-amber-900 dark:text-amber-300 mb-1 border border-amber-300 dark:border-amber-700">
              <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              Destacado
            </span>
          ` : ''}
          <h3 class="text-[24px] font-bold text-slate-900 dark:text-white leading-tight">${t.nombre}</h3>
          <p class="text-[18px] font-semibold text-slate-700 dark:text-slate-300">${t.oficio}</p>
          <p class="text-[18px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
            <svg class="w-4 h-4 text-slate-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            ${t.zona} · ${t.localidad}
          </p>
        </div>
      </div>

      <!-- Métricas: Estrellas + Trabajos realizados -->
      <div class="flex items-center gap-2 text-[18px] font-bold text-slate-800 dark:text-slate-200">
        <span class="text-amber-500 flex items-center" aria-label="${t.estrellas} estrellas de calificación">
          ${'★'.repeat(t.estrellas)}${'☆'.repeat(5 - t.estrellas)}
        </span>
        <span aria-hidden="true">·</span>
        <span>${t.trabajosRealizados} trabajos</span>
      </div>

      <!-- Estado de Disponibilidad (NUNCA SOLO POR COLOR: ÍCONO + TEXTO + FORMA) -->
      <div>
        ${t.disponibleHoy ? `
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 font-bold text-[18px]">
            <!-- Check verde SVG -->
            <svg class="w-5 h-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>Disponible hoy</span>
          </div>
        ` : `
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-400 font-bold text-[18px]">
            <!-- Círculo gris vacío SVG -->
            <span class="w-4 h-4 rounded-full border-2 border-slate-500 dark:border-slate-400 inline-block" aria-hidden="true"></span>
            <span>Ocupado</span>
          </div>
        `}
      </div>

      <!-- Botón de Acción Secundario: Ver Ficha -->
      <div class="pt-2">
        <a href="#trabajador/${t.id}" class="btn btn-secondary w-full text-center">
          Ver ficha
        </a>
      </div>

    </article>
  `;
}

function bindEventosBuscar(contenedor) {
  // Selector Trabajadores / Changas (C2)
  const tabTrabajadores = contenedor.querySelector('#tab-trabajadores');
  const tabChangas = contenedor.querySelector('#tab-changas');

  if (tabTrabajadores && tabChangas) {
    tabTrabajadores.addEventListener('click', () => {
      state.tabBuscarActiva = 'trabajadores';
      renderVistaBuscar(contenedor);
    });
    tabChangas.addEventListener('click', () => {
      state.tabBuscarActiva = 'changas';
      renderVistaBuscar(contenedor);
    });
  }

  // Chips de Oficios Populares
  const chipsOficio = contenedor.querySelectorAll('.chip-oficio');
  chipsOficio.forEach(btn => {
    btn.addEventListener('click', () => {
      const oficio = btn.getAttribute('data-oficio');
      state.filtroOficio = state.filtroOficio === oficio ? 'Todos' : oficio;
      renderVistaBuscar(contenedor);
    });
  });

  // Chips de Zona
  const chipsZona = contenedor.querySelectorAll('[data-zona]');
  chipsZona.forEach(btn => {
    btn.addEventListener('click', () => {
      state.filtroZona = btn.getAttribute('data-zona');
      renderVistaBuscar(contenedor);
    });
  });

  // Botón Ver changa en tarjetas (B9: addEventListener sin onclick)
  contenedor.querySelectorAll('.btn-ver-changa, #btn-ver-changa-ejemplo').forEach(btn => {
    btn.addEventListener('click', () => {
      window.location.hash = '#changa/' + btn.getAttribute('data-id');
    });
  });

  // Botón Avisame si hay changas nuevas (spec §6.7 & C2)
  const btnAvisame = contenedor.querySelector('#btn-avisame-changas');
  if (btnAvisame) {
    btnAvisame.addEventListener('click', () => {
      const yaActivo = leerLS('serrano_avisos', { activo: true }).activo;
      guardarLS('serrano_avisos', { activo: true });
      mostrarToast(yaActivo ? 'Ya tenés los avisos activados. Los ves en Mensajes.' : 'Te avisamos cuando publiquen nuevas changas en Serrano.', 'exito');
    });
  }

  // Botones de Reset
  const btnLimpiar = contenedor.querySelector('#btn-limpiar-filtros');
  const btnResetVacio = contenedor.querySelector('#btn-reset-filtros-vacio');
  const handlerReset = () => {
    state.filtroOficio = 'Todos';
    state.filtroZona = 'Todas';
    renderVistaBuscar(contenedor);
  };

  if (btnLimpiar) btnLimpiar.addEventListener('click', handlerReset);
  if (btnResetVacio) btnResetVacio.addEventListener('click', handlerReset);
}

// ----------------------------------------------------------------------------
// VISTA 2: FICHA DEL TRABAJADOR (#trabajador/:id — Wireframe 11-Ficha-trabajador)
// ----------------------------------------------------------------------------
function renderVistaTrabajador(contenedor, id) {
  const t = TRABAJADORES.find(item => item.id === id);

  if (!t) {
    contenedor.innerHTML = `
      <div class="p-8 text-center space-y-4">
        <h1 class="text-[32px] font-bold text-slate-900 dark:text-white">Trabajador no encontrado</h1>
        <p class="text-[18px] text-slate-600 dark:text-slate-400">El perfil que buscás no existe o fue dado de baja.</p>
        <a href="#buscar" class="btn btn-primary inline-flex force-text-white">Volver a Buscar</a>
      </div>
    `;
    return;
  }

  const partesNombre = t.nombre.split(' ');
  const iniciales = (partesNombre[0][0] + (partesNombre[1] ? partesNombre[1][0] : '')).toUpperCase();

  contenedor.innerHTML = `
    <div class="max-w-2xl mx-auto space-y-8 animate-fadeIn pb-24 lg:pb-0">
      
      <!-- Botón Volver Accesible -->
      <div>
        <a href="#buscar" class="btn btn-secondary inline-flex items-center gap-2 text-[18px] min-h-[56px] px-5" id="btn-volver-ficha">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          <span>Volver</span>
        </a>
      </div>

      <!-- ENCABEZADO CON NOMBRE Y OFICIO -->
      <section class="space-y-4">
        <h1 class="text-[32px] font-bold text-slate-900 dark:text-white leading-tight">${t.nombre}</h1>

        <div class="flex items-start gap-5">
          <!-- Avatar grande -->
          <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-slate-100 dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 flex flex-col items-center justify-center flex-shrink-0 font-bold text-slate-700 dark:text-slate-200 text-[24px] shadow-inner" aria-hidden="true">
            <span>${iniciales}</span>
            <span class="text-[14px] font-medium text-slate-500 uppercase tracking-wider">Foto</span>
          </div>

          <div class="space-y-1.5 flex-1">
            <p class="text-[24px] font-bold text-slate-900 dark:text-white">${t.oficio}</p>
            <p class="text-[18px] text-slate-600 dark:text-slate-300 flex items-center gap-1.5 font-medium">
              <svg class="w-5 h-5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              ${t.zona} · ${t.localidad}
            </p>
            <div class="flex items-center gap-2 text-[18px] font-bold text-slate-800 dark:text-slate-200 pt-1">
              <span class="text-amber-500" aria-label="${t.estrellas} estrellas">${'★'.repeat(t.estrellas)}${'☆'.repeat(5 - t.estrellas)}</span>
              <span aria-hidden="true">·</span>
              <span>${t.trabajosRealizados} trabajos</span>
            </div>
          </div>
        </div>
      </section>

      <!-- BLOQUE DESTACADO DE DISPONIBILIDAD -->
      <section>
        ${t.disponibleHoy ? `
          <div class="p-4 sm:p-5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-400 dark:border-emerald-700 flex items-center gap-3.5 text-emerald-900 dark:text-emerald-200 font-bold text-[18px]">
            <svg class="w-7 h-7 text-emerald-600 dark:text-emerald-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>Disponible hoy</span>
          </div>
        ` : `
          <div class="p-4 sm:p-5 rounded-2xl bg-slate-100 dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-700 flex items-center gap-3.5 text-slate-700 dark:text-slate-300 font-bold text-[18px]">
            <span class="w-5 h-5 rounded-full border-2 border-slate-500 inline-block" aria-hidden="true"></span>
            <span>Ocupado en este momento</span>
          </div>
        `}
      </section>

      <!-- INDICADORES DE CONFIANZA VECINAL -->
      <section class="space-y-3 pt-1">
        ${t.telefonoConfirmado ? `
          <div class="flex items-center gap-3 text-[18px] font-bold text-slate-900 dark:text-slate-100">
            <svg class="w-6 h-6 text-emerald-600 dark:text-emerald-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
            <span>Teléfono confirmado</span>
          </div>
        ` : `
          <div class="flex items-center gap-3 text-[18px] font-medium text-slate-600 dark:text-slate-400">
            <span class="w-5 h-5 rounded-full border border-slate-400 flex items-center justify-center text-[14px] font-bold">i</span>
            <span>Todavía no confirmó su teléfono</span>
          </div>
        `}

        <div class="flex items-center gap-3 text-[18px] font-bold text-slate-900 dark:text-slate-100">
          <span class="text-amber-500 text-[24px]" aria-hidden="true">★</span>
          <span>Lo recomiendan ${t.vecinosRecomiendan} vecinos</span>
        </div>
      </section>

      <!-- SOBRE SU TRABAJO -->
      <section class="space-y-2 pt-2 border-t-2 border-slate-200 dark:border-slate-800">
        <h2 class="text-[24px] font-bold text-slate-900 dark:text-white">Sobre su trabajo</h2>
        <p class="text-[18px] text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
          ${t.sobreSuTrabajo}
        </p>
      </section>

      <!-- OPINIONES DE VECINOS -->
      <section class="space-y-4 pt-2 border-t-2 border-slate-200 dark:border-slate-800">
        <h2 class="text-[24px] font-bold text-slate-900 dark:text-white">Opiniones</h2>

        <div class="space-y-4">
          ${[...opinionesGuardadas(t.id), ...t.opiniones].map(op => `
            <article class="p-5 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-2xl space-y-2 shadow-sm">
              <div class="flex items-center justify-between">
                <span class="font-bold text-[18px] text-slate-900 dark:text-white">${op.autor}</span>
                <span class="text-amber-500 text-[18px]" aria-label="${op.estrellas} estrellas">
                  ${'★'.repeat(op.estrellas)}${'☆'.repeat(5 - op.estrellas)}
                </span>
              </div>
              <p class="text-[18px] text-slate-700 dark:text-slate-300 leading-normal">
                ${op.texto ? '"' + esc(op.texto) + '"' : 'Sin comentario.'}
              </p>
            </article>
          `).join('')}
        </div>
      </section>

      <!-- BOTÓN SECUNDARIO: AVISAR DE UN PROBLEMA -->
      <section class="pt-2">
        <button type="button" class="btn btn-secondary w-full text-slate-700 dark:text-slate-200" id="btn-avisar-problema">
          Avisar de un problema
        </button>
      </section>

      <!-- MICROCOPY ACLARATORIO ANTES DEL CONTACTO -->
      <p class="text-[18px] text-slate-500 dark:text-slate-400 text-center font-medium">
        Contactar abre la conversación con ${t.nombre.split(' ')[0]}.
      </p>

      <!-- BOTÓN FIJO INFERIOR PRIMARIO (MANO ABIERTA SVG CULTURAL) -->
      <div class="lg:static fixed bottom-[72px] left-0 right-0 z-30 p-4 bg-white dark:bg-slate-900 border-t-2 border-slate-200 dark:border-slate-800 lg:border-t-0 lg:p-0 lg:bg-transparent">
        <div class="max-w-2xl mx-auto">
          <button type="button" class="btn btn-primary w-full shadow-xl flex items-center justify-center gap-3 text-[18px] force-text-white" id="btn-contactar-trabajador">
            <!-- Ícono Mano abierta SVG -->
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path>
              <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"></path>
              <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"></path>
              <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path>
            </svg>
            <span>Contactar</span>
          </button>
        </div>
      </div>

    </div>
  `;

  // Evento Avisar de un problema
  const btnProblema = contenedor.querySelector('#btn-avisar-problema');
  if (btnProblema) {
    btnProblema.addEventListener('click', () => {
      abrirModal({
        titulo: 'Avisar de un problema',
        descripcion: `¿Querés reportar un problema con ${t.nombre}? Tu reporte es anónimo y lo revisa una persona de Serrano para garantizar la seguridad vecinal.`,
        tipo: 'advertencia',
        trigger: btnProblema,
        acciones: [
          {
            texto: 'Enviar aviso',
            primaria: true,
            callback: () => mostrarToast('Aviso recibido. Lo revisaremos a la brevedad.')
          },
          { texto: 'Cancelar', primaria: false }
        ]
      });
    });
  }

  // Evento Contactar
  const btnContactar = contenedor.querySelector('#btn-contactar-trabajador');
  if (btnContactar) {
    btnContactar.addEventListener('click', () => {
      abrirModal({
        titulo: `Contactar a ${t.nombre.split(' ')[0]}`,
        descripcion: `Se abrirá una conversación directa con ${t.nombre}. Podés acordar el día, los materiales y el precio antes de empezar.`,
        tipo: 'exito',
        trigger: btnContactar,
        acciones: [
          {
            texto: 'Abrir conversación',
            primaria: true,
            callback: () => {
              iniciarConversacion({
                id: t.id,
                nombre: t.nombre,
                tema: t.oficio,
                zona: t.zona,
                telefonoConfirmado: t.telefonoConfirmado,
                mensajeInicial: `Hola ${t.nombre.split(' ')[0]}, te escribo desde Serrano Trabaja. ¿Podemos hablar de un trabajo?`
              });
            }
          },
          { texto: 'Cerrar', primaria: false }
        ]
      });
    });
  }
}

// Función auxiliar para recortar títulos de pedidos en la última palabra completa (C7)
function formatearTituloPedido(descripcion, maxLen = 45) {
  const texto = (descripcion || '').trim();
  if (texto.length <= maxLen) return texto;
  const cortado = texto.slice(0, maxLen);
  const ultimoEspacio = cortado.lastIndexOf(' ');
  return (ultimoEspacio > 15 ? cortado.slice(0, ultimoEspacio) : cortado) + '...';
}

// ----------------------------------------------------------------------------
// VISTA 3: PEDIR UNA CHANGA (#pedir — Wireframe 21-Pedir-changa)
// ----------------------------------------------------------------------------
function renderVistaPedirChanga(contenedor) {
  cargarBorradorLocalStorage();
  const formState = state.borradorFormulario;

  contenedor.innerHTML = `
    <div class="max-w-2xl mx-auto space-y-8 animate-fadeIn">
      
      <!-- Botón Volver -->
      <div>
        <a href="#buscar" class="btn btn-secondary inline-flex items-center gap-2 text-[18px] min-h-[56px] px-5" id="btn-volver-pedir">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          <span>Volver</span>
        </a>
      </div>

      <!-- TÍTULO Y SUBTÍTULO -->
      <section class="space-y-2">
        <h1 class="text-[32px] font-bold text-slate-900 dark:text-white leading-tight">Pedir una changa</h1>
        <p class="text-[18px] text-slate-600 dark:text-slate-300 font-medium">Contá qué necesitás. No hace falta escribir mucho.</p>
      </section>

      <!-- FORMULARIO ACCESIBLE EN CHIPS (SIN <SELECT> — C1: ARRANCAN SIN ELEGIR) -->
      <form id="form-pedir-changa" class="space-y-7" novalidate>
        
        <!-- 1. Tipo de trabajo -->
        <fieldset class="space-y-3">
          <legend class="text-[24px] font-bold text-slate-900 dark:text-white">Tipo de trabajo <span class="text-red-500" aria-hidden="true">*</span></legend>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3" role="radiogroup" aria-label="Seleccioná el tipo de trabajo">
            ${['Changa', 'Trabajo fijo', 'Servicio puntual'].map(tipo => `
              <button type="button" data-grupo="tipoTrabajo" data-valor="${tipo}" class="chip-form min-h-[56px] px-4 py-3 rounded-xl border-2 font-bold text-[18px] text-center transition-all ${formState.tipoTrabajo === tipo ? 'bg-serrano-blue text-white force-text-white border-serrano-blueHover shadow-inner translate-y-[2px]' : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'}" aria-pressed="${formState.tipoTrabajo === tipo}">
                ${formState.tipoTrabajo === tipo ? '<svg class="w-5 h-5 inline-block mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>' : ''}${tipo}
              </button>
            `).join('')}
          </div>
        </fieldset>

        <!-- 2. Oficio -->
        <fieldset class="space-y-3">
          <legend class="text-[24px] font-bold text-slate-900 dark:text-white">Oficio <span class="text-red-500" aria-hidden="true">*</span></legend>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3" role="radiogroup" aria-label="Seleccioná el oficio requerido">
            ${['Limpieza', 'Albañilería', 'Electricidad'].map(oficio => `
              <button type="button" data-grupo="oficio" data-valor="${oficio}" class="chip-form min-h-[56px] px-4 py-3 rounded-xl border-2 font-bold text-[18px] text-center transition-all ${formState.oficio === oficio ? 'bg-serrano-blue text-white force-text-white border-serrano-blueHover shadow-inner translate-y-[2px]' : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'}" aria-pressed="${formState.oficio === oficio}">
                ${formState.oficio === oficio ? '<svg class="w-5 h-5 inline-block mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>' : ''}${oficio}
              </button>
            `).join('')}
          </div>
        </fieldset>

        <!-- 3. Qué necesitás (Textarea con validación reactiva >= 10 chars) -->
        <div class="space-y-2">
          <label for="campo-descripcion" class="block text-[24px] font-bold text-slate-900 dark:text-white">
            Qué necesitás <span class="text-red-500" aria-hidden="true">*</span>
          </label>
          <textarea id="campo-descripcion" rows="3" class="input-serrano resize-none" placeholder="Limpiar el patio y juntar las hojas." aria-describedby="ayuda-descripcion error-descripcion">${formState.descripcion}</textarea>
          <p id="ayuda-descripcion" class="text-[18px] text-slate-500 dark:text-slate-400">
            Ejemplo: limpiar un patio chico. (Mínimo 10 letras).
          </p>
          <p id="error-descripcion" class="hidden text-[18px] font-bold text-serrano-dangerText dark:text-red-400 flex items-center gap-1.5" role="alert">
            <svg class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            <span>Contanos un poco más sobre lo que necesitás (al menos 10 letras).</span>
          </p>
        </div>

        <!-- 4. Cuándo -->
        <fieldset class="space-y-3">
          <legend class="text-[24px] font-bold text-slate-900 dark:text-white">Cuándo <span class="text-red-500" aria-hidden="true">*</span></legend>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-3" role="radiogroup" aria-label="Elegí cuándo se debe hacer">
            ${['Hoy', 'Mañana', 'Esta semana', 'A convenir'].map(tiempo => `
              <button type="button" data-grupo="cuando" data-valor="${tiempo}" class="chip-form min-h-[56px] px-3 py-3 rounded-xl border-2 font-bold text-[18px] text-center transition-all ${formState.cuando === tiempo ? 'bg-serrano-blue text-white force-text-white border-serrano-blueHover shadow-inner translate-y-[2px]' : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'}" aria-pressed="${formState.cuando === tiempo}">
                ${formState.cuando === tiempo ? '<svg class="w-5 h-5 inline-block mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>' : ''}${tiempo}
              </button>
            `).join('')}
          </div>
        </fieldset>

        <!-- 5. Dónde -->
        <fieldset class="space-y-3">
          <legend class="text-[24px] font-bold text-slate-900 dark:text-white">Dónde <span class="text-red-500" aria-hidden="true">*</span></legend>
          <div class="grid grid-cols-2 gap-3" role="radiogroup" aria-label="Elegí la zona del pueblo">
            ${['Zona Norte', 'Zona Sur'].map(zona => `
              <button type="button" data-grupo="donde" data-valor="${zona}" class="chip-form min-h-[56px] px-4 py-3 rounded-xl border-2 font-bold text-[18px] text-center transition-all ${formState.donde === zona ? 'bg-serrano-blue text-white force-text-white border-serrano-blueHover shadow-inner translate-y-[2px]' : 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700'}" aria-pressed="${formState.donde === zona}">
                ${formState.donde === zona ? '<svg class="w-5 h-5 inline-block mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>' : ''}${zona}
              </button>
            `).join('')}
          </div>
        </fieldset>

        <!-- 6. Referencia del lugar -->
        <div class="space-y-2">
          <label for="campo-referencia" class="block text-[24px] font-bold text-slate-900 dark:text-white">
            Una referencia del lugar
          </label>
          <input type="text" id="campo-referencia" class="input-serrano" placeholder="Cerca de la plaza, en Serrano." value="${formState.referencia}" aria-describedby="ayuda-referencia">
          <p id="ayuda-referencia" class="text-[18px] text-slate-500 dark:text-slate-400">
            La dirección exacta la pasás por mensaje.
          </p>
        </div>

        <!-- Microcopy informativo antes de enviar -->
        <p class="text-[18px] text-slate-600 dark:text-slate-400 font-medium">
          El precio se acuerda por mensaje antes de empezar.
        </p>

        <!-- BOTÓN PUBLICAR PEDIDO + MICROCOPY DE FALTANTES (C1 & C8) -->
        <div class="space-y-2 pt-2">
          <button type="submit" id="btn-publicar-pedido" class="btn btn-primary w-full shadow-xl text-[18px] force-text-white" disabled>
            Publicar pedido
          </button>
          <p id="microcopy-faltantes" class="text-[18px] text-slate-600 dark:text-slate-400 text-center font-medium flex items-center justify-center gap-2" role="status" aria-live="polite">
            <svg class="w-5 h-5 text-slate-500 dark:text-slate-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            <span>Falta: tipo de trabajo, oficio, qué necesitás, cuándo, dónde.</span>
          </p>
        </div>

      </form>

    </div>
  `;

  bindEventosFormulario(contenedor);
}

function bindEventosFormulario(contenedor) {
  const form = contenedor.querySelector('#form-pedir-changa');
  const textareaDesc = contenedor.querySelector('#campo-descripcion');
  const inputRef = contenedor.querySelector('#campo-referencia');
  const btnSubmit = contenedor.querySelector('#btn-publicar-pedido');
  const microcopy = contenedor.querySelector('#microcopy-faltantes');
  const errorDesc = contenedor.querySelector('#error-descripcion');
  const chips = contenedor.querySelectorAll('.chip-form');

  // Validación multi-campo (C1 & C8: 5 campos validados e ícono SVG sin texto plano)
  function validarFormulario() {
    const desc = textareaDesc ? textareaDesc.value.trim() : '';
    const tipo = state.borradorFormulario.tipoTrabajo;
    const oficio = state.borradorFormulario.oficio;
    const cuando = state.borradorFormulario.cuando;
    const donde = state.borradorFormulario.donde;

    const faltantes = [];
    if (!tipo) faltantes.push('tipo de trabajo');
    if (!oficio) faltantes.push('oficio');
    if (!desc || desc.length < 10) {
      faltantes.push('qué necesitás');
    }
    if (!cuando) faltantes.push('cuándo');
    if (!donde) faltantes.push('dónde');

    const esValido = faltantes.length === 0;

    if (btnSubmit && microcopy) {
      if (esValido) {
        btnSubmit.disabled = false;
        microcopy.innerHTML = `
          <svg class="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>Todo listo para publicar.</span>
        `;
        microcopy.className = 'text-[18px] text-serrano-successText dark:text-emerald-400 text-center font-bold flex items-center justify-center gap-2';
        if (textareaDesc) textareaDesc.classList.remove('input-error');
        if (errorDesc) errorDesc.classList.add('hidden');
      } else {
        btnSubmit.disabled = true;
        microcopy.innerHTML = `
          <svg class="w-5 h-5 text-slate-500 dark:text-slate-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
          <span>Falta: ${faltantes.join(', ')}.</span>
        `;
        microcopy.className = 'text-[18px] text-slate-600 dark:text-slate-400 text-center font-medium flex items-center justify-center gap-2';
      }
    }

    return esValido;
  }

  // Chips reactivos
  chips.forEach(btn => {
    btn.addEventListener('click', () => {
      const grupo = btn.getAttribute('data-grupo');
      const valor = btn.getAttribute('data-valor');

      // Actualizar estado del borrador
      state.borradorFormulario[grupo] = valor;
      guardarBorradorLocalStorage();

      // Actualizar clases de los chips del mismo grupo
      const grupoChips = contenedor.querySelectorAll(`[data-grupo="${grupo}"]`);
      grupoChips.forEach(c => {
        const cVal = c.getAttribute('data-valor');
        const cActivo = cVal === valor;
        c.setAttribute('aria-pressed', cActivo);
        if (cActivo) {
          c.className = 'chip-form min-h-[56px] px-4 py-3 rounded-xl border-2 font-bold text-[18px] text-center transition-all bg-serrano-blue text-white force-text-white border-serrano-blueHover shadow-inner translate-y-[2px]';
          c.innerHTML = `<svg class="w-5 h-5 inline-block mr-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>${cVal}`;
        } else {
          c.className = 'chip-form min-h-[56px] px-4 py-3 rounded-xl border-2 font-bold text-[18px] text-center transition-all bg-white dark:bg-slate-800 text-slate-900 dark:text-white border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700';
          c.innerHTML = cVal;
        }
      });

      validarFormulario();
    });
  });

  // Eventos en campos de texto
  if (textareaDesc) {
    textareaDesc.addEventListener('input', () => {
      state.borradorFormulario.descripcion = textareaDesc.value;
      guardarBorradorLocalStorage();
      validarFormulario();
    });
  }

  if (inputRef) {
    inputRef.addEventListener('input', () => {
      state.borradorFormulario.referencia = inputRef.value;
      guardarBorradorLocalStorage();
    });
  }

  // Submit del Formulario
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!validarFormulario()) {
        if (textareaDesc && (!textareaDesc.value.trim() || textareaDesc.value.trim().length < 10)) {
          textareaDesc.classList.add('input-error');
          textareaDesc.focus();
          if (errorDesc) errorDesc.classList.remove('hidden');
        }
        return;
      }

      const esOffline = !navigator.onLine;
      const nuevoPedido = {
        id: 'pedido-' + Date.now(),
        titulo: formatearTituloPedido(state.borradorFormulario.descripcion), // C7: título limpio sin oficio
        descripcion: state.borradorFormulario.descripcion,
        tipoTrabajo: state.borradorFormulario.tipoTrabajo,
        oficio: state.borradorFormulario.oficio,
        cuando: state.borradorFormulario.cuando,
        zona: state.borradorFormulario.donde,
        referencia: state.borradorFormulario.referencia,
        fecha: 'Recién',
        estado: esOffline ? 'Guardado · Falta publicar' : 'Esperando que te escriban', // C3
        estadoTipo: esOffline ? 'guardado' : 'nuevo',
        sinSenal: esOffline,
        puedeCancelar: true
      };

      guardarPedidoLocalStorage(nuevoPedido);
      limpiarBorradorLocalStorage();

      // Detección de conectividad offline (C3)
      if (esOffline) {
        window.location.hash = '#sin-senal/' + nuevoPedido.id;
      } else {
        abrirModal({
          titulo: 'Tu pedido ya está publicado',
          descripcion: 'Te avisamos en Mensajes cuando alguien te escriba. Los trabajadores de tu zona ya pueden ver tu pedido.',
          tipo: 'exito',
          trigger: btnSubmit,
          acciones: [
            {
              texto: 'Ver Mis trabajos',
              primaria: true,
              callback: () => { window.location.hash = '#mis-trabajos'; }
            },
            {
              texto: 'Cerrar',
              primaria: false,
              callback: () => { window.location.hash = '#buscar'; }
            }
          ]
        });
      }
    });
  }

  // Validación inicial
  validarFormulario();
}

// ----------------------------------------------------------------------------
// VISTA 4: MIS TRABAJOS (#mis-trabajos — Wireframe 20-Mis-trabajos)
// ----------------------------------------------------------------------------
function renderVistaMisTrabajos(contenedor) {
  const pedidosLocales = cargarPedidosLocalStorage();
  // Según la pestaña activa (C2): "Lo que pedí" combina pedidos locales y muestra; "Lo que hago" muestra trabajos tomados
  const listaMostrar = state.tabMisTrabajos === 'pedi' 
    ? [...pedidosLocales, ...TRABAJOS_MUESTRA.map(aplicarCambiosTrabajo)]
    : TRABAJOS_HAGO_MUESTRA.map(aplicarCambiosTrabajo);

  contenedor.innerHTML = `
    <div class="max-w-2xl mx-auto space-y-8 animate-fadeIn">
      
      <!-- ENCABEZADO -->
      <section class="space-y-4">
        <div>
          <h1 class="text-[32px] font-bold text-slate-900 dark:text-white leading-tight">Mis trabajos</h1>
        </div>

        <!-- Selector Lo que pedí / Lo que hago (C2) -->
        <div class="inline-flex p-1.5 bg-slate-100 dark:bg-slate-800 rounded-2xl border-2 border-slate-300 dark:border-slate-700 w-full sm:w-auto" role="tablist">
          <button type="button" id="tab-lo-que-pedi" role="tab" aria-selected="${state.tabMisTrabajos === 'pedi'}" class="flex-1 sm:flex-initial min-h-[56px] px-3 sm:px-6 py-3 rounded-xl font-bold text-[18px] transition-all flex items-center justify-center gap-2 whitespace-nowrap ${state.tabMisTrabajos === 'pedi' ? 'bg-white dark:bg-slate-900 text-serrano-blue dark:text-blue-400 shadow-md border border-slate-200 dark:border-slate-700' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}">
            ${state.tabMisTrabajos === 'pedi' ? '<svg class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>' : ''}
            <span>Lo que pedí</span>
          </button>
          <button type="button" id="tab-lo-que-hago" role="tab" aria-selected="${state.tabMisTrabajos === 'hago'}" class="flex-1 sm:flex-initial min-h-[56px] px-3 sm:px-6 py-3 rounded-xl font-bold text-[18px] transition-all flex items-center justify-center gap-2 whitespace-nowrap ${state.tabMisTrabajos === 'hago' ? 'bg-white dark:bg-slate-900 text-serrano-blue dark:text-blue-400 shadow-md border border-slate-200 dark:border-slate-700' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}">
            ${state.tabMisTrabajos === 'hago' ? '<svg class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>' : ''}
            <span>Lo que hago</span>
          </button>
        </div>

        <!-- C5: El texto va DESPUÉS de las pestañas -->
        <p class="text-[18px] text-slate-600 dark:text-slate-300 font-medium">Acá ves cómo sigue cada pedido.</p>
      </section>

      <!-- LISTA DE TRABAJOS (WIREFRAME 20-MIS-TRABAJOS) -->
      <section class="space-y-5">
        ${listaMostrar.length === 0 ? `
          <div class="p-8 text-center bg-slate-50 dark:bg-slate-800/50 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 space-y-3">
            <p class="text-[24px] font-bold text-slate-800 dark:text-slate-200">No tenés trabajos en esta sección todavía.</p>
          </div>
        ` : listaMostrar.map(tr => `
          <article class="card-tap p-6 bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 rounded-2xl space-y-4 shadow-sm">
            
            <div class="space-y-1">
              <h2 class="text-[24px] font-bold text-slate-900 dark:text-white">${tr.titulo}</h2>
              
              <!-- Estado Visual no solo por color (Ícono + Forma + Texto) -->
              <div class="flex items-center gap-2 text-[18px] font-bold pt-1">
                ${tr.estado.includes('Cancelado') ? `
                  <svg class="w-5 h-5 text-slate-700 dark:text-slate-300 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                  <span class="text-slate-700 dark:text-slate-300">${tr.estado}</span>
                ` : tr.estado.includes('Terminado') ? `
                  <svg class="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  <span class="text-emerald-800 dark:text-emerald-300">${tr.estado}</span>
                ` : (tr.estado.includes('Guardado') || tr.sinSenal) ? `
                  <span class="font-bold text-amber-600 dark:text-amber-400 text-[18px]">...</span>
                  <span class="text-amber-800 dark:text-amber-300">${tr.estado}</span>
                ` : `
                  <span class="w-4 h-4 rounded-full border-2 border-slate-700 dark:border-slate-300 inline-block flex-shrink-0" aria-hidden="true"></span>
                  <span class="text-slate-800 dark:text-slate-200">${tr.estado}</span>
                `}
              </div>
            </div>

            <!-- C7: Formato Oficio · Zona · Cuándo / Metadatos -->
            <p class="text-[14px] text-slate-600 dark:text-slate-400 font-medium">
              ${tr.oficio ? `${tr.oficio} · ` : ''}${tr.zona} · ${tr.cuando || tr.fecha}${tr.trabajadorNombre && tr.trabajadorNombre !== 'Sin asignar' ? ` · ${tr.trabajadorNombre}` : ''}${tr.clienteNombre ? ` · Cliente: ${tr.clienteNombre}` : ''}
            </p>

            <div class="pt-1">
              ${tr.puedeOpinar ? `
                <button type="button" data-id="${tr.id}" class="btn btn-secondary w-full btn-accion-opinar">
                  Dejar opinión
                </button>
              ` : (tr.estado.includes('Guardado') || tr.sinSenal) ? `
                <a href="#sin-senal/${tr.id}" class="btn btn-secondary w-full inline-flex items-center justify-center">
                  Ver pedido guardado
                </a>
              ` : `
                <button type="button" data-id="${tr.id}" class="btn btn-secondary w-full btn-accion-ver">
                  Ver trabajo
                </button>
              `}
            </div>

          </article>
        `).join('')}
      </section>

      <!-- BOTÓN INFERIOR: PEDIR UNA CHANGA -->
      <section class="pt-4">
        <a href="#pedir" class="btn btn-primary w-full shadow-lg text-center flex items-center justify-center gap-2 force-text-white">
          <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
          <span>Pedir una changa</span>
        </a>
      </section>

    </div>
  `;

  // Listeners de pestañas (C2)
  const tabPedi = contenedor.querySelector('#tab-lo-que-pedi');
  const tabHago = contenedor.querySelector('#tab-lo-que-hago');
  if (tabPedi && tabHago) {
    tabPedi.addEventListener('click', () => {
      state.tabMisTrabajos = 'pedi';
      renderVistaMisTrabajos(contenedor);
    });
    tabHago.addEventListener('click', () => {
      state.tabMisTrabajos = 'hago';
      renderVistaMisTrabajos(contenedor);
    });
  }

  // Listeners de acciones en tarjetas (B9: sin onclick inline)
  contenedor.querySelectorAll('.btn-accion-opinar').forEach(btn => {
    btn.addEventListener('click', () => {
      window.location.hash = '#opinion/' + btn.getAttribute('data-id');
    });
  });

  contenedor.querySelectorAll('.btn-accion-ver').forEach(btn => {
    btn.addEventListener('click', () => {
      window.location.hash = '#trabajo/' + btn.getAttribute('data-id');
    });
  });
}

// ============================================================================
// 8b. PANTALLAS COMPLETAS (v3): INGRESO, DETALLES, PAGOS, MENSAJES Y PERFIL
// Fuente: wireframes 01–51 de Figma y docs/insumos/02-especificacion §6
// ============================================================================

// ----------------------------------------------------------------------------
// Utilidades compartidas
// ----------------------------------------------------------------------------
function leerLS(clave, porDefecto) {
  try {
    const data = localStorage.getItem(clave);
    return data ? JSON.parse(data) : porDefecto;
  } catch (e) {
    return porDefecto;
  }
}

function guardarLS(clave, valor) {
  try {
    localStorage.setItem(clave, JSON.stringify(valor));
    return true;
  } catch (e) {
    mostrarToast('No se pudo guardar en el celular. Revisá el espacio libre.', 'advertencia');
    return false;
  }
}

// Evita que un texto escrito por la persona se interprete como HTML
function esc(texto) {
  return String(texto == null ? '' : texto)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatearPesos(monto) {
  return '$' + Number(monto || 0).toLocaleString('es-AR') + ' ARS';
}

function soloNumeros(texto) {
  return String(texto || '').replace(/\D/g, '');
}

function horaActual() {
  const d = new Date();
  return String(d.getHours()).padStart(2, '0') + ':' + String(d.getMinutes()).padStart(2, '0');
}

function primerNombre(nombre) {
  return String(nombre || '').split(' ')[0];
}

function inicialesDe(nombre) {
  const partes = String(nombre || '').trim().split(/\s+/);
  return ((partes[0] || '')[0] || '').toUpperCase() + ((partes[1] || '')[0] || '').toUpperCase();
}

const ICONOS = {
  flechaVolver: '<svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>',
  check: '<svg class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>',
  circulo: '<span class="w-4 h-4 rounded-full border-2 border-current inline-block flex-shrink-0" aria-hidden="true"></span>',
  punto: '<span class="w-4 h-4 rounded-full bg-current inline-block flex-shrink-0" aria-hidden="true"></span>',
  alerta: '<svg class="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>',
  advertencia: '<svg class="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
  info: '<svg class="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>',
  cruz: '<svg class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>',
  sinSenal: '<svg class="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>',
  dosFlechas: '<svg class="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="7 8 3 12 7 16"></polyline><polyline points="17 8 21 12 17 16"></polyline><line x1="3" y1="12" x2="21" y2="12"></line></svg>',
  reloj: '<svg class="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>'
};

// Botón "← Volver" con la acción Back (vuelve a la pantalla anterior del historial)
function htmlVolver(rutaRespaldo) {
  return `
    <div>
      <a href="#${rutaRespaldo}" data-volver class="btn btn-secondary inline-flex items-center gap-2 text-[18px] min-h-[56px] px-5">
        ${ICONOS.flechaVolver}
        <span>Volver</span>
      </a>
    </div>`;
}

// Caja de aviso: nunca solo color (ícono + borde + texto)
function htmlAviso(tipo, titulo, texto, rol = '') {
  const estilos = {
    info: 'bg-slate-100 dark:bg-slate-800 border-2 border-slate-400 dark:border-slate-600 text-slate-900 dark:text-slate-100',
    exito: 'bg-emerald-50 dark:bg-emerald-950/40 border-2 border-emerald-600 dark:border-emerald-700 text-emerald-950 dark:text-emerald-100',
    advertencia: 'bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-600 dark:border-amber-700 text-amber-950 dark:text-amber-100',
    peligro: 'bg-red-50 dark:bg-red-950/40 border-[3px] border-red-700 dark:border-red-500 text-red-950 dark:text-red-100'
  };
  const iconos = { info: ICONOS.info, exito: ICONOS.check, advertencia: ICONOS.advertencia, peligro: ICONOS.alerta };
  return `
    <div class="p-5 rounded-2xl flex items-start gap-3 ${estilos[tipo] || estilos.info}" ${rol ? `role="${rol}"` : ''}>
      ${iconos[tipo] || ICONOS.info}
      <div class="space-y-1">
        ${titulo ? `<p class="text-[18px] font-bold">${titulo}</p>` : ''}
        ${texto ? `<p class="text-[18px]">${texto}</p>` : ''}
      </div>
    </div>`;
}

// Chip seleccionable (aria-pressed + check visible: el estado no depende del color)
function htmlChip(grupo, valor, elegido, extraClases = '') {
  return `
    <button type="button" class="chip w-full ${elegido ? 'force-text-white' : ''} ${extraClases}" data-grupo="${grupo}" data-valor="${esc(valor)}" aria-pressed="${elegido}">
      ${elegido ? ICONOS.check : ''}<span>${esc(valor)}</span>
    </button>`;
}

// Línea de estado con ícono + texto
function htmlEstado(estado) {
  const texto = esc(estado || '');
  if (/Cancelado/.test(estado)) {
    return `<p class="flex items-center gap-2 text-[18px] font-bold text-slate-700 dark:text-slate-300">${ICONOS.cruz}<span>${texto}</span></p>`;
  }
  if (/Terminado|Pagado|Seña pagada/.test(estado)) {
    return `<p class="flex items-center gap-2 text-[18px] font-bold text-emerald-800 dark:text-emerald-300">${ICONOS.check}<span>${texto}</span></p>`;
  }
  if (/En curso/.test(estado)) {
    return `<p class="flex items-center gap-2 text-[18px] font-bold text-slate-900 dark:text-white">${ICONOS.reloj}<span>${texto}</span></p>`;
  }
  if (/Guardado|Falta publicar|Pendiente/.test(estado)) {
    return `<p class="flex items-center gap-2 text-[18px] font-bold text-amber-800 dark:text-amber-300"><span aria-hidden="true">...</span><span>${texto}</span></p>`;
  }
  return `<p class="flex items-center gap-2 text-[18px] font-bold text-slate-900 dark:text-white">${ICONOS.circulo}<span>${texto}</span></p>`;
}

// ----------------------------------------------------------------------------
// Datos de detalle (completan los datos de muestra de Mis trabajos y Buscar)
// ----------------------------------------------------------------------------
const DETALLE_TRABAJOS = {
  'trabajo-1': { trabajadorId: 'carlos-heredia', conversacionId: 'carlos-heredia', cuando: 'Mañana, a las 9', total: 50000, nota: 'Materiales a tu cargo.' },
  'trabajo-2': { cuando: 'Mañana' },
  'trabajo-3': { trabajadorId: 'raul-diaz', conversacionId: 'raul-diaz', cuando: 'El lunes a la mañana' },
  'hago-1': { cuando: 'Viernes, a las 15 hs' },
  'hago-2': { cuando: 'Ayer' }
};

const DETALLE_CHANGAS = {
  'changa-1': { pidePor: { id: 'marta-lopez', nombre: 'Marta López' }, detalle: 'Cambiar un enchufe que está flojo en la cocina. Busco electricista.', cuando: 'Hoy, después de las 16.', donde: 'Zona Norte, Serrano. La dirección se pasa por mensaje.' },
  'changa-2': { pidePor: { id: 'graciela-d', nombre: 'Graciela D.' }, detalle: 'Limpiar un patio grande y juntar las hojas.', cuando: 'Hoy, a la tarde.', donde: 'Zona Sur, Serrano. La dirección se pasa por mensaje.' },
  'changa-3': { pidePor: { id: 'pedro-g', nombre: 'Pedro G.' }, detalle: 'Reparar el revoque de una pared del patio que se está cayendo.', cuando: 'Mañana, a la mañana.', donde: 'Zona Norte, Serrano. La dirección se pasa por mensaje.' },
  'changa-4': { pidePor: { id: 'silvia-m', nombre: 'Silvia M.' }, detalle: 'Cortar el pasto del fondo y juntar las ramas.', cuando: 'Esta semana, cualquier día.', donde: 'Zona Norte, Serrano. La dirección se pasa por mensaje.' }
};

const CONVERSACIONES_BASE = [
  {
    id: 'carlos-heredia', nombre: 'Carlos Heredia', tema: 'Pintar el living', zona: 'Zona Norte', trabajoId: 'trabajo-1', telefonoConfirmado: true, fecha: 'Hoy',
    mensajes: [
      { de: 'vos', texto: 'Hola Carlos, necesito pintar el living. ¿Podés mañana?', hora: '10:02', estado: 'Enviado' },
      { de: 'otro', texto: 'Sí. Por el trabajo son $50.000 ARS. Los materiales los ponés vos.', hora: '10:08', estado: 'Recibido' },
      { de: 'vos', texto: 'Dale. Acordemos una seña de $10.000 y $40.000 al terminar, por Mercado Pago.', hora: '10:12', estado: 'Enviado' },
      { de: 'otro', texto: 'De acuerdo. Mañana puedo ir a las 9. Pasame la dirección.', hora: '10:15', estado: 'Recibido' }
    ]
  },
  {
    id: 'marta-lopez', nombre: 'Marta López', tema: 'Limpieza en Zona Sur', zona: 'Zona Sur', telefonoConfirmado: true, fecha: 'Ayer', leida: true,
    mensajes: [
      { de: 'vos', texto: 'Hola Marta, vi tu pedido de limpieza. Puedo ayudarte.', hora: '18:05', estado: 'Enviado' },
      { de: 'otro', texto: '¿Podés venir esta semana?', hora: '18:20', estado: 'Recibido' }
    ]
  },
  {
    id: 'raul-diaz', nombre: 'Raúl Díaz', tema: 'Arreglar una luz', zona: 'Zona Norte', trabajoId: 'trabajo-3', telefonoConfirmado: true, fecha: 'Lunes', leida: true,
    mensajes: [
      { de: 'vos', texto: 'Hola Raúl, se me quemó una luz del pasillo. ¿Podés venir?', hora: '09:10', estado: 'Enviado' },
      { de: 'otro', texto: 'Sí, paso el lunes a la mañana.', hora: '09:30', estado: 'Recibido' },
      { de: 'vos', texto: 'Listo, quedó perfecta. ¡Gracias!', hora: '12:20', estado: 'Enviado' },
      { de: 'otro', texto: 'Gracias, cualquier cosa avisame.', hora: '12:30', estado: 'Recibido' }
    ]
  }
];

const PERFIL_INICIAL = {
  nombre: 'Ana Ríos',
  oficios: ['Limpieza'],
  zona: 'Zona Norte',
  disponible: true,
  experiencia: 'Hago limpieza de casas y patios en Serrano.',
  telefono: '+54 9 3385 12 3456',
  estrellas: 4,
  trabajos: 12,
  recomiendan: ['Marta L.', 'Rosa P.', 'Luis G.'],
  foto: ''
};

const ACUERDOS_INICIALES = {
  'trabajo-1': { trabajoId: 'trabajo-1', titulo: 'Pintar el living', persona: 'Carlos Heredia', total: 50000, modo: 'sena', sena: 10000, forma: 'Mercado Pago', pagado: 0, estado: 'guardado' }
};

// ----------------------------------------------------------------------------
// Acceso a datos (muestra + lo guardado en el celular)
// ----------------------------------------------------------------------------
function obtenerSesion() { return leerLS('serrano_sesion', null); }
function obtenerPerfil() { return { ...PERFIL_INICIAL, ...leerLS('serrano_perfil', {}) }; }
function guardarPerfil(perfil) { return guardarLS('serrano_perfil', perfil); }
function obtenerAcuerdos() { return { ...ACUERDOS_INICIALES, ...leerLS('serrano_acuerdos', {}) }; }
function guardarAcuerdo(id, acuerdo) {
  const guardados = leerLS('serrano_acuerdos', {});
  guardados[id] = acuerdo;
  return guardarLS('serrano_acuerdos', guardados);
}

// Cambios de estado de los trabajos de muestra (cancelar, empezar, terminar, opinar)
function aplicarCambiosTrabajo(trabajo) {
  const cambios = leerLS('serrano_trabajos', {})[trabajo.id] || {};
  return { ...trabajo, ...(DETALLE_TRABAJOS[trabajo.id] || {}), ...cambios };
}

function guardarCambiosTrabajo(id, cambios) {
  const pedidos = cargarPedidosLocalStorage();
  const idx = pedidos.findIndex(p => p.id === id);
  if (idx >= 0) {
    pedidos[idx] = { ...pedidos[idx], ...cambios };
    return guardarLS('serrano_pedidos', pedidos);
  }
  const todos = leerLS('serrano_trabajos', {});
  todos[id] = { ...(todos[id] || {}), ...cambios };
  return guardarLS('serrano_trabajos', todos);
}

function obtenerTrabajo(id) {
  const local = cargarPedidosLocalStorage().find(p => p.id === id);
  if (local) return { ...local, lado: 'pedi' };
  const pedi = TRABAJOS_MUESTRA.find(t => t.id === id);
  if (pedi) return { ...aplicarCambiosTrabajo(pedi), lado: 'pedi' };
  const hago = TRABAJOS_HAGO_MUESTRA.find(t => t.id === id);
  if (hago) return { ...aplicarCambiosTrabajo(hago), lado: 'hago' };
  return null;
}

function obtenerConversaciones() {
  const nuevas = leerLS('serrano_conversaciones', []);
  const extras = leerLS('serrano_mensajes', {});
  const leidas = leerLS('serrano_leidas', []);
  return [...nuevas, ...CONVERSACIONES_BASE].map(c => {
    const mensajes = [...c.mensajes, ...(extras[c.id] || [])];
    const ultimo = mensajes[mensajes.length - 1];
    const sinLeer = !c.leida && !leidas.includes(c.id) && ultimo && ultimo.de === 'otro';
    return { ...c, mensajes, ultimo, sinLeer };
  });
}

function opinionesGuardadas(trabajadorId) {
  return leerLS('serrano_opiniones', []).filter(o => o.trabajadorId === trabajadorId);
}

// Abre (o crea) la conversación con alguien y deja un primer mensaje ya armado
function iniciarConversacion({ id, nombre, tema, zona, telefonoConfirmado = true, mensajeInicial }) {
  const existe = obtenerConversaciones().some(c => c.id === id);
  if (!existe) {
    const nuevas = leerLS('serrano_conversaciones', []);
    nuevas.unshift({
      id, nombre, tema, zona, telefonoConfirmado, fecha: 'Hoy',
      mensajes: [{ de: 'vos', texto: mensajeInicial, hora: horaActual(), estado: navigator.onLine ? 'Enviado' : 'Pendiente de enviar' }]
    });
    guardarLS('serrano_conversaciones', nuevas);
    state.avisoContacto = id;
  }
  window.location.hash = '#conversacion/' + id;
}

// ----------------------------------------------------------------------------
// INGRESO · Crear cuenta / Entrar / Cambiar teléfono (wireframes 01)
// ----------------------------------------------------------------------------
function renderVistaTelefono(contenedor, modo) {
  const textos = {
    'crear-cuenta': { titulo: 'Crear cuenta', bajada: 'Encontrá ayuda y changas en Serrano, cerca de tu casa.', ayuda: 'Poné el código de área y tu número.', pasoTitulo: 'Te mandamos un código por SMS', pasoTexto: 'Lo escribís en el próximo paso. No necesitás contraseña.', otraPregunta: '¿Ya tenés cuenta?', otraAccion: 'Entrar', otraRuta: 'entrar', volver: 'entrar' },
    'entrar': { titulo: 'Entrar', bajada: 'Volvé a tus trabajos y mensajes con tu número de celular.', ayuda: 'Usá el número de tu cuenta.', pasoTitulo: 'Entrás con un código SMS', pasoTexto: 'Te lo mandamos al celular. No te vamos a pedir una contraseña.', otraPregunta: '¿Es tu primera vez?', otraAccion: 'Crear cuenta', otraRuta: 'crear-cuenta', volver: 'crear-cuenta' },
    'cambiar-telefono': { titulo: 'Confirmar mi teléfono', bajada: 'Si cambiaste de número, poné el nuevo. Te mandamos un código para confirmarlo.', ayuda: 'Poné el código de área y tu número.', pasoTitulo: 'Te mandamos un código por SMS', pasoTexto: 'Lo escribís en el próximo paso.', otraPregunta: '', otraAccion: '', otraRuta: '', volver: 'mi-perfil' }
  }[modo];

  const telefono = state.ingreso.telefono || '';

  contenedor.innerHTML = `
    <div class="max-w-xl mx-auto space-y-7 animate-fadeIn">
      ${htmlVolver(textos.volver)}
      <section class="space-y-3">
        <h1 class="text-[32px] font-bold text-slate-900 dark:text-white leading-tight">${textos.titulo}</h1>
        <p class="text-[18px] text-slate-700 dark:text-slate-300">${textos.bajada}</p>
      </section>

      <form id="form-telefono" class="space-y-6" novalidate>
        <div class="space-y-2">
          <label for="campo-telefono" class="block text-[18px] font-bold text-slate-900 dark:text-white">Tu celular</label>
          <input id="campo-telefono" type="tel" inputmode="tel" autocomplete="tel" class="input-serrano" placeholder="+54 9 3385 12 3456" value="${esc(telefono)}" aria-describedby="ayuda-telefono error-telefono">
          <p id="ayuda-telefono" class="text-[18px] text-slate-600 dark:text-slate-400">${textos.ayuda}</p>
          <p id="error-telefono" class="hidden text-[18px] font-bold text-serrano-dangerText dark:text-red-400 flex items-center gap-2" role="alert">
            ${ICONOS.alerta}<span>Revisá el número: tiene que tener el código de área y tu número.</span>
          </p>
        </div>

        <div class="p-5 rounded-2xl bg-slate-100 dark:bg-slate-800 border-2 border-slate-400 dark:border-slate-600 flex items-start gap-4">
          <span class="text-[24px] font-bold text-slate-900 dark:text-white leading-none" aria-hidden="true">1</span>
          <div class="space-y-1">
            <p class="text-[18px] font-bold text-slate-900 dark:text-white">${textos.pasoTitulo}</p>
            <p class="text-[18px] text-slate-700 dark:text-slate-300">${textos.pasoTexto}</p>
          </div>
        </div>

        <button type="submit" class="btn btn-primary w-full force-text-white">Recibir código SMS</button>
      </form>

      ${textos.otraAccion ? `
        <section class="space-y-3 pb-6">
          <p class="text-[18px] text-slate-700 dark:text-slate-300">${textos.otraPregunta}</p>
          <a href="#${textos.otraRuta}" class="btn btn-secondary w-full">${textos.otraAccion}</a>
        </section>` : ''}
    </div>
  `;

  const form = contenedor.querySelector('#form-telefono');
  const campo = contenedor.querySelector('#campo-telefono');
  const error = contenedor.querySelector('#error-telefono');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const digitos = soloNumeros(campo.value);
    if (digitos.length < 10) {
      campo.classList.add('input-error');
      error.classList.remove('hidden');
      campo.focus();
      return;
    }
    state.ingreso = { modo, telefono: campo.value.trim(), codigo: '', error: false };
    window.location.hash = '#confirmar';
  });

  campo.addEventListener('input', () => {
    campo.classList.remove('input-error');
    error.classList.add('hidden');
  });
}

// ----------------------------------------------------------------------------
// INGRESO · Confirmá tu teléfono + error (wireframes 02-Confirmar-telefono y 02-Error)
// ----------------------------------------------------------------------------
function renderVistaConfirmar(contenedor) {
  const ing = state.ingreso;
  if (!ing.telefono) {
    window.location.hash = obtenerSesion() ? '#mi-perfil' : '#crear-cuenta';
    return;
  }
  const rutaCorregir = ing.modo === 'cambiar-telefono' ? 'cambiar-telefono' : (ing.modo === 'entrar' ? 'entrar' : 'crear-cuenta');

  contenedor.innerHTML = `
    <div class="max-w-xl mx-auto space-y-7 animate-fadeIn">
      ${htmlVolver(rutaCorregir)}
      <section class="space-y-3">
        <h1 class="text-[32px] font-bold text-slate-900 dark:text-white leading-tight">${ing.error ? 'Revisá el código' : 'Confirmá tu teléfono'}</h1>
        <p class="text-[18px] text-slate-700 dark:text-slate-300">${ing.error ? `Celular: ${esc(ing.telefono)}` : `Enviamos un código por SMS al ${esc(ing.telefono)}.`}</p>
      </section>

      ${ing.error ? htmlAviso('peligro', 'No pudimos verificar tu número, revisá e intentá de nuevo.', '', 'alert') : ''}

      <form id="form-codigo" class="space-y-6" novalidate>
        <div class="space-y-2">
          <label for="campo-codigo" class="block text-[18px] font-bold text-slate-900 dark:text-white">Código de 4 números</label>
          <input id="campo-codigo" type="text" inputmode="numeric" autocomplete="one-time-code" maxlength="4" class="input-serrano tracking-[0.5em] font-bold ${ing.error ? 'input-error' : ''}" placeholder="0000" value="${esc(ing.codigo)}" aria-describedby="ayuda-codigo error-codigo" ${ing.error ? 'aria-invalid="true"' : ''}>
          <p id="ayuda-codigo" class="text-[18px] text-slate-600 dark:text-slate-400">${ing.error ? 'El código que escribiste sigue acá. Podés corregirlo.' : 'Buscá el código en tus mensajes SMS.'}</p>
          <p id="error-codigo" class="hidden text-[18px] font-bold text-serrano-dangerText dark:text-red-400 flex items-center gap-2" role="alert">
            ${ICONOS.alerta}<span>Falta: el código de 4 números.</span>
          </p>
        </div>
        <button type="submit" class="btn btn-primary w-full force-text-white">${ing.error ? 'Reintentar' : 'Confirmar teléfono'}</button>
      </form>

      <section class="space-y-4 pb-6">
        ${ing.error ? '' : '<p class="text-[18px] text-slate-700 dark:text-slate-300">¿No llegó? Puede tardar si hay poca señal.</p>'}
        <button type="button" id="btn-reenviar" class="btn btn-secondary w-full">Reenviar código</button>
        <a href="#${rutaCorregir}" class="btn btn-secondary w-full">Corregir celular</a>
        <p class="text-[14px] text-slate-600 dark:text-slate-400">Prototipo: cualquier código de 4 números funciona; 0000 muestra el error.</p>
      </section>
    </div>
  `;

  const form = contenedor.querySelector('#form-codigo');
  const campo = contenedor.querySelector('#campo-codigo');
  const errorFalta = contenedor.querySelector('#error-codigo');

  campo.addEventListener('input', () => {
    campo.value = soloNumeros(campo.value).slice(0, 4);
    state.ingreso.codigo = campo.value;
    errorFalta.classList.add('hidden');
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const codigo = soloNumeros(campo.value);
    if (codigo.length !== 4) {
      errorFalta.classList.remove('hidden');
      campo.focus();
      return;
    }
    if (codigo === '0000') {
      state.ingreso.error = true;
      state.ingreso.codigo = codigo;
      renderVistaConfirmar(contenedor);
      setTimeout(() => contenedor.querySelector('#campo-codigo').focus(), 50);
      return;
    }
    const modo = state.ingreso.modo;
    const telefono = state.ingreso.telefono;
    state.ingreso = { modo: '', telefono: '', codigo: '', error: false };

    if (modo === 'cambiar-telefono') {
      const perfil = obtenerPerfil();
      guardarPerfil({ ...perfil, telefono });
      mostrarToast('Teléfono confirmado.', 'exito');
      window.location.hash = '#mi-perfil';
      return;
    }
    guardarLS('serrano_sesion', { telefono, desde: new Date().toISOString() });
    guardarLS('serrano_tuvo_cuenta', true);
    if (modo === 'crear-cuenta') {
      window.location.hash = '#que-busco';
    } else {
      mostrarToast('Entraste a tu cuenta.', 'exito');
      window.location.hash = '#buscar';
    }
  });

  contenedor.querySelector('#btn-reenviar').addEventListener('click', () => {
    mostrarToast(navigator.onLine ? 'Te mandamos un código nuevo.' : 'Sin señal: lo mandamos cuando vuelva.', navigator.onLine ? 'exito' : 'advertencia');
  });
}

// ----------------------------------------------------------------------------
// INGRESO · ¿Buscás a alguien o buscás changas? (wireframe 03-Que-busco)
// ----------------------------------------------------------------------------
function renderVistaQueBusco(contenedor) {
  contenedor.innerHTML = `
    <div class="max-w-xl mx-auto space-y-7 animate-fadeIn">
      ${htmlVolver('buscar')}
      <section class="space-y-3">
        <h1 class="text-[32px] font-bold text-slate-900 dark:text-white leading-tight">¿Buscás a alguien o buscás changas?</h1>
        <p class="text-[18px] text-slate-700 dark:text-slate-300">Elegí por dónde querés empezar.</p>
      </section>

      <section class="space-y-6">
        <div class="space-y-2">
          <button type="button" class="btn btn-primary w-full force-text-white" data-preferencia="trabajadores">Busco a alguien</button>
          <p class="text-[18px] text-slate-700 dark:text-slate-300">Para pedir ayuda con un trabajo.</p>
        </div>
        <div class="space-y-2">
          <button type="button" class="btn btn-secondary w-full" data-preferencia="changas">Busco changas</button>
          <p class="text-[18px] text-slate-700 dark:text-slate-300">Para encontrar trabajo en el pueblo.</p>
        </div>
      </section>

      ${htmlAviso('info', 'Podés hacer las dos cosas', 'Después podés cambiar desde Buscar.')}
    </div>
  `;

  contenedor.querySelectorAll('[data-preferencia]').forEach(btn => {
    btn.addEventListener('click', () => {
      const pref = btn.getAttribute('data-preferencia');
      state.tabBuscarActiva = pref;
      const sesion = obtenerSesion() || {};
      guardarLS('serrano_sesion', { ...sesion, preferencia: pref });
      window.location.hash = '#buscar';
    });
  });
}

// ----------------------------------------------------------------------------
// BUSCAR · Changa pedida (wireframe 12-Changa-pedida)
// ----------------------------------------------------------------------------
function renderVistaChanga(contenedor, id) {
  const c = CHANGAS_MUESTRA.find(item => item.id === id);
  const d = DETALLE_CHANGAS[id];
  if (!c || !d) {
    renderNoEncontrado(contenedor, 'No encontramos esa changa', 'Puede que ya la hayan resuelto.', 'buscar');
    return;
  }
  const nombre = primerNombre(d.pidePor.nombre);

  contenedor.innerHTML = `
    <div class="max-w-2xl mx-auto space-y-7 animate-fadeIn pb-24 lg:pb-0">
      ${htmlVolver('buscar')}
      <h1 class="text-[32px] font-bold text-slate-900 dark:text-white leading-tight">${esc(c.titulo)}</h1>

      <div class="p-5 rounded-2xl bg-slate-100 dark:bg-slate-800 border-2 border-slate-400 dark:border-slate-600 space-y-1">
        <p class="flex items-center gap-2 text-[18px] font-bold text-slate-900 dark:text-white">${ICONOS.circulo}<span>Buscan a alguien · ${esc(c.oficio)}</span></p>
        <p class="text-[18px] text-slate-700 dark:text-slate-300">Pedido de ${esc(d.pidePor.nombre)}.</p>
      </div>

      <section class="card-tap p-6 space-y-5">
        <div class="space-y-1">
          <h2 class="text-[18px] font-bold text-slate-900 dark:text-white">Qué hay que hacer</h2>
          <p class="text-[18px] text-slate-700 dark:text-slate-300">${esc(d.detalle)}</p>
        </div>
        <div class="space-y-1">
          <h2 class="text-[18px] font-bold text-slate-900 dark:text-white">Cuándo</h2>
          <p class="text-[18px] text-slate-700 dark:text-slate-300">${esc(d.cuando)}</p>
        </div>
        <div class="space-y-1">
          <h2 class="text-[18px] font-bold text-slate-900 dark:text-white">Dónde</h2>
          <p class="text-[18px] text-slate-700 dark:text-slate-300">${esc(d.donde)}</p>
        </div>
      </section>

      <p class="text-[18px] text-slate-700 dark:text-slate-300">Precio a acordar. Hablá con ${esc(nombre)} antes de ir.</p>
      <p class="text-[18px] text-slate-600 dark:text-slate-400">Contactar abre una conversación con quien hizo el pedido.</p>

      <div class="lg:static fixed bottom-[72px] left-0 right-0 z-30 p-4 bg-white dark:bg-slate-900 border-t-2 border-slate-200 dark:border-slate-800 lg:border-t-0 lg:p-0 lg:bg-transparent">
        <div class="max-w-2xl mx-auto">
          <button type="button" id="btn-contactar-changa" class="btn btn-primary w-full force-text-white">Contactar</button>
        </div>
      </div>
    </div>
  `;

  contenedor.querySelector('#btn-contactar-changa').addEventListener('click', () => {
    iniciarConversacion({
      id: d.pidePor.id,
      nombre: d.pidePor.nombre,
      tema: c.titulo,
      zona: c.zona,
      mensajeInicial: `Hola ${nombre}, vi tu pedido “${c.titulo}”. Puedo ayudarte. ¿Cuándo te viene bien?`
    });
  });
}

// ----------------------------------------------------------------------------
// MIS TRABAJOS · Sin señal (wireframe 22-Sin-señal)
// ----------------------------------------------------------------------------
function renderVistaSinSenal(contenedor, id) {
  const p = obtenerTrabajo(id);
  if (!p) {
    window.location.hash = '#mis-trabajos';
    return;
  }
  const pendiente = /Guardado|Falta publicar/.test(p.estado || '') || p.sinSenal;

  contenedor.innerHTML = `
    <div class="max-w-xl mx-auto space-y-7 animate-fadeIn">
      ${htmlVolver('mis-trabajos')}
      <h1 class="text-[32px] font-bold text-slate-900 dark:text-white leading-tight">${pendiente ? 'Sin señal' : 'Tu pedido ya se publicó'}</h1>

      ${pendiente
        ? `<div class="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-600 dark:border-amber-700 text-amber-950 dark:text-amber-100 flex items-start gap-3">
             ${ICONOS.sinSenal}
             <div class="space-y-1"><p class="text-[18px] font-bold">Sin conexión</p><p class="text-[18px]">Tu pedido se guardó, se publica solo.</p></div>
           </div>
           <p class="text-[18px] text-slate-700 dark:text-slate-300">Todavía no está publicado. Cuando vuelva la señal, se va a publicar sin que tengas que cargarlo otra vez.</p>`
        : htmlAviso('exito', 'Volvió la señal', 'Los trabajadores de tu zona ya pueden ver tu pedido.')}

      <article class="card-tap p-6 space-y-3">
        <h2 class="text-[24px] font-bold text-slate-900 dark:text-white">${esc(p.titulo)}</h2>
        <p class="text-[18px] text-slate-700 dark:text-slate-300">${esc(p.cuando || p.fecha || '')} · ${esc(p.zona || '')}</p>
        ${pendiente
          ? `<p class="flex items-center gap-2 text-[18px] font-bold text-amber-800 dark:text-amber-300"><span aria-hidden="true">...</span><span>Guardado en este celular</span></p>
             <p class="flex items-center gap-2 text-[18px] font-bold text-slate-900 dark:text-white">${ICONOS.circulo}<span>Pendiente de publicar</span></p>`
          : htmlEstado(p.estado)}
      </article>

      <a href="#mis-trabajos" class="btn btn-primary w-full force-text-white">Ir a Mis trabajos</a>
      <p class="text-[18px] text-slate-600 dark:text-slate-400 pb-6">Ahí podés revisar si tu pedido sigue pendiente o ya se publicó.</p>
    </div>
  `;
}

// ----------------------------------------------------------------------------
// MIS TRABAJOS · Detalle del trabajo con el paso a paso (wireframe 23-Trabajo)
// ----------------------------------------------------------------------------
function pasoDelTrabajo(t) {
  // 0 = esperando, 1 = acordado, 2 = en curso, 3 = terminado, 4 = con opinión
  if (t.estadoTipo === 'opinado') return 4;
  if (t.estadoTipo === 'terminado') return 3;
  if (t.estadoTipo === 'en-curso') return 2;
  if (t.estadoTipo === 'acordado') return 1;
  return 0;
}

function renderVistaTrabajo(contenedor, id) {
  const t = obtenerTrabajo(id);
  if (!t) {
    renderNoEncontrado(contenedor, 'No encontramos ese trabajo', 'Revisá la lista de Mis trabajos.', 'mis-trabajos');
    return;
  }
  if (/Guardado|Falta publicar/.test(t.estado || '') && t.lado === 'pedi') {
    window.location.hash = '#sin-senal/' + id;
    return;
  }

  const trabajador = t.trabajadorId ? TRABAJADORES.find(x => x.id === t.trabajadorId) : null;
  const otraPersona = t.lado === 'hago' ? t.clienteNombre : (trabajador ? trabajador.nombre : (t.trabajadorNombre && t.trabajadorNombre !== 'Sin asignar' ? t.trabajadorNombre : ''));
  const nombre = primerNombre(otraPersona) || 'la otra persona';
  const paso = pasoDelTrabajo(t);
  const cancelado = t.estadoTipo === 'cancelado';
  const ultimoPaso = t.lado === 'hago' ? 3 : 4;

  const pasos = [
    { titulo: 'Acordar', hecho: 'Precio y día acordados' + (otraPersona ? ` con ${esc(nombre)}.` : '.'), pendiente: 'Esperando que te escriban.' },
    { titulo: 'Empezar', hecho: 'El trabajo empezó.', pendiente: t.lado === 'hago' ? 'Marcá el inicio cuando llegues.' : `Marcá el inicio cuando llegue ${esc(nombre)}.` },
    { titulo: 'Terminar', hecho: 'El trabajo terminó.', pendiente: 'Cuando termine, revisá el trabajo.' },
    { titulo: 'Opinar', hecho: 'Ya dejaste tu opinión.', pendiente: `Contá cómo te fue con ${esc(nombre)}.` }
  ].slice(0, ultimoPaso);

  const htmlPasos = pasos.map((ps, i) => {
    const hecho = paso > i;
    const actual = paso === i && !cancelado;
    const etiqueta = hecho
      ? `<p class="flex items-center gap-1.5 text-[18px] font-bold text-emerald-800 dark:text-emerald-300">${ICONOS.check}<span>Listo</span></p>`
      : `<p class="flex items-center gap-1.5 text-[18px] font-bold text-slate-900 dark:text-white">${ICONOS.circulo}<span>${actual ? 'Próximo paso' : 'Pendiente'}</span></p>`;
    return `
      <li class="flex items-start gap-4">
        <span class="w-11 h-11 flex-shrink-0 rounded-lg border-2 ${hecho ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-600' : actual ? 'border-serrano-blue' : 'border-slate-400 dark:border-slate-600'} flex items-center justify-center text-[24px] font-bold text-slate-900 dark:text-white" aria-hidden="true">${i + 1}</span>
        <div class="space-y-1">
          <h3 class="text-[24px] font-bold text-slate-900 dark:text-white">${ps.titulo}</h3>
          ${etiqueta}
          <p class="text-[18px] text-slate-700 dark:text-slate-300">${hecho ? ps.hecho : ps.pendiente}</p>
        </div>
      </li>`;
  }).join('');

  // Acciones según el estado (spec §6 · 14)
  let acciones = '';
  if (cancelado) {
    acciones = `<a href="#mis-trabajos" class="btn btn-primary w-full force-text-white">Volver a Mis trabajos</a>`;
  } else if (paso === 0) {
    acciones = `
      <p class="text-[18px] text-slate-700 dark:text-slate-300">Te avisamos en Mensajes cuando alguien te escriba.</p>
      <a href="#cancelar/${esc(id)}" class="btn btn-secondary w-full">Cancelar pedido</a>`;
  } else if (paso === 1) {
    acciones = `
      <button type="button" id="btn-marcar-inicio" class="btn btn-primary w-full force-text-white">Marcar inicio</button>
      <button type="button" class="btn btn-secondary w-full" disabled aria-describedby="ayuda-terminado">Marcar como terminado</button>
      <p id="ayuda-terminado" class="text-[18px] text-slate-600 dark:text-slate-400">— Todavía no disponible. Primero hay que empezar el trabajo.</p>
      <a href="#cancelar/${esc(id)}" class="btn btn-secondary w-full">Cancelar</a>
      <p class="flex items-start gap-2 text-[18px] font-bold text-slate-900 dark:text-white">${ICONOS.alerta}<span>Solo podés cancelar si no empezó. Una vez iniciado, no se puede cancelar.</span></p>`;
  } else if (paso === 2) {
    acciones = `
      <button type="button" id="btn-marcar-terminado" class="btn btn-primary w-full force-text-white">Marcar como terminado</button>
      ${htmlAviso('advertencia', 'El trabajo ya empezó', 'Ya no se puede cancelar desde la app.')}
      <button type="button" id="btn-problema-trabajo" class="btn btn-secondary w-full">Avisar de un problema</button>`;
  } else if (paso === 3 && t.lado === 'pedi') {
    acciones = `<a href="#opinion/${esc(id)}" class="btn btn-primary w-full force-text-white">Dejar opinión</a>`;
  } else if (paso === 3) {
    acciones = `<a href="#pagos" class="btn btn-primary w-full force-text-white">Ir a Pagos</a>`;
  } else {
    acciones = htmlAviso('exito', 'Trabajo finalizado', `Tu opinión ya está en el perfil de ${esc(nombre)}.`);
  }

  const conv = t.conversacionId ? `<a href="#conversacion/${esc(t.conversacionId)}" class="btn btn-secondary w-full">Ver conversación</a>` : '';

  contenedor.innerHTML = `
    <div class="max-w-2xl mx-auto space-y-7 animate-fadeIn">
      ${htmlVolver('mis-trabajos')}
      <h1 class="text-[32px] font-bold text-slate-900 dark:text-white leading-tight">${t.lado === 'hago' ? 'Trabajo que hacés' : 'Tu trabajo'}</h1>

      <div class="p-5 rounded-2xl bg-slate-100 dark:bg-slate-800 border-2 border-slate-400 dark:border-slate-600">${htmlEstado(t.estado)}</div>

      <article class="card-tap p-6 space-y-4">
        <h2 class="text-[24px] font-bold text-slate-900 dark:text-white">${esc(t.titulo)}</h2>
        ${otraPersona ? `
          <div class="space-y-1">
            <h3 class="text-[18px] font-bold text-slate-900 dark:text-white">${t.lado === 'hago' ? 'Para quién' : 'Con quién'}</h3>
            <p class="text-[18px] text-slate-700 dark:text-slate-300">${trabajador ? `${esc(trabajador.nombre)} · ${esc(trabajador.oficio)}` : esc(otraPersona)}</p>
          </div>
          ${trabajador ? `<a href="#trabajador/${trabajador.id}" class="btn btn-secondary w-full">Ver perfil de ${esc(primerNombre(trabajador.nombre))}</a>` : ''}` : ''}
        <div class="space-y-1">
          <h3 class="text-[18px] font-bold text-slate-900 dark:text-white">Cuándo y dónde</h3>
          <p class="text-[18px] text-slate-700 dark:text-slate-300">${esc(t.cuando || t.fecha || '')} · ${esc(t.zona || '')}</p>
        </div>
        ${t.total ? `<p class="text-[18px] text-slate-700 dark:text-slate-300">Total acordado: ${formatearPesos(t.total)}. ${esc(t.nota || '')}</p>` : ''}
      </article>

      ${cancelado ? htmlAviso('info', 'Trabajo cancelado', 'La conversación sigue guardada en Mensajes.') : `
        <section class="space-y-4">
          <h2 class="text-[24px] font-bold text-slate-900 dark:text-white">Paso a paso</h2>
          <ol class="space-y-5">${htmlPasos}</ol>
        </section>`}

      <section class="space-y-4 pb-6">
        ${acciones}
        ${conv}
      </section>
    </div>
  `;

  const btnInicio = contenedor.querySelector('#btn-marcar-inicio');
  if (btnInicio) {
    btnInicio.addEventListener('click', () => {
      guardarCambiosTrabajo(id, { estado: 'En curso', estadoTipo: 'en-curso', puedeCancelar: false });
      mostrarToast('Marcaste el inicio del trabajo.', 'exito');
      renderVistaTrabajo(contenedor, id);
    });
  }

  const btnTerminado = contenedor.querySelector('#btn-marcar-terminado');
  if (btnTerminado) {
    btnTerminado.addEventListener('click', () => {
      abrirModal({
        titulo: '¿Terminó el trabajo?',
        descripcion: t.lado === 'hago' ? 'Le avisamos a quien te contrató para que te pague lo que falta.' : `Después vas a poder contar cómo te fue con ${nombre}.`,
        tipo: 'info',
        trigger: btnTerminado,
        acciones: [
          {
            texto: 'Sí, terminó', primaria: true,
            callback: () => {
              if (t.lado === 'hago') {
                guardarCambiosTrabajo(id, { estado: 'Terminado · Esperando pago', estadoTipo: 'terminado' });
                mostrarToast('Trabajo terminado. Le avisamos a quien te contrató.', 'exito');
                renderVistaTrabajo(contenedor, id);
              } else {
                guardarCambiosTrabajo(id, { estado: 'Terminado · Falta opinar', estadoTipo: 'terminado', puedeOpinar: true });
                window.location.hash = '#opinion/' + id;
              }
            }
          },
          { texto: 'Todavía no', primaria: false }
        ]
      });
    });
  }

  const btnProblema = contenedor.querySelector('#btn-problema-trabajo');
  if (btnProblema) btnProblema.addEventListener('click', () => abrirAvisoProblema(otraPersona || 'esta persona', btnProblema));
}

function abrirAvisoProblema(nombre, trigger) {
  abrirModal({
    titulo: 'Avisar de un problema',
    descripcion: `¿Querés avisar de un problema con ${nombre}? Nadie se entera de que avisaste vos y lo revisa una persona de Serrano. Si es una emergencia, llamá al 911.`,
    tipo: 'advertencia',
    trigger,
    acciones: [
      { texto: 'Enviar aviso', primaria: true, callback: () => mostrarToast('Aviso recibido. Lo revisamos a la brevedad.', 'exito') },
      { texto: 'No, volver', primaria: false }
    ]
  });
}

// ----------------------------------------------------------------------------
// MIS TRABAJOS · ¿Cancelar el trabajo? (wireframe 24-Cancelar)
// ----------------------------------------------------------------------------
function renderVistaCancelar(contenedor, id) {
  const t = obtenerTrabajo(id);
  if (!t) {
    window.location.hash = '#mis-trabajos';
    return;
  }
  const paso = pasoDelTrabajo(t);
  const persona = t.lado === 'hago' ? t.clienteNombre : (t.trabajadorNombre && t.trabajadorNombre !== 'Sin asignar' ? t.trabajadorNombre : '');
  const nombre = primerNombre(persona);

  if (paso >= 2 || t.estadoTipo === 'cancelado') {
    contenedor.innerHTML = `
      <div class="max-w-xl mx-auto space-y-7 animate-fadeIn">
        ${htmlVolver('trabajo/' + id)}
        <h1 class="text-[32px] font-bold text-slate-900 dark:text-white leading-tight">No se puede cancelar</h1>
        ${htmlAviso('advertencia', t.estadoTipo === 'cancelado' ? 'Este trabajo ya está cancelado' : 'El trabajo ya empezó', 'Solo se puede cancelar antes de que empiece. Si algo salió mal, usá "Avisar de un problema".')}
        <a href="#trabajo/${esc(id)}" class="btn btn-primary w-full force-text-white">Volver al trabajo</a>
      </div>`;
    return;
  }

  contenedor.innerHTML = `
    <div class="max-w-xl mx-auto space-y-7 animate-fadeIn">
      ${htmlVolver('trabajo/' + id)}
      <h1 class="text-[32px] font-bold text-slate-900 dark:text-white leading-tight">¿Cancelar el ${paso === 0 ? 'pedido' : 'trabajo'}?</h1>
      ${htmlAviso('info', 'Todavía no se canceló', `El ${paso === 0 ? 'pedido' : 'trabajo'} no empezó. Podés cancelarlo ahora.`)}

      <article class="card-tap p-6 space-y-2">
        <h2 class="text-[24px] font-bold text-slate-900 dark:text-white">${esc(t.titulo)}</h2>
        ${persona ? `<p class="text-[18px] text-slate-700 dark:text-slate-300">Con ${esc(persona)}</p>` : ''}
        <p class="flex items-center gap-2 text-[18px] font-bold text-slate-900 dark:text-white">${ICONOS.circulo}<span>Sin empezar</span></p>
      </article>

      <p class="text-[18px] text-slate-700 dark:text-slate-300">${persona ? `Si lo cancelás, le vamos a avisar a ${esc(nombre)}. Para hacerlo otro día, podés hablarlo por mensaje.` : 'Si lo cancelás, tu pedido deja de verse en Buscar.'}</p>

      <section class="space-y-4 pb-6">
        <a href="#trabajo/${esc(id)}" class="btn btn-primary w-full force-text-white">Conservar ${paso === 0 ? 'pedido' : 'trabajo'}</a>
        <button type="button" id="btn-confirmar-cancelar" class="btn btn-secondary w-full">${ICONOS.cruz}<span>Sí, cancelar ${paso === 0 ? 'pedido' : 'trabajo'}</span></button>
        <p class="text-[18px] text-slate-600 dark:text-slate-400">Cancelar no borra la conversación.</p>
      </section>
    </div>
  `;

  contenedor.querySelector('#btn-confirmar-cancelar').addEventListener('click', () => {
    guardarCambiosTrabajo(id, { estado: 'Cancelado', estadoTipo: 'cancelado', puedeCancelar: false, puedeOpinar: false });
    mostrarToast(paso === 0 ? 'Pedido cancelado.' : 'Trabajo cancelado.', 'info');
    window.location.hash = '#mis-trabajos';
  });
}

// ----------------------------------------------------------------------------
// MIS TRABAJOS · Dejá tu opinión (wireframe 25-Opinion)
// ----------------------------------------------------------------------------
const TEXTO_ESTRELLAS = ['', 'Mal', 'Regular', 'Bien', 'Muy bien', 'Excelente'];

function renderVistaOpinion(contenedor, id) {
  const t = obtenerTrabajo(id);
  const trabajador = t && t.trabajadorId ? TRABAJADORES.find(x => x.id === t.trabajadorId) : null;
  if (!t || !trabajador || t.estadoTipo !== 'terminado') {
    renderNoEncontrado(contenedor, 'No hay opinión pendiente', 'Podés opinar cuando un trabajo termina.', 'mis-trabajos');
    return;
  }
  const nombre = primerNombre(trabajador.nombre);
  const borrador = state.opinion && state.opinion.id === id ? state.opinion : { id, estrellas: 0, texto: '' };
  state.opinion = borrador;

  contenedor.innerHTML = `
    <div class="max-w-xl mx-auto space-y-7 animate-fadeIn">
      ${htmlVolver('trabajo/' + id)}
      <h1 class="text-[32px] font-bold text-slate-900 dark:text-white leading-tight">Dejá tu opinión</h1>

      <div class="p-5 rounded-2xl bg-slate-100 dark:bg-slate-800 border-2 border-slate-400 dark:border-slate-600 space-y-1">
        <p class="flex items-center gap-2 text-[18px] font-bold text-slate-900 dark:text-white">${ICONOS.check}<span>Trabajo finalizado</span></p>
        <p class="text-[18px] text-slate-700 dark:text-slate-300">${esc(t.titulo)} con ${esc(trabajador.nombre)}.</p>
      </div>

      <form id="form-opinion" class="space-y-6" novalidate>
        <fieldset class="space-y-3">
          <legend class="text-[24px] font-bold text-slate-900 dark:text-white">¿Cómo te fue con ${esc(nombre)}?</legend>
          <p class="text-[18px] text-slate-700 dark:text-slate-300">Tocá una estrella. De 1 (mal) a 5 (muy bien).</p>
          <div class="grid grid-cols-5 gap-2" role="radiogroup" aria-label="Estrellas para ${esc(nombre)}">
            ${[1, 2, 3, 4, 5].map(n => `
              <button type="button" role="radio" aria-checked="${borrador.estrellas === n}" aria-label="${n} de 5 · ${TEXTO_ESTRELLAS[n]}" data-estrellas="${n}"
                class="min-h-[72px] rounded-xl border-2 flex flex-col items-center justify-center gap-1 transition-all ${borrador.estrellas === n ? 'border-[3px] border-slate-900 dark:border-white bg-slate-100 dark:bg-slate-800 translate-y-[2px]' : 'border-slate-400 dark:border-slate-600 bg-white dark:bg-slate-900'}">
                <span class="text-[24px] leading-none ${n <= borrador.estrellas ? 'text-amber-600 dark:text-amber-400' : 'text-slate-500'}" aria-hidden="true">${n <= borrador.estrellas ? '★' : '☆'}</span>
                <span class="text-[18px] font-bold text-slate-900 dark:text-white">${n}</span>
              </button>`).join('')}
          </div>
          <p id="estado-estrellas" class="flex items-center gap-2 text-[18px] font-bold text-slate-900 dark:text-white" aria-live="polite">
            ${borrador.estrellas ? `${ICONOS.check}<span>Elegiste ${borrador.estrellas} de 5 estrellas · ${TEXTO_ESTRELLAS[borrador.estrellas]}</span>` : `${ICONOS.alerta}<span>Falta: tocá una estrella.</span>`}
          </p>
        </fieldset>

        <div class="space-y-2">
          <label for="campo-opinion" class="block text-[18px] font-bold text-slate-900 dark:text-white">Tu comentario (si querés)</label>
          <textarea id="campo-opinion" rows="4" maxlength="300" class="input-serrano resize-none" placeholder="Quedó muy prolijo y vino a la hora acordada.">${esc(borrador.texto)}</textarea>
          <p class="text-[18px] text-slate-600 dark:text-slate-400">Tu opinión ayuda a otros vecinos.</p>
        </div>

        <button type="submit" class="btn btn-primary w-full force-text-white" ${borrador.estrellas ? '' : 'disabled'}>Enviar opinión</button>
      </form>
      <a href="#mis-trabajos" class="btn btn-secondary w-full mb-6">Opinar más tarde</a>
    </div>
  `;

  contenedor.querySelectorAll('[data-estrellas]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.opinion.estrellas = Number(btn.getAttribute('data-estrellas'));
      state.opinion.texto = contenedor.querySelector('#campo-opinion').value;
      renderVistaOpinion(contenedor, id);
      const elegido = contenedor.querySelector(`[data-estrellas="${state.opinion.estrellas}"]`);
      if (elegido) elegido.focus();
    });
  });

  contenedor.querySelector('#campo-opinion').addEventListener('input', (e) => {
    state.opinion.texto = e.target.value;
  });

  contenedor.querySelector('#form-opinion').addEventListener('submit', (e) => {
    e.preventDefault();
    if (!state.opinion.estrellas) return;
    const opiniones = leerLS('serrano_opiniones', []);
    opiniones.unshift({ trabajadorId: trabajador.id, autor: 'Vos', estrellas: state.opinion.estrellas, texto: state.opinion.texto.trim() });
    guardarLS('serrano_opiniones', opiniones);
    guardarCambiosTrabajo(id, { estado: 'Terminado · Con opinión', estadoTipo: 'opinado', puedeOpinar: false });
    state.opinion = null;
    abrirModal({
      titulo: 'Trabajo finalizado',
      descripcion: `Tu opinión ya está en el perfil de ${nombre}. Gracias por ayudar a otros vecinos.`,
      tipo: 'exito',
      acciones: [
        { texto: 'Ver Mis trabajos', primaria: true, callback: () => { window.location.hash = '#mis-trabajos'; } },
        { texto: `Ver el perfil de ${nombre}`, primaria: false, callback: () => { window.location.hash = '#trabajador/' + trabajador.id; } }
      ]
    });
  });
}

// ----------------------------------------------------------------------------
// PAGOS (wireframe 30-Pagos)
// ----------------------------------------------------------------------------
function textoEstadoAcuerdo(a) {
  if (a.estado === 'pagado') return 'Pagado';
  if (a.estado === 'sena-pagada') return 'Seña pagada';
  if (a.estado === 'rechazado') return 'Pago rechazado · El acuerdo sigue guardado';
  return 'Acuerdo guardado · Sin pagar';
}

function renderVistaPagos(contenedor) {
  const acuerdos = Object.values(obtenerAcuerdos());
  const total = acuerdos.reduce((s, a) => s + Number(a.total || 0), 0);
  const pagado = acuerdos.reduce((s, a) => s + Number(a.pagado || 0), 0);
  const pendientes = acuerdos.filter(a => a.estado !== 'pagado').length;

  contenedor.innerHTML = `
    <div class="max-w-2xl mx-auto space-y-7 animate-fadeIn">
      <section class="space-y-2">
        <h1 class="text-[32px] font-bold text-slate-900 dark:text-white leading-tight">Pagos</h1>
        <p class="text-[18px] text-slate-700 dark:text-slate-300">Revisá lo que acordaste y lo que falta pagar.</p>
      </section>

      <section class="card-tap p-6 space-y-4" aria-labelledby="titulo-resumen">
        <h2 id="titulo-resumen" class="text-[24px] font-bold text-slate-900 dark:text-white">Tu resumen</h2>
        <dl class="space-y-3">
          <div><dt class="text-[18px] font-bold text-slate-900 dark:text-white">Total acordado</dt><dd class="text-[18px] text-slate-700 dark:text-slate-300">${formatearPesos(total)}</dd></div>
          <div><dt class="text-[18px] font-bold text-slate-900 dark:text-white">Pagado</dt><dd class="text-[18px] text-slate-700 dark:text-slate-300">${formatearPesos(pagado)}</dd></div>
          <div><dt class="text-[18px] font-bold text-slate-900 dark:text-white">Falta pagar</dt><dd class="text-[18px] text-slate-700 dark:text-slate-300">${formatearPesos(total - pagado)}</dd></div>
        </dl>
        <p class="flex items-center gap-2 text-[18px] font-bold text-slate-900 dark:text-white">${pendientes ? ICONOS.circulo : ICONOS.check}<span>${pendientes ? `${pendientes} acuerdo${pendientes === 1 ? '' : 's'} pendiente${pendientes === 1 ? '' : 's'}` : 'Todo pagado'}</span></p>
      </section>

      ${acuerdos.length === 0 ? `
        <div class="p-8 text-center bg-slate-50 dark:bg-slate-800/50 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 space-y-2">
          <p class="text-[24px] font-bold text-slate-800 dark:text-slate-200">Todavía no acordaste ningún pago.</p>
          <p class="text-[18px] text-slate-600 dark:text-slate-400">Cuando arregles un trabajo, tocá "Acordar pago" para anotar la seña o el total.</p>
        </div>` : acuerdos.map(a => `
        <section class="space-y-4">
          <div class="space-y-1">
            <h2 class="text-[24px] font-bold text-slate-900 dark:text-white">${esc(a.titulo)}</h2>
            <p class="text-[18px] text-slate-700 dark:text-slate-300">Con ${esc(a.persona)}</p>
          </div>
          <div class="p-5 rounded-2xl bg-slate-100 dark:bg-slate-800 border-2 border-slate-400 dark:border-slate-600 space-y-2">
            ${htmlEstado(textoEstadoAcuerdo(a))}
            ${a.estado === 'guardado' || a.estado === 'rechazado' ? '<p class="text-[18px] text-slate-700 dark:text-slate-300">El acuerdo no es un comprobante de pago.</p>' : ''}
          </div>
          <div class="p-6 rounded-2xl border-2 border-slate-300 dark:border-slate-700 space-y-3">
            ${a.modo === 'sena' ? `
              <div><p class="text-[18px] font-bold text-slate-900 dark:text-white">Seña ${a.estado === 'sena-pagada' || a.estado === 'pagado' ? 'pagada' : 'pendiente'}</p><p class="text-[18px] text-slate-700 dark:text-slate-300">${formatearPesos(a.sena)}, antes de empezar</p></div>
              <div><p class="text-[18px] font-bold text-slate-900 dark:text-white">Resto ${a.estado === 'pagado' ? 'pagado' : 'pendiente'}</p><p class="text-[18px] text-slate-700 dark:text-slate-300">${formatearPesos(a.total - a.sena)}, al terminar</p></div>
              <p class="text-[18px] text-slate-700 dark:text-slate-300">La seña es parte del total de ${formatearPesos(a.total)}. No se suma aparte.</p>
            ` : `
              <div><p class="text-[18px] font-bold text-slate-900 dark:text-white">Total ${a.estado === 'pagado' ? 'pagado' : 'al terminar'}</p><p class="text-[18px] text-slate-700 dark:text-slate-300">${formatearPesos(a.total)}</p></div>
            `}
            <p class="text-[18px] text-slate-700 dark:text-slate-300">Forma acordada: ${esc(a.forma)}</p>
          </div>
          <a href="#acordar-pago/${esc(a.trabajoId)}" class="btn btn-primary w-full force-text-white">Ver acuerdo de pago</a>
        </section>`).join('')}

      ${htmlAviso('info', '', 'En efectivo se paga en mano. La app solo anota lo que acordaron, sin cobrar nada.')}
      <button type="button" id="btn-nuevo-acuerdo" class="btn btn-secondary w-full mb-6">Acordar pago</button>
    </div>
  `;

  const btnNuevo = contenedor.querySelector('#btn-nuevo-acuerdo');
  btnNuevo.addEventListener('click', () => {
    const acuerdosAct = obtenerAcuerdos();
    const candidatos = [...TRABAJOS_MUESTRA, ...TRABAJOS_HAGO_MUESTRA]
      .map(t => obtenerTrabajo(t.id))
      .filter(t => t && ['acordado', 'en-curso', 'terminado'].includes(t.estadoTipo) && !acuerdosAct[t.id]);
    if (candidatos.length === 0) {
      mostrarToast('No hay trabajos arreglados sin acuerdo de pago.', 'info');
      return;
    }
    abrirModal({
      titulo: '¿Para qué trabajo?',
      descripcion: 'Elegí el trabajo para anotar la seña o el pago.',
      tipo: 'info',
      trigger: btnNuevo,
      acciones: [
        ...candidatos.map(t => ({ texto: t.titulo, primaria: false, callback: () => { window.location.hash = '#acordar-pago/' + t.id; } })),
        { texto: 'No, volver', primaria: false }
      ]
    });
  });
}

// ----------------------------------------------------------------------------
// PAGOS · Acordar pago (wireframe 31-Acordar-pago)
// ----------------------------------------------------------------------------
function personaDelTrabajo(t) {
  if (t.lado === 'hago') return t.clienteNombre;
  return t.trabajadorNombre && t.trabajadorNombre !== 'Sin asignar' ? t.trabajadorNombre : 'quien hace el trabajo';
}

function calcularAcuerdo(a) {
  const total = Number(soloNumeros(a.total));
  const sena = a.modo === 'sena' ? Number(soloNumeros(a.sena)) : 0;
  const faltan = [];
  if (!total) faltan.push('monto total');
  if (a.modo === 'sena' && !sena) faltan.push('seña');
  if (!a.forma) faltan.push('forma de pago');
  const senaInvalida = !!(a.modo === 'sena' && sena && total && sena >= total);
  const listo = faltan.length === 0 && !senaInvalida;
  const montoAPagar = a.modo === 'sena' ? sena : total;
  return { total, sena, faltan, senaInvalida, listo, montoAPagar };
}

function htmlResumenAcuerdo(a, calc) {
  return `
    <div><p class="text-[18px] font-bold text-slate-900 dark:text-white">Total</p><p class="text-[18px] text-slate-700 dark:text-slate-300">${formatearPesos(calc.total)}</p></div>
    ${a.modo === 'sena' ? `
      <div><p class="text-[18px] font-bold text-slate-900 dark:text-white">Seña incluida</p><p class="text-[18px] text-slate-700 dark:text-slate-300">${formatearPesos(calc.sena)}</p></div>
      <div><p class="text-[18px] font-bold text-slate-900 dark:text-white">Resto al terminar</p><p class="text-[18px] text-slate-700 dark:text-slate-300">${formatearPesos(Math.max(calc.total - calc.sena, 0))}</p></div>` : `
      <div><p class="text-[18px] font-bold text-slate-900 dark:text-white">Se paga al terminar</p><p class="text-[18px] text-slate-700 dark:text-slate-300">${formatearPesos(calc.total)}</p></div>`}`;
}

function htmlEstadoAcuerdo(calc) {
  if (calc.listo) return `${ICONOS.check}<span>Todo listo para guardar.</span>`;
  return `${ICONOS.alerta}<span>${calc.senaInvalida ? 'Revisá la seña: tiene que ser menor que el total.' : 'Falta: ' + calc.faltan.join(', ') + '.'}</span>`;
}

function renderVistaAcordarPago(contenedor, id) {
  const t = obtenerTrabajo(id);
  if (!t) {
    renderNoEncontrado(contenedor, 'No encontramos ese trabajo', 'Elegí un trabajo desde Pagos.', 'pagos');
    return;
  }
  const persona = personaDelTrabajo(t);
  const guardado = obtenerAcuerdos()[id];
  if (!state.acuerdo || state.acuerdo.id !== id) {
    state.acuerdo = guardado
      ? { id, total: String(guardado.total), modo: guardado.modo, sena: String(guardado.sena || ''), forma: guardado.forma }
      : { id, total: t.total ? String(t.total) : '', modo: 'sena', sena: '', forma: '' };
  }
  const a = state.acuerdo;
  const calc = calcularAcuerdo(a);
  const conMP = a.forma === 'Mercado Pago';

  contenedor.innerHTML = `
    <div class="max-w-xl mx-auto space-y-7 animate-fadeIn">
      ${htmlVolver('pagos')}
      <section class="space-y-2">
        <h1 class="text-[32px] font-bold text-slate-900 dark:text-white leading-tight">Acordar pago</h1>
        <p class="text-[18px] font-bold text-slate-900 dark:text-white">${esc(t.titulo)} · ${esc(persona)}</p>
      </section>

      ${t.total ? `
        <div class="p-5 rounded-2xl bg-slate-100 dark:bg-slate-800 border-2 border-slate-400 dark:border-slate-600 space-y-1">
          <p class="flex items-center gap-2 text-[18px] font-bold text-slate-900 dark:text-white">${ICONOS.circulo}<span>Presupuesto estimado</span></p>
          <p class="text-[18px] text-slate-700 dark:text-slate-300">${formatearPesos(t.total)} por el trabajo. ${esc(t.nota || '')}</p>
        </div>` : ''}

      <form id="form-acuerdo" class="space-y-7" novalidate>
        <div class="space-y-2">
          <label for="campo-total" class="block text-[18px] font-bold text-slate-900 dark:text-white">Monto total del trabajo (en pesos)</label>
          <input id="campo-total" type="text" inputmode="numeric" class="input-serrano" placeholder="50000" value="${esc(a.total)}">
        </div>

        <fieldset class="space-y-3">
          <legend class="text-[24px] font-bold text-slate-900 dark:text-white">¿Cómo lo van a pagar?</legend>
          <div class="grid grid-cols-2 gap-3">
            ${htmlChip('modo', 'Con seña', a.modo === 'sena')}
            ${htmlChip('modo', 'Todo al final', a.modo === 'final')}
          </div>
        </fieldset>

        ${a.modo === 'sena' ? `
          <div class="space-y-2">
            <label for="campo-sena" class="block text-[18px] font-bold text-slate-900 dark:text-white">Seña (parte del total)</label>
            <input id="campo-sena" type="text" inputmode="numeric" class="input-serrano" placeholder="10000" value="${esc(a.sena)}" aria-describedby="ayuda-sena">
            <p id="ayuda-sena" class="text-[18px] text-slate-600 dark:text-slate-400">Se paga antes de empezar. No se suma al total.</p>
          </div>` : ''}

        <div id="resumen-acuerdo" class="p-6 rounded-2xl border-2 border-slate-300 dark:border-slate-700 space-y-3" aria-live="polite">${htmlResumenAcuerdo(a, calc)}</div>

        <fieldset class="space-y-3">
          <legend class="text-[24px] font-bold text-slate-900 dark:text-white">Forma de pago</legend>
          <div class="grid grid-cols-1 gap-3">
            ${['Efectivo', 'Mercado Pago', 'Transferencia'].map(f => htmlChip('forma', f, a.forma === f)).join('')}
          </div>
        </fieldset>

        <p class="text-[18px] text-slate-700 dark:text-slate-300">Guardar el acuerdo no hace un pago. Primero confirmá estos datos con ${esc(primerNombre(persona))}.</p>

        <div class="space-y-3">
          <button type="submit" id="btn-guardar-acuerdo" class="btn btn-primary w-full force-text-white" ${calc.listo ? '' : 'disabled'}>Guardar acuerdo</button>
          <p id="estado-acuerdo" class="flex items-center gap-2 text-[18px] font-bold text-slate-900 dark:text-white" aria-live="polite">${htmlEstadoAcuerdo(calc)}</p>
        </div>
      </form>

      <section class="space-y-3 pb-6">
        ${conMP ? `<button type="button" id="btn-pagar-mp" class="btn btn-secondary w-full" ${calc.listo ? '' : 'disabled'}></button>
          <p class="text-[14px] text-slate-600 dark:text-slate-400">Prototipo: un pago de $999 simula que Mercado Pago lo rechaza.</p>` : ''}
        <a href="#trabajo/${esc(id)}" class="btn btn-secondary w-full">Ver trabajo</a>
      </section>
    </div>
  `;

  const campoTotal = contenedor.querySelector('#campo-total');
  const campoSena = contenedor.querySelector('#campo-sena');
  const btnGuardar = contenedor.querySelector('#btn-guardar-acuerdo');
  const btnPagar = contenedor.querySelector('#btn-pagar-mp');

  // Actualiza el resumen mientras se escribe, sin redibujar la pantalla
  const actualizar = () => {
    const c = calcularAcuerdo(state.acuerdo);
    contenedor.querySelector('#resumen-acuerdo').innerHTML = htmlResumenAcuerdo(state.acuerdo, c);
    contenedor.querySelector('#estado-acuerdo').innerHTML = htmlEstadoAcuerdo(c);
    btnGuardar.disabled = !c.listo;
    if (campoSena) campoSena.classList.toggle('input-error', c.senaInvalida);
    if (btnPagar) {
      btnPagar.disabled = !c.listo;
      btnPagar.textContent = (state.acuerdo.modo === 'sena' ? 'Pagar seña de ' : 'Pagar ') + formatearPesos(c.montoAPagar).replace(' ARS', '');
    }
    return c;
  };

  campoTotal.addEventListener('input', () => { state.acuerdo.total = soloNumeros(campoTotal.value); actualizar(); });
  if (campoSena) campoSena.addEventListener('input', () => { state.acuerdo.sena = soloNumeros(campoSena.value); actualizar(); });

  contenedor.querySelectorAll('[data-grupo="modo"]').forEach(btn => btn.addEventListener('click', () => {
    state.acuerdo.modo = btn.getAttribute('data-valor') === 'Con seña' ? 'sena' : 'final';
    renderVistaAcordarPago(contenedor, id);
    contenedor.querySelector(`[data-grupo="modo"][data-valor="${btn.getAttribute('data-valor')}"]`).focus();
  }));
  contenedor.querySelectorAll('[data-grupo="forma"]').forEach(btn => btn.addEventListener('click', () => {
    state.acuerdo.forma = btn.getAttribute('data-valor');
    renderVistaAcordarPago(contenedor, id);
    contenedor.querySelector(`[data-grupo="forma"][data-valor="${state.acuerdo.forma}"]`).focus();
  }));

  const armarAcuerdo = () => {
    const c = calcularAcuerdo(state.acuerdo);
    const previo = obtenerAcuerdos()[id] || {};
    return {
      trabajoId: id, titulo: t.titulo, persona,
      total: c.total, modo: state.acuerdo.modo, sena: c.sena, forma: state.acuerdo.forma,
      pagado: previo.pagado || 0,
      estado: previo.estado && previo.estado !== 'rechazado' ? previo.estado : 'guardado'
    };
  };

  contenedor.querySelector('#form-acuerdo').addEventListener('submit', (e) => {
    e.preventDefault();
    if (!actualizar().listo) return;
    guardarAcuerdo(id, armarAcuerdo());
    state.acuerdo = null;
    mostrarToast('Acuerdo guardado. No es un comprobante de pago.', 'exito');
    window.location.hash = '#pagos';
  });

  if (btnPagar) {
    btnPagar.addEventListener('click', () => {
      const c = actualizar();
      if (!c.listo) return;
      intentarPagoMP(id, armarAcuerdo(), c.montoAPagar, btnPagar);
    });
  }
  actualizar();
}

// Simulación del pago con Mercado Pago (no se conecta a ningún servicio real)
function intentarPagoMP(id, acuerdo, monto, trigger) {
  if (!navigator.onLine) {
    mostrarToast('Sin señal: el pago no se hizo. Probá cuando vuelva la señal.', 'advertencia');
    return;
  }
  if (Number(monto) === 999) {
    guardarAcuerdo(id, { ...acuerdo, estado: 'rechazado' });
    state.acuerdo = null;
    window.location.hash = '#pago-rechazado/' + id;
    return;
  }
  const pagado = acuerdo.modo === 'sena' ? acuerdo.sena : acuerdo.total;
  guardarAcuerdo(id, { ...acuerdo, pagado, estado: acuerdo.modo === 'sena' ? 'sena-pagada' : 'pagado' });
  state.acuerdo = null;
  abrirModal({
    titulo: 'Pago hecho',
    descripcion: `Pagaste ${formatearPesos(pagado)} a ${acuerdo.persona} por Mercado Pago. Lo ves en Pagos.`,
    tipo: 'exito',
    trigger,
    acciones: [
      { texto: 'Ver Pagos', primaria: true, callback: () => { window.location.hash = '#pagos'; } },
      { texto: 'Cerrar', primaria: false, callback: () => { window.location.hash = '#pagos'; } }
    ]
  });
}

// ----------------------------------------------------------------------------
// PAGOS · Pago rechazado (wireframe 31-Rechazado)
// ----------------------------------------------------------------------------
function renderVistaPagoRechazado(contenedor, id) {
  const a = obtenerAcuerdos()[id];
  if (!a) {
    window.location.hash = '#pagos';
    return;
  }
  const monto = a.modo === 'sena' ? a.sena : a.total;
  if (!state.formaRechazo || state.formaRechazo.id !== id) state.formaRechazo = { id, forma: a.forma };

  contenedor.innerHTML = `
    <div class="max-w-xl mx-auto space-y-7 animate-fadeIn">
      ${htmlVolver('pagos')}
      <h1 class="text-[32px] font-bold text-slate-900 dark:text-white leading-tight">Pago rechazado</h1>
      ${htmlAviso('peligro', 'No se hizo el pago', `La ${a.modo === 'sena' ? 'seña' : 'cuota'} de ${formatearPesos(monto)} por Mercado Pago fue rechazada. No se pagó ningún monto.`, 'alert')}
      <p class="text-[18px] font-bold text-slate-900 dark:text-white">Podés intentar de nuevo: el acuerdo no se borra.</p>

      <article class="card-tap p-6 space-y-3">
        <h2 class="text-[24px] font-bold text-slate-900 dark:text-white">${esc(a.titulo)}</h2>
        <p class="text-[18px] text-slate-700 dark:text-slate-300">${esc(a.persona)}</p>
        <div><p class="text-[18px] font-bold text-slate-900 dark:text-white">Total del acuerdo</p><p class="text-[18px] text-slate-700 dark:text-slate-300">${formatearPesos(a.total)}</p></div>
        <p class="flex items-center gap-2 text-[18px] font-bold text-slate-900 dark:text-white">${ICONOS.circulo}<span>${a.modo === 'sena' ? 'Seña' : 'Pago'} pendiente: ${formatearPesos(monto)}</span></p>
        ${a.modo === 'sena' ? `<p class="text-[18px] text-slate-700 dark:text-slate-300">Pagado: ${formatearPesos(a.pagado)}. El resto de ${formatearPesos(a.total - a.sena)} va al terminar.</p>` : ''}
      </article>

      <button type="button" id="btn-reintentar-pago" class="btn btn-primary w-full force-text-white">Reintentar pago</button>

      <fieldset class="space-y-3">
        <legend class="text-[24px] font-bold text-slate-900 dark:text-white">O elegí otra forma</legend>
        <div class="grid grid-cols-1 gap-3">
          ${['Efectivo', 'Mercado Pago', 'Transferencia'].map(f => htmlChip('forma-rechazo', f, state.formaRechazo.forma === f)).join('')}
        </div>
      </fieldset>

      <section class="space-y-3 pb-6">
        <button type="button" id="btn-cambiar-forma" class="btn btn-secondary w-full">Cambiar forma de pago</button>
        <a href="#pagos" class="btn btn-secondary w-full">Volver a Pagos</a>
      </section>
    </div>
  `;

  contenedor.querySelectorAll('[data-grupo="forma-rechazo"]').forEach(btn => btn.addEventListener('click', () => {
    state.formaRechazo.forma = btn.getAttribute('data-valor');
    renderVistaPagoRechazado(contenedor, id);
  }));

  const btnReintentar = contenedor.querySelector('#btn-reintentar-pago');
  btnReintentar.addEventListener('click', () => {
    if (Number(monto) === 999 && navigator.onLine) {
      mostrarToast('Mercado Pago volvió a rechazar el pago. Probá otra forma.', 'advertencia');
      return;
    }
    intentarPagoMP(id, { ...a, estado: 'guardado' }, monto, btnReintentar);
  });

  contenedor.querySelector('#btn-cambiar-forma').addEventListener('click', () => {
    const forma = state.formaRechazo.forma;
    guardarAcuerdo(id, { ...a, forma, estado: 'guardado' });
    state.formaRechazo = null;
    state.acuerdo = null;
    mostrarToast(`Forma de pago cambiada a ${forma}.`, 'exito');
    window.location.hash = '#acordar-pago/' + id;
  });
}

// ----------------------------------------------------------------------------
// MENSAJES (wireframe 40-Mensajes)
// ----------------------------------------------------------------------------
function renderVistaMensajes(contenedor) {
  const avisos = leerLS('serrano_avisos', { activo: true });
  const conversaciones = obtenerConversaciones();

  contenedor.innerHTML = `
    <div class="max-w-2xl mx-auto space-y-7 animate-fadeIn">
      <h1 class="text-[32px] font-bold text-slate-900 dark:text-white leading-tight">Mensajes</h1>

      <section class="p-6 rounded-2xl border-2 border-slate-300 dark:border-slate-700 space-y-3">
        <button type="button" id="btn-toggle-avisos" class="btn btn-secondary w-full" aria-pressed="${avisos.activo}">Avisame si hay changas nuevas</button>
        <p class="flex items-center gap-2 text-[18px] font-bold ${avisos.activo ? 'text-emerald-800 dark:text-emerald-300' : 'text-slate-900 dark:text-white'}">${avisos.activo ? ICONOS.check : ICONOS.circulo}<span>${avisos.activo ? 'Activado' : 'Desactivado'}</span></p>
        <p class="text-[18px] text-slate-700 dark:text-slate-300">${avisos.activo ? 'Avisos de changas de tu oficio en tu zona. Tocá el control para desactivar.' : 'No vas a recibir avisos de changas. Tocá el control para activarlos.'}</p>
      </section>

      <section class="space-y-5">
        <h2 class="text-[24px] font-bold text-slate-900 dark:text-white">Tus conversaciones</h2>
        ${conversaciones.map(c => `
          <article class="card-tap p-6 space-y-2">
            <h3 class="text-[24px] font-bold text-slate-900 dark:text-white">${esc(c.nombre)}</h3>
            <p class="text-[18px] text-slate-700 dark:text-slate-300">${esc(c.tema)}</p>
            <p class="text-[18px] text-slate-900 dark:text-white">${c.ultimo ? esc(c.ultimo.texto) : ''}</p>
            <p class="text-[14px] text-slate-600 dark:text-slate-400">${esc(c.fecha)}, ${c.ultimo ? esc(c.ultimo.hora) : ''}</p>
            <p class="flex items-center gap-2 text-[18px] font-bold text-slate-900 dark:text-white">${c.sinLeer ? `${ICONOS.punto}<span>1 mensaje sin leer</span>` : `${ICONOS.check}<span>Leído</span>`}</p>
            <a href="#conversacion/${esc(c.id)}" class="btn btn-secondary w-full">Abrir conversación</a>
          </article>`).join('')}
      </section>
    </div>
  `;

  contenedor.querySelector('#btn-toggle-avisos').addEventListener('click', () => {
    guardarLS('serrano_avisos', { activo: !avisos.activo });
    mostrarToast(!avisos.activo ? 'Te avisamos cuando haya changas nuevas.' : 'Avisos desactivados.', !avisos.activo ? 'exito' : 'info');
    renderVistaMensajes(contenedor);
    contenedor.querySelector('#btn-toggle-avisos').focus();
  });
}

// ----------------------------------------------------------------------------
// MENSAJES · Conversación (wireframe 41-Conversacion)
// ----------------------------------------------------------------------------
function renderVistaConversacion(contenedor, id) {
  const c = obtenerConversaciones().find(x => x.id === id);
  if (!c) {
    renderNoEncontrado(contenedor, 'No encontramos esa conversación', 'Volvé a Mensajes para ver tus conversaciones.', 'mensajes');
    return;
  }
  const leidas = leerLS('serrano_leidas', []);
  if (!leidas.includes(id)) { leidas.push(id); guardarLS('serrano_leidas', leidas); }
  const avisoContacto = state.avisoContacto === id;
  state.avisoContacto = null;
  const nombre = primerNombre(c.nombre);

  contenedor.innerHTML = `
    <div class="max-w-2xl mx-auto space-y-6 animate-fadeIn">
      ${htmlVolver('mensajes')}
      <section class="space-y-2">
        <h1 class="text-[32px] font-bold text-slate-900 dark:text-white leading-tight">${esc(c.nombre)}</h1>
        <p class="text-[18px] text-slate-700 dark:text-slate-300">${esc(c.tema)} · ${esc(c.zona)}</p>
        ${c.telefonoConfirmado ? `<p class="flex items-center gap-2 text-[18px] font-bold text-slate-900 dark:text-white">${ICONOS.check}<span>Teléfono confirmado</span></p>` : ''}
      </section>

      ${avisoContacto ? htmlAviso('exito', `Le mandamos tu mensaje a ${esc(nombre)}`, 'Te avisamos cuando conteste.', 'status') : ''}
      ${c.trabajoId ? `<a href="#acordar-pago/${esc(c.trabajoId)}" class="btn btn-primary w-full force-text-white">Acordar pago</a>` : ''}

      <section class="space-y-4" role="log" aria-label="Mensajes con ${esc(c.nombre)}">
        <p class="text-[14px] text-slate-600 dark:text-slate-400">${esc(c.fecha)}</p>
        ${c.mensajes.map(m => `
          <article class="p-5 rounded-2xl space-y-2 ${m.de === 'vos' ? 'bg-slate-100 dark:bg-slate-800 border-[3px] border-slate-700 dark:border-slate-400 ml-6' : 'bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-600 mr-6'}">
            <p class="text-[14px] font-bold text-slate-900 dark:text-white">${m.de === 'vos' ? 'Vos' : esc(nombre)}</p>
            <p class="text-[18px] text-slate-900 dark:text-white">${esc(m.texto)}</p>
            <p class="flex items-center gap-1 text-[14px] text-slate-600 dark:text-slate-400">${esc(m.hora)} · ${m.estado === 'Pendiente de enviar' ? '<span aria-hidden="true">...</span>' : '<svg class="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"></polyline></svg>'}<span>${esc(m.estado)}</span></p>
          </article>`).join('')}
      </section>

      <form id="form-mensaje" class="space-y-3" novalidate>
        <label for="campo-mensaje" class="block text-[18px] font-bold text-slate-900 dark:text-white">Tu mensaje</label>
        <textarea id="campo-mensaje" rows="3" maxlength="500" class="input-serrano resize-none" placeholder="Escribí acá..." aria-describedby="error-mensaje"></textarea>
        <p id="error-mensaje" class="hidden text-[18px] font-bold text-serrano-dangerText dark:text-red-400 flex items-center gap-2" role="alert">${ICONOS.alerta}<span>Escribí un mensaje antes de enviar.</span></p>
        <button type="submit" class="btn btn-primary w-full force-text-white">Enviar</button>
      </form>
      <p class="text-[18px] text-slate-600 dark:text-slate-400 pb-6">Si un mensaje no sale, vas a ver “Pendiente de enviar”.</p>
    </div>
  `;

  const campo = contenedor.querySelector('#campo-mensaje');
  const error = contenedor.querySelector('#error-mensaje');
  campo.addEventListener('input', () => error.classList.add('hidden'));

  contenedor.querySelector('#form-mensaje').addEventListener('submit', (e) => {
    e.preventDefault();
    const texto = campo.value.trim();
    if (!texto) {
      error.classList.remove('hidden');
      campo.focus();
      return;
    }
    const extras = leerLS('serrano_mensajes', {});
    extras[id] = [...(extras[id] || []), { de: 'vos', texto, hora: horaActual(), estado: navigator.onLine ? 'Enviado' : 'Pendiente de enviar' }];
    guardarLS('serrano_mensajes', extras);
    renderVistaConversacion(contenedor, id);
    contenedor.querySelector('#campo-mensaje').focus();
  });
}

// Cuando vuelve la señal, los mensajes pendientes se envían solos
function enviarMensajesPendientes() {
  const extras = leerLS('serrano_mensajes', {});
  Object.keys(extras).forEach(k => {
    extras[k] = extras[k].map(m => m.estado === 'Pendiente de enviar' ? { ...m, estado: 'Enviado' } : m);
  });
  guardarLS('serrano_mensajes', extras);
  const nuevas = leerLS('serrano_conversaciones', []).map(c => ({
    ...c,
    mensajes: c.mensajes.map(m => m.estado === 'Pendiente de enviar' ? { ...m, estado: 'Enviado' } : m)
  }));
  guardarLS('serrano_conversaciones', nuevas);
}

// ----------------------------------------------------------------------------
// MI PERFIL (wireframe 50-Mi-perfil)
// ----------------------------------------------------------------------------
function htmlAvatar(perfil, tam = 'w-28 h-28') {
  if (perfil.foto) {
    return `<img src="${perfil.foto}" alt="Foto de ${esc(perfil.nombre)}" class="${tam} rounded-2xl object-cover border-2 border-slate-300 dark:border-slate-600">`;
  }
  return `
    <div class="${tam} rounded-2xl bg-slate-100 dark:bg-slate-800 border-2 border-slate-300 dark:border-slate-600 flex flex-col items-center justify-center font-bold text-slate-700 dark:text-slate-200 text-[24px]" aria-hidden="true">
      <span>${esc(inicialesDe(perfil.nombre))}</span>
      <span class="text-[14px] font-medium text-slate-500 uppercase tracking-wider">Foto</span>
    </div>`;
}

function renderVistaMiPerfil(contenedor) {
  const p = obtenerPerfil();
  const termina = soloNumeros(p.telefono).slice(-4);
  const recomiendan = p.recomiendan || [];

  contenedor.innerHTML = `
    <div class="max-w-2xl mx-auto space-y-7 animate-fadeIn">
      <h1 class="text-[32px] font-bold text-slate-900 dark:text-white leading-tight">Mi perfil</h1>

      <section class="flex items-center gap-5">
        ${htmlAvatar(p)}
        <div class="space-y-1">
          <h2 class="text-[24px] font-bold text-slate-900 dark:text-white">${esc(p.nombre)}</h2>
          <p class="text-[18px] text-slate-700 dark:text-slate-300">${esc((p.oficios || []).join(', ') || 'Sin oficio')} · ${esc(p.zona)}, Serrano</p>
        </div>
      </section>
      <a href="#editar-perfil" class="btn btn-secondary w-full">Editar perfil</a>

      <section class="space-y-3">
        <h2 class="text-[24px] font-bold text-slate-900 dark:text-white">¿Podés trabajar hoy?</h2>
        <div class="grid grid-cols-1 gap-3">
          ${htmlChip('disponible', 'Disponible hoy', !!p.disponible)}
          ${htmlChip('disponible', 'Ocupado', !p.disponible)}
        </div>
        <p class="flex items-center gap-2 text-[18px] font-bold text-slate-900 dark:text-white" aria-live="polite">${p.disponible ? ICONOS.check : ICONOS.circulo}<span>Tu perfil dice: ${p.disponible ? 'Disponible hoy' : 'Ocupado'}</span></p>
      </section>

      <section class="p-6 rounded-2xl border-2 border-slate-300 dark:border-slate-700 space-y-2">
        <h2 class="text-[24px] font-bold text-slate-900 dark:text-white">Mis estrellas</h2>
        <p class="text-[18px] font-bold text-slate-900 dark:text-white"><span class="text-amber-600 dark:text-amber-400" aria-label="${p.estrellas} de 5 estrellas">${'★'.repeat(p.estrellas)}${'☆'.repeat(5 - p.estrellas)}</span> · ${p.trabajos} trabajos</p>
        <p class="text-[18px] text-slate-700 dark:text-slate-300">Opiniones de vecinos que trabajaron con vos.</p>
      </section>

      <section class="p-6 rounded-2xl border-2 border-slate-300 dark:border-slate-700 space-y-2">
        <h2 class="text-[24px] font-bold text-slate-900 dark:text-white">Vecinos que me recomiendan</h2>
        <p class="text-[18px] font-bold text-slate-900 dark:text-white"><span class="text-amber-600 dark:text-amber-400" aria-hidden="true">★</span> ${recomiendan.length} vecinos</p>
        <p class="text-[18px] text-slate-700 dark:text-slate-300">${esc(recomiendan.join(', ').replace(/, ([^,]*)$/, ' y $1'))}</p>
      </section>

      <section class="space-y-3">
        <a href="#cambiar-telefono" class="btn btn-secondary w-full">Confirmar mi teléfono</a>
        <p class="flex items-start gap-2 text-[18px] text-slate-700 dark:text-slate-300">${ICONOS.check}<span>Teléfono confirmado, termina en ${esc(termina)}. Usá esta opción si cambiás de número.</span></p>
      </section>

      <section class="space-y-3">
        <button type="button" id="btn-aparecer-primero" class="btn btn-secondary w-full">Aparecer primero</button>
        <p class="text-[18px] text-slate-700 dark:text-slate-300">Conocé las opciones para destacar tu perfil en las búsquedas.</p>
      </section>

      <section class="space-y-3 pb-6">
        <h2 class="text-[24px] font-bold text-slate-900 dark:text-white">Más</h2>
        <button type="button" id="btn-cursos" class="btn btn-secondary w-full">Cursos</button>
        <button type="button" id="btn-problema-perfil" class="btn btn-secondary w-full">Avisar de un problema</button>
        <button type="button" id="btn-salir" class="btn btn-secondary w-full">Salir</button>
      </section>
    </div>
  `;

  contenedor.querySelectorAll('[data-grupo="disponible"]').forEach(btn => btn.addEventListener('click', () => {
    const disponible = btn.getAttribute('data-valor') === 'Disponible hoy';
    guardarPerfil({ ...obtenerPerfil(), disponible });
    renderVistaMiPerfil(contenedor);
    const el = contenedor.querySelector(`[data-grupo="disponible"][data-valor="${disponible ? 'Disponible hoy' : 'Ocupado'}"]`);
    if (el) el.focus();
  }));

  const btnAparecer = contenedor.querySelector('#btn-aparecer-primero');
  btnAparecer.addEventListener('click', () => abrirModal({
    titulo: 'Aparecer primero',
    descripcion: 'Tu perfil sale arriba en Buscar con la marca “Destacado”. Cuesta $1.500 por mes y lo podés dejar cuando quieras.',
    tipo: 'info',
    trigger: btnAparecer,
    acciones: [
      { texto: 'Quiero aparecer primero', primaria: true, callback: () => mostrarToast('Listo: te escribimos por Mensajes para activarlo. Todavía no se cobró nada.', 'exito') },
      { texto: 'Ahora no', primaria: false }
    ]
  }));

  const btnCursos = contenedor.querySelector('#btn-cursos');
  btnCursos.addEventListener('click', () => abrirModal({
    titulo: 'Cursos para aprender un oficio',
    descripcion: 'Cursos de la Escuela Técnica y del Centro de Jubilados de Serrano. Algunos son gratis. Te avisamos cuando abran las inscripciones.',
    tipo: 'info',
    trigger: btnCursos,
    acciones: [
      { texto: 'Avisame cuando abran', primaria: true, callback: () => mostrarToast('Te avisamos por Mensajes cuando abran.', 'exito') },
      { texto: 'Cerrar', primaria: false }
    ]
  }));

  const btnProblema = contenedor.querySelector('#btn-problema-perfil');
  btnProblema.addEventListener('click', () => abrirAvisoProblema('un vecino o un trabajo', btnProblema));

  const btnSalir = contenedor.querySelector('#btn-salir');
  btnSalir.addEventListener('click', () => abrirModal({
    titulo: '¿Salir de tu cuenta?',
    descripcion: 'Tus pedidos y mensajes quedan guardados. Para volver, entrás con tu número de celular.',
    tipo: 'advertencia',
    trigger: btnSalir,
    acciones: [
      { texto: 'Sí, salir', primaria: true, callback: () => { try { localStorage.removeItem('serrano_sesion'); } catch (e) {} window.location.hash = '#entrar'; } },
      { texto: 'No, volver', primaria: false }
    ]
  }));
}

// ----------------------------------------------------------------------------
// MI PERFIL · Editar perfil (wireframe 51-Editar-perfil)
// ----------------------------------------------------------------------------
function renderVistaEditarPerfil(contenedor) {
  if (!state.edicionPerfil) state.edicionPerfil = { ...obtenerPerfil() };
  const p = state.edicionPerfil;

  contenedor.innerHTML = `
    <div class="max-w-xl mx-auto space-y-7 animate-fadeIn pb-24 lg:pb-0">
      ${htmlVolver('mi-perfil')}
      <section class="space-y-2">
        <h1 class="text-[32px] font-bold text-slate-900 dark:text-white leading-tight">Editar perfil</h1>
        <p class="text-[18px] text-slate-700 dark:text-slate-300">Estos datos los ven los vecinos que buscan ayuda.</p>
      </section>

      <form id="form-perfil" class="space-y-7" novalidate>
        <section class="space-y-3">
          <h2 class="text-[24px] font-bold text-slate-900 dark:text-white">Tu foto</h2>
          ${htmlAvatar(p)}
          <button type="button" id="btn-cambiar-foto" class="btn btn-secondary w-full">Cambiar foto</button>
          <input id="campo-foto" type="file" accept="image/*" class="sr-only" tabindex="-1" aria-hidden="true">
          <p class="text-[18px] text-slate-600 dark:text-slate-400">La foto es opcional.</p>
        </section>

        <div class="space-y-2">
          <label for="campo-nombre" class="block text-[18px] font-bold text-slate-900 dark:text-white">Nombre y apellido</label>
          <input id="campo-nombre" type="text" autocomplete="name" class="input-serrano" value="${esc(p.nombre)}" aria-describedby="error-nombre">
          <p id="error-nombre" class="hidden text-[18px] font-bold text-serrano-dangerText dark:text-red-400 flex items-center gap-2" role="alert">${ICONOS.alerta}<span>Escribí tu nombre y apellido.</span></p>
        </div>

        <fieldset class="space-y-3">
          <legend class="text-[24px] font-bold text-slate-900 dark:text-white">Tu oficio</legend>
          <p class="text-[18px] text-slate-700 dark:text-slate-300">Podés elegir más de uno.</p>
          <div class="grid grid-cols-1 gap-3">
            ${['Limpieza', 'Albañilería', 'Electricidad', 'Pintura'].map(o => htmlChip('oficios', o, (p.oficios || []).includes(o))).join('')}
          </div>
        </fieldset>

        <fieldset class="space-y-3">
          <legend class="text-[24px] font-bold text-slate-900 dark:text-white">Dónde trabajás</legend>
          <div class="grid grid-cols-2 gap-3">
            ${['Zona Norte', 'Zona Sur'].map(z => htmlChip('zona', z, p.zona === z)).join('')}
          </div>
        </fieldset>

        <fieldset class="space-y-3">
          <legend class="text-[24px] font-bold text-slate-900 dark:text-white">Tu disponibilidad</legend>
          <div class="grid grid-cols-1 gap-3">
            ${htmlChip('disponible-edicion', 'Disponible hoy', !!p.disponible)}
            ${htmlChip('disponible-edicion', 'Ocupado', !p.disponible)}
          </div>
        </fieldset>

        <div class="space-y-2">
          <label for="campo-experiencia" class="block text-[18px] font-bold text-slate-900 dark:text-white">Contá qué hacés</label>
          <textarea id="campo-experiencia" rows="4" maxlength="300" class="input-serrano resize-none">${esc(p.experiencia)}</textarea>
        </div>

        <section class="space-y-2">
          <p class="flex items-center gap-2 text-[18px] font-bold text-slate-900 dark:text-white">${ICONOS.check}<span>Teléfono confirmado</span></p>
          <p class="text-[18px] text-slate-700 dark:text-slate-300">${esc(p.telefono)}</p>
          <p class="text-[18px] text-slate-600 dark:text-slate-400">El celular se cambia desde “Confirmar mi teléfono” en Mi perfil.</p>
        </section>

        <div class="lg:static fixed bottom-[72px] left-0 right-0 z-30 p-4 bg-white dark:bg-slate-900 border-t-2 border-slate-200 dark:border-slate-800 lg:border-t-0 lg:p-0 lg:bg-transparent">
          <div class="max-w-xl mx-auto">
            <button type="submit" class="btn btn-primary w-full force-text-white">Guardar cambios</button>
          </div>
        </div>
      </form>
    </div>
  `;

  const guardarCampos = () => {
    state.edicionPerfil.nombre = contenedor.querySelector('#campo-nombre').value;
    state.edicionPerfil.experiencia = contenedor.querySelector('#campo-experiencia').value;
  };

  contenedor.querySelectorAll('[data-grupo="oficios"]').forEach(btn => btn.addEventListener('click', () => {
    guardarCampos();
    const o = btn.getAttribute('data-valor');
    const lista = state.edicionPerfil.oficios || [];
    state.edicionPerfil.oficios = lista.includes(o) ? lista.filter(x => x !== o) : [...lista, o];
    renderVistaEditarPerfil(contenedor);
    contenedor.querySelector(`[data-grupo="oficios"][data-valor="${o}"]`).focus();
  }));
  contenedor.querySelectorAll('[data-grupo="zona"]').forEach(btn => btn.addEventListener('click', () => {
    guardarCampos();
    state.edicionPerfil.zona = btn.getAttribute('data-valor');
    renderVistaEditarPerfil(contenedor);
    contenedor.querySelector(`[data-grupo="zona"][data-valor="${state.edicionPerfil.zona}"]`).focus();
  }));
  contenedor.querySelectorAll('[data-grupo="disponible-edicion"]').forEach(btn => btn.addEventListener('click', () => {
    guardarCampos();
    state.edicionPerfil.disponible = btn.getAttribute('data-valor') === 'Disponible hoy';
    renderVistaEditarPerfil(contenedor);
    contenedor.querySelector(`[data-grupo="disponible-edicion"][data-valor="${btn.getAttribute('data-valor')}"]`).focus();
  }));

  contenedor.querySelector('#btn-cambiar-foto').addEventListener('click', () => contenedor.querySelector('#campo-foto').click());

  // Foto opcional: se achica a 240 px para que entre en el celular
  contenedor.querySelector('#campo-foto').addEventListener('change', (e) => {
    const archivo = e.target.files && e.target.files[0];
    if (!archivo) return;
    const lector = new FileReader();
    lector.onload = () => {
      const img = new Image();
      img.onload = () => {
        const lado = 240;
        const canvas = document.createElement('canvas');
        canvas.width = lado; canvas.height = lado;
        const ctx = canvas.getContext('2d');
        const escala = Math.max(lado / img.width, lado / img.height);
        const w = img.width * escala, h = img.height * escala;
        ctx.drawImage(img, (lado - w) / 2, (lado - h) / 2, w, h);
        guardarCampos();
        state.edicionPerfil.foto = canvas.toDataURL('image/jpeg', 0.8);
        renderVistaEditarPerfil(contenedor);
        mostrarToast('Foto lista. Tocá "Guardar cambios" para que quede.', 'info');
      };
      img.src = lector.result;
    };
    lector.readAsDataURL(archivo);
  });

  contenedor.querySelector('#form-perfil').addEventListener('submit', (e) => {
    e.preventDefault();
    guardarCampos();
    const nombre = state.edicionPerfil.nombre.trim();
    if (nombre.length < 3) {
      contenedor.querySelector('#error-nombre').classList.remove('hidden');
      contenedor.querySelector('#campo-nombre').classList.add('input-error');
      contenedor.querySelector('#campo-nombre').focus();
      return;
    }
    if (guardarPerfil({ ...state.edicionPerfil, nombre })) {
      state.edicionPerfil = null;
      mostrarToast('Cambios guardados.', 'exito');
      window.location.hash = '#mi-perfil';
    }
  });
}

// ----------------------------------------------------------------------------
// Pantalla genérica cuando un enlace apunta a algo que no existe
// ----------------------------------------------------------------------------
function renderNoEncontrado(contenedor, titulo, texto, rutaVolver) {
  contenedor.innerHTML = `
    <div class="max-w-xl mx-auto space-y-6 animate-fadeIn">
      ${htmlVolver(rutaVolver)}
      <h1 class="text-[32px] font-bold text-slate-900 dark:text-white leading-tight">${titulo}</h1>
      <p class="text-[18px] text-slate-700 dark:text-slate-300">${texto}</p>
      <a href="#${rutaVolver}" class="btn btn-primary w-full force-text-white">Volver</a>
    </div>`;
}

// ============================================================================
// 9. INICIALIZACIÓN GLOBAL DE LA APLICACIÓN
// ============================================================================

window.addEventListener('DOMContentLoaded', () => {
  inicializarTema();
  inicializarEventosRed();

  // "← Volver" usa la acción Back cuando hay una pantalla anterior
  document.addEventListener('click', (e) => {
    const volver = e.target.closest('[data-volver]');
    if (!volver) return;
    if (state.historial.length > 1) {
      e.preventDefault();
      state.historial.pop();
      state.historial.pop();
      window.history.back();
    }
  });

  // Mensajes guardados sin señal se envían solos al volver la conexión
  window.addEventListener('online', () => {
    enviarMensajesPendientes();
    if (window.location.hash.startsWith('#conversacion/')) enrutar();
  });

  // Router por hash
  window.addEventListener('hashchange', enrutar);
  enrutar(); // Ruta inicial
});
