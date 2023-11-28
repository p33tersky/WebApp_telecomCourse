import router from '../router'
import io from 'socket.io-client'
class ViewManager {
    constructor() {
        this.interval = null;
        this.status = null;
    }
    changeView() {
        switch (this.status) {
            case 'CONNECTED':
                router.push({ name: 'connected' });
                break;
            case 'FAILED':
                router.push({ name: 'failed' });
                break;
            case 'ANSWERED':
                router.push({ name: 'answered' });
                break;
            case 'RINGING':
                router.push({ name: 'ringing' });
                break;
        }
    }
    checkStatus() {
        const socket =
            io(process.env.VUE_APP_SERVER_URL, {
                reconnection: false,
                transports: ["websocket",
                    "polling"]
            });
        socket.on('status', (status) => {
            if (status !== this.status) {
                this.status = status;
                this.changeView();
            }
        })
    }
}
export default new ViewManager()