export default function Header({user}){
    return (
        <header className="flex flex-items-center gap-x-24 px-24 py-4 pb-10">
            <img src="/no-avatar.jpg" alt="" className="w-[150px] h-[150px] rounded-full" />
          <div>
            <div className="mb-4">
            <h1 className="text-[28px] ">{user.username}</h1>

            </div>
            <nav className="flex gap-x-10 items-center font-semibold">
                <div><span className="font-semibold">{user.posts} </span> posts </div>
                <div><span className="font-semibold">{user.followers.length}</span> followers </div>
                <div><span className="font-semibold">{user.following.length} </span>following</div>
            </nav>
            </div>
        </header>
    )

}