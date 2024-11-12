const formulario = document.querySelector("form");
const container = document.querySelector(".container");
const temperatura = document.querySelector(".temp");
const humedad = document.querySelector(".humedad");
const resultados = document.querySelector("h2");
const cityName = document.querySelector("h3");
const error = document.querySelector(".error");

const getWeatherData = async (ciudad) => {
  const apiKey = config.API_KEY;
  const url = config.URL
  try {
    const respuesta = await fetch(
      `${url}?q=${ciudad}&units=metric&appid=${apiKey}`
    );

    // console.log(respuesta);

    if (respuesta.ok) {
      const data = await respuesta.json();
      // console.log(data);
      return data;
    } else {
      console.log("We couldn't fetch the data.");
    }
  } catch (error) {
    alert("Something is wrong with the API call.");
  }
};

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();
  const ciudad = document.querySelector("input").value;

  if (!ciudad) {
    error.innerHTML = "Por favor ingrese una ciudad.";
    error.style.color = "red";
    return;
  }

  error.innerHTML = "";

  const data = await getWeatherData(ciudad);

  if (!data) {
    error.innerHTML = "We couldn't find this city.";
    error.style.color = "red";
  } else {
    const temp = data.main.temp;
    const humidityValue = data.main.humidity;
    resultados.style.display = "block";
    cityName.innerHTML = `${data.name}`;
    temperatura.innerHTML = `Temperatura: ${temp}°C`;
    humedad.innerHTML = `Humedad: ${humidityValue}%`;
    error.innerHTML = "";
  }
  document.querySelector("input").value = "";
});
