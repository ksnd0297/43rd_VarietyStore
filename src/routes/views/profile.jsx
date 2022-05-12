import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";

import { modalState } from "../../store/modal";
import ProfileCard from "../../components/profile/ProfileCard";
import Modal from "../../components/modal/modal";
import ModalPortal from "../../components/modal/Portal";

const ProfileView = () => {
	const [modal, setModal] = useRecoilState(modalState);

	return (
		<>
			<div style={{ width: "100vw", height: "100vh" }}>
				<header
					style={{
						width: "100%",
						height: "80px",
						backgroundColor: "lightgray",
						textAlign: "center",
						lineHeight: "80px",
					}}
				>
					<nav>
						<Link style={{ padding: "20px", cursor: "pointer" }} to="/">
							CSS연습
						</Link>
						<Link style={{ padding: "20px", cursor: "pointer" }} to="/profile">
							프로필
						</Link>
						<Link style={{ padding: "20px", cursor: "pointer" }} to="/tarot">
							타로카드
						</Link>
					</nav>
				</header>
				<h1
					style={{
						fontWeight: 600,
						fontSize: "2rem",
						textAlign: "center",
						width: "100%",
						marginBottom: "1rem",
						padding: "0.5rem",
					}}
				>
					프로필 연습
				</h1>
				<main role="main">
					<section
						style={{
							width: "100%",
							padding: "2rem",
							background: "whitesmoke",
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<ProfileCard modalOpen={() => setModal(true)} index={1} />
						<ProfileCard modalOpen={() => setModal(true)} index={2} />
						<ProfileCard modalOpen={() => setModal(true)} index={3} />
						<ProfileCard modalOpen={() => setModal(true)} index={4} />
						<ProfileCard modalOpen={() => setModal(true)} index={5} />
					</section>
				</main>
			</div>
			<ModalPortal>
				<Modal isOpen={modal} onClose={() => setModal(false)}>
					<div style={{ background: "white", width: "600px", height: "600px", padding: "1rem" }}>
						<p>상세 프로필 내용 등 </p>
					</div>
				</Modal>
			</ModalPortal>
		</>
	);
};
export default ProfileView;
