import { WorkerMessage, WorkerMessageType, WorkerResponse } from '../ipc/type';
import { handleMergeData } from './dataHandlers';

const handlers: { [T in WorkerMessageType]: (msg: WorkerMessage<T>) => void } = {
    [WorkerMessageType.MergeData]: async (msg) => {
        const payload = await handleMergeData(msg);
        send({
            payload,
            id: msg.id || Math.random(),
            type: msg.type,
        });
    },
};

// @ts-ignore - Node.js process types don't match child_process types correctly
process.on('message', async (msg: any) => {
    const typedMsg = msg as WorkerMessage<WorkerMessageType>;
    const callback = handlers[typedMsg.type];
    callback && callback(typedMsg as any);
});

function send(msg: WorkerResponse) {
    process.send!(msg);
}
