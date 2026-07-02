const TIMEZONE_LOCATIONS = {
  "Africa/Cairo": "Cairo, Egypt",
  "Africa/Johannesburg": "Johannesburg, South Africa",
  "Africa/Lagos": "Lagos, Nigeria",
  "America/Chicago": "Chicago, USA",
  "America/Denver": "Denver, USA",
  "America/Los_Angeles": "Los Angeles, USA",
  "America/New_York": "New York, USA",
  "America/Sao_Paulo": "São Paulo, Brazil",
  "America/Toronto": "Toronto, Canada",
  "Asia/Bangkok": "Bangkok, Thailand",
  "Asia/Dubai": "Dubai, UAE",
  "Asia/Hong_Kong": "Hong Kong, China",
  "Asia/Jakarta": "Jakarta, Indonesia",
  "Asia/Kolkata": "Kolkata, India",
  "Asia/Kuala_Lumpur": "Kuala Lumpur, Malaysia",
  "Asia/Manila": "Manila, Philippines",
  "Asia/Seoul": "Seoul, South Korea",
  "Asia/Shanghai": "Shanghai, China",
  "Asia/Singapore": "Singapore, Singapore",
  "Asia/Tokyo": "Tokyo, Japan",
  "Australia/Melbourne": "Melbourne, Australia",
  "Australia/Sydney": "Sydney, Australia",
  "Europe/Amsterdam": "Amsterdam, Netherlands",
  "Europe/Berlin": "Berlin, Germany",
  "Europe/London": "London, UK",
  "Europe/Madrid": "Madrid, Spain",
  "Europe/Paris": "Paris, France",
  "Europe/Rome": "Rome, Italy",
  "Europe/Stockholm": "Stockholm, Sweden",
  "Europe/Zurich": "Zurich, Switzerland",
  "Pacific/Auckland": "Auckland, New Zealand",
};

function cityFromTimezone(timeZone) {
  const parts = timeZone.split("/");
  return parts[parts.length - 1].replace(/_/g, " ");
}

function guessCountryFromCity(city) {
  const cityCountry = {
    Dubai: "UAE",
    "Abu Dhabi": "UAE",
    Kolkata: "India",
    Mumbai: "India",
    Chennai: "India",
    Delhi: "India",
    Tokyo: "Japan",
    Singapore: "Singapore",
    London: "UK",
    Paris: "France",
    Berlin: "Germany",
    Sydney: "Australia",
    Melbourne: "Australia",
    Toronto: "Canada",
    "New York": "USA",
    "Los Angeles": "USA",
    Chicago: "USA",
  };
  return cityCountry[city] || null;
}

function getTimezoneLabel(timeZone) {
  if (TIMEZONE_LOCATIONS[timeZone]) {
    return TIMEZONE_LOCATIONS[timeZone];
  }

  const city = cityFromTimezone(timeZone);
  const country = guessCountryFromCity(city);
  if (country) {
    return `${city}, ${country}`;
  }

  return city;
}

function formatCountryName(data) {
  const code = data.country_code;
  if (code === "AE") return "UAE";
  if (code === "GB") return "UK";
  if (code === "US") return "USA";
  return data.country_name || code;
}

async function initUserLocation() {
  if (typeof SITE_CONFIG === "undefined") return;

  let tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  let label = getTimezoneLabel(tz);

  try {
    const response = await fetch("https://ipapi.co/json/");
    if (response.ok) {
      const data = await response.json();
      if (data.city && (data.country_name || data.country_code)) {
        label = `${data.city}, ${formatCountryName(data)}`;
        if (data.timezone) tz = data.timezone;
      }
    }
  } catch {
    /* timezone fallback */
  }

  SITE_CONFIG.timezone = tz;
  SITE_CONFIG.timezoneLabel = label;

  document.querySelectorAll("[data-auto-location]").forEach((el) => {
    el.textContent = label;
  });
}
