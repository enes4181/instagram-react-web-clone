import Header from "./components/header";
import Messages from "./components/messages";
import Reply from "./components/reply";
import { useState } from "react";

export default function Chat() {

	const user = {
		name: 'Tayfun Erbilen',
		avatar: 'https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg'
	}

	const [messages, setMessages] = useState([
		{
			from: {
				id: 'kXg7IP09SuQUF1ypqxPphiTNXWI2',
				name: 'Tayfun Erbilen',
				username: 'tayfunerbilen',
				avatar: 'https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg'
			},
			message: 'grup'
		},
		{
			from: {
				id: 'g7ChO7PegEaE8L5dAYuGcQBWZBA3',
				name: 'ömer',
				username: 'Elwron',
				avatar: 'https://pbs.twimg.com/profile_images/1064886121870561280/1Z8pZjhG_400x400.jpg'
			},
			message: 'test'
		},
		{
			from: {
				id: 'g7ChO7PegEaE8L5dAYuGcQBWZBA3',
				name: 'ömer',
				username: 'Elwron',
				avatar: 'https://pbs.twimg.com/profile_images/1064886121870561280/1Z8pZjhG_400x400.jpg'
			},
			message: 'deneme'
		},
		{
			from: {
				id: 'g7ChO7PegEaE8L5dAYuGcQBWZBA3',
				name: 'ömer',
				username: 'Elwron',
				avatar: 'https://pbs.twimg.com/profile_images/1064886121870561280/1Z8pZjhG_400x400.jpg'
			},
			message: 'adana'
		},
		{
			from: {
				id: 'kXg7IP09SuQUF1ypqxPphiTNXWI2',
				name: 'Tayfun Erbilen',
				username: 'tayfunerbilen',
				avatar: 'https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg'
			},
			message: 'w etw etkwe tokw eotk woetk woekt woket owekt owket okwe otkwe otke wotkew tokw etoke otk ept okwet powektpweoktwepotkweptokwetpokwet'
		},
		{
			from: {
				id: 'kXg7IP09SuQUF1ypqxPphiTNXWI2',
				name: 'Tayfun Erbilen',
				username: 'tayfunerbilen',
				avatar: 'https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg'
			},
			message: 'grup'
		},
		{
			from: {
				id: 'g7ChO7PegEaE8L5dAYuGcQBWZBA3',
				name: 'ömer',
				username: 'Elwron',
				avatar: 'https://pbs.twimg.com/profile_images/1064886121870561280/1Z8pZjhG_400x400.jpg'
			},
			message: 'test'
		},
		{
			from: {
				id: 'g7ChO7PegEaE8L5dAYuGcQBWZBA3',
				name: 'ömer',
				username: 'Elwron',
				avatar: 'https://pbs.twimg.com/profile_images/1064886121870561280/1Z8pZjhG_400x400.jpg'
			},
			message: 'deneme'
		},
		{
			from: {
				id: 'g7ChO7PegEaE8L5dAYuGcQBWZBA3',
				name: 'ömer',
				username: 'Elwron',
				avatar: 'https://pbs.twimg.com/profile_images/1064886121870561280/1Z8pZjhG_400x400.jpg'
			},
			message: 'adana'
		},
		{
			from: {
				id: 'kXg7IP09SuQUF1ypqxPphiTNXWI2',
				name: 'Tayfun Erbilen',
				username: 'tayfunerbilen',
				avatar: 'https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg'
			},
			message: 'w etw etkwe tokw eotk woetk woekt woket owekt owket okwe otkwe otke wotkew tokw etoke otk ept okwet powektpweoktwepotkweptokwetpokwet'
		},
		{
			from: {
				id: 'kXg7IP09SuQUF1ypqxPphiTNXWI2',
				name: 'Tayfun Erbilen',
				username: 'tayfunerbilen',
				avatar: 'https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg'
			},
			message: 'grup'
		},
		{
			from: {
				id: 'g7ChO7PegEaE8L5dAYuGcQBWZBA3',
				name: 'ömer',
				username: 'Elwron',
				avatar: 'https://pbs.twimg.com/profile_images/1064886121870561280/1Z8pZjhG_400x400.jpg'
			},
			message: 'test'
		},
		{
			from: {
				id: 'g7ChO7PegEaE8L5dAYuGcQBWZBA3',
				name: 'ömer',
				username: 'Elwron',
				avatar: 'https://pbs.twimg.com/profile_images/1064886121870561280/1Z8pZjhG_400x400.jpg'
			},
			message: 'deneme'
		},
		{
			from: {
				id: 'g7ChO7PegEaE8L5dAYuGcQBWZBA3',
				name: 'ömer',
				username: 'Elwron',
				avatar: 'https://pbs.twimg.com/profile_images/1064886121870561280/1Z8pZjhG_400x400.jpg'
			},
			message: 'adana'
		},
		{
			from: {
				id: 'kXg7IP09SuQUF1ypqxPphiTNXWI2',
				name: 'Tayfun Erbilen',
				username: 'tayfunerbilen',
				avatar: 'https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg'
			},
			message: 'w etw etkwe tokw eotk woetk woekt woket owekt owket okwe otkwe otke wotkew tokw etoke otk ept okwet powektpweoktwepotkweptokwetpokwet'
		},
	])

	return (
		<div className="flex-1">
			<Header user={user} />
			<Messages messages={messages} />
			<Reply setMessages={setMessages} />
		</div>
	)
}