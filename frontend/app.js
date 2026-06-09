// Check login
if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

// Fetch dashboard data
fetch("http://127.0.0.1:5000/dashboard")
    .then(response => response.json())
    .then(data => {

        console.log(data);

        // Dashboard cards
        const totalServers = document.getElementById("totalServers");
        const runningServers = document.getElementById("runningServers");
        const awsInstances = document.getElementById("awsInstances");
        const alerts = document.getElementById("alerts");

        if (totalServers)
            totalServers.innerText = data.totalServers;

        if (runningServers)
            runningServers.innerText = data.runningServers;

        if (awsInstances)
            awsInstances.innerText = data.awsInstances;

        if (alerts)
            alerts.innerText = data.alerts;

        // Servers table
        const tableBody = document.getElementById("serverTableBody");

        if (tableBody) {

            tableBody.innerHTML = "";

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
        }

    })
    .catch(error => {
        console.error("Fetch Error:", error);
    });


// CPU Chart
const cpuCanvas = document.getElementById("cpuChart");

if (cpuCanvas) {

    new Chart(cpuCanvas, {
        type: "line",
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [{
                label: "CPU Usage %",
                data: [20, 35, 40, 25, 60, 45, 30],
                borderWidth: 3
            }]
        }
    });

}


// Memory Chart
const memoryCanvas = document.getElementById("memoryChart");

if (memoryCanvas) {

    new Chart(memoryCanvas, {
        type: "bar",
        data: {
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [{
                label: "Memory Usage %",
                data: [40, 45, 50, 55, 60, 52, 48]
            }]
        }
    });

}


// Logout
function logout() {

    localStorage.removeItem("loggedIn");

    window.location.href = "login.html";

}