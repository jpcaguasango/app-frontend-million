# 🏡 Million Properties - Frontend

Aplicación web desarrollada con **Next.js** para visualizar y gestionar propiedades inmobiliarias. Este frontend consume la API del backend `Million Properties` y utiliza **Chakra UI** para los componentes de la interfaz de usuario y **React Query** para el manejo del estado del servidor.

---

## 📝 Requisitos

* **Node.js** (versión 18 o superior)
* **npm** o **yarn**
* Un servidor de la API del backend de `Million Properties` corriendo.

Antes de ejecutar el proyecto, asegúrate de que el backend esté corriendo y de que la URL de la API esté configurada correctamente en el archivo de variables de entorno.

---

## ⚡ Instalación y ejecución

```bash
# Instalar dependencias
npm install
# o
yarn install

# Copiar el archivo de variables de entorno de ejemplo
cp .env.local.example .env.local

# Abrir el archivo .env.local y configurar la URL del backend
# Ejemplo: NEXT_PUBLIC_API_URL=http://localhost:5000/api

# Ejecutar la aplicación en modo de desarrollo
npm run dev
# o
yarn dev