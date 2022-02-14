import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";
const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      image={props.meetupDate.image}
      title={props.meetupDate.title}
      address={props.meetupDate.address}
      description={props.meetupDate.description}
    />
  );
};
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://ahmed:1234@cluster0.eebz1.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();

  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const { meetupId } = context.params;
  const client = await MongoClient.connect(
    "mongodb+srv://ahmed:1234@cluster0.eebz1.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });

  client.close();
  return {
    props: {
      meetupDate: {
        id: selectedMeetup._id.toString(),
        image: selectedMeetup.image,
        description: selectedMeetup.description,
        title: selectedMeetup.title,
        address: selectedMeetup.address,
      },
    },
  };
}
export default MeetupDetails;
