import cloudy from "../images/cloudy.png";
import sunny from "../images/sunny.png";
import mostlyCloudy from "../images/mostly-cloudy.png";
import clearCloudy from "../images/clear-cloudy.png";
import showers from "../images/showers.png";
import drizzle from "../images/drizzle.png";
import thunderstroms from "../images/thunderstroms.png";
import snow from "../images/snow.png";
import foggy from "../images/foggy.png";

// TODO: Create the interface of Weather Response

export interface WeatherResponse {
  base?: string;
  cod?: number;
  coord: { lon: number; lat: number };
  name: string;
  dt: number;
  id: number;
  main: Main;
  wind: Wind;
  weather: Weather[];
  timezone: number;
  visibility: number;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
}

interface Wind {
  deg: number;
  gust: number;
  speed: number;
}

interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

interface Main {
  feels_like: number;
  humidity: number;
  pressure: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export const WeatherIcon = {
  "01d": sunny,
  "01n": sunny,
  "02d": clearCloudy,
  "02n": clearCloudy,
  "03d": cloudy,
  "03n": cloudy,
  "04d": mostlyCloudy,
  "04n": mostlyCloudy,
  "09d": showers,
  "09n": showers,
  "10d": drizzle,
  "10n": drizzle,
  "11d": thunderstroms,
  "11n": thunderstroms,
  "13d": snow,
  "13n": snow,
  "50d": foggy,
  "50n": foggy,
} as const;

export const DayOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export type WeatherIcontype = keyof typeof WeatherIcon;
