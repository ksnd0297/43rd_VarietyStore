import { useState } from "react";
import { Link } from "react-router-dom";
import Main from "./routes/views/main";
import Header from "./components/navbar/Header";

const useCssInlineStyle = () => {
  const [cssStyleValue, setCssStyleValue] = useState("");
  const parsedStyle = () => {
    const styles = cssStyleValue.split(";");
    const style = {};
    styles.forEach((styleValue) => {
      let [property, value] = styleValue.split(":");
      if (!property || !value) return;
      property.replaceAll('"', "");
      property.replaceAll(" ", "");
      console.log("property", property);
      console.log("value", value);
      const index = property.search("-");
      if (index === -1) {
        return;
      }

      let propertyArray = Array.from(property);
      let camelCaseStyle = [];

      let changeNextCharToUpperCase = false;
      for (let i = 0, len = propertyArray.length; i < len; i++) {
        if (propertyArray[i] === "-") {
          changeNextCharToUpperCase = true;
          continue;
        }
        if (propertyArray[i] === " ") continue;
        camelCaseStyle.push(
          changeNextCharToUpperCase
            ? propertyArray[i].toUpperCase()
            : propertyArray[i]
        );
        if (changeNextCharToUpperCase) {
          changeNextCharToUpperCase = false;
        }
      }

      const key = camelCaseStyle.join("");
      style[key] = value;
    });
    console.log(style);
    return style;
  };
  return {
    cssStyleValue,
    setCssStyleValue,
    parsedStyle,
  };
};
function App() {
	const { cssStyleValue, setCssStyleValue, parsedStyle } = useCssInlineStyle();
	return (
		<div style={{ width: "100vw", height: "100vh" }}>
			<Header />
			{/* <header
				style={{ width: "100%", height: "80px", backgroundColor: "lightgray", textAlign: "center", lineHeight: "80px" }}
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
			</header> */}
			<Main />
			{/* <h1
				style={{
					fontWeight: 600,
					fontSize: "2rem",
					textAlign: "center",
					width: "100%",
					marginBottom: "1rem",
					padding: "0.5rem",
				}}
			>
				CSS연습
			</h1>
			<main role="main" style={{ display: "flex", width: "100%", height: "calc(100vh - 80px)" }}>
				<section style={{ flex: 1, background: "white", padding: "2rem" }}>
					<div style={{ width: "100%", height: "30rem", background: "lightblue", padding: "1rem" }}>
						<input
							style={{ width: "20rem", height: "2rem", padding: "0.5rem" }}
							value={cssStyleValue}
							onChange={({ target: { value } }) => setCssStyleValue(value)}
						/>
						<p style={{ marginTop: "1rem" }}>입력한 값 : {cssStyleValue}</p>
					</div>
				</section>
				<section style={{ flex: 1, background: "whitesmoke", padding: "2rem", display: "flex", ...parsedStyle() }}>
					<div style={{ width: "50px", height: "50px", background: "tomato" }}></div>
					<div style={{ width: "50px", height: "50px", background: "yellow" }}></div>
				</section>
			</main> */}
		</div>
	);
}

export default App;
