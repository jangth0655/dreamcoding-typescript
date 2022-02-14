{
  /**
   * Union Types : OR
   */

  type Direction = "left" | "right" | "up" | "down";
  function move(direction: Direction) {
    console.log(direction);
  }

  move("left");

  type TitleSize = 8 | 16 | 32;
  const title: TitleSize = 16;

  // function : Login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      response: {
        body: "logged in !",
      },
    };
  }

  //printLoginState(state)
  // success -> 🎉 body
  //fail -> ❌ reason
  const printLoginState = (state: LoginState): void => {
    if ("response" in state) {
      console.log(`🎉${state.response.body}`);
    } else {
      console.log(`❌${state.reason}`);
    }
  };
}
