export const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby-N6kcIULA32Ltht_7F6PVnMCfneqplIV_iNR5uri7IlQawXbDk8Zstv8CvSyws9sd9g/exec";

export function submitToGoogleForm(form: HTMLFormElement) {
  const formData = new FormData(form);
  return fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    body: formData,
    mode: "no-cors",
  });
}
