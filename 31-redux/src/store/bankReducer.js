export const DEPOSIT = 'DEPOSIT';
export const WITHDRAW = 'WITHDRAW';

const initialState = {
  money: {
    value: 0,
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT:
      return {
        money: {
          value: state.money.value + action.amount,
        },
      };
    case WITHDRAW:
      return {
        money: {
          value: state.money.value - action.amount,
        },
      };
    default:
      return state;
  }
};
