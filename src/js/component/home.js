import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [color, setColor] = useState("rojo");
	console.log(color);

	return (
		<div className="box">
			<div
				className={
					"circulo rojo " + (color == "rojo" ? "seleccion" : "")
				}
				onClick={() => setColor("rojo")}
			/>
			<div
				className={
					"circulo ambar " + (color == "ambar" ? "seleccion" : "")
				}
				onClick={() => setColor("ambar")}
			/>
			<div
				className={
					"circulo verde " + (color == "verde" ? "seleccion" : "")
				}
				onClick={() => setColor("verde")}
			/>
		</div>
	);
}
