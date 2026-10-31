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
      if (window.location.hash === '#mis-trabajos') {
        const app = document.getElementById('vista-contenedor');
        if (app) renderVistaMisTrabajos(app);
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

function enrutar() {
  const hash = window.location.hash.slice(1).trim() || 'buscar';
  const contenedor = document.getElementById('vista-contenedor');
  if (!contenedor) return;

  // Desplazar al tope al cambiar de ruta
  window.scrollTo(0, 0);

  if (hash === 'buscar' || hash === '') {
    renderVistaBuscar(contenedor);
    actualizarNavegacionActiva('buscar');
  } else if (hash.startsWith('trabajador/')) {
    const id = hash.replace('trabajador/', '');
    renderVistaTrabajador(contenedor, id);
    actualizarNavegacionActiva('buscar');
  } else if (hash === 'pedir') {
    renderVistaPedirChanga(contenedor);
    actualizarNavegacionActiva('buscar');
  } else if (hash === 'mis-trabajos') {
    renderVistaMisTrabajos(contenedor);
    actualizarNavegacionActiva('mis-trabajos');
  } else if (hash === 'pagos') {
    renderVistaPlaceholder(contenedor, 'Pagos', 'Revisá lo que acordaste y lo que falta pagar. Acordá señas en efectivo o Mercado Pago sin comisiones ocultas.');
    actualizarNavegacionActiva('pagos');
  } else if (hash === 'mensajes') {
    renderVistaPlaceholder(contenedor, 'Mensajes', 'Comunicate directamente con los vecinos de Serrano para coordinar día, horario y detalles del trabajo.');
    actualizarNavegacionActiva('mensajes');
  } else if (hash === 'mi-perfil') {
    renderVistaPlaceholder(contenedor, 'Mi perfil', 'Gestioná tus datos personales, marcá si estás "Disponible hoy" y revisá las estrellas y opiniones que te dejaron tus vecinos.');
    actualizarNavegacionActiva('mi-perfil');
  } else {
    // Fallback seguro a Buscar
    window.location.hash = '#buscar';
    return;
  }

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

            <button type="button" id="btn-ver-changa-ejemplo" class="btn btn-secondary w-full">
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
                    <button type="button" class="btn btn-secondary w-full btn-ver-changa">
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
      mostrarToast('Detalle de changa disponible en la versión final de la EFI.', 'info');
    });
  });

  // Botón Avisame si hay changas nuevas (spec §6.7 & C2)
  const btnAvisame = contenedor.querySelector('#btn-avisame-changas');
  if (btnAvisame) {
    btnAvisame.addEventListener('click', () => {
      mostrarToast('Te avisaremos cuando publiquen nuevas changas en Serrano.', 'exito');
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
          ${t.opiniones.map(op => `
            <article class="p-5 bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 rounded-2xl space-y-2 shadow-sm">
              <div class="flex items-center justify-between">
                <span class="font-bold text-[18px] text-slate-900 dark:text-white">${op.autor}</span>
                <span class="text-amber-500 text-[18px]" aria-label="${op.estrellas} estrellas">
                  ${'★'.repeat(op.estrellas)}${'☆'.repeat(5 - op.estrellas)}
                </span>
              </div>
              <p class="text-[18px] text-slate-700 dark:text-slate-300 leading-normal">
                "${op.texto}"
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
            texto: 'Abrir Mensajes',
            primaria: true,
            callback: () => {
              window.location.hash = '#mensajes';
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
        abrirModal({
          titulo: 'Guardado sin señal',
          descripcion: 'Sin señal: tu pedido se guardó en el celular y se publica solo cuando vuelva la señal a Serrano.',
          tipo: 'sin-senal',
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
    ? [...pedidosLocales, ...TRABAJOS_MUESTRA] 
    : TRABAJOS_HAGO_MUESTRA;

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
                ${tr.estado.includes('Terminado') ? `
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
                <button type="button" class="btn btn-secondary w-full btn-accion-opinar">
                  Dejar opinión
                </button>
              ` : (tr.estado.includes('Guardado') || tr.sinSenal) ? `
                <a href="#pedir" class="btn btn-secondary w-full inline-flex items-center justify-center">
                  Ver pedido guardado
                </a>
              ` : `
                <button type="button" class="btn btn-secondary w-full btn-accion-ver">
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
      mostrarToast('La calificación con estrellas se habilita en la entrega final.');
    });
  });

  contenedor.querySelectorAll('.btn-accion-ver').forEach(btn => {
    btn.addEventListener('click', () => {
      mostrarToast('Detalle del trabajo disponible en la versión final de la EFI.');
    });
  });
}

// ----------------------------------------------------------------------------
// VISTA 5: PLACEHOLDER PARA VISTAS DE ETAPA 2 (#pagos, #mensajes, #mi-perfil)
// ----------------------------------------------------------------------------
function renderVistaPlaceholder(contenedor, titulo, descripcion) {
  contenedor.innerHTML = `
    <div class="max-w-2xl mx-auto space-y-6 text-center py-12 animate-fadeIn">
      
      <div class="w-20 h-20 mx-auto rounded-3xl bg-blue-50 dark:bg-blue-950/50 border-2 border-blue-200 dark:border-blue-800 text-serrano-blue dark:text-blue-400 flex items-center justify-center shadow-sm">
        <svg class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 14 14"></polyline>
        </svg>
      </div>

      <div class="space-y-3">
        <h1 class="text-[32px] font-bold text-slate-900 dark:text-white">${titulo}</h1>
        <p class="text-[18px] text-slate-700 dark:text-slate-300 max-w-lg mx-auto font-normal leading-relaxed">
          ${descripcion}
        </p>
      </div>

      <!-- Aviso formal del alcance de la entrega -->
      <div class="p-5 bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-300 dark:border-amber-800 rounded-2xl max-w-md mx-auto text-amber-950 dark:text-amber-200 text-[18px] font-medium">
        <strong>Alcance de entrega:</strong> Esta sección se suma en la versión final de la EFI.
      </div>

      <div class="pt-4">
        <a href="#buscar" class="btn btn-primary inline-flex items-center gap-2.5 force-text-white">
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          <span>Volver a Buscar</span>
        </a>
      </div>

    </div>
  `;
}

// ============================================================================
// 9. INICIALIZACIÓN GLOBAL DE LA APLICACIÓN
// ============================================================================

window.addEventListener('DOMContentLoaded', () => {
  inicializarTema();
  inicializarEventosRed();

  // Router por hash
  window.addEventListener('hashchange', enrutar);
  enrutar(); // Ruta inicial
});
