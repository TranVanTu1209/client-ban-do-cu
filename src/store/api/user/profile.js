import axios from "../axios";

export const getProfileRequest = async (token) => {
  console.log(token);
  return axios.post("/auth/user", {
    headers: {
      Authorization: `Bearer ${token}`,
      Cookie:
        "laravel_session=eyJpdiI6InJYYWE4WEU4eG1ybDNxbFpmZnZlNVE9PSIsInZhbHVlIjoiQ0dya1F1TlJhZmdZaEVnd2VkbW9RV1pCeEIwVnZpRjVsNk83bnR4c0hSNzlCMDF3MGIxOVhiQTJVcmpUdHpCdlVRRFlvZ29rbmM1M3Flc0JPNHl2UHNlRVYyYWlKeFhjenhMZ1g0RGdwYmUyTlRDUWlXKzNNa0FuYXFVOExJYXEiLCJtYWMiOiIzMDc5MGE4MTczNDJlNmU3M2M5N2EyOTgyMDIyMjE5ODA3OGRjM2ZlNDUwNjQ4ZDc3YzVkMGE4OTk0ODJiMzRkIn0%3D",
    },
  });
};
