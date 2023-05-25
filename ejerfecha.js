(function(){
     
    let actualizarHora = function(){
        let fecha= new Date(),
            horas = fecha.getHours(),
            ampm,
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            diaSemana= fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            year=fecha.getFullYear();


        let pHoras = document.getElementById('horas'),
            pAMPM = document.getElementById('ampm'),
            pMinutos= document.getElementById('minutos'),
            pSegundos = document.getElementById('segundos'),
            pDiaSemana = document.getElementById('diaSemana'),
            pDia = document.getElementById('dia'),
            pMes = document.getElementById('mes'),
            pYear = document.getElementById('year');

        let semana = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado']
            pDiaSemana.textContent  = semana[diaSemana];
            
            pDia.textContent = dia;

        let meses = [ 'Enereo','Febrero','Marzo', 'Abril','Mayo','junio','julio','Agosto','Sptiembre','Octubre','noviemnre','diciembre']
    
             pMes.textContent = meses[mes];
             pYear.textContent = year;

             if(horas >= 12){
                //  horas= horas -12;
                ampm = 'PM';
             }else{
                ampm='AM'
             };
            
             if(horas == 0 ){
                horas == 12;
             };

             pHoras.textContent = horas;
             pAMPM.textContent = ampm;
             
             if(minutos < 10){minutos = "0" + minutos};
             if(segundos < 10){segundos = "0" + segundos};
 
             pMinutos.textContent = minutos;
             pSegundos.textContent=segundos;
    
             };
    actualizarHora();
    let intervalo = setInterval(actualizarHora, 1000);
       
     const reloj = document.getElementsByClassName('wrap');
     const alarmabox = document.getElementById('alarma');
     const btnalarma = document.getElementById('btna');
     const list = document.getElementById('listordenada');
     
     
     
     
     btnalarma.addEventListener('click', () => {
       const hourInput = document.getElementById('hour');
       const minuteInput = document.getElementById('minute');
       const secondInput = document.getElementById('second');
       
       const alarmTime = `${hourInput.value}:${minuteInput.value}:${secondInput.value}`;
     
       const listItem = document.createElement('li');
       listItem.textContent = alarmTime;
     
       list.appendChild(listItem);
     
       hourInput.value = 0;
       minuteInput.value = 0;
       secondInput.value = 0;
     });
     

// Obtén la hora actual del reloj
function obtenerHoraActual() {
    const fechaActual = new Date();
    const horas = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();
    const segundos = fechaActual.getSeconds();
    return `${horas}:${minutos}:${segundos}`;
  }
  
  // Función para verificar las alarmas
  function verificarAlarmas() {
    const listaAlarmas = document.getElementById('listordenada').getElementsByTagName('li');
    const horaActual = obtenerHoraActual();
  
    for (let i = 0; i < listaAlarmas.length; i++) {
      const alarma = listaAlarmas[i].textContent;
      if (alarma === horaActual) {
        // alert('¡Es hora de la alarma!');
        const audioAlarma = document.getElementById('audioAlarma');
      audioAlarma.play();
        break; // Si encuentras una coincidencia, detén el bucle
      }
    }
  }
  
  // Llama a la función verificarAlarmas cada segundo
  setInterval(verificarAlarmas, 1000);
  
  const audioAlarma = document.getElementById('audioAlarma');
  const btnDetener = document.getElementById('btnDetener');
  
  btnDetener.addEventListener('click', () => {
    audioAlarma.pause();
    audioAlarma.currentTime = 0;
  });
     
     
  
  const btnBorrarTodo = document.getElementById('btnBorrarTodo');

  btnBorrarTodo.addEventListener('click', function() {
    const alarmas = document.querySelectorAll('#listordenada li');
    alarmas.forEach(function(alarma) {
      alarma.remove();
    });
  });
  
    

}())



