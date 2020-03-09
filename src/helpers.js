export const checkBudget = (budget, remaninBudget) => {
  if (budget / 4 > remaninBudget) {
    return "alert alert-danger";
  } else if (budget / 2 > remaninBudget) {
    return "alert alert-warning";
  } else {
    return "alert alert-success";
  }
};
