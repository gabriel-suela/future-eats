export const goToLogin = (navigate) =>  {
    navigate('/login')
}

export const goToSignUp = (navigate) => {
    navigate('/signUp')
}

export const goToSignUpAddress = (navigate) => {
    navigate('/signUp/address')
}

export const goToFeed = (navigate) => {
    navigate('/')
}

export const goToRestaurants = (navigate,id) => {
    navigate(`/feed/${id}`)
}

export const goToCart = (navigate) => {
    navigate('/cart')
}

export const goToProfile = (navigate) => {
    navigate('/profile')
}

export const goToLastPage = (navigate) => {
    navigate(-1)
}
