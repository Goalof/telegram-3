import React from "react";
import theme from "theme";
import { Theme, Image, Text, Icon, Link, Box } from "@quarkly/widgets";
import { Override, Section, StackItem, Stack } from "@quarkly/components";
import { FaTelegramPlane } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
export default (() => {
	return <Theme theme={theme}>
		<Section background="#22262E" padding="0px 0 0px 0">
			<Override slot="SectionContent" align-items="center" />
			<Image width="150px" height="64px" src="https://uploads.quarkly.io/landing/logo-on-dark.svg" />
		</Section>
		<Section padding="0px 0 0px 0" background="#FFD550">
			<Text text-align="center" font="18px --fontFamily-sans" margin="10px 0px 10px 0px" sm-font="14px --fontFamily-sans">
				Конкурс уже идёт и завершится 28 августа!
			</Text>
		</Section>
		<Section background="#171719 url(https://cdn.pixabay.com/photo/2016/12/29/18/44/background-1939128_640.jpg)" padding="10px 0 8px 0">
			<Stack sm-align-items="center" sm-justify-content="center">
				{"    "}
				<StackItem
					width="60%"
					display="flex"
					sm-width="100%"
					sm-align-items="center"
					sm-justify-content="center"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
						sm-align-items="center"
					/>
					{"        "}
					<Text
						font="normal 600 38px/1.5 --fontFamily-googleSourceSansPro"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="#66FFE4"
						padding="0px 0px 0px 0px"
						lg-font="normal 500 24px/1.5 --fontFamily-sans"
						sm-text-align="center"
						sm-width="100%"
					>
						ИЗУЧАЕШЬ REACT?
					</Text>
					<Text
						font="normal 400 38px/1.5 --fontFamily-googleSourceSansPro"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="#66FFE4"
						padding="0px 0px 10px 0px"
						lg-font="normal 400 24px/1.5 --fontFamily-sans"
						sm-width="100%"
						sm-text-align="center"
						sm-font="normal 400 20px/1.5 --fontFamily-sans"
					>
						Тогда мы ищем именно тебя
					</Text>
					<Text
						font="normal 500 25px/1.5 --fontFamily-googleSourceSansPro"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="--light"
						lg-font="normal 500 22px/1.5 --fontFamily-sans"
						sm-text-align="center"
						sm-font="normal 500 18px/1.5 --fontFamily-sans"
					>
						Есть отличная возможность попробовать свои силы и выиграть призы!
						<br />
						Переходи в Telegram за подробностями!👇
					</Text>
					<Link
						href="tg://resolve?domain=Quarkly_contestbot"
						color="--light"
						text-decoration-line="initial"
						padding="8px 24px 10px 18px"
						target="_blank"
						font="normal 600 25px/1.5 --fontFamily-sans"
						margin="0px 0px 0px 0px"
						display="flex"
						lg-font="normal 400 24px/1.5 --fontFamily-sans"
						sm-width="auto"
						sm-text-align="center"
						background="linear-gradient(180deg,#00aefa,#0983c5)"
						border-radius="4px"
						text-align="center"
						transition="box-shadow .3s ease,transform .3s ease,-webkit-box-shadow .3s ease,-webkit-transform .3s ease"
						hover-box-shadow="0 10px 10px -6px rgba(0,0,0,.24)"
						hover-transform="translateY(-2px)"
						cursor="pointer"
						align-items="center"
					>
						<Icon category="fa" icon={FaTelegramPlane} margin="0px 12px 0px 0px" />
						Telegram
					</Link>
					{"    "}
				</StackItem>
				{"    "}
				<Box width="30%">
					<Image
						width="430px"
						height="auto"
						src="https://ukit.top/img-stati/secret.png"
						sm-padding="0px 0px 0% 0px"
						sm-width="320px"
						sm-display="none"
						sm-align-items="center"
						sm-justify-content="center"
					/>
				</Box>
			</Stack>
		</Section>
		<Section background="#0E1317" padding="30px 0 0px">
			<Stack margin="-16px -16px 16px -16px">
				{"    "}
				<StackItem width="35%" display="flex" padding="0px 0px" sm-display="none">
					{"        "}
					<Box
						background="rgba(0, 0, 0, 0) url(https://ukit.top/quarkly/Square_500x500_3.png) 100% 25% /cover no-repeat scroll padding-box"
						width="100%"
						padding="0px 0px 61% 0px"
						bottom="-593px"
						left="986px"
						right="35px"
						top="136px"
						border-radius="12px"
					/>
					{"    "}
				</StackItem>
				<StackItem width="65%" display="flex" padding="16px 0px 13px" sm-width="100%">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					<Text
						font="normal 500 35px/1.5 --fontFamily-googleSourceSansPro"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="--light"
						text-align="left"
						lg-font="normal 500 24px/1.5 --fontFamily-sans"
						sm-font="normal 500 18px/1.5 --fontFamily-sans"
						sm-text-align="center"
					>
						Если кратко, то нам необходим компонент для нашего конструктора сайтов Quarkly,{" "}
						<br />
						с использованием{" "}
						<Link
							href="https://atomize.quarkly.io/"
							color="#66FFE4"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							Atomize
						</Link>
					</Text>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section background="#0E1317" padding="24px 0 33px 0" sm-padding="24px 0 0px 0">
			<Box
				display="flex"
				flex-direction="row"
				width="100%"
				color="#66FFE4"
				font="30px sans-serif"
				margin="0px 0px 41px 10px"
			>
				<Icon
					category="gi"
					icon={GiMoneyStack}
					align-items="flex-start"
					justify-content="start"
					font="58px sans-serif"
					position="relative"
					top="0px"
					color="#66FFE4"
					lg-font="40px sans-serif"
					padding="0px 7px 0px 0px"
					size="58px"
				/>
				<Text
					font="normal 500 38px/1.5 --fontFamily-sans"
					margin="0px 0px 0px 0px"
					display="inline-block"
					color="--light"
					text-align="center"
					lg-font="normal 500 28px/1.5 --fontFamily-sans"
				>
					Вознаграждение{" "}
				</Text>
			</Box>
			<Stack>
				{"        "}
			</Stack>
			<Stack md-justify-content="center">
				{"    "}
				<StackItem
					width="33.3%"
					display="flex"
					margin="0px 0px 30px 0px"
					padding="16px 16px 16px 16px"
					lg-width="32%"
					sm-width="50%"
					md-width="50%"
					sm-margin="0px 0px 0px 0px"
					sm-padding="16px 8px 16px 8px"
				>
					<Override
						slot="StackItemContent"
						margin="0px 0px 30px 0px"
						border-width="1px"
						border-color="#22262E"
						border-radius="12px"
						background="#66FFE4"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						width="50%"
						md-padding="0px 5px 0px 5px"
						sm-margin="0px 0px 10px 0px"
						sm-padding="0px 3px 0px 3px"
					/>
					{"        "}
					<Text font="normal 600 25px/1.5 --fontFamily-googleSourceSansPro" margin="0px 0px 0px 0px" display="inline-block" color="#000000">
						1-е место
					</Text>
					<Text
						font="normal 400 16px/1.5 --fontFamily-googleSourceSansPro"
						margin="0px 0px 10px 0px"
						display="inline-block"
						color="#000000"
						md-text-align="center"
					>
						В каждой из 5 категорий
					</Text>
					<Text
						font="normal 600 55px/1.5 --fontFamily-googleSourceSansPro"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="#000000"
						sm-font="normal 600 40px/1.5 --fontFamily-googleSourceSansPro"
					>
						$100
					</Text>
					{"    "}
				</StackItem>
				<StackItem
					width="33.3%"
					display="flex"
					padding="16px 16px 16px 16px"
					margin="0px 0px 30px 0px"
					lg-width="30%"
					sm-width="50%"
					md-width="50%"
					sm-margin="0px 0px 0px 0px"
					sm-padding="16px 8px 16px 8px"
				>
					<Override
						slot="StackItemContent"
						margin="0px 0px 30px 0px"
						border-width="1px"
						border-radius="12px"
						border-color="#22262E"
						background="#66FFE4"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						width="50%"
						md-padding="0px 5px 0px 5px"
						sm-margin="0px 0px 10px 0px"
						sm-padding="0px 3px 0px 3px"
					/>
					{"        "}
					<Text font="normal 600 25px/1.5 --fontFamily-googleSourceSansPro" margin="0px 0px 0px 0px" display="inline-block" color="#000000">
						2-е место
						<br />
					</Text>
					<Text
						font="normal 400 16px/1.5 --fontFamily-googleSourceSansPro"
						margin="0px 0px 10px 0px"
						display="inline-block"
						color="#000000"
						md-text-align="center"
					>
						В каждой из 5 категорий
					</Text>
					<Text
						font="normal 600 55px/1.5 --fontFamily-googleSourceSansPro"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="#000000"
						sm-font="normal 600 40px/1.5 --fontFamily-googleSourceSansPro"
					>
						$50
					</Text>
					{"    "}
				</StackItem>
				<StackItem
					width="33.3%"
					display="flex"
					padding="16px 16px 16px 16px"
					margin="0px 0px 30px 0px"
					sm-width="100%"
					md-width="100%"
					sm-padding="10px 8px 8px 8px"
				>
					<Override
						slot="StackItemContent"
						margin="0px 0px 30px 0px"
						border-width="1px"
						border-radius="12px"
						border-color="#22262E"
						background="#66FFE4"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						width="50%"
						padding="0px 30px 30px 30px"
						md-padding="0px 10px 0px 10px"
						lg-padding="0px 10px 0px 10px"
					/>
					{"        "}
					<Text
						font="normal 600 25px/1.5 --fontFamily-googleSourceSansPro"
						margin="10px 0px 0px 0px"
						display="inline-block"
						color="#000000"
						lg-text-align="center"
						md-padding="0px 0px 0px 0px"
						text-align="center"
					>
						+ доп. вознаграждение
						<br />
					</Text>
					<Text
						font="normal 400 16px/1.5 --fontFamily-googleSourceSansPro"
						margin="0px 0px 10px 0px"
						display="inline-block"
						color="#000000"
						sm-margin="0px 0px 10px 0px"
					>
						Для всех категорий
					</Text>
					<Text
						font="normal 400 17px/1.5 --fontFamily-googleSourceSansPro"
						margin="0px 0px 0px 0px"
						display="inline-block"
						color="#000000"
						text-align="center"
					>
						получат участники, чьи компоненты попадут в библиотеку компонентов Quarkly
					</Text>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section
			background="#0E1317"
			padding="20px 0 20px 0"
			height="303.141px"
			sm-height="auto"
			lg-height="auto"
		>
			<Override slot="SectionContent" sm-height="auto" lg-height="auto" />
			<Stack margin="-16px -16px -8px -16px">
				{"    "}
				<StackItem width="35%" display="flex" padding="0px 0px" sm-display="none">
					{"        "}
					<Box
						width="100%"
						padding="0px 0px 68% 0px"
						left="986px"
						right="35px"
						top="136px"
						bottom="-593px"
						display="flex"
						border-radius="8px"
						background="rgba(0, 0, 0, 0) url(https://ukit.top/quarkly/paren.png) 64% 100% /cover no-repeat scroll padding-box"
					/>
					{"    "}
				</StackItem>
				<StackItem width="65%" display="flex" padding="4px 0px 16px" sm-width="100%">
					<Override
						slot="StackItemContent"
						align-items="flex-start"
						justify-content="center"
						flex-direction="column"
						margin="-10px 0px 0px 0px"
						padding="0px 0px 0px"
						sm-align-items="center"
					/>
					<Text
						font="normal 600 38px/1.5 --fontFamily-googleSourceSansPro"
						margin="0px 0px 6px 0px"
						display="inline-block"
						color="--light"
						lg-font="normal 500 24px/1.5 --fontFamily-sans"
						sm-font="normal 500 23px/1.5 --fontFamily-sans"
						md-font="normal 500 19px/1.5 --fontFamily-sans"
						text-align="left"
						sm-text-align="center"
					>
						Ты станешь частью нашего сообщества
					</Text>
					<Text
						font="normal 400 22px/1.5 --fontFamily-googleSourceSansPro"
						margin="0px 0px 30px 0px"
						display="inline-block"
						color="--light"
						text-align="left"
						lg-font="normal 400 16px/1.5 --fontFamily-sans"
						sm-font="normal 400 14px/1.5 --fontFamily-sans"
						md-margin="0px 0px 10PX 0px"
						sm-text-align="center"
					>
						Если компонент который вы создадите будет добавлен в Quarkly, мы с удовольствием укажем ваши контакты (имя и ссылку на GitHub) в описании компонента
					</Text>
					<Link
						href="tg://resolve?domain=Quarkly_contestbot"
						color="--light"
						text-decoration-line="initial"
						padding="8px 24px 10px 18px"
						target="_blank"
						font="normal 600 25px/1.5 --fontFamily-sans"
						margin="0px 0px 0px 0px"
						display="flex"
						lg-font="normal 400 24px/1.5 --fontFamily-sans"
						sm-width="auto"
						sm-text-align="center"
						background="linear-gradient(180deg,#00aefa,#0983c5)"
						border-radius="4px"
						text-align="center"
						transition="box-shadow .3s ease,transform .3s ease,-webkit-box-shadow .3s ease,-webkit-transform .3s ease"
						hover-box-shadow="0 10px 10px -6px rgba(0,0,0,.24)"
						hover-transform="translateY(-2px)"
						cursor="pointer"
						align-items="center"
						sm-margin="0px 0px 10px 0px"
					>
						<Icon category="fa" icon={FaTelegramPlane} margin="0px 12px 0px 0px" />
						Telegram
					</Link>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
	</Theme>;
});