class TimeoutError extends Error {}
class OfflineError extends Error {}

class NetworkClient {
  tryConnect(): void {
    throw new OfflineError(`no network !!!`);
  }
}

class UserService {
  constructor(private client: NetworkClient) {}
  login() {
    this.client.tryConnect();
    // login
  }
}

// 어정쩡하게 잡기보다는 처리할 수 있는 곳에서 try하는 것이 좋다.
class App {
  constructor(private userService: UserService) {}
  run() {
    try {
      this.userService.login();
    } catch (error) {
      // show dialog to user
      // 의미 있는 에러 처리를 할 수 있기 때문에
    }
  }
}

const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);
app.run();
