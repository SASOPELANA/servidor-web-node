# 🧪 Rick & Morty Tracker & Laboratory

Una aplicación web moderna y de alto rendimiento construida con **Node.js**, **Express** y **TypeScript**. Este proyecto no solo consume la API pública de Rick and Morty, sino que también implementa un módulo de "Laboratorio" completo con persistencia en **SQLite** y un diseño premium utilizando **Tailwind CSS v4**.

---

## ✨ Características Destacadas

### 🎨 Interfaz de Usuario Premium

-   **Diseño Moderno**: Inspirado en estéticas de ciencia ficción y _dark mode_, con efectos de **glassmorphism** y gradientes vibrantes.
-   **Grilla Interactiva**: Los personajes se presentan en una rejilla responsiva que optimiza la visualización en cualquier dispositivo.
-   **Dossiers Detallados**: Vistas de detalle de personajes con jerarquía visual clara y organización de metadatos.

### 🛠️ Módulo de Laboratorio (CRUD)

-   **Persistencia Real**: Gestión de expedientes de personajes guardados localmente en una base de datos **SQLite**.
-   **Gestión Completa**: Capacidad para crear, visualizar, editar y eliminar (CRUD) registros de personajes personalizados.
-   **Formularios Intuitivos**: Validación de datos y campos organizados lógicamente para una mejor experiencia de usuario.

### 📨 Sistema de Contacto

-   **Feedback en Tiempo Real**: Botón con estado "Enviando..." y spinner animado para una mejor UX.
-   **Notificaciones Toast**: Sistema global de notificaciones flotantes para confirmar el envío de mensajes.
-   **Integración SMTP**: Envío de correos configurado mediante `nodemailer`.

---

## 🚀 Tecnologías Principales

| Backend                     | Frontend                   | Herramientas                   |
| :-------------------------- | :------------------------- | :----------------------------- |
| **Node.js v20+**            | **EJS** (Vistas Dinámicas) | **TypeScript** (Tipado fuerte) |
| **Express v5**              | **Tailwind CSS v4**        | **pnpm** (Gestor de paquetes)  |
| **SQLite** (Better-SQLite3) | **Glassmorphism UI**       | **tsx** (Watch mode)           |

---

## ⚙️ Instalación y Configuración

Sigue estos pasos para poner en marcha el proyecto en tu entorno local:

### 1. Clonar e Instalar

```bash
# Instalar dependencias
pnpm install
```

### 2. Variables de Entorno

Crea un archivo `.env` en la raíz del proyecto basado en la configuración necesaria para el envío de correos (Nodemailer) y el puerto del servidor:

```env
PORT=3000
SMTP_HOST=tu_host
SMTP_PORT=587
SMTP_USER=tu_usuario
SMTP_PASS=tu_contraseña
```

### 3. Desarrollo

Inicia el servidor en modo de observación (watch mode) y el compilador de CSS:

```bash
# Terminal 1: Servidor principal
pnpm run dev

# Terminal 2: Compilación de CSS (Tailwind)
pnpm run css:watch
```

---

## 📁 Estructura del Proyecto

```text
├── public/                 # Archivos estáticos (CSS, Imágenes)
├── src/
│   ├── controllers/        # Lógica de las rutas
│   ├── routes/             # Definición de endpoints
│   ├── views/              # Plantillas EJS (Layouts, Partials, Vistas)
│   └── database/           # Configuración de SQLite (si aplica)
├── index.ts                # Punto de entrada de la aplicación
└── .env                    # Configuración sensible
```

---

## 📝 Licencia

Este proyecto fue desarrollado como parte de un laboratorio de experimentación con Node.js y interfaces modernas. ¡Siéntete libre de explorarlo y mejorarlo!
