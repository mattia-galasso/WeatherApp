export function getWeatherInfo(code) {
  if (code === 0) return { icon: "☀️", condition: "Sereno" };
  if (code <= 2) return { icon: "🌤️", condition: "Poco nuvoloso" };
  if (code === 3) return { icon: "☁️", condition: "Nuvoloso" };
  if (code <= 48) return { icon: "🌫️", condition: "Nebbia" };
  if (code <= 57) return { icon: "🌦️", condition: "Pioviggine" };
  if (code <= 67) return { icon: "🌧️", condition: "Pioggia" };
  if (code <= 77) return { icon: "❄️", condition: "Neve" };
  if (code <= 82) return { icon: "🌧️", condition: "Rovesci" };
  if (code <= 86) return { icon: "🌨️", condition: "Rovesci di neve" };
  if (code >= 95) return { icon: "⛈️", condition: "Temporale" };
  return { icon: "☁️", condition: "Variabile" };
}
