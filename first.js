"use strict";

// APPLICATION ARCHITECTURE
const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;

      console.log(
        `https://www.google.com/maps/place/Kanchanrup/@{longitude},{latitude},12z/data=!3m1!4b1!4m6!3m5!1s0x39eee211226e75db:0xb7eabbe88a358584!8m2!3d26.6448831!4d86.8822445!16s%2Fm%2F04zx96d?entry=ttu&g_ep=EgoyMDI0MTAyMi4wIKXMDSoASAFQAw%3D%3D`
      );
    },
    function () {
      alert("Could not access your location");
    }
  );
