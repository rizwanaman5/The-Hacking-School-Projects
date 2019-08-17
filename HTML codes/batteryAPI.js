navigator.getBattery().then(function(battery) {
    console.log(battery.level * 100);

    // ... and any subsequent updates.
    battery.onlevelchange = function() {
      console.log(this.level);
    };
  });