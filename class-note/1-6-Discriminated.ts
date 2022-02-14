{
  // function : Login -> success, fail
  type SuccessState = {
    result: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    result: "fail";
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      result: "success",
      response: {
        body: "logged in !",
      },
    };
  }

  //printLoginState(state)
  // success -> 🎉 body
  //fail -> ❌ reason
  const printLoginState = (state: LoginState): void => {
    if (state.result === "success") {
      console.log(`🎉${state.response.body}`);
    } else if (state.result === "fail") {
      console.log(`❌${state.reason}`);
    }
  };
}
