const initialisation = {
  etatadmin: false,
  logineicones: false,
};

function ActionIconsAdmin(state = initialisation, action) {
  switch (action.type) {
    case "etatadmin":
      return {
        ...state,
        etatadmin: (state.etatadmin = true),
      };
    case "logineicones":
      return {
        ...state,
        logineicones: (state.logineicones = true),
      };

    default:
      return state;
  }
}

export default ActionIconsAdmin;
