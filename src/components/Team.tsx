import Image from 'next/image';


const teamMembers = [
    { name: 'Albert William', title: 'Project Manager', img: '/team/member1.jpg'},
    { name: 'Sarah Khan', title: 'Designer', img: '/team/member2.jpg'},
    { name: 'John Smith', title: 'Developer', img: '/team/member3.jpg'},
    { name: 'Lina Lee', title: 'Marketing', img: '/team/member4.jpg'},
    { name: 'Mike Brown', title: 'Sales', img: '/team/member5.jpg'},
    { name: 'Anna White', title: 'HR Manager', img: '/team/member6.jpg',},
];

export default function TeamGrid() {
    return (
        <div className='team'>
            {teamMembers.map((member, idx) => (
                <div key={idx} className='team-member'>
                    <Image className='team-member-img' src={member.img} alt={member.name} width={191} height={255} objectFit='cover' />
                    <div className='team-member-info'>
                        <strong className='team-member-name'>{member.name}</strong>
                        <span className='team-member-span'>{member.title}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}
