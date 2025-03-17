type ProfileProps = {
    gretting: string;
    name: string;
    avatar: string;
}

function Profile ({gretting, name, avatar}: ProfileProps){
return(
    <div>
        <div className="flex justify-between items-center">
            <p className="flex-left">{gretting}</p>
            <p className="flex-left text-2xl font-bold">{name}</p>
        </div>
        <img className="w-10 h-10" width="100px" src={avatar} alt="Profile User" />
    </div>
);
}

export default Profile;