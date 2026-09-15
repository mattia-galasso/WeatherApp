export function getWeatherInfo(code) {
  if (code === 0) return { icon: "bi-sun-fill", condition: "Sereno" };
  if (code <= 2)
    return { icon: "bi-cloud-sun-fill", condition: "Poco nuvoloso" };
  if (code === 3) return { icon: "bi-clouds-fill", condition: "Nuvoloso" };
  if (code <= 48) return { icon: "bi-cloud-haze2-fill", condition: "Nebbia" };
  if (code <= 57)
    return { icon: "bi-cloud-drizzle-fill", condition: "Pioviggine" };
  if (code <= 67) return { icon: "bi-cloud-rain-fill", condition: "Pioggia" };
  if (code <= 77) return { icon: "bi-cloud-snow-fill", condition: "Neve" };
  if (code <= 82)
    return { icon: "bi-cloud-rain-heavy-fill", condition: "Rovesci" };
  if (code >= 95)
    return { icon: "bi-cloud-lightning-rain-fill", condition: "Temporale" };
  return { icon: "bi-cloud-fill", condition: "Variabile" };
}
