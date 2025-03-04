import postImage1 from '../../../assets/feed-images/post1.jpg';
import postImage2 from '../../../assets/feed-images/post2.jpg';
import postImage3 from '../../../assets/feed-images/post3.jpg';
import postImage4 from '../../../assets/feed-images/post4.jpg';
import postImage5 from '../../../assets/feed-images/post5.jpg';
import postImage6 from '../../../assets/feed-images/post6.jpg';
import postImage7 from '../../../assets/feed-images/post7.jpg';
import postImage8 from '../../../assets/feed-images/post8.jpg';
import postImage9 from '../../../assets/feed-images/post9.jpg';
import postImage10 from '../../../assets/feed-images/post10.jpg';
import postImage11 from '../../../assets/feed-images/post11.jpg';
import postImage12 from '../../../assets/feed-images/post12.jpg';
import postImage13 from '../../../assets/feed-images/post13.jpg';
import postImage14 from '../../../assets/feed-images/post14.jpg';
import postImage15 from '../../../assets/feed-images/post15.jpg';
import postImage16 from '../../../assets/feed-images/post16.jpg';
import postImage17 from '../../../assets/feed-images/post17.jpg';
import postImage18 from '../../../assets/feed-images/post18.jpg';
import postImage19 from '../../../assets/feed-images/post19.jpg';
import postImage20 from '../../../assets/feed-images/post20.jpg';
import postImage21 from '../../../assets/feed-images/post21.jpg';
import postImage22 from '../../../assets/feed-images/post22.jpg';
import postImage23 from '../../../assets/feed-images/post23.jpg';
import postImage24 from '../../../assets/feed-images/post24.jpg';
import postImage25 from '../../../assets/feed-images/post25.jpg';
import postImage26 from '../../../assets/feed-images/post26.jpg';
import postImage27 from '../../../assets/feed-images/post27.jpg';
import postImage28 from '../../../assets/feed-images/post28.jpg';
import postImage29 from '../../../assets/feed-images/post29.jpg';
import postImage30 from '../../../assets/feed-images/post30.jpg';


const mockFeedData = [
  {
    id: 1,
    userName: "Sarah Johnson",
    userHandle: "@sarahj",
    postDate: "2025-02-01",
    likes: 342,
    comments: 28,
    shares: 15,
    imageUrl: postImage1,
    caption: "Just finished my morning hike! The sunrise was absolutely breathtaking today. 🌄 #MorningVibes #Nature",
    location: "Mount Tamalpais State Park, California"
  },
  {
    id: 2,
    userName: "Alex Chen",
    userHandle: "@achen",
    postDate: "2025-02-02",
    likes: 891,
    comments: 56,
    shares: 42,
    imageUrl: postImage2,
    caption: "New recipe alert! 🍝 Homemade pasta with truffle sauce. Recipe in comments below!",
    location: "Brooklyn, New York"
  },
  {
    id: 3,
    userName: "Mike Thompson",
    userHandle: "@mikethompson",
    postDate: "2025-02-03",
    likes: 567,
    comments: 34,
    shares: 21,
    imageUrl: postImage3,
    caption: "Another day at the office with the best team! 💼 #WorkLife #StartupLife",
    location: "Silicon Valley, California"
  },
  {
    id: 4,
    userName: "Emily Rodriguez",
    userHandle: "@emrod",
    postDate: "2025-02-04",
    likes: 1243,
    comments: 89,
    shares: 76,
    imageUrl: postImage4,
    caption: "Concert night was AMAZING! Still can't believe I got front row tickets! 🎸 #LiveMusic",
    location: "Madison Square Garden, NYC"
  },
  {
    id: 5,
    userName: "David Kim",
    userHandle: "@dkim",
    postDate: "2025-02-05",
    likes: 432,
    comments: 23,
    shares: 12,
    imageUrl: postImage5,
    caption: "Just launched my new photography portfolio! Check it out! 📸 #Photography #Art",
    location: "Seattle, Washington"
  },
  {
    id: 6,
    userName: "Lisa Wang",
    userHandle: "@lwang",
    postDate: "2025-02-06",
    likes: 765,
    comments: 45,
    shares: 34,
    imageUrl: postImage6,
    caption: "Beach day with the fam! Perfect weather ☀️ #BeachLife #Weekend",
    location: "Santa Monica Beach, California"
  },
  {
    id: 7,
    userName: "James Wilson",
    userHandle: "@jwilson",
    postDate: "2025-02-07",
    likes: 543,
    comments: 32,
    shares: 18,
    imageUrl: postImage7,
    caption: "New personal best at the gym! 💪 #Fitness #Progress",
    location: "Equinox Gym, San Francisco"
  },
  {
    id: 8,
    userName: "Maria Garcia",
    userHandle: "@mgarcia",
    postDate: "2025-02-08",
    likes: 876,
    comments: 67,
    shares: 45,
    imageUrl: postImage8,
    caption: "Art gallery opening night! So many talented artists! 🎨 #Art #Culture",
    location: "MOMA, New York"
  },
  {
    id: 9,
    userName: "Tom Baker",
    userHandle: "@tbaker",
    postDate: "2025-02-09",
    likes: 234,
    comments: 19,
    shares: 8,
    imageUrl: postImage9,
    caption: "Game night with the crew! Who's winning? 🎮 #Gaming #Friends",
    location: "Austin, Texas"
  },
  {
    id: 10,
    userName: "Rachel Green",
    userHandle: "@rgreen",
    postDate: "2025-02-10",
    likes: 987,
    comments: 76,
    shares: 54,
    imageUrl: postImage10,
    caption: "First day at my new job! Excited for this new chapter! 💼 #NewBeginnings",
    location: "Chicago, Illinois"
  },
  {
    id: 11,
    userName: "Kevin Patel",
    userHandle: "@kpatel",
    postDate: "2025-02-11",
    likes: 654,
    comments: 43,
    shares: 29,
    imageUrl: postImage11,
    caption: "Dinner with a view! City lights never get old ✨ #CityLife #Foodie",
    location: "Top of the Hub, Boston"
  },
  {
    id: 12,
    userName: "Anna Smith",
    userHandle: "@asmith",
    postDate: "2025-02-12",
    likes: 432,
    comments: 28,
    shares: 15,
    imageUrl: postImage12,
    caption: "Book launch day! Thank you everyone for your support! 📚 #Author #NewBook",
    location: "Powell's Books, Portland"
  },
  {
    id: 13,
    userName: "Chris Lee",
    userHandle: "@clee",
    postDate: "2025-02-13",
    likes: 765,
    comments: 54,
    shares: 32,
    imageUrl: postImage13,
    caption: "Snowboarding season is here! ❄️ #Winter #Sports",
    location: "Aspen, Colorado"
  },
  {
    id: 14,
    userName: "Sophie Turner",
    userHandle: "@sturner",
    postDate: "2025-02-14",
    likes: 876,
    comments: 65,
    shares: 43,
    imageUrl: postImage14,
    caption: "Coffee and coding - perfect Saturday morning ☕️ #Developer #Coding",
    location: "WeWork, Miami"
  },
  {
    id: 15,
    userName: "Ryan Cooper",
    userHandle: "@rcooper",
    postDate: "2025-02-15",
    likes: 543,
    comments: 34,
    shares: 21,
    imageUrl: postImage15,
    caption: "Road trip begins! Next stop: Grand Canyon 🚗 #Adventure #Travel",
    location: "Grand Canyon National Park, Arizona"
  },
  {
    id: 16,
    userName: "Nina Patel",
    userHandle: "@npatel",
    postDate: "2025-02-16",
    likes: 987,
    comments: 76,
    shares: 54,
    imageUrl: postImage16,
    caption: "Art class today! Learning watercolor techniques 🎨 #Art #Learning",
    location: "Art Institute of Chicago"
  },
  {
    id: 17,
    userName: "Daniel Brown",
    userHandle: "@dbrown",
    postDate: "2025-02-17",
    likes: 654,
    comments: 45,
    shares: 23,
    imageUrl: postImage17,
    caption: "My garden is finally blooming! 🌸 #Gardening #Spring",
    location: "Botanical Gardens, Denver"
  },
  {
    id: 18,
    userName: "Laura Martinez",
    userHandle: "@lmartinez",
    postDate: "2025-02-18",
    likes: 432,
    comments: 29,
    shares: 16,
    imageUrl: postImage18,
    caption: "Dance recital night! So proud of my students 💃 #Dance #Teaching",
    location: "Lincoln Center, NYC"
  },
  {
    id: 19,
    userName: "Peter Wong",
    userHandle: "@pwong",
    postDate: "2025-02-19",
    likes: 765,
    comments: 56,
    shares: 34,
    imageUrl: postImage19,
    caption: "New podcast episode is live! Link in bio 🎙️ #Podcast #Content",
    location: "Studio City, Los Angeles"
  },
  {
    id: 20,
    userName: "Hannah Clark",
    userHandle: "@hclark",
    postDate: "2025-02-20",
    likes: 876,
    comments: 67,
    shares: 45,
    imageUrl: postImage20,
    caption: "Wedding planning mode: ON! 👰 #Wedding #Engaged",
    location: "Plaza Hotel, Las Vegas"
  },
  {
    id: 21,
    userName: "Marcus Johnson",
    userHandle: "@mjohnson",
    postDate: "2025-02-21",
    likes: 543,
    comments: 34,
    shares: 21,
    imageUrl: postImage21,
    caption: "Just adopted this little guy! Meet Max 🐕 #DogLove #Adoption",
    location: "ASPCA, Philadelphia"
  },
  {
    id: 22,
    userName: "Julia Kim",
    userHandle: "@jkim",
    postDate: "2025-02-22",
    likes: 987,
    comments: 78,
    shares: 56,
    imageUrl: postImage22,
    caption: "First time making sushi! Not bad, right? 🍱 #Cooking #Japanese",
    location: "Little Tokyo, Los Angeles"
  },
  {
    id: 23,
    userName: "Brandon Taylor",
    userHandle: "@btaylor",
    postDate: "2025-02-23",
    likes: 654,
    comments: 45,
    shares: 23,
    imageUrl: postImage23,
    caption: "Marathon training day 45! Almost there! 🏃‍♂️ #Running #Fitness",
    location: "Central Park, NYC"
  },
  {
    id: 24,
    userName: "Olivia Wilson",
    userHandle: "@owilson",
    postDate: "2025-02-24",
    likes: 432,
    comments: 28,
    shares: 15,
    imageUrl: postImage24,
    caption: "Movie night under the stars ⭐️ #OutdoorCinema #Weekend",
    location: "Griffith Observatory, Los Angeles"
  },
  {
    id: 25,
    userName: "Mohammed Ahmed",
    userHandle: "@mahmed",
    postDate: "2025-02-25",
    likes: 765,
    comments: 54,
    shares: 32,
    imageUrl: postImage25,
    caption: "Graduated today! Finally a software engineer! 👨‍🎓 #Graduation #Tech",
    location: "Stanford University"
  },
  {
    id: 26,
    userName: "Isabella Garcia",
    userHandle: "@igarcia",
    postDate: "2025-02-26",
    likes: 876,
    comments: 67,
    shares: 45,
    imageUrl: postImage26,
    caption: "Paint and sip night with the girls! 🎨🍷 #ArtNight #Friends",
    location: "Painting with a Twist, Houston"
  },
  {
    id: 27,
    userName: "William Lee",
    userHandle: "@wlee",
    postDate: "2025-02-27",
    likes: 543,
    comments: 34,
    shares: 21,
    imageUrl: postImage27,
    caption: "Sunset surfing session 🏄‍♂️ #Surf #Beach",
    location: "Waikiki Beach, Hawaii"
  },
  {
    id: 28,
    userName: "Emma Thompson",
    userHandle: "@ethompson",
    postDate: "2025-02-28",
    likes: 987,
    comments: 76,
    shares: 54,
    imageUrl: postImage28,
    caption: "First time performing at open mic! 🎤 #Music #LivePerformance",
    location: "Blue Bird Cafe, Nashville"
  },
  {
    id: 29,
    userName: "Lucas Rodriguez",
    userHandle: "@lrodriguez",
    postDate: "2025-03-01",
    likes: 654,
    comments: 45,
    shares: 23,
    imageUrl: postImage29,
    caption: "Chess tournament finals! Wish me luck ♟️ #Chess #Competition",
    location: "Washington Square Park, NYC"
  },
  {
    id: 30,
    userName: "Sophia Chen",
    userHandle: "@schen",
    postDate: "2025-03-02",
    likes: 432,
    comments: 28,
    shares: 15,
    imageUrl: postImage30,
    caption: "Morning yoga with an ocean view 🧘‍♀️ #Yoga #Wellness",
    location: "Venice Beach, California"
  }
];

export default mockFeedData;