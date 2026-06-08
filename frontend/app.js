fetch("http://127.0.0.1:5000/dashboard")
  .then(response => response.json())
  .then(data => {

    console.log(data);

    document.getElementById("totalServers").innerText =
      data.totalServers;

    document.getElementById("runningServers").innerText =
      data.runningServers;

    document.getElementById("awsInstances").innerText =
      data.awsInstances;

    document.getElementById("alerts").innerText =
      data.alerts;

    let tableBody =
      document.getElementById("serverTableBody");

    data.servers.forEach(server => {

      let row = `
      <tr>
        <td>${server.hostname}</td>
        <td>${server.cpu}</td>
        <td>${server.ram}</td>
        <td>${server.disk}</td>
        <td>${server.status}</td>
      </tr>
      `;

      tableBody.innerHTML += row;

    });

  })
  .catch(error => {
    console.error("Fetch Error:", error);
  });

const ctx = document.getElementById('cpuChart');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        datasets: [{
            label: 'CPU Usage %',
            data: [20,35,40,25,60,45,30],
            borderWidth: 3
        }]
    }
});
const memctx = document.getElementById('memoryChart');

new Chart(memctx,{
    type:'bar',
    data:{
        labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        datasets:[{
            label:'Memory Usage %',
            data:[40,45,50,55,60,52,48]
        }]
    }
});