type ProfileProps = {
    gretting: string;
    name: string;
    avatar: string;
}

function Profile ({gretting, name, avatar}: ProfileProps){
return(
    <div className="flex justify-between">
        <div>
            <p className="text-left">{gretting}</p>
            <p className="text-left text-2xl font-bold">{name}</p>
        </div>
        <img  src={avatar} alt="Profile User" className="w-16 h-16" />
    </div>
);
}

export default Profile;