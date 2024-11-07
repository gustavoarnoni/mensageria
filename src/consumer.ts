import { Worker } from 'bullmq';

const worker = new Worker('minha-fila', async job => {
  console.log(`Processando tarefa: ${job.id}, Mensagem: ${job.data.mensagem}`);
  
  try {
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log(`Tarefa ${job.id} concluída.`);
  } catch (error) {
    console.error(`Erro na tarefa ${job.id}:`, error);
  }
}, {
  connection: {
    host: 'localhost',
    port: 6379,
  },
});

worker.on('completed', job => {
  console.log(`Job ${job.id} completed!`);
});

worker.on('failed', (job, err) => {
  if (job) {
    console.error(`Job ${job.id} failed:`, err);
  } else {
    console.error(`Job failed:`, err);
  }
});
