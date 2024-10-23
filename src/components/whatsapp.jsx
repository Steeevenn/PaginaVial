import React from "react";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";


const WhatsappApp = () => {
	return (
		<WhatsAppWidget
			phoneNo="573125602484"
			position="left"
			widgetWidth="320px"
			widgetWidthMobile="260px"
			autoOpen={false}
			autoOpenTimer={5000}
			messageBox={true}
			messageBoxTxt=""
			iconSize="60"
			iconColor="white"
			iconBgColor="#58a697"
			headerIcon=""
			headerIconColor="black" // Asegúrate de que el color no interfiera
			headerTxtColor="black"
			headerBgColor="#58a697"
			headerTitle="Vial Logistic"
			headerCaption="Online"
			bodyBgColor="#bbb"
			chatPersonName="Vielka Bernal"
			chatMessage={<>Hola 👋 <br /><br /> Como puedo ayudarte?</>}
			footerBgColor="#999"
			placeholder="Escribe tu mensaje.."
			btnBgColor="#58a697"
			btnTxt="Iniciar Chat"
			btnTxtColor="black"
			/>
	);
};

export default WhatsappApp;