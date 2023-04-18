
import fetch from 'node-fetch';
import { DaprClient } from 'dapr-client';

const kafkaTopic = 'topic1';


const daprClient : DaprClient = new DaprClient();

//console.log(daprClient.getIsInitialized())
async function sendPostRequestToKafka(payload: any): Promise<void> {
  const message = {
    data: payload,
    metadata: {
      kafka: {
        topic: kafkaTopic,
      },
    },
  };
  await daprClient.pubsub.publish('order-pub-sub', kafkaTopic, message);
}

async function main() {
  while (true){
    const payload = {
        foo: 'roei',
        baz: 42,
      };
    await sendPostRequestToKafka(payload);
    await new Promise(f => setTimeout(f, 2000));
  }

}

main();






