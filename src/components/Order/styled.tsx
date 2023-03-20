import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	width: 100%;
	height: 7rem;
	padding: 1.5rem;
	background-color: var(--mid-green);
	position: fixed;
	bottom: 3.062rem;
	z-index: 2;
	padding-left: 2rem;

	h3 {
		color: #ffffff;
	}
	span {
		font-weight: bold;
	}
`;

export const Time = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const OrderInfo = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 20px;
`;
