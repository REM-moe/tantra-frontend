const CseEventData = [
    {
        event_id: 29,
        name: 'RogueCTF',
        description: 'Capture the Flag (CTF) is an exercise in which "flags" are secretly hidden in purposefully-vulnerable programs or websites. The participants need to find the flags hidden in the system given. The team/ person finding the most flag wins. Participants can be a group of maximum 3 members or can participate individually.',
        event_type: 'Capture the flag',
        fee: '100 per head',
        student1: 'Kiran P P',
        s1_phone: 9633581974,
        student2: 'Albin Thomas',
        s2_phone: 9946498943,
        staff: 'Ms. Sisna P',
        prize: true,
        dept: 'cse',
        reg: true,
        group: true,
        venue: 'PG Lab/Network Lab,CSE BLOCK,2nd Floor',
        time: '9:30-11:30'
    },
    {
        event_id: 30,
        name: 'Magnum',
        description: 'Participant battle out in the LAN event. Games used are Valorant for pc.',
        event_type: 'Valorant',
        fee: 250,
        student1: 'Amal Binoy',
        s1_phone: 9744970409,
        student2: 'Dalven Jose',
        s2_phone: 6282306013,
        staff: 'Mr. Abhiram P',
        prize: true,
        dept: 'cse',
        reg: true,
        group: true,
        venue: 'Software Lab,CSE BLOCK,1st Floor',
        time: '	11:30-3:00'
    },
    {
        event_id: 31,
        name: 'Forma',
        description: 'Given pattern is shown and participants need to code the given block of code',
        event_type: 'Pattern Coding',
        fee: 20,
        student1: 'Riya George',
        s1_phone: 6238202526,
        student2: 'Vismaya M T',
        s2_phone: 9072147076,
        staff: 'Ms. Tintu Devasia',
        prize: true,
        dept: 'cse',
        reg: true,
        group: false,
        venue: 'ACRC,CSE BLOCK,2nd Floor',
        time: '11:30-12:00'
    },
    {
        event_id: 32,
        name: 'Break the PC',
        description: 'Participants assemble a system using given parts.',
        event_type: 'PC Assembling',
        fee: 'FREE (Closed)',
        student1: 'Abinav V',
        s1_phone: 8281465930,
        student2: 'Afra Nabi',
        s2_phone: 9916084606,
        staff: 'Mr Sibi',
        prize: true,
        dept: 'cse',
        reg: false,
        group: true,
        venue: 'PG Lab,CSE BLOCK,2nd Floor',
        time: '10:00-11:30'
    },
    {
        event_id: 33,
        name: 'Show Down',
        description: 'Exhibition of high end individual systems. Laptop or Pc, Project Exhibition.',
        event_type: 'PC showcase',
        fee: 'FREE',
        student1: 'Sreeram Pavithran',
        s1_phone: 7736024269,
        student2: 'Alan Jyothis',
        s2_phone: 9539870641,
        staff: 'Mr Lithin',
        prize: false,
        dept: 'cse',
        reg: true,
        group: true,
        venue: 'S5 CSE-A class,CSE BLOCK,2nd Floor',
        time: '	9:30-3:30'
    },
    {
        event_id: 34,
        name: 'Trace',
        description: 'Teams must solve a series of questions, the answers of which will generate a link which will direct them to their next question.',
        event_type: 'Scavenger hunt',
        fee: '60 (Closed)',
        student1: 'Aswin K',
        s1_phone: 9544815670,
        student2: 'Irin Tressa',
        s2_phone: 7559064554,
        staff: 'Ms. Sreedaya',
        prize: true,
        dept: 'cse',
        reg: false,
        group: true,
        venue: 'Network Lab,CSE BLOCK,2nd Floor',
        time: '	10:00-11:30'
    },
    {
        event_id: 35,
        name: 'Cognitare',
        description: 'Participants test what they know by answering questions on one or more technical topics.',
        event_type: 'Quiz',
        fee: 'FREE (Closed)',
        student1: 'Meenakshi Surendhran',
        s1_phone: 7994895402,
        student2: 'Prithwin Ratnan',
        s2_phone: 8078059062,
        staff: 'Ms. Suhada',
        prize: true,
        dept: 'cse',
        reg: false,
        group: false,
        venue: 'Network Lab,CSE BLOCK,2nd Floor	',
        time: '	1:30-2:30'
    },
    {
        event_id: 36,
        name: 'Game Dome',
        description: 'Gaming Entertainment Hands on',
        event_type: 'PlayStation gaming',
        fee: 50,
        student1: 'Aleena Susan',
        s1_phone: 9544896808,
        student2: 'Vyshanv Sreeshan',
        s2_phone: 9567591753,
        staff: 'Ms. Manju',
        prize: false,
        dept: 'cse',
        reg: false,
        group: false,
        venue: 'S5 CSE-A class,CSE BLOCK,2nd Floor',
        time: '	9:30-3:30'
    },
    {
        event_id: 37,
        name: 'Talk Around',
        description: 'Paper presentation',
        event_type: 'Paper presentation',
        fee: 'FREE',
        student1: 'Saphal Santhosh',
        s1_phone: 9074897995,
        student2: 'Aswathy',
        s2_phone: 9778334435,
        staff: 'Ms. Sreeraji N',
        prize: true,
        dept: 'cse',
        reg: true,
        group: false,
        venue: 'Interactive Lab,CSE BLOCK, 2nd Floor',
        time: '2:00-4:00'
    },
    {
        event_id: 39,
        name: 'Campus Navigation',
        description: 'Augumented Reality experience of college campus',
        event_type: 'Exhibition',
        fee: 'FREE',
        student1: 'Aalap',
        s1_phone: 9074597252,
        student2: '',
        s2_phone: '',
        staff: '',
        prize: false,
        dept: 'cse',
        reg: false,
        group: true,
        venue: '',
        time: ''
    },
    {
        event_id: 813,
        name: 'Crash raze',
        description: 'Get a chance to play a 3D racing game during its development stage. Attain a high score to win the prize pool.',
        event_type: 'Game',
        fee: '',
        student1: 'Akash Ajith',
        s1_phone: 8075497716,
        student2: 'Nihal Olachery',
        s2_phone: 7907829043,
        staff: 'Ms.Namitha P',
        prize: true,
        dept: 'cse',
        reg: false,
        group: false,
        venue: ' ',
        time: 'Full day'
    },  
    {
        event_id: 801,
        name: 'CyberRelay',
        description: 'Cyber security workshop',
        event_type: 'Workshop',
        fee: 'FREE (Closed)',
        student1: 'Nandana',
        s1_phone: 9778316049,
        student2: 'Jewel',
        s2_phone: 9947807480,
        staff: 'Divya K',
        prize: false,
        dept: 'cse',
        reg: false,
        group: false,
        venue: '',
        time: ''
    },
    {
        event_id: 810,
        name: 'Aarr Avide!!',
        description: 'Aarr Avide is a fun game in where the contestants has to identify the person behind the tiles by flipping it within a limited chances.',
        event_type: 'Game',
        fee: '',
        student1: 'Vaishnav Krishna',
        s1_phone: 7736966011,
        student2: 'Precious PP',
        s2_phone: 9946302636,
        staff: 'Ms. Sreelakshmi',
        prize: true,
        dept: 'cse',
        reg: true,
        group: false,
        venue: 'S5 CSE C,CSE BLOCK, 2nd Floor',
        time: 'Full day'
    },
    {
        event_id: 811,
        name: 'Enne Sherikum onnuu nokikee!!!',
        description: 'Enne Sherikum onnuu nokikee is a fun game where images of two famous personalities are merged and contestants need to identify them.',
        event_type: 'Game',
        fee: '',
        student1: 'Sona Saji',
        s1_phone: 9947102198,
        student2: 'Emlin Elizabeth Biju',
        s2_phone: 6238997223,
        staff: 'Ms.Diya Rameshan',
        prize: true,
        dept: 'cse',
        reg: true,
        group: false,
        venue: 'S5 CSE C,CSE BLOCK, 2nd Floor',
        time: 'Full day'
    },
    {
        event_id: 812,
        name: 'TIC-TAC-TOE',
        description: 'TIC-TAC-TOE is a fun game where two players compete, The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal is the winner.',
        event_type: 'Game',
        fee: '',
        student1: 'Augustine Felix Joshy',
        s1_phone: 7025237688,
        student2: 'Ankith Baby',
        s2_phone: 8086520743,
        staff: 'Ms.Namitha P',
        prize: true,
        dept: 'cse',
        reg: true,
        group: false,
        venue: 'S5 CSE B,CSE BLOCK, 2nd Floor',
        time: 'Full day'
    },    

];

export default CseEventData;