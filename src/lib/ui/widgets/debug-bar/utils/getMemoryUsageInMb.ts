type MemoryUsageType = {
  rss: string;
  heapTotal: string;
  heapUsed: string;
  external: string
}

export function getMemoryUsageInMB(): MemoryUsageType {
    const memoryUsage = process.memoryUsage();
    const memoryInMB = {
      rss: (memoryUsage.rss / (1024 * 1024)).toFixed(2), // Resident Set Size
      heapTotal: (memoryUsage.heapTotal / (1024 * 1024)).toFixed(2),
      heapUsed: (memoryUsage.heapUsed / (1024 * 1024)).toFixed(2),
      external: (memoryUsage.external / (1024 * 1024)).toFixed(2),
    };
  
    return memoryInMB;
  }