import { Queue } from 'bullmq';

const queue = new Queue('minha-fila', {
  connection: {
    host: 'localhost',
    port: 6379,
  },
});

const enviarMensagem = async (mensagem: string) => {
  await queue.add('nova-tarefa', {
    mensagem,
  });
  console.log(`Mensagem enviada: ${mensagem}`);
};

enviarMensagem('Processar pedido 123');
