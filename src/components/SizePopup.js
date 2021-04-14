import React from "react"
import "./SizePopup.css"

export default function SizePopup(props){
	return (props.trigger) ? (
		<div className="popup">
			<div className="popup-inner">
				<button onClick={()=>props.setTrigger(false)}>fechar</button>
				{ props.children }
			</div>
		</div>
	) : "";
}