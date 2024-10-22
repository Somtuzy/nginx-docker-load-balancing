const os = require('os');

const logServerMetrics = () => {
    const totalMemoryInBytes = os.totalmem(); // Total memory in bytes

    const logMetrics = () => {
        const memoryUsage = process.memoryUsage();
        const usedMemoryInBytes = memoryUsage.heapUsed; // Memory used in bytes
        const freeMemoryInBytes = totalMemoryInBytes - usedMemoryInBytes; // Free memory in bytes
        const memoryUsagePercentage = ((usedMemoryInBytes / totalMemoryInBytes) * 100).toFixed(2); // Memory usage percentage

        const startUsage = process.cpuUsage();
        
        // Simulate a short delay (could be an I/O operation)
        setImmediate(() => {
            const endUsage = process.cpuUsage(startUsage);
            const elapsedTimeInSeconds = (endUsage.user + endUsage.system) / 1000000; // Convert to seconds
            const totalCpuTime = endUsage.user + endUsage.system; // Total CPU time used
            const cpuUsagePercentage = ((totalCpuTime / (elapsedTimeInSeconds * os.cpus().length * 1000000)) * 100).toFixed(2); // Adjust for core count
            const noOfCpuCore = os.cpus().length
            const serverUptimeInSeconds = process.uptime()
            const metrics = {
                noOfCpuCore,
                cpuUsagePercentage,
                totalMemoryInBytes,
                usedMemoryInBytes,
                freeMemoryInBytes,
                memoryUsagePercentage,
                serverUptimeInSeconds
            }

            console.log(metrics);
        });
    };

    // Log metrics every 5 seconds
    setInterval(logMetrics, 5000);
};

module.exports = logServerMetrics();