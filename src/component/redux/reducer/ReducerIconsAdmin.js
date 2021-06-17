// import { StarRate } from "@material-ui/icons";

const initialisation = {
  etatadmin: false,
  logineicones: false,
  achat: 0,
  afficheachat: false,
  etatachatlogine: true,
  paiement: false,
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
    case "logineiconesfalse":
      return {
        ...state,
        logineicones: (state.logineicones = false),
      };
    case "achat":
      return {
        ...state,
        achat: state.achat + 1,
      };
    case "achazero":
      return {
        ...state,
        achat: state.achat * 0,
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
    case "etatachatlogine":
      return {
        ...state,
        etatachatlogine: (state.etatachatlogine = false),
      };
    case "etatatrue":
      return {
        ...state,
        etatachatlogine: (state.etatachatlogine = true),
      };
    case "paiementfalsess":
      return {
        ...state,
        paiement: (state.paiement = false),
      };
    case "paiementrue":
      return {
        ...state,
        paiement: (state.paiement = true),
      };
    default:
      return state;
  }
}

export default ActionIconsAdmin;
