import styled from "styled-components";
import { keyframes } from "styled-components";

const fadeUp = keyframes`
	from{
		opacity:0;
		transform: translateY(15%);
	}
	to{
		opacity:1;
		transform: translateY(0);
	}
`;
const CardContainer = styled.div`
	position: relative;
	width: 16rem;
	height: 25rem;
	background: #fefefe;
	border-radius: 10px;
	transition: all 200ms ease-in-out;
	box-shadow: 3px 5px 14px 3px rgb(0 0 0 / 30%);
	opacity: 0;
	transform: translateY(10%);
	animation: ${fadeUp} 1000ms ease-in-out ${({ index }) => index * 600}ms;
	animation-fill-mode: forwards;
	cursor: pointer;
	&:hover {
		opacity: 0.9;
		box-shadow: 1px 1px 20px 12px rgb(0 0 0 / 30%);
		& > div > img {
			transform: scale(1.05);
		}
		& > .detail_profile {
			display: flex;
			opacity: 1;
		}
	}
`;
const DetailProfile = styled.div`
	position: absolute;
	left: 0;
	top: 0;
	/* display: none; */
	opacity: 0;
	background: rgb(0, 0, 0, 0.8);
	z-index: 10;
	width: 100%;
	height: 100%;
	border-radius: 10px;
	padding: 1rem;
	color: white;
	transition: all 150ms linear;
`;

const ImageContainer = styled.div`
	width: 100%;
	height: 60%;
	display: flex;
	justify-content: center;
	overflow: hidden;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`;
const ProfileImg = styled.img`
	transition: all 200ms ease-in-out;
	width: 100%;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`;
const PreviewProfile = styled.div`
	padding: 1rem;
`;
const ProfileCard = ({ modalOpen, index }) => {
	return (
		<CardContainer index={index}>
			<ImageContainer className="profile_img">
				<ProfileImg
					src="https://pbs.twimg.com/profile_images/1374979417915547648/vKspl9Et_400x400.jpg"
					alt="프로필사진"
				/>
			</ImageContainer>
			<PreviewProfile>
				<p>프로필 간단 설명</p>
			</PreviewProfile>

			<DetailProfile onClick={modalOpen} className="detail_profile">
				<p>프로필 상세 설명</p>
			</DetailProfile>
		</CardContainer>
	);
};
export default ProfileCard;
