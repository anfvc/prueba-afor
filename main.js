const formulario = document.querySelector("form");
const container = document.querySelector(".container");
const temperatura = document.querySelector(".temp");
const humedad = document.querySelector(".humedad");
const resultados = document.querySelector("h2");
const error = document.querySelector(".error");

const getWeatherData = async (ciudad) => {
  try {
    const apiKey = "50df9374f23a88514c92812cc968e399";
    const respuesta = await fetch(
      `https://api.openweathermap.org/data/2.5/find?q=${ciudad}&units=metric&appid=${apiKey}`
    );

    // console.log(respuesta);

    if (respuesta.ok) {
      const data = await respuesta.json();
      // console.log(data.list[0]);
      return data.list[0];
    } else {
      console.log("We couldn't fetch the data.");
    }
  } catch (error) {
    alert("Something has ocurred");
  }
};

formulario.addEventListener("submit", async (e) => {
  e.preventDefault();
  const ciudad = document.querySelector("input").value;

  if (!ciudad) {
    error.innerHTML = "Por favor ingrese una ciudad.";
    error.style.color = "red";
    // console.log(error);
    return;
  }

  error.innerHTML = "";

  const data = await getWeatherData(ciudad);

  if (!data) {
    error.innerHTML = "We couldn't find this city.";
    error.style.color = "red";
    // console.log(error);
  } else {
    // console.log(data.main);
    const temp = data.main.temp;
    const humidityValue = data.main.humidity;
    console.log("Temperatura: ", temp);
    console.log("Humedad:", humidityValue);
    resultados.style.display = "block";
    temperatura.innerHTML = `Temperatura: ${temp}°C`;
    humedad.innerHTML = `Humedad: ${humidityValue}%`;
    error.innerHTML = "";
  }
  document.querySelector("input").value = "";
});
