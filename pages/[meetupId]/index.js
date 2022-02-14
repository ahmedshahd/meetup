import MeetupDetail from "../../components/meetups/MeetupDetail";
const MeetupDetails = () => {
  return (
    <MeetupDetail
      image="https://static.saltinourhair.com/wp-content/uploads/2019/03/23140923/cairo-pyramids-giza.jpg"
      title="first meetup"
      address="cairo, naser city 18 moaz eldoula"
      description="the description"
    />
  );
};
export function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "1",
        },
      },
      {
        params: {
          meetupId: "2",
        },
      },
    ],
  };
}

export function getStaticProps(context) {
  const { meetupId } = context.params;
  console.log(meetupId);
  return {
    props: {
      meetupDate: {
        image:
          "https://static.saltinourhair.com/wp-content/uploads/2019/03/23140923/cairo-pyramids-giza.jpg",
        title: "first meetup",
        address: "cairo, naser city 18 moaz eldoula",
        description: "the description",
      },
    },
  };
}
export default MeetupDetails;
