const initialisation = {
  etatadmin: false,
  logineicones: false,
  achat: 0,
  afficheachat: false,
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
    case "achat":
      return {
        ...state,
        achat: state.achat + 1,
      };
    case "afficheachat":
      return {
        ...state,
        afficheachat: (state.afficheachat = true),
      };
    case "falseafficheachat":
      return {
        ...state,
        afficheachat: (state.afficheachat = false),
      };
    case "disparess":
      return {
        ...state,
        etatadmin: (state.etatadmin = false),
      };
    default:
      return state;
  }
}

export default ActionIconsAdmin;
