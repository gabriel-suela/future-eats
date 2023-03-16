type NavigateInput = string | number;

export const goToLogin = (navigate: (input: NavigateInput) => void) => {
  navigate("/login");
};

export const goToSignUp = (navigate: (input: NavigateInput) => void) => {
  navigate("/signUp");
};

export const goToSignUpAddress = (navigate: (input: NavigateInput) => void) => {
  navigate("/signUp/address");
};

export const goToFeed = (navigate: (input: NavigateInput) => void) => {
  navigate("/");
};

export const goToRestaurants = (
  navigate: (input: NavigateInput) => void,
  id: (input: NavigateInput) => void
) => {
  navigate(`/feed/${id}`);
};

export const goToCart = (navigate: (input: NavigateInput) => void) => {
  navigate("/cart");
};

export const goToProfile = (navigate: (input: NavigateInput) => void) => {
  navigate("/profile");
};

export const goToLastPage = (navigate: (input: NavigateInput) => void) => {
  navigate(-1);
};
