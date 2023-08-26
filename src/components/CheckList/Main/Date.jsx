import Moment from "react-moment";

function Date() {
  return (
    <div>
      <Moment format="YYYY-MM-DD HH:mm:ss" interval={1000} />
    </div>
  );
}

export default Date;
