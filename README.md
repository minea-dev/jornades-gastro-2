# PAC 3: Eines de desenvolupament Front-End - Frameworks CSS

Aquest projecte correspon a la tercera Prova d'Avaluació Contínua (PAC) de l'assignatura d'Eines HTML i CSS II (UOC). L'objectiu principal ha estat la migració i redisseny d'una web gastronòmica utilitzant el framework **Tailwind CSS**, aplicant una metodologia **utility-first** i integrant eines d'IA generativa.

## 🚀 URLs del Projecte

* **Repositori GitHub:** [Insereix aquí la teva URL de GitHub]
* **Deployment a Netlify:** [Insereix aquí la teva URL de Netlify]
* **Projecte PAC 2 (Comparativa):** [Insereix aquí la teva URL de la PAC 2]

## 🛠️ Tecnologies Utilitzades

* **Framework CSS:** [Tailwind CSS v3+](https://tailwindcss.com/) 
* **Bundler:** [Parcel](https://parceljs.org/) 
* **Post-processament:** PostCSS i PostHTML 
* **Metodologia:** Utility-first amb extracció de classes mitjançant la directiva `@apply` 
* **IA Generativa:** ChatGPT per a la creació de la pàgina de contacte i optimització de codi.

## 📋 Requisits i Instal·lació

Per poder executar aquest projecte en local, cal tenir instal·lat **Node.js**.

1.  Clonar el repositori:
    ```bash
    git clone [URL-del-teu-repo]
    ```
2.  Instal·lar les dependències:
    ```bash
    npm install
    ```
3.  Executar el servidor de desenvolupament:
    ```bash
    npm run dev
    ```
4.  Generar el build per a producció:
    ```bash
    npm run build
    ```

## 🏗️ Estructura del Projecte

El projecte segueix una estructura modular:
* `src/assets/styles/tailwind.css`: Configuració de la capa base i components personalitzats amb `@apply`.
* `src/views/`: Components HTML reutilitzables (header, footer, llistes d'esdeveniments, etc.) gestionats amb `posthtml-include`.
* `tailwind.config.js`: Personalització del tema (colors corporatius, vores neobrutalistes i tipografies).

## ✍️ Autor
**Nom de l'alumne:** Minea Licer Silvestre <br>
**Assignatura:** Eines HTML i CSS II <br>
**Data:** Gener 2026 <br>
