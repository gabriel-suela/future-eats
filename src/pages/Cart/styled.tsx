import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;

	h4 {
		margin-top: 10px;
	}

	form {
		display: flex;
		flex-direction: column;
		width: 100%;
		padding: 15px;
		input {
			margin: 10px 0px;
			align-items: center;
			justify-content: center;
		}

		label {
			margin-left: 5px;
		}
	}
`;

export const MainCart = styled.div`
	font-size: 1rem;
	height: 5%;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const CartConfig = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	/* justify-content: space-around; */
`;

export const InfoProfile = styled.div`
	width: 100%;
	height: 76px;
	margin-top: 5px;
	flex-grow: 0.1;
	background-color: #eee;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 15px;
	justify-content: center;
	font-size: 1rem;

	span {
		color: var(--greyish);
		margin-bottom: 10px;
	}
`;

export const CartInform = styled.div`
	width: 95%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const PaymentValue = styled.div`
	width: 100%;
`;

export const PaymentInfo = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	padding: 15px;

	div {
		margin-top: 10px;
		display: flex;
		justify-content: space-between;

		p {
			color: var(--mid-green);
		}
	}
`;

export const ButtonStyled = styled.button`
	margin-top: 16px;
	height: 42px;
	border-radius: 2px;
	color: black;
	background-color: var(--mid-green);
	width: 100%;
`;

export const InfoRestaurant = styled.div`
	width: 100%;
	padding-left: 15px;
	margin: 5px 0px;
	h4 {
		color: var(--mid-green);
	}
	p {
		color: var(--greyish);
	}
`;
