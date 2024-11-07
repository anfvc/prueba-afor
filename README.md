# Prueba Afor

## Objetivo

Crear una aplicación web que permita al usuario ingresar una ubicación y obtener el clima actual de esa área utilizando la API de OpenWeatherMap. La prueba se realizará con HTML, CSS, JavaScript.

### Requisitos

**Interfaz de Usuario**

- Un campo de entrada para que el usuario ingrese el nombre de la ciudad.
- Un botón para enviar la consulta.
- Un área para mostrar los resultados del clima (temp, condiciones meetereológicas, humedad, etc.)
- Manejo de errores (ciudad no encontrada)

**API del Clima:**

Utilizar la API de OpenWeatherMap (https://openweathermap.org/api) para obtener los datos metereológicos.
Necesitarás registrarte y obtener una clave (api key).

**Funciones**

- Hacer una llamada a la API para enviar el formulario.
- Procesar la respuesta y mostrar los datos en la interfaz.

## API Call

Created a `config.js` to store `API_KEY` and `URL` important variables (`.env`) which are being used in `main.js` to fetch information from the dedicated API.

- `config.js` is included in `.gitignore` so that it does not get pushed to GitHub.
- If you need to pull the code, please change your `.env` variables on `config.js`
