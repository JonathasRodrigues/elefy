import styled from 'styled-components';

const Container = styled.div`
	background: white;
	width: 100%;
	border: 1px solid lightgray;
	display: flex;
	flex-direction: column;
	padding: 0.8rem;
	margin: .8rem 0;
`

const Avatar = styled.div`
	width: 40px;
	height: 40px;
	border: 1px solid black;
	border-radius: 100%;
`

const Details = styled.div`
	display: flex;
	margin: 0.8rem;
	align-items: center;
`;

const Info = styled.div`
	display: block;
	margin-left: 10px;
`;

const Illustration = styled.figure`
	border: 1px solid black;
	width: 100%;
	height: 60px;
	cursor: pointer;
	transition: .2s background;

	&:hover{
		background: rgba(0, 0, 0, 0.7);
	}

`

const Text = styled.p`
	font-size: ${props => props.size};
	color: ${props => props.color};
`

const Card = () => {
	return (
		<Container>
			<Illustration />
			<Details>
				<Avatar />
				<Info>
					<Text size="14">John Coltrane</Text>
					<Text size="12" color="lightblue">The city of glass</Text>
				</Info>
			</Details>
		</Container>
	)
}

export default Card;