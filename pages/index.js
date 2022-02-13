import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "1",
    title: "first meetup",
    address: "cairo, naser city 18 moaz eldoula",
    description: "that is our first meetup",
    image:
      "https://static.saltinourhair.com/wp-content/uploads/2019/03/23140923/cairo-pyramids-giza.jpg",
  },
  {
    id: "2",
    title: "seconed meetup",
    address: "gize, tahrir city 18 elkhalifa",
    description: "that is our seconed meetup",
    image:
      "https://cdn.theculturetrip.com/wp-content/uploads/2021/07/cairo.jpg",
  },
];
const HomePage = (props) => {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
