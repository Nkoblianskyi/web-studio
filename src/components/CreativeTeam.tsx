import Image from 'next/image';

const teamMembers = [
    { name: 'Albert William', title: 'Project Manager', img: '/team/member1.jpg', rotate: '1deg' },
    { name: 'Sarah Khan', title: 'Designer', img: '/team/member2.jpg', rotate: '-1deg' },
    { name: 'John Smith', title: 'Developer', img: '/team/member3.jpg', rotate: '1deg' },
    { name: 'Lina Lee', title: 'Marketing', img: '/team/member4.jpg', rotate: '-2deg' },
    { name: 'Mike Brown', title: 'Sales', img: '/team/member5.jpg', rotate: '2deg' },
    { name: 'Anna White', title: 'HR Manager', img: '/team/member6.jpg', rotate: '-1deg' },
];

export default function CreativeTeam() {
    return (
        <section className='creative-team-section'>
            <header className='creative-team-header'>
                <h2 className='creative-team-header-title'>Meet the team</h2>
                <p className='creative-team-header-text'>Professional Creative Team</p>
            </header>
            <div className='creative-team'>
                {teamMembers.map((member, idx) => (
                    <div key={idx} className='creative-team-member'>
                        <div className='creative-team-member-wrapper' style={{ rotate: member.rotate }}>
                            <Image
                                className='creative-team-member-img'
                                src={member.img}
                                alt={member.name}
                                fill
                                sizes="(max-width: 600px) 100vw, 191px"
                            />
                        </div>
                        <div className='creative-team-member-info'>
                            <strong className='creative-team-member-name'>{member.name}</strong>
                            <span className='creative-team-member-span'>{member.title}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
