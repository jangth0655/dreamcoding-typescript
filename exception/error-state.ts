{
  class TimeoutError extends Error {}
  class OfflineError extends Error {}

  type NetworkErrorState = {
    result: "fail";
    reason: "offline" | "down" | "timeout";
  };

  type SuccessState = {
    result: "success";
  };

  type ResultState = SuccessState | NetworkErrorState;
  class NetworkClient {
    tryConnect(): ResultState {
      // throw new OfflineError(`no network !!!`); 예상치 못한경우
      return { result: "fail", reason: "timeout" };
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
}

// 함수를 사용하고 싶은 사람이 알고 싶은것(return)무엇인가?
// 내가 꼭 무엇을 알려줘야 하는 가?
// 이 질문들에 대답을 찾다보면 어떤 값을 return해 줘야 하는지 좋은 답을 얻을 수 있다.
