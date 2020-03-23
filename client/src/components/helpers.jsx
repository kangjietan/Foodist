export default class Helpers {
  // Helper functions
  static randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static getUserLocation() {
    return new Promise((resolve, reject) => {
      const showPosition = (position) => resolve([position.coords.latitude, position.coords.longitude]);
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        reject(new Error('Geolocation is not supported by this browser.'));
      }
    });
  }

  static changeMarkerColor(idx) {
    const marker = document.getElementsByClassName(`restaurant${idx}`);
    marker[0].style.backgroundColor = 'red';
  }

  static changeMarkerColorDefault(idx) {
    const marker = document.getElementsByClassName(`restaurant${idx}`);
    marker[0].style.backgroundColor = 'blue';
  }

  static changeFilterDefault() {
    const filterOption = document.getElementById('filter-options');
    filterOption.selectedIndex = 0;
  }
}
