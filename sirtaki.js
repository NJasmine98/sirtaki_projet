    var b = document.querySelector('#bouton');
    var son_vol = document.querySelector('#son');

    var AudioContext = window.AudioContext || window.webkitAudioContext;
    var contexteAudio = new AudioContext;

    unlockAudioIOS(contexteAudio); // ok pour context = AudioContext;

    function resumeAudio() {
        console.log(contexteAudio.state);

        if(contexteAudio.state == "suspended")
        {
              contexteAudio.resume();
              console.log('Playback resumed successfully');
              son_vol.play();
              b.innerHTML = "SON OFF";
              console.log("SON OFF");

        }
        else {
              contexteAudio.suspend();
              console.log('Playback paused successfully');
              son_vol.pause();
              b.innerHTML = "SON ON";
              console.log("SON ON");
        }
        //document.removeEventListener("click", resumeAudio);
    }
    b.onclick = resumeAudio;

    

    AFRAME.registerComponent('switch', {
      init: function () {
        var el = this.el;
        el.setAttribute("animation-mixer" , "clip: pas_01", "duration: 13", "crossFadeDuration: 5", "clampWhenFinished:true");
        var change = 0;

        function getRandomInt(min, max) {
          min = Math.ceil(min);
          max = Math.floor(max);
          return Math.floor(Math.random() * (max - min + 1)) + min;};

        el.addEventListener('animation-loop', () => {
          change = getRandomInt(1,5);

          switch(change)
          {
            case 1: el.setAttribute("animation-mixer" , "clip: pas_01", "duration: 13", "crossFadeDuration: 5", "clampWhenFinished:true");
            break;
            case 2: el.setAttribute("animation-mixer" , "clip: pas_02", "duration: 13", "crossFadeDuration: 5", "clampWhenFinished:true");
            break;
            case 3: el.setAttribute("animation-mixer" , "clip: pas_03", "duration: 13", "crossFadeDuration: 5", "clampWhenFinished:true");
            break;
            case 4: el.setAttribute("animation-mixer" , "clip: pas_04", "duration: 13", "crossFadeDuration: 5", "clampWhenFinished:true");
            break;
            case 5: el.setAttribute("animation-mixer" , "clip: pas_05", "duration: 13", "crossFadeDuration: 5", "clampWhenFinished:true");
            break;
            default : el.setAttribute("animation-mixer" , "clip: pas_01", "duration: 13", "crossFadeDuration: 5", "clampWhenFinished:true");
            break;


          };


          });
        }
    });
