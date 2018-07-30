if (window.DeviceMotionEvent) {
    document.getElementById("dmeSupported").innerText = "Device Motion wird unterstützt!";
    window.addEventListener('devicemotion', function(event) {
        document.getElementById("xBeschl").innerHTML = 'Beschleunigung in x-Richtung' + event.accleration.x.toFixed(1);
        document.getElementById("yBeschl").innerHTML = 'Beschleunigung in y-Richtung' + event.accleration.y.toFixed(1);
        document.getElementById("zBeschl").innerHTML = 'Beschleunigung in z-Richtung' + event.accleration.z.toFixed(1);

        document.getElementById("xRotation").innerHTML = 'Rotationsrate beta um x-Achse: ' + event.rotationRate.alpha.toFixed(2);
        document.getElementById("yRotation").innerHTML = 'Rotationsrate beta um y-Achse: ' + event.rotationRate.beta.toFixed(2);
        document.getElementById("zRotation").innerHTML = 'Rotationsrate beta um z-Achse: ' + event.rotationRate.gamma.toFixed(2);
    });
} else {
    document.getElementById("dmeSupported").innerText = "Device Motion wird nicht unterstützt!";
}