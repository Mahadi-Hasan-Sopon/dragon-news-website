import { useParams } from "react-router-dom";

function NewsDetails() {
  const params = useParams();

  return (
    <div>
      CategoryId: {params.categoryId} <br />
      NewsId: {params.id}
    </div>
  );
}

// NewsDetails.propTypes = {};

export default NewsDetails;
