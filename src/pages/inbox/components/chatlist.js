import classNames from "classnames"
import { NavLink, useParams } from "react-router-dom"

export default function ChatList(){
    const {conversatinId} = useParams()

        const chats=[
            {
				id: '1',
			user:{
                avatar: 'https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg',
                name:"enes çop"
            },
            lastMessage:"selam",
            unread:true
			
			},
            {
				id: "2",
			user:{
                avatar: 'https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg',
                name:"enes çop"
            },
            lastMessage:"selam"
			
			},   {
				id: '3',
			user:{
                avatar: 'https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg',
                name:"enes çop"
            },
            lastMessage:"selam"
			
			},   {
				id: '4',
			user:{
                avatar: 'https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg',
                name:"enes çop"
            },
            lastMessage:"selam"
			
			},   {
				id: '5',
			user:{
                avatar: 'https://pbs.twimg.com/profile_images/1526647892726915073/tN9rYw3V_400x400.jpg',
                name:"enes çop"
            },
            lastMessage:"selam"
			
			},
        ]
    return(
        <div className="h-[calc(100%-60px)] overflow-auto py-3 ">
            <header className=" flex flex-items justify-between px-5 mb-1">
                <h6 className="text-base font-semibold">Messages</h6>
            <button className="text-brand text-sm font-semibold"> 16 request</button>
                </header>
                {chats.map(chat=>( 
                    <NavLink key={chat.id} to={`/inbox/${chat.id}`}
                     className={classNames({
                        "h-[72px] flex items-center gap-x-4 hover:bg-zinc-50 px-5":true,
                        "font-semibold":chat?.unread,
                        "!bg-[#efefef]": +conversatinId===chat.id
                    })}>
                        <img src={chat.user.avatar} className="w-14 h-14 rounded-full" ></img>
                        <div>
                            <h6 className="text-sm">{chat.user.name}</h6>
                            <p className={`text-sm ${!chat?.unread&& "text-[#8e8e8e]"}`}>
                                {chat.lastMessage}
                            </p>
                        </div>
                    </NavLink>
                ))}
       
        </div>
    )
}