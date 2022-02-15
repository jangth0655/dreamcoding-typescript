{
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  const printLoginState = (
    stateResult: ResourceLoadState
  ): ResourceLoadState => {
    switch (stateResult.state) {
      case "loading":
        console.log(stateResult.state);
        return { state: stateResult.state };
      case "success":
        console.log(stateResult.response.body);
        return {
          state: "success",
          response: { body: stateResult.response.body },
        };
      case "fail":
        console.log(stateResult.reason);
        return { state: "fail", reason: stateResult.reason };
      default:
        throw Error("Unknown Command");
    }
  };

  printLoginState({ state: "loading" });
  printLoginState({ state: "success", response: { body: "loaded" } });
  printLoginState({ state: "fail", reason: "no network" });
}
